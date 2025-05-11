
const historyEvents = [
  {
    id: 'acm-w-charter',
    date: {
      year: 2015,
      month: 'December',
      date: 1,  // day of month is optional
    },
    description: 'ACM-W officially chartered',
    details:
      'UCLA ACM-W was officially chartered, establishing a dedicated committee focused on supporting and promoting women in computing at UCLA.',
    committee: 'ACM-W',
  },
  {
    id: 'hacker-expo',
    date: {
      year: 2015,
      month: 'November',
      // date field is optional
    },
    description: 'Hacker Expo (now Tech Gala) founded',
    details:
      'The first Hacker Expo was organized, showcasing student projects and innovations. This event later evolved into what is now known as the Tech Gala.',
    committee: 'General',
  },
  {
    id: 'founder-school',
    date: {
      year: 2016,
      month: 'May',
    },
    description: "Launched UCLA's founder school with UPE",
    details:
      "ACM collaborated with Upsilon Pi Epsilon (UPE) to launch UCLA's founder school, providing resources and guidance for student entrepreneurs.",
    committee: 'General',
  },
  {
    id: 'restructure',
    date: {
      year: 2016,
      month: 'May',
    },
    description: 'Restructured ACM into 5 external committees: Hack, AI, ICPC, ACM-W, VRCG',
    details:
      'A major organizational restructuring created five specialized external committees to better serve different interests within the computing community.',
    committee: 'General',
  },
  {
    id: 'hack-school',
    date: {
      year: 2016,
      month: 'October',
    },
    description: 'Hack School launched',
    details:
      'Hack School was established as an educational initiative to teach practical programming skills to UCLA students.',
    committee: 'ACM-Hack',
  },
  {
    id: 'teach-la-start',
    date: {
      year: 2017,
      month: 'January',
    },
    description: 'ACM Teach LA started as a board initiative',
    details:
      'Teach LA began as a board initiative focused on bringing computer science education to local schools in Los Angeles.',
    committee: 'ACM-TeachLA',
  },
  {
    id: 'icpc-finals',
    date: {
      year: 2017,
      month: 'March',
    },
    description: 'ACM ICPC qualifies for ICPC world finals',
    details:
      'The UCLA ACM ICPC team achieved a significant milestone by qualifying for the ICPC World Finals, demonstrating exceptional problem-solving skills.',
    committee: 'ACM-ICPC',
  },
  {
    id: 'devx-spinoff',
    date: {
      year: 2017,
      month: 'March',
    },
    description: 'DevX spins off out of ACM',
    details:
      'DevX, which began as part of ACM, became an independent organization focused on software development for real-world applications.',
    committee: 'General',
  },
  {
    id: 'game-studio-merge',
    date: {
      year: 2017,
      month: 'March',
    },
    description: 'Bruin Game Studio merges with ACM to become ACM Game Studio',
    details:
      'Bruin Game Studio joined forces with ACM to form ACM Game Studio, creating a stronger community for game development enthusiasts.',
    committee: 'ACM-Studio',
  },
  {
    id: 'ctf-launch',
    date: {
      year: 2017,
      month: 'May',
    },
    description: 'ACM CTF launched',
    details:
      'The Capture The Flag (CTF) competition was launched, providing students with hands-on cybersecurity experience in a competitive format.',
    committee: 'ACM-Cyber',
  },
  {
    id: 'teachla-committee',
    date: {
      year: 2018,
      month: 'September',
    },
    description: 'ACM Teach LA becomes a new committee (from board)',
    details:
      'After demonstrating significant impact as a board initiative, Teach LA was established as a full committee within ACM.',
    committee: 'ACM-TeachLA',
  },
  {
    id: 'design-committee',
    date: {
      year: 2019,
      month: 'January',
    },
    description: 'ACM Design becomes a new committee (putting on external events)',
    details:
      'ACM Design was formed as a new committee dedicated to design in technology, organizing external events and workshops.',
    committee: 'ACM-Design',
  },
  {
    id: 'testing delete later',
    date: {
      year: 2025,
      month: 'May',
    },
    description: 'ACM CTF launched',
    details:
      'The Capture The Flag (CTF) competition was launched, providing students with hands-on cybersecurity experience in a competitive format.',
    committee: 'ACM-Cyber',
  },
];

export {historyEvents};
