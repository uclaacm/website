let quarterBoundaries = [
  {'start': new Date(2014, 9, 29),  'end': new Date(2014, 12, 19),  'quarter': {'season': 'Fall',   'year': 2014}},
  {'start': new Date(2015, 1, 5),   'end': new Date(2015, 3, 20),   'quarter': {'season': 'Winter', 'year': 2015}},
  {'start': new Date(2015, 3, 25),  'end': new Date(2015, 6, 12),   'quarter': {'season': 'Spring', 'year': 2015}},

  {'start': new Date(2015, 9, 21),  'end': new Date(2015, 12, 11),  'quarter': {'season': 'Fall',   'year': 2015}},
  {'start': new Date(2016, 1, 4),   'end': new Date(2016, 3, 18),   'quarter': {'season': 'Winter', 'year': 2016}},
  {'start': new Date(2016, 3, 23),  'end': new Date(2016, 6, 10),   'quarter': {'season': 'Spring', 'year': 2016}},

  {'start': new Date(2016, 9, 19),  'end': new Date(2016, 12, 9),   'quarter': {'season': 'Fall',   'year': 2016}},
  {'start': new Date(2017, 1, 4),   'end': new Date(2017, 3, 24),   'quarter': {'season': 'Winter', 'year': 2017}},
  {'start': new Date(2017, 3, 29),  'end': new Date(2017, 6, 16),   'quarter': {'season': 'Spring', 'year': 2017}},

  {'start': new Date(2017, 9, 25),  'end': new Date(2017, 12, 15),  'quarter': {'season': 'Fall',   'year': 2017}},
  {'start': new Date(2018, 1, 3),   'end': new Date(2018, 3, 23),   'quarter': {'season': 'Winter', 'year': 2018}},
  {'start': new Date(2018, 3, 28),  'end': new Date(2018, 6, 15),   'quarter': {'season': 'Spring', 'year': 2018}},

  {'start': new Date(2018, 9, 24),  'end': new Date(2018, 12, 14),  'quarter': {'season': 'Fall',   'year': 2018}},
  {'start': new Date(2019, 1, 2),   'end': new Date(2019, 3, 22),   'quarter': {'season': 'Winter', 'year': 2019}},
  {'start': new Date(2019, 3, 27),  'end': new Date(2019, 6, 14),   'quarter': {'season': 'Spring', 'year': 2019}},

  {'start': new Date(2019, 9, 23),  'end': new Date(2019, 12, 13),  'quarter': {'season': 'Fall',   'year': 2019}},
  {'start': new Date(2020, 1, 2),   'end': new Date(2020, 3, 20),   'quarter': {'season': 'Winter', 'year': 2020}},
  {'start': new Date(2020, 3, 25),  'end': new Date(2020, 6, 12),   'quarter': {'season': 'Spring', 'year': 2020}},

  {'start': new Date(2020, 9, 28),  'end': new Date(2020, 12, 18),  'quarter': {'season': 'Fall',   'year': 2020}},
  {'start': new Date(2021, 1, 4),   'end': new Date(2021, 3, 19),   'quarter': {'season': 'Winter', 'year': 2021}},
  {'start': new Date(2021, 3, 24),  'end': new Date(2021, 6, 11),   'quarter': {'season': 'Spring', 'year': 2021}},

  {'start': new Date(2021, 9, 20),  'end': new Date(2021, 12, 10),  'quarter': {'season': 'Fall',   'year': 2021}},
  {'start': new Date(2022, 1, 3),   'end': new Date(2022, 3, 18),   'quarter': {'season': 'Winter', 'year': 2022}},
  {'start': new Date(2022, 3, 23),  'end': new Date(2022, 6, 10),   'quarter': {'season': 'Spring', 'year': 2022}},

  {'start': new Date(2022, 9, 19),  'end': new Date(2022, 12, 9),   'quarter': {'season': 'Fall',   'year': 2022}},
  {'start': new Date(2023, 1, 4),   'end': new Date(2023, 3, 24),   'quarter': {'season': 'Winter', 'year': 2023}},
  {'start': new Date(2023, 3, 29),  'end': new Date(2023, 6, 16),   'quarter': {'season': 'Spring', 'year': 2023}},

  {'start': new Date(2023, 9, 25),  'end': new Date(2023, 12, 15),  'quarter': {'season': 'Fall',   'year': 2023}},
  {'start': new Date(2024, 1, 3),   'end': new Date(2024, 3, 22),   'quarter': {'season': 'Winter', 'year': 2024}},
  {'start': new Date(2024, 3, 27),  'end': new Date(2024, 6, 14),   'quarter': {'season': 'Spring', 'year': 2024}},

  {'start': new Date(2024, 9, 23),  'end': new Date(2024, 12, 13),  'quarter': {'season': 'Fall',   'year': 2024}},
  {'start': new Date(2025, 1, 2),   'end': new Date(2025, 3, 21),   'quarter': {'season': 'Winter', 'year': 2025}},
  {'start': new Date(2025, 3, 26),  'end': new Date(2025, 6, 13),   'quarter': {'season': 'Spring', 'year': 2025}},

  {'start': new Date(2025, 9, 22),  'end': new Date(2025, 12, 12),  'quarter': {'season': 'Fall',   'year': 2025}},
  {'start': new Date(2026, 1, 2),   'end': new Date(2026, 3, 20),   'quarter': {'season': 'Winter', 'year': 2026}},
  {'start': new Date(2026, 3, 27),  'end': new Date(2026, 6, 12),   'quarter': {'season': 'Spring', 'year': 2026}},

  {'start': new Date(2026, 9, 21),  'end': new Date(2026, 12, 11),  'quarter': {'season': 'Fall',   'year': 2026}},
  {'start': new Date(2027, 1, 4),   'end': new Date(2027, 3, 19),   'quarter': {'season': 'Winter', 'year': 2027}},
  {'start': new Date(2027, 3, 24),  'end': new Date(2027, 6, 11),   'quarter': {'season': 'Spring', 'year': 2027}}
];

function getQuarter(date) {
  for (let i = 0; i < quarterBoundaries.length; i++) {
    if (date >= quarterBoundaries[i].start && date <= quarterBoundaries[i].end) {
      return quarterBoundaries[i].quarter;
    }
  }
  return {};
}

export default getQuarter;