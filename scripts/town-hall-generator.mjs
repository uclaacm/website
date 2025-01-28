import fs from 'fs';
import dotenv from 'dotenv';
import { google } from 'googleapis';

// .env config
dotenv.config();
const SPREADSHEET_ID = process.env?.TOWNHALL_SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env?.SERVICE_ACCOUNT;

// Output json file
writeAllOutputs();

// Read data from Google sheets
// using sheet range (TownHall!A:H)
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

  // Get data from Google spreadsheets
  const res = await sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: SPREADSHEET_ID,
    range: range,
  });

  const rows = res?.data.values;
  if (!rows || rows.length == 0) {
    // eslint-disable-next-line no-console
    console.log('Error: no data found');
    return [];
  }

  return rows;
}

async function fetchTownHallData() {
  const data = await getGoogleSheetData('TownHall!A:B');

  // Format the rows into an array of objects
  const formattedData = data.map((row) => ({
    name: row[0],
    description: row[1],
  }));

  return formattedData;
}

async function fetchPastTownHallData() {
  const data = await getGoogleSheetData('PastTownHalls!A3:H');

  // Format the rows into an array of objects
  const formattedData = data.map((row) => ({
    title: row[0],
    date: row[1],
    description: row[2],
    slides: row[3],
    notes: row[4],
    banner: row[5],
    alt_text: row[6],
    results: row[7],
  }));

  return formattedData;
}

// Write data from sheets to a json file
async function writeToOutput(name, formattedData) {
  const output = JSON.stringify(formattedData);
  fs.writeFile(name, output, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('Output successfully saved to', name);
  });
}

// Outputs all necessary json files
async function writeAllOutputs() {
  writeToOutput('townhall.json', await fetchTownHallData());
  writeToOutput('past-townhall.json', await fetchPastTownHallData());
}
