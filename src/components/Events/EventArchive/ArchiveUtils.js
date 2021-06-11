const quarterBoundaries = [
  {'start': new Date(2013, 8, 23),  'end': new Date(2013, 11, 13),  'quarter': {'season': 'Fall',   'year': 2013}},
  {'start': new Date(2014, 0, 2),   'end': new Date(2014, 2, 21),   'quarter': {'season': 'Winter', 'year': 2014}},
  {'start': new Date(2014, 2, 26),  'end': new Date(2014, 5, 13),   'quarter': {'season': 'Spring', 'year': 2014}},

  {'start': new Date(2014, 8, 29),  'end': new Date(2014, 11, 19),  'quarter': {'season': 'Fall',   'year': 2014}},
  {'start': new Date(2015, 0, 5),   'end': new Date(2015, 2, 20),   'quarter': {'season': 'Winter', 'year': 2015}},
  {'start': new Date(2015, 2, 25),  'end': new Date(2015, 5, 12),   'quarter': {'season': 'Spring', 'year': 2015}},

  {'start': new Date(2015, 8, 21),  'end': new Date(2015, 11, 11),  'quarter': {'season': 'Fall',   'year': 2015}},
  {'start': new Date(2016, 0, 4),   'end': new Date(2016, 2, 18),   'quarter': {'season': 'Winter', 'year': 2016}},
  {'start': new Date(2016, 2, 23),  'end': new Date(2016, 5, 10),   'quarter': {'season': 'Spring', 'year': 2016}},

  {'start': new Date(2016, 8, 19),  'end': new Date(2016, 11, 9),   'quarter': {'season': 'Fall',   'year': 2016}},
  {'start': new Date(2017, 0, 4),   'end': new Date(2017, 2, 24),   'quarter': {'season': 'Winter', 'year': 2017}},
  {'start': new Date(2017, 2, 29),  'end': new Date(2017, 5, 16),   'quarter': {'season': 'Spring', 'year': 2017}},

  {'start': new Date(2017, 8, 25),  'end': new Date(2017, 11, 15),  'quarter': {'season': 'Fall',   'year': 2017}},
  {'start': new Date(2018, 0, 3),   'end': new Date(2018, 2, 23),   'quarter': {'season': 'Winter', 'year': 2018}},
  {'start': new Date(2018, 2, 28),  'end': new Date(2018, 5, 15),   'quarter': {'season': 'Spring', 'year': 2018}},

  {'start': new Date(2018, 8, 24),  'end': new Date(2018, 11, 14),  'quarter': {'season': 'Fall',   'year': 2018}},
  {'start': new Date(2019, 0, 2),   'end': new Date(2019, 2, 22),   'quarter': {'season': 'Winter', 'year': 2019}},
  {'start': new Date(2019, 2, 27),  'end': new Date(2019, 5, 14),   'quarter': {'season': 'Spring', 'year': 2019}},

  {'start': new Date(2019, 8, 23),  'end': new Date(2019, 11, 13),  'quarter': {'season': 'Fall',   'year': 2019}},
  {'start': new Date(2020, 0, 2),   'end': new Date(2020, 2, 20),   'quarter': {'season': 'Winter', 'year': 2020}},
  {'start': new Date(2020, 2, 25),  'end': new Date(2020, 5, 12),   'quarter': {'season': 'Spring', 'year': 2020}},

  {'start': new Date(2020, 8, 28),  'end': new Date(2020, 11, 18),  'quarter': {'season': 'Fall',   'year': 2020}},
  {'start': new Date(2021, 0, 4),   'end': new Date(2021, 2, 19),   'quarter': {'season': 'Winter', 'year': 2021}},
  {'start': new Date(2021, 2, 24),  'end': new Date(2021, 5, 11),   'quarter': {'season': 'Spring', 'year': 2021}},

  {'start': new Date(2021, 8, 20),  'end': new Date(2021, 11, 10),  'quarter': {'season': 'Fall',   'year': 2021}},
  {'start': new Date(2022, 0, 3),   'end': new Date(2022, 2, 18),   'quarter': {'season': 'Winter', 'year': 2022}},
  {'start': new Date(2022, 2, 23),  'end': new Date(2022, 5, 10),   'quarter': {'season': 'Spring', 'year': 2022}},

  {'start': new Date(2022, 8, 19),  'end': new Date(2022, 11, 9),   'quarter': {'season': 'Fall',   'year': 2022}},
  {'start': new Date(2023, 0, 4),   'end': new Date(2023, 2, 24),   'quarter': {'season': 'Winter', 'year': 2023}},
  {'start': new Date(2023, 2, 29),  'end': new Date(2023, 5, 16),   'quarter': {'season': 'Spring', 'year': 2023}},

  {'start': new Date(2023, 8, 25),  'end': new Date(2023, 11, 15),  'quarter': {'season': 'Fall',   'year': 2023}},
  {'start': new Date(2024, 0, 3),   'end': new Date(2024, 2, 22),   'quarter': {'season': 'Winter', 'year': 2024}},
  {'start': new Date(2024, 2, 27),  'end': new Date(2024, 5, 14),   'quarter': {'season': 'Spring', 'year': 2024}},

  {'start': new Date(2024, 8, 23),  'end': new Date(2024, 11, 13),  'quarter': {'season': 'Fall',   'year': 2024}},
  {'start': new Date(2025, 0, 2),   'end': new Date(2025, 2, 21),   'quarter': {'season': 'Winter', 'year': 2025}},
  {'start': new Date(2025, 2, 26),  'end': new Date(2025, 5, 13),   'quarter': {'season': 'Spring', 'year': 2025}},

  {'start': new Date(2025, 8, 22),  'end': new Date(2025, 11, 12),  'quarter': {'season': 'Fall',   'year': 2025}},
  {'start': new Date(2026, 0, 2),   'end': new Date(2026, 2, 20),   'quarter': {'season': 'Winter', 'year': 2026}},
  {'start': new Date(2026, 2, 27),  'end': new Date(2026, 5, 12),   'quarter': {'season': 'Spring', 'year': 2026}},

  {'start': new Date(2026, 8, 21),  'end': new Date(2026, 11, 11),  'quarter': {'season': 'Fall',   'year': 2026}},
  {'start': new Date(2027, 0, 4),   'end': new Date(2027, 2, 19),   'quarter': {'season': 'Winter', 'year': 2027}},
  {'start': new Date(2027, 2, 24),  'end': new Date(2027, 5, 11),   'quarter': {'season': 'Spring', 'year': 2027}}
];

function getQuarter(date) {
  for (let i = 0; i < quarterBoundaries.length; i++) {
    if (date >= quarterBoundaries[i].start && date <= quarterBoundaries[i].end) {
      return quarterBoundaries[i].quarter;
    }
  }
  return {};
}

const committees = {
  'w':        {'name': 'W',         'color': '#1BC3A9'},
  'hack':     {'name': 'Hack',      'color': '#C960FF'},
  'icpc':     {'name': 'ICPC',      'color': '#FF8383'},
  'ai':       {'name': 'AI',        'color': '#28B2FF'},
  'studio':   {'name': 'Studio',    'color': '#FB4469'},
  'cyber':    {'name': 'Cyber',     'color': '#FFBA44'},
  'design':   {'name': 'Design',    'color': '#FE8D3C'},
  'teachla':  {'name': 'Teach LA',  'color': '#5EDA12'},
  'acm':      {'name': 'ACM',       'color': '#1E6CFF'}
};

const attendance = {
  'inperson': 0,
  'virtual':  1,
  'hybrid':   2
};

export { getQuarter, committees, attendance };