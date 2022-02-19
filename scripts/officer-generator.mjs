/* eslint-disable no-console */
import fs from 'fs';
import csv from 'csv-parser';

const args = process.argv.slice(2);

if (args.length === 0) {
  throw new Error('No argument provided as the input file. Exiting...');
}

const fname = args[0];
const results = [];

let prefix = '';

const hashOfficer = ({name, year}) => `${name}|${year}`;

const combineOfficers = (officersArray) => {
  const officers = {};
  officersArray.forEach((officer) => {
    const hash = hashOfficer(officer);
    if (hash in officers) {
      officers[hash].roles = officers[hash].roles.concat(officer.roles);
    }
    else {
      officers[hash] = {...officer};
    }
  });
  return Object.values(officers);
};

const countDuplicateNames = (officers) => {
  const nameSet = new Set(officers.map(officer => officer.name));
  return officers.length - nameSet.size;
};

fs.createReadStream(fname)
  .pipe(csv())
  .on('data', (data) => {
    // uses empty names as a heuristic for committee dividers
    if (!data.Name || !data.Name.trim()) {
      // omit "board" from prefix, since officer title is all we need
      prefix = !data['Officer Role'].includes('Board') ? `${data['Officer Role']} ` : '';
      return;
    }
    results.push({
      roles: [`${prefix}${data['Officer Role']}`], // "elegantly" deals with the edge case of president and board :)
      name: data.Name,
      year: data['Graduation Year'],
      major: data.Major,
    });
  })
  .on('end', () => {
    const combinedResults = combineOfficers(results);
    console.log(`Number of officers: ${combinedResults.length}`);
    const numDups = countDuplicateNames(combinedResults);
    console.log(`Number of duplicated names: ${numDups}`);
    const out = JSON.stringify(combinedResults, null, 2);
    fs.writeFile('output.json', out, (err) => {
      if (err) throw err;
      console.log('Output successfully saved to output.json');
    });
  });
