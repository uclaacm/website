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
    location: 'Franz Hall 2258A',
    committee: 'cyber',
    description: "Thinking of building an aimbot to get you out of bronze? 🙈\nInterested in learning about how hackers get their hands on private [UC] 👀 information?\nThen ACM Cyber is just for you!! 😍\n\nCome out to Cyber's Fall General Meeting on Monday, October 4th, at Franz Hall 2258A to learn more about what we do, meet our officers, make friends, and participate in a fun ✨Disney-themed✨ cyber activity! No prior experience necessary! *note* bring your ID card + a mask + your laptop to solve some cool challenges 👀! ~See you there~",
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
  // WEEK 2
  {id: 101,title: 'Meet the Company: Human Capital',allDay: false,start: 1633395600000,end: 1633399200000,location: 'https://ucla.zoom.us/j/91835413451',committee: 'board',description: 'We’re bringing back the Meet the Company series! 💙\n\nWelcome to our first event featuring Human Capital, an engineering talent agency for founders and engineers. As a company, they bridge the gap between promising engineers in need of career mentorship and start up companies with fewer recruitment resources. Human Capital believes that great engineers build great companies, and as a result, those companies can then become training grounds for a new generation of entrepreneurial engineers.\n\nCome hear about their unique mission, career coaching process, and investing strategies on October 4, 2021 from 6 to 7 PM PDT, and make sure to RSVP with our form 🤩',links: [{text: 'Facebook Event',href: 'https://fb.me/e/2sJQj107Y',ext: true},{text: 'RSVP Form', href: 'https://forms.gle/AraRS4uFqkjVyv437', ext: true}]},{id: 102,title: 'Breaking into Tech as a Non-CS Major | Michelle from ACM W',allDay: false,start: 1633564800000,end: 1633568400000,location: '2763 Boelter Hall',committee: 'board',description: 'Interested in tech but not a CS major? Welcome to our first event of ACM’s Breaking into Tech as a Non-CS Major series for the 2021 - 2022 school year where we highlight current members of ACM navigating the tech world without a formal technical background.\n\nThis week we have Michelle Kim from ACM W to talk about her story as an English major in a CS dominated space.',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/601350427714979/?ref=newsfeed',ext: true}]},{id: 103,title: 'CS Career Fair',allDay: false,start: 1634140800000,end: 1634162400000,location: 'Highre',committee: 'board',description: 'The UCLA Computer Science Department, in collaboration with ACM and UPE, is hosting the Computer Science Career Fair. Come speak about opportunities with our industry affiliates!\n\nThis event will be held virtually on Highre. You will receive your time slot confirmation, overview of event, and link to the event through email by Sunday, October 10th 11:59 PT. First come first serve! Spots are limited.\n\n\n\nDeadline to register: Saturday, October 9th at 11:59pm PT.\n\nAllowed Majors: CS, CSE, and CE only\n\nThe sessions for the event are as follows:\n1. 9:00AM -11:00AM PT (open to all with preference for international students)\n2. 11:00AM - 1:00PM PT (open to UPE honors students only)\n3. 1:00PM - 3:00 PM PT (open to all)\n\nCompanies in attendance: TBD',links: [{text: 'Facebook Event',href: 'https://fb.me/e/HKFQM8J6',ext: true}, {text: 'RSVP Form', href: 'https://tinyurl.com/cscareerfair2021', ext: true}]},{id: 104,title: 'Tech in the Park',allDay: false,start: 1634338800000,end: 1634346000000,location: 'Sunset Recreation Center - Amphitheater Lawn',committee: 'board',description: 'Be sure to come out Friday Week 3 to Tech in the Park! This is a brand new social event hosted by the three Computer Science organizations on campus: ACM, UPE, and exploretech.la. Students from all years will have the chance to meet one another and to also get to know the CS and tech organizations of UCLA! We will have outdoor activities for all people to enjoy, including arts and crafts, volleyball, spikeball, ultimate, and more.',links: [{text: 'Facebook Event',href: 'https://fb.me/e/1WMw8I3NU',ext: true}]},{id: 105,title: 'Studio Fall GM',allDay: false,start: 1633572000000,end: 1633579200000,location: 'Eng VI - 134',committee: 'studio',description: "We'll be having our  Studio Fall GM October 6, 7:00 - 9:00 PM in Eng VI 134. This is a great opportunity to meet our officers and socialize with others interested in game development, learn specifics about our timeline, and how to get involved. Please RSVP if you plan on attending since we do have limited room capacity--hope to see you there!",links: [{text: 'Instagram Post',href: 'https://www.instagram.com/p/CUaeVluvnkq/',ext: true}, {text: 'RSVP Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfo5e0_IiDXoA8Em74lkrr-X-O8ud6Mk8JmnF7Yc-e6uNtFSg/viewform?usp=sf_link', ext: true}]},{id: 106,title: 'ACM Design | UXLA #1: Intro to UI/UX',allDay: false,start: 1633651200000,end: 1633654800000,location: 'Boelter Hall Room 2763',committee: 'design',description: '🎉 HELLO, DESIGN FRIENDS! Thank you for a packed ACM Design GM, and without further ado, welcome to our FIRST 🍾 design workshop in person - our first UXLA series workshop, 🔶 Intro to UI/UX 🔶 at Boelter 2763 from 5-6PM. Remember to bring your Bruincard 💳 and mask 😷!\n\nEver thought about how well (or badly) things we use every day are designed for us? Curious about the world of user experience but not sure where to start? Wanna start recruiting ASAP? Don’t worry 💪 we got you! In this workshop, we’ll be going over your 🎁 starter pack for being a UXer - what a good user experience means, the kinds of roles that exist and what they do, and the design thinking approach at the 💗 heart of everything we do. Let’s GO!!! 🔥🔥',links: [{text: 'Facebook Event',href: 'https://fb.me/e/1cOoyG4sa',ext: true}]},{id: 107,title: 'ACM Hack | Hackschool #1: Intro to HTML/CSS',allDay: false,start: 1633572000000,end: 1633579200000,location: 'Perloff 1102',committee: 'hack',description: 'If you want to learn web dev and get the tools to build your own personal project, hop on board our 💜 beginner friendly 💜 workshop series! At our first Hackschool workshop this Wednesday, we’ll be going over the fundamentals of HTML and CSS! 🎉  We’ll teach you everything you need to know, so no prior experience is required :) Everyone is welcome to come but make sure you RSVP and bring your bruin card! The workshop will be held on Wednesday October 6th 7-9 PM in Perloff 1102. We hope to see you there! ',links: [{text: 'Facebook Event',href: 'https://fb.me/e/1vzEKgyVM',ext: true}]},{id: 108,title: 'ACM ICPC | SoCal Regionals Tryout #1',allDay: false,start: 1633806000000,end: 1633816800000,location: 'Eng VI - 289',committee: 'icpc',description: '',links: []},{id: 109,title: 'ACM ICPC | Beginner Track',allDay: false,start: 1633568400000,end: 1633575600000,location: 'Kerckhoff State Room',committee: 'icpc',description: 'Quick!! 🙊 How do you find the shortest path from your dorm to the lecture hall? Not sure? Come to ACM ICPC at UCLA’s Beginner Track this Wednesday @ 6 to learn that and much, much more!!!\n\nIn Beginner’s Track, our popular introduction to the world of competitive programming, we’ll be exploring beginner friendly topics and algorithms in competitive programming 🌱 We will walk you through everything you need to know to go from earthbound n00b to galaxy brained red coder Chad, guaranteed 😳🧠 absolutely no experience required!!!\n\nJoin us this Wednesday from 6-8 in the Kerchoff State Room for a warm welcome to competitive programming and to solve some fun ad-hoc problems! :)',links: []},{id: 110,title: 'Meet the Company: Deloitte',allDay: false,start: 1634000400000,end: 1634005800000,location: 'Zoom link will be released on FB a day before the event!',committee: 'board',description: "Tune in for Meet the Company: Deloitte, the second event in our affiliate series! 👀\n\nInterested in consulting and technology? Deloitte is a leading consulting firm with offices worldwide. Providing a large range of services across multiple industries, Deloitte presents a wide variety of work for prospective applicants to choose from. With opportunities to experience work in different settings and with different clients, monotony isn't a concern for a Deloitte employee 🥰\n\nCome hear about how to navigate Deloitte with a technical degree and the personal journeys of some of their employees on October 11, 2021 from 6 to 7:30 PM PDT!",links: [{text: 'Facebook Event',href: 'https://fb.me/e/2FcAhLH9w',ext: true}, {text: 'RSVP Form', href: 'https://forms.gle/XNrWCCxn3KRCbZ5cA', ext: true}]},
  // RECUR
  {id: 20,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1633485600000,end: 1633489200000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 21,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1634090400000,end: 1634094000000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 22,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1634695200000,end: 1634698800000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 23,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1635300000000,end: 1635303600000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 24,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1635904800000,end: 1635908400000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 25,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1636513200000,end: 1636516800000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 26,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1637118000000,end: 1637121600000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 27,title: 'ACM Teach LA Curriculum Meetings',allDay: false,start: 1637722800000,end: 1637726400000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},
  {id: 20,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1633482000000,end: 1633485600000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 21,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1634086800000,end: 1634090400000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 22,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1634691600000,end: 1634695200000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 23,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1635296400000,end: 1635300000000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 24,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1635901200000,end: 1635904800000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 25,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1636509600000,end: 1636513200000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 26,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1637114400000,end: 1637118000000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},{id: 27,title: 'ACM Teach LA Dev Team Meetings',allDay: false,start: 1637719200000,end: 1637722800000,location: 'Mathematical Sciences Building - Room 5203',committee: 'teach-la',description: '',links: []},
  {id: 20,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1633741200000,end: 1633748400000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 21,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1634346000000,end: 1634353200000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 22,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1634950800000,end: 1634958000000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 23,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1635555600000,end: 1635562800000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 24,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1636160400000,end: 1636167600000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 25,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1636768800000,end: 1636776000000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 26,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1637373600000,end: 1637380800000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},{id: 27,title: 'ACM AI Beginner Track Workshops',allDay: false,start: 1637978400000,end: 1637985600000,location: 'Kinsey Pavilion 1240B',committee: 'ai',description: "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/388424459452807',ext: true}]},
  {id: 20,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1633482000000,end: 1633489200000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 21,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1634086800000,end: 1634094000000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 22,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1634691600000,end: 1634698800000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 23,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1635296400000,end: 1635303600000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 24,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1635901200000,end: 1635908400000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 25,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1636509600000,end: 1636516800000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 26,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1637114400000,end: 1637121600000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},{id: 27,title: 'ACM AI Advanced Track Workshops',allDay: false,start: 1637719200000,end: 1637726400000,location: 'Engineering VI 289',committee: 'ai',description: 'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/2981152132202759',ext: true}]},
  {id: 20,title: 'ACM Impact: Careers Workshop Series',allDay: false,start: 1633395600000,end: 1633399200000,location: 'https://ucla.zoom.us/j/96653581209',committee: 'board',description: 'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/622886719081419',ext: true}, {text: 'Zoom Link', href: 'https://ucla.zoom.us/j/96653581209', ext: true}]},{id: 22,title: 'ACM Impact: Careers Workshop Series',allDay: false,start: 1634605200000,end: 1634608800000,location: 'Online, zoom link posted on FB event',committee: 'board',description: 'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/622886719081419',ext: true}]},{id: 24,title: 'ACM Impact: Careers Workshop Series',allDay: false,start: 1635814800000,end: 1635818400000,location: 'Online, zoom link posted on FB event',committee: 'board',description: 'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/622886719081419',ext: true}]},{id: 26,title: 'ACM Impact: Careers Workshop Series',allDay: false,start: 1637028000000,end: 1637031600000,location: 'Online, zoom link posted on FB event',committee: 'board',description: 'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/622886719081419',ext: true}]},{id: 28,title: 'ACM Impact: Careers Workshop Series',allDay: false,start: 1638237600000,end: 1638241200000,location: 'Online, zoom link posted on FB event',committee: 'board',description: 'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!',links: [{text: 'Facebook Event',href: 'https://www.facebook.com/events/622886719081419',ext: true}]},
];

export default events;
