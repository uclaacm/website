import * as fs from 'fs';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT;
const DATAHUB_SPREADSHEET_ID = process.env.DATAHUB_SPREADSHEET_ID;

async function main() {
  const auth = await authorizeGoogleAPI();
  const sheetNames = await getSheetNames(auth);

  // Parse all officer sheets (current + historical) from DATAHUB_SPREADSHEET_ID
  // For current officers, sheet name is "Officers"
  // For past officers, sheet names follow format "Officers(XX-XX)"
  const allData = {};
  const alumYears = [];
  let latestYear = 0;
  
  for (const sheet of sheetNames) {
    let fullYear = null;
    
    if (sheet === 'Officers') {
      // Current officers sheet - determine year from latest Officers(XX-XX)
      // We'll add this after we find latestYear
      continue;
    } else if (sheet.startsWith('Officers(')) {
      const match = sheet.match(/\((\d{2})-(\d{2})\)/);
      if (match && match[1] && match[2]) {
        fullYear = `20${match[1]}-20${match[2]}`;
        alumYears.push(fullYear);
        
        // Track the latest year found
        const endYear = parseInt(match[2]);
        latestYear = Math.max(latestYear, endYear);
      } else {
        console.warn(`Unexpected sheet format: ${sheet}`);
        continue;
      }
    }
    
    if (fullYear) {
      const data = await getGoogleSheetData(auth, `${sheet}!A2:K`);
      allData[fullYear] = data;
    }
  }

  // Current officers are in "Officers" sheet, which represents year (latestYear + 1)
  // Example: if latest archived is Officers(25-26), then Officers sheet = 26-27
  const currentFullYear = `20${latestYear}-20${latestYear + 1}`;
  alumYears.push(currentFullYear);
  const currentData = await getGoogleSheetData(auth, `Officers!A2:K`);
  allData[currentFullYear] = currentData;
  
  // Also write current officers to officeroutput.json for backwards compatibility
  writeToOutput(currentData, 'officeroutput.json');
  
  const sortedYears = Array.from(alumYears).sort().reverse();
  writeToOutput(sortedYears, 'alumyears.json');
  writeToOutput(allData, 'alumoutput.json');
}

main().catch((err) => {
  console.error('An error occurred:', err);
});

////////////////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////////////////

async function authorizeGoogleAPI() {
  const service_account = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    service_account.client_email,
    null,
    service_account.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
  await jwtClient.authorize();
  return jwtClient;
}

// Read data from Google sheets
// using sheet range (eg: 'Week 1!A:H)
async function getGoogleSheetData(auth, range) {
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
    const sheets = google.sheets({ version: 'v4' });
    const res = await sheets.spreadsheets.values.get({
      auth: auth,
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

async function getSheetNames(auth) {
  const sheets = google.sheets({ version: 'v4' });
  const res = await sheets.spreadsheets.get({
    auth: auth,
    spreadsheetId: DATAHUB_SPREADSHEET_ID,
  });
  return res.data.sheets.map((sheet) => sheet.properties.title);
}

function writeToOutput(officerData, filename) {
  // Write officerData to filename.
  const out = JSON.stringify(officerData, null, 2);
  const outputPath = path.join(process.cwd(), 'data', filename);
  fs.writeFile(outputPath, out, (err) => {
    if (err) throw err;
    console.log(`Output successfully saved to data/${filename}`);
  });
}
