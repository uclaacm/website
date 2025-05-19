import * as fs from 'fs';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT;
const SPREADSHEET_ID   = process.env.DATAHUB_SPREADSHEET_ID;

// Kick it off:
writeToOutput(await getGoogleSheetData('History!A2:D'));

////////////////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////////////////

/**
 * Pulls a rectangular range from the sheet and returns an array of
 * { date, headline, image, alt, link } objects.
 */
async function getGoogleSheetData(range) {
  const sheets = google.sheets({ version: 'v4' });

  // authorize with service account
  const serviceAccount = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
  await jwtClient.authorize();

  try {
    const res = await sheets.spreadsheets.values.get({
      auth: jwtClient,
      spreadsheetId: SPREADSHEET_ID,
      range,
    });

    const rows = res.data.values || [];
    const historyEvents = [];

    for (const row of rows) {
      // parse date into Date object 
      // each row: [ date, headline, imageUrl, altText, redirectLink ]
      const [ date, description, details, committee ] = row;
      
      // convert date string to { year, month, date } object
      let dateObj = {};
      if (date) {
        const parts = date.split('/');
        if (parts.length === 3) {
          // MM/DD/YYYY
          const [mm, dd, yyyy] = parts;
          dateObj = {
            year: parseInt(yyyy, 10),
            month: parseInt(mm, 10),
            date: parseInt(dd, 10),
          };
        } else if (parts.length === 2) {
          // MM/YYYY
          const [mm, yyyy] = parts;
          dateObj = {
            year: parseInt(yyyy, 10),
            month: parseInt(mm, 10),
          };
        }
      }
      // assign the parsed dateObj back to date
      // (or you can use a different property if you want to keep the original string)
      
      historyEvents.push({ dateObj, description, details, committee});
    }

    return historyEvents;
  } catch (err) {
    console.error('Error fetching news from sheets:', err);
    return [];
  }
}

/**
 * Write the array of articles to disk so we can import it from Next.js
 */
function writeToOutput(historyEvents) {
    const out = JSON.stringify(historyEvents, null, 2);
    const outputPath = path.join(process.cwd(), 'data', 'historyEvents.json');
    
    fs.writeFile(outputPath, out, 'utf-8', (err) => {
    if (err) throw err;
    console.log(`✔︎ Wrote ${historyEvents.length} articles to ${outputPath}`);
    });
}
