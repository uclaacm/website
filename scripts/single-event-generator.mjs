import fs from 'fs';
import csv from 'csv-parser';
import { getCssStringFromCommittee, generateSingleEvent } from './lib.mjs';

const args = process.argv.slice(2);

if (args.length === 0) {
  throw new Error('No argument provided as the input file. Exiting...');
}

const fname = args[0];
const results = [];
const offset = 100;

fs.createReadStream(fname)
  .pipe(csv())
  .on('data', (data) => {
    if (data.Committee.includes('Example')) {
      return;
    }
    results.push(data);
  })
  .on('end', () => {
    const generated = results.map(
      (event, index) => {
        try {
          return generateSingleEvent({
            id: offset + index,
            title: event['Event/Workshop Title '],
            committee: getCssStringFromCommittee(event.Committee),
            location: event['Location/Zoom Link'],
            description: event.Description,
            time: event.Time,
            date: event.Date,
            fblink: event['Facebook Link'],
          });
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error(`Error ${err} on event ${JSON.stringify(event)}`);
        }
    });

    const cleaned = generated.filter((item) => item);

    const out = JSON.stringify(cleaned);
    fs.writeFile('output.json', out, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('Output successfully saved to output.json');
    });
  });
