import fs, { write } from 'fs';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import { getCssStringFromCommittee, generateSingleEvent } from './lib.mjs';

// .env config
dotenv.config();
const SPREADSHEET_ID = process.env.EVENTS_SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';

// Week one MONDAY of the quarter (y, m (base 0), d)
const FIRST_DAY_OF_QUARTER = new Date(2023, 0, 9);
const DAYS_OF_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// Grab all single and recurring events of Week n
// and write to output.json
async function writeAllEventsOfWeek(n) {
  // Get events
  let events = (await getSingleEventsOfWeek(n)).concat(await getRecurringEventsOfWeek(n));
  const cleaned = events.filter((item) => item);
  writeToOutput(cleaned);
}

// Get all single and recurring events of the quarter
// Return as a list of JSONs
async function getAllEvents() {
  let events = [];

  for (let i = 1; i <= 10; i++) {
    events = events.concat(await getSingleEventsOfWeek(i));
    events = events.concat(await getRecurringEventsOfWeek(i));
  }

  return events;
}

// Read single events of Week n
// Return as array of JSON objects
async function getSingleEventsOfWeek(n) {
  const rows = await getGoogleSheetData('Week ' + n + '!A:H');

  const events = [];
  for (const row of rows) {
    // Skip header rows and example event
    if (row.length < 5 || row[0] === 'Committee' || row[0].includes('Example:')) {
      continue;
    }

    try{
      events.push(generateSingleEvent({
        id: null,
        title: row[1],
        start: null,
        end: null,
        committee: getCssStringFromCommittee(row[0]),
        location: row[4],
        description: row[5],
        links: null,
        time: row[3],
        date: row[2],
        fblink: row[6]}));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`Error ${err} on event ${row}`);
    }
  }

  return events;
}

// Read recurring events of Week n
// Return as array of JSON objects
async function getRecurringEventsOfWeek(n) {
  const rows = await getGoogleSheetData('RECURRING EVENTS!A:J');

  const events = [];
  for (const row of rows) {
    // Skip header rows and example event
    if (row.length < 5 || row[0] === 'Committee' || row[0].includes('Example:')) {
      continue;
    }

    // Check the current week is within the event's range
    if (parseInt(row[2]) <= n && parseInt(row[3]) >= n) {
      try {
        // Calculate date of event for this week
        const d = (n - 1) * 7 + DAYS_OF_WEEK.indexOf(row[4].toLowerCase());
        const date = new Date(FIRST_DAY_OF_QUARTER);
        date.setDate(date.getDate() + d);

        events.push(generateSingleEvent({
          id: null,
          title: row[1],
          start: null,
          end: null,
          committee: getCssStringFromCommittee(row[0]),
          location: row[6],
          description: row[7],
          links: null,
          time: row[5],
          date: date.toISOString().split('T')[0],
          fblink: row[8]}));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Error ${err} on event ${row}`);
      }
    }
  }

  return events;
}

////////////////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////////////////

// Read data from Google sheets
// using sheet range (eg: 'Week 1!A:H)
async function getGoogleSheetData(range) {
  const sheets = google.sheets({version: 'v4'});

  // Get JWT Token to access sheet
  const service_account = JSON.parse(SERVICE_ACCOUNT);
  const jwtClient = new google.auth.JWT(
    service_account.client_email,
    '',
    service_account.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );
  jwtClient.authorize(function (err) {
    if (err) {
      throw err;
    }
  });

  // Get data from Google spreadsheets
  const res = await sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: SPREADSHEET_ID,
    range: range,
  });
  const rows = res?.data.values;
  if(!rows || rows.length == 0) {
    console.log('Error: no data found');
    return [];
  }

  // // Replacing the new lines with <br/> (doesnt work tho)
  // const formatRows = rows.map((row) => row.map( (r) => r.replace(/\n/g, '<br/>')));
  // return formatRows;

  return rows;
}

// write events (list of event jsons) to output.json
function writeToOutput(events) {
  // Write to output.json
  const out = JSON.stringify(events);
  fs.writeFile('output.json', out, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('Output successfully saved to output.json');
  });
}

export default getAllEvents;
