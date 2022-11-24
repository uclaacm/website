import fs from 'fs';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import { getCssStringFromCommittee, generateSingleEvent, generateDateRange } from './lib.mjs';

// .env config
dotenv.config();
const SPREADSHEET_ID = process.env.EVENTS_SPREADSHEET_ID;
const SERVICE_ACCOUNT = process.env.SERVICE_ACCOUNT ?? '';

// Grab all recurring and single events from spreadsheet
// and write to output.json
async function writeAllEvents() {
  // Get all events
  let events = [];
  let temp = await getRecurringEvents();
  events = events.concat(temp);
  for (let i = 1; i <= 10; i++) {
    temp = await getEventsOfWeek(i);
    events = events.concat(temp);
  }

  // Write to output.json
  const cleaned = events.filter((item) => item);
  const out = JSON.stringify(cleaned);
  fs.writeFile('output.json', out, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('Output successfully saved to output.json');
  });
}

// Read recurring events from spreadsheet
// Return as array of JSON objects
async function getRecurringEvents() {
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
    range: 'RECURRING EVENTS' + '!A:H',
  });
  const rows = res?.data.values;
  if(!rows || rows.length == 0) {
    console.log('Error: no data found');
    return [];
  }

  const events = [];
  for (const row of rows) {
    // Skip header rows and example event
    if (row.length < 5 || row[0] === 'Committee' || row[0].includes('Example:')) {
      continue;
    }

    const [startDate, endDate] = row[2].split(' - ');
    const dates = generateDateRange(startDate, endDate);
    for (const date of dates) {
      try{
        events.push(generateSingleEvent({
          title: row[1],
          start: null,
          end: null,
          committee: getCssStringFromCommittee(row[0]),
          location: row[4],
          description: row[5],
          links: null,
          time: row[3],
          date: date,
          fblink: row[6]}));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Error ${err} on event ${row}`);
      }
    }
  }

  return events;
}

// Read events of Week n
// Return as array of JSON objects
async function getEventsOfWeek(n) {
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
    range: 'Week ' + n + '!A:H',
  });
  const rows = res?.data.values;
  if(!rows || rows.length == 0) {
    console.log('Error: no data found');
    return [];
  }

  const events = [];
  for (const row of rows) {
    // Skip header rows and example event
    if (row.length < 5 || row[0] === 'Committee' || row[0].includes('Example:')) {
      continue;
    }

    try{
      events.push(generateSingleEvent({
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

writeAllEvents();
