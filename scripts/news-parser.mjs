import * as fs from 'fs';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';

dotenv.config();

const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT;
const SPREADSHEET_ID   = process.env.DATAHUB_SPREADSHEET_ID;

// Kick it off:
writeToOutput(await getGoogleSheetData('InTheNews!A2:E'));

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
    const articles = [];

    for (const row of rows) {
      // each row: [ date, headline, imageUrl, altText, redirectLink ]
      const [ date, headline, rawImage, alt, link ] = row;
      if (!headline) continue;  // skip blank rows

      // normalize Google Drive URLs into thumbnails
      let image = rawImage || '';
      try {
        const url = new URL(image);
        if (url.hostname === 'drive.google.com') {
          const fileID = image.match(/\/file\/d\/(.+?)\//)?.[1];
          if (fileID) {
            image = `https://drive.google.com/thumbnail?id=${fileID}`;
          }
        }
        else {
          image = url.href;
        }
      } catch (_) {
        // leave image as-is if it wasn’t a URL
      }

      articles.push({ date, headline, image, alt, link });
    }

    return articles;
  } catch (err) {
    console.error('Error fetching news from sheets:', err);
    return [];
  }
}

/**
 * Write the array of articles to disk so we can import it from Next.js
 */
function writeToOutput(articles) {
  fs.writeFileSync('newsoutput.json',
    JSON.stringify(articles, null, 2),
    'utf-8'
  );
  console.log(`✔︎ Wrote ${articles.length} articles to newsoutput.json`);
}
