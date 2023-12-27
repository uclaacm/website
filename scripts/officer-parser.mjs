import * as fs from 'fs';
import { google } from "googleapis";
import * as dotenv from "dotenv";



dotenv.config();
const SERVICE_ACCOUNT = process.env["SERVICE_ACCOUNT"];
const DIRECTORY_SPREADSHEET_ID = process.env["DIRECTORY_SPREADSHEET_ID"];



async function getAllOfficers() {       //tofix
    // Get all single events
    let promises = [];
    for (let i = 1; i <= 10; i++) {
      promises = promises.concat(getSingleEventsOfWeek(i));
    }
    let events = await Promise.all(promises);
    events = [].concat(...events);
  
    // Get all recurring events
    let recurring_rows = await getGoogleSheetData('RECURRING EVENTS!A:J');
    for (let i = 1; i <= 10; i++) {
      events = events.concat(getRecurringEventsOfWeek(recurring_rows, i));
    }
    return events.filter((item, index, self) => index === self.findIndex(
        (other) => item.title === other.title && item.rawStart === other.rawStart),
      );
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
      spreadsheetId: DIRECTORY_SPREADSHEET_ID,
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

  function writeToOutput(officers) {
    // Write to output.json
    const out = JSON.stringify(officers);
    fs.writeFile('output.json', out, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('Output successfully saved to output.json');
    });
  }