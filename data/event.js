/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable max-len */

import React from 'react';

const events = [{
    id: 1,
    title: 'CS Welcome Day',
    allDay: false,
    start: new Date(2021, 8, 21, 16),
    end: new Date(2021, 8, 21, 17, 30),
    location: 'Engineering IV Patio',
    description: 'Come out to CS Welcome Day next Tuesday (9/21) from 4:00pm-5:30pm PT at the Engineering IV Patio where you’ll learn tips and tricks to navigate CS at UCLA from a panel of current CS students! You’ll be able to ask any burning questions at a live Q&A and will also be able to meet and interact with other CS students, student leaders, and even faculty! We welcome any student interested in computer science to attend, regardless of year, background, and major! Visit our webpage to learn more about our panelists and the event.',
    links: [{
      text: 'Event Website',
      href: 'https://www.cs.ucla.edu/cs-welcome-day/',
      ext: true,
    }],
  },
  {
    id: 2,
    title: 'ACM Fall GM',
    allDay: false,
    start: new Date(2021, 8, 27, 18),
    end: new Date(2021, 8, 27, 19, 30),
    location: 'Court of Sciences',
    description: <>
      <p>
        ACM at UCLA is happy to present our Fall General Meeting on Monday, September 27th at 6 PM PT at the Court of Sciences! 🔥
      </p>
      <p>
        ACM is the largest Computer Science student organization on campus and comprises of eight different committees: AI, Cyber, Design, Hack, ICPC, Studio, Teach LA, and ACM-W. 👩‍💻👨‍💻 With each committee focusing on a unique topic in technology, we are sure you will discover your passion and grow your skills through our numerous workshops, projects, and initiatives held each quarter.
      </p>
    </>,
    image: '/images/events/f21-fall-gm.png',
    alt: 'a banner that says "ACM at UCLA: Fall GM, Monday, September 27th from 6-8 PM in the Court of Sciences". Features graphical elements representing each of ACM\'s committees: ACM Hack, ACM W, ACM AI, ACM ICPC, ACM Cyber, ACM Studio, ACM Teach LA, and ACM Design.',
    links: [{
      text: 'Event Website',
      href: '/gm/f21',
      ext: false,
    }],
  },
  {
    id: 8,
    title: 'Ludum Dare 49 Kickoff',
    allDay: false,
    start: 1633122000000,
    end: 1633147200000,
    location: 'ENG VI 289',
    committee: 'studio',
    description: 'Ludum Dare is a game jam that happens roughly every 6 months. During each 48 to 72 hour long event, groups (and ambitious individuals) including programmers, artists, and musicians collaborate to create a video game fitting the theme. For team formation, we are mixing people based on skill level and skill set so that everyone has the opportunity to create awesome games! You can fill out the team registration form to be placed on a team. Of course, you are also welcome to form your own team or work solo.',
    links: [{
      text: 'Facebook Event',
      href: 'https://www.instagram.com/p/CUMMOt4LCuf/?utm_source=ig_web_copy_link',
      ext: true,
    },{
      text: 'Team Registration Form',
      href: 'https://forms.gle/hPqmdadSaC5siDfi7',
      ext: true,
    }],
  },
  {
    id: 9,
    title: 'Negotiation Workshop',
    allDay: false,
    start: 1633050000000,
    end: 1633055400000,
    location: 'TBD',
    committee: 'w',
    description: 'The link between negotiations and job offers, career success, and gender equity is obvious. Less obvious is what constitutes negotiation and how to do it well.\n\nJoin UCLA ACM-W for an exciting opportunity to learn negotiation skills and strategies from expert, Megan Karsh, on Sept 30 from 6-7:30pm. Megan will host a fun and interactive workshop about the importance of negotiation skills to career success, fundamental negotiation skills, and whether & how to negotiate job offers.',
    links: [],
  },
  {
    id: 10,
    title: 'ACM Hack Fall General Meeting',
    allDay: false,
    start: 1632967200000,
    end: 1632970800000,
    location: 'Perloff 1102',
    committee: 'hack',
    description: "Does building projects and exploring software development sound exciting to you? Do you want to learn how to make the next Instagram or Facebook?\nCome out to ACM Hack’s Fall GM next Wednesday to meet our wonderful team and learn more about what we do, what events we'll be putting on this upcoming quarter, and how you can get involved!",
    links: [{
      text: 'Facebook Event',
      href: 'https://www.facebook.com/events/388070826205600',
      ext: true,
    }],
  },
  {
    id: 11,
    title: 'ACM Design Fall General Meeting',
    allDay: false,
    start: 1633046400000,
    end: 1633050000000,
    location: '2763 Boelter Hall',
    committee: 'design',
    description: 'Interested in UX/UI design, product design, graphic design, 3D design and more? Or maybe you are into the creative side of web development? Here at ACM Design, we strive to bridge the gap between design and computer science. If any of this sounds exciting, stop by ACM Design’s general meeting where we will introduce you to a talented team of innovators and tell you about the work that we do! Students of all majors and experience levels are welcome.',
    links: [{
      text: 'Facebook Event',
      href: 'https://www.facebook.com/events/640773946888497',
      ext: true,
    }],
  },
  {
    id: 13,
    title: 'ACM Teach LA Fall General Meeting',
    allDay: false,
    start: 1632880800000,
    end: 1632884400000,
    location: 'Rolfe Hall - Room 1200',
    committee: 'teach-la',
    description: "Interested in empowering students in the LA area with computer science (and joining one of the coolest clubs on campus)? You've come to the right place!\n\nTo learn more about getting involved with teaching and curriculum or becoming part of our dev team (absolutely NO EXPERIENCE REQUIRED), come on down to the Teach LA Fall General Meeting! (Snacks will be provided...)",
    links: [{
      text: 'Facebook Event',
      href: 'https://fb.me/e/e6XsAmyBP',
      ext: true,
    }],
  },
  {
    id: 14,
    title: 'ACM AI Fall General Meeting',
    allDay: false,
    start: 1633136400000,
    end: 1633140000000,
    location: 'Kinsey Pavilion 1240B',
    committee: 'ai',
    description: "Interested in Artificial Intelligence or Machine Learning? Come out to ACM AI's General Meeting to learn about our events and initiatives! ACM AI welcomes UCLA students of all backgrounds, majors, and years. No application or prior experience in AI is required to attend our events.",
    links: [{
      text: 'Facebook Event',
      href: 'https://fb.me/e/1qZLwT2vV',
      ext: true,
    }],
  },
  {
    id: 15,
    title: 'ACM Cyber Fall General Meeting',
    allDay: false,
    start: 1633395600000,
    end: 1633402800000,
    location: 'Boelter Hall Room 9436',
    committee: 'cyber',
    description: "Thinking of building an aimbot to get you out of bronze? 🙈\nInterested in learning about how hackers get their hands on private [UC] 👀 information?\nThen ACM Cyber is just for you!! 😍\n\nCome out to Cyber's Fall General Meeting on Monday, October 4th, at Boelter Hall Room 9436 to learn more about what we do, meet our officers, make friends, and participate in a fun ✨Disney-themed✨ cyber activity! No prior experience necessary! ~See you there~",
    links: [{
      text: 'Facebook Event',
      href: 'https://fb.me/e/RvlzR1Ns',
      ext: true,
    }, {
      text: 'RSVP Form',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf-IeHo_-cxk97Jp_Jb7-cyOm5v2Ih3h05Yi1UrLxizV1G0Fg/viewform',
      ext: true,
    }],
  },
  {
    id: 16,
    title: 'ACM ICPC Fall General Meeting ',
    allDay: false,
    start: 1633053600000,
    end: 1633057200000,
    location: 'Boelter Hall Room 4760',
    committee: 'icpc',
    description: "Do you love the feeling of solving quantitative problems  in creative ways? New to algorithms  and excited to learn more? Trying to level up your tech interview skills? Do you just like hummingbirds  or Marvel movies? Our Fall General Meeting will outline our committee's activities for the quarter, as well as provide a chance for students to meet our officers. In addition, we will run a fun brainteaser to introduce attendees to the kind of problem-solving we enjoy!",
    links: [{
      text: 'Facebook Event',
      href: 'https://www.facebook.com/groups/ucla.icpc/permalink/4123554867773867/',
      ext: true,
    }],
  },
  {
    id: 17,
    title: 'ACM ICPC Team Kickoff',
    allDay: false,
    start: 1633201200000,
    end: 1633212000000,
    location: 'Engineering VI 289',
    committee: 'icpc',
    description: 'do you enjoy coding 💻 and solving challenging problems 😎? do you want to become an ABSOLUTE UNIT (™) at✨ competitive programming? 🥵💦 if so, UCLA ICPC is the right place for you! 🍻🥂🍷🥃🍾 make the alpha move 🤑🤪 (jk) and come to ICPC Team Kickoff on Saturday, October 2, from 12-3PM in Engineering VI 289! or else ⛓😩😤😡 (no prior experience necessary! 🤠)',
    links: [{
      text: 'Facebook Event',
      href: 'https://fb.me/e/1J0GaCQZ2',
      ext: true,
    }],
  },
  {
    id: 18,
    title: 'ACM W Fall General Meeting',
    allDay: false,
    start: 1632963600000,
    end: 1632967200000,
    location: 'Engineering VI 134',
    committee: 'w',
    description: "Welcome back everyone! We're so excited to be back on campus and hope you're all ready for another amazing year with ACM-W✨ Come join us for our Fall General Meeting on September 29 to learn more about what ACM-W has planned for the year and to meet the officers. We're all looking forward to meeting you 💚",
    links: [{
      text: 'Facebook Event',
      href: 'https://fb.me/e/3JAwOkrvR',
      ext: true,
    }],
  },
];

export default events;
