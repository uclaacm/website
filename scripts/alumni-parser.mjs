import * as fs from 'fs';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT;
const DATAHUB_SPREADSHEET_ID = process.env.DATAHUB_SPREADSHEET_ID;

const sheetNames = ['Officers(20-21)', 'Officers(21-22)', 'Officers(22-23)', 'Officers(23-24)', 'Officers(24-25)'];

const allData = {};
for (const sheet of sheetNames) {
  // Extract the year range from the sheet name.
  const match = sheet.match(/\((\d{2})-(\d{2})\)/);
  // Format the extracted years into full year format (e.g., "2020-2021").
  const fullYear = match ? `20${match[1]}-20${match[2]}` : sheet;
  // Fetch the officer data from the given sheet and range (A2:K).
  const data = await getGoogleSheetData(`${sheet}!A2:K`, fullYear);
  // Store the data in the allData object using the formatted year as the key.
  allData[fullYear] = data;
}

writeToOutput(allData);

////////////////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////////////////

// Read data from Google sheets
// using sheet range (eg: 'Week 1!A:H)
async function getGoogleSheetData(range) {
  const sheets = google.sheets({ version: 'v4' });

  // Get JWT Token to access sheet
  const service_account = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    service_account.client_email,
    null, // or undefined, or an empty string (depends on your use case)
    service_account.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );

  // Authorize the client
  await jwtClient.authorize();

  const committees = [
    'Board',
    'Board, Dev Team',
    'Board, Internal',
    'Board, External',
    'AI',
    'Cyber',
    'Design',
    'Studio',
    'Hack',
    'ICPC',
    'Teach LA',
    'W',
    'Cloud',
  ];

  // Get data from Google spreadsheets
  try {
    const res = await sheets.spreadsheets.values.get({
      auth: jwtClient,
      spreadsheetId: DATAHUB_SPREADSHEET_ID,
      range: range,
    });

    let currCommittee = 'President';
    let offs = [];
    const rows = res?.data.values;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (committees.includes(row[0])) {
        currCommittee = row[0];
      } else if (row[1]) {
        // Handle image URL
        let image = row[10];
        if (!image) {
          image =
            'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'; //try making this a reference under assets?
        } else {
          try {
            const url = new URL(image);
            const host = url.hostname;
            if (host === 'drive.google.com') {
              const match = image.match(/\/file\/d\/(.+?)(?:\/|$)/);
              if (match && match[1]) {
                const fileID = match[1];
                image = `https://drive.google.com/thumbnail?id=${fileID}`;
              }
            } else if (host === 'github.com') {
              const regex =
                /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/; //convert github urls into viewable url using regex
              const replacement =
                'https://raw.githubusercontent.com/$1/$2/$3/$4';
              image = image.replace(regex, replacement);
            } else {
              image = url.href;
            }
          } catch (err) {
            console.log(err);
          }
        }
        row[11] = currCommittee;
        row[10] = image;
        offs.push(row);
      }
    }

    // Format the rows into an array of objects
    const formattedData = offs.map((row) => ({
      role: row[0],
      name: row[1],
      pronouns: row[2],
      email: row[3],
      phone: row[4],
      year: row[5],
      major: row[6],
      birthday: row[7],
      discord: row[8],
      github: row[9],
      photo: row[10],
      committee: row[11],
    }));
    return formattedData;
  } catch (error) {
    console.error('Error retrieving data from Google Sheets:', error.message);
    return [];
  }
}

function writeToOutput(officerData) {
  // Write to alumoutput.json
  const out = JSON.stringify(officerData, null, 2);
  const outputPath = path.join(process.cwd(), 'data', 'alumoutput.json');
  fs.writeFile(outputPath, out, (err) => {
    if (err) throw err;
    console.log('Output successfully saved to data/alumoutput.json');
  });
}
