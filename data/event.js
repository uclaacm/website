/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable max-len */
const events = [
  {
    id: 1,
    title: 'CS Welcome Day',
    allDay: false,
    start: new Date(2021, 8, 21, 16),
    end: new Date(2021, 8, 21, 17, 30),
    location: 'Engineering IV Patio',
    description:
      'Come out to CS Welcome Day next Tuesday (9/21) from 4:00pm-5:30pm PT at the Engineering IV Patio where you’ll learn tips and tricks to navigate CS at UCLA from a panel of current CS students! You’ll be able to ask any burning questions at a live Q&A and will also be able to meet and interact with other CS students, student leaders, and even faculty! We welcome any student interested in computer science to attend, regardless of year, background, and major! Visit our webpage to learn more about our panelists and the event.',
    links: [
      {
        text: 'Event Website',
        href: 'https://www.cs.ucla.edu/cs-welcome-day/',
        ext: true,
      },
    ],
  },
  {
    id: 2,
    title: 'ACM Fall GM',
    allDay: false,
    start: new Date(2021, 8, 27, 18),
    end: new Date(2021, 8, 27, 19, 30),
    location: 'Court of Sciences',
    description: (
      <>
        <p>
          ACM at UCLA is happy to present our Fall General Meeting on Monday,
          September 27th at 6 PM PT at the Court of Sciences! 🔥
        </p>
        <p>
          ACM is the largest Computer Science student organization on campus and
          comprises of eight different committees: AI, Cyber, Design, Hack,
          ICPC, Studio, Teach LA, and ACM-W. 👩‍💻👨‍💻 With each committee focusing
          on a unique topic in technology, we are sure you will discover your
          passion and grow your skills through our numerous workshops, projects,
          and initiatives held each quarter.
        </p>
      </>
    ),
    image: '/images/events/f21-fall-gm.png',
    alt: 'a banner that says "ACM at UCLA: Fall GM, Monday, September 27th from 6-8 PM in the Court of Sciences". Features graphical elements representing each of ACM\'s committees: ACM Hack, ACM W, ACM AI, ACM ICPC, ACM Cyber, ACM Studio, ACM Teach LA, and ACM Design.',
    links: [
      {
        text: 'Event Website',
        href: '/gm/f21',
        ext: false,
      },
    ],
  },
  {
    id: 8,
    title: 'Ludum Dare 49 Kickoff',
    allDay: false,
    start: 1633122000000,
    end: 1633147200000,
    location: 'ENG VI 289',
    committee: 'studio',
    description:
      'Ludum Dare is a game jam that happens roughly every 6 months. During each 48 to 72 hour long event, groups (and ambitious individuals) including programmers, artists, and musicians collaborate to create a video game fitting the theme. For team formation, we are mixing people based on skill level and skill set so that everyone has the opportunity to create awesome games! You can fill out the team registration form to be placed on a team. Of course, you are also welcome to form your own team or work solo.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.instagram.com/p/CUMMOt4LCuf/?utm_source=ig_web_copy_link',
        ext: true,
      },
      {
        text: 'Team Registration Form',
        href: 'https://forms.gle/hPqmdadSaC5siDfi7',
        ext: true,
      },
    ],
  },
  {
    id: 9,
    title: 'Negotiation Workshop',
    allDay: false,
    start: 1633050000000,
    end: 1633055400000,
    location: 'TBD',
    committee: 'w',
    description:
      'The link between negotiations and job offers, career success, and gender equity is obvious. Less obvious is what constitutes negotiation and how to do it well.\n\nJoin UCLA ACM-W for an exciting opportunity to learn negotiation skills and strategies from expert, Megan Karsh, on Sept 30 from 6-7:30pm. Megan will host a fun and interactive workshop about the importance of negotiation skills to career success, fundamental negotiation skills, and whether & how to negotiate job offers.',
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
    description:
      "Does building projects and exploring software development sound exciting to you? Do you want to learn how to make the next Instagram or Facebook?\nCome out to ACM Hack’s Fall GM next Wednesday to meet our wonderful team and learn more about what we do, what events we'll be putting on this upcoming quarter, and how you can get involved!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388070826205600',
        ext: true,
      },
    ],
  },
  {
    id: 11,
    title: 'ACM Design Fall General Meeting',
    allDay: false,
    start: 1633046400000,
    end: 1633050000000,
    location: '2763 Boelter Hall',
    committee: 'design',
    description:
      'Interested in UX/UI design, product design, graphic design, 3D design and more? Or maybe you are into the creative side of web development? Here at ACM Design, we strive to bridge the gap between design and computer science. If any of this sounds exciting, stop by ACM Design’s general meeting where we will introduce you to a talented team of innovators and tell you about the work that we do! Students of all majors and experience levels are welcome.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/640773946888497',
        ext: true,
      },
    ],
  },
  {
    id: 13,
    title: 'ACM Teach LA Fall General Meeting',
    allDay: false,
    start: 1632880800000,
    end: 1632884400000,
    location: 'Rolfe Hall - Room 1200',
    committee: 'teach-la',
    description:
      "Interested in empowering students in the LA area with computer science (and joining one of the coolest clubs on campus)? You've come to the right place!\n\nTo learn more about getting involved with teaching and curriculum or becoming part of our dev team (absolutely NO EXPERIENCE REQUIRED), come on down to the Teach LA Fall General Meeting! (Snacks will be provided...)",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/e6XsAmyBP',
        ext: true,
      },
    ],
  },
  {
    id: 14,
    title: 'ACM AI Fall General Meeting',
    allDay: false,
    start: 1633136400000,
    end: 1633140000000,
    location: 'Kinsey Pavilion 1240B',
    committee: 'ai',
    description:
      "Interested in Artificial Intelligence or Machine Learning? Come out to ACM AI's General Meeting to learn about our events and initiatives! ACM AI welcomes UCLA students of all backgrounds, majors, and years. No application or prior experience in AI is required to attend our events.",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1qZLwT2vV',
        ext: true,
      },
    ],
  },
  {
    id: 15,
    title: 'ACM Cyber Fall General Meeting',
    allDay: false,
    start: 1633395600000,
    end: 1633402800000,
    location: 'Franz Hall 2258A',
    committee: 'cyber',
    description:
      "Thinking of building an aimbot to get you out of bronze? 🙈\nInterested in learning about how hackers get their hands on private [UC] 👀 information?\nThen ACM Cyber is just for you!! 😍\n\nCome out to Cyber's Fall General Meeting on Monday, October 4th, at Franz Hall 2258A to learn more about what we do, meet our officers, make friends, and participate in a fun ✨Disney-themed✨ cyber activity! No prior experience necessary! *note* bring your ID card + a mask + your laptop to solve some cool challenges 👀! ~See you there~",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/RvlzR1Ns',
        ext: true,
      },
      {
        text: 'RSVP Form',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSf-IeHo_-cxk97Jp_Jb7-cyOm5v2Ih3h05Yi1UrLxizV1G0Fg/viewform',
        ext: true,
      },
    ],
  },
  {
    id: 16,
    title: 'ACM ICPC Fall General Meeting ',
    allDay: false,
    start: 1633053600000,
    end: 1633057200000,
    location: 'Boelter Hall Room 4760',
    committee: 'icpc',
    description:
      "Do you love the feeling of solving quantitative problems  in creative ways? New to algorithms  and excited to learn more? Trying to level up your tech interview skills? Do you just like hummingbirds  or Marvel movies? Our Fall General Meeting will outline our committee's activities for the quarter, as well as provide a chance for students to meet our officers. In addition, we will run a fun brainteaser to introduce attendees to the kind of problem-solving we enjoy!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/groups/ucla.icpc/permalink/4123554867773867/',
        ext: true,
      },
    ],
  },
  {
    id: 17,
    title: 'ACM ICPC Team Kickoff',
    allDay: false,
    start: 1633201200000,
    end: 1633212000000,
    location: 'Engineering VI 289',
    committee: 'icpc',
    description:
      'do you enjoy coding 💻 and solving challenging problems 😎? do you want to become an ABSOLUTE UNIT (™) at✨ competitive programming? 🥵💦 if so, UCLA ICPC is the right place for you! 🍻🥂🍷🥃🍾 make the alpha move 🤑🤪 (jk) and come to ICPC Team Kickoff on Saturday, October 2, from 12-3PM in Engineering VI 289! or else ⛓😩😤😡 (no prior experience necessary! 🤠)',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1J0GaCQZ2',
        ext: true,
      },
    ],
  },
  {
    id: 18,
    title: 'ACM W Fall General Meeting',
    allDay: false,
    start: 1632963600000,
    end: 1632967200000,
    location: 'Engineering VI 134',
    committee: 'w',
    description:
      "Welcome back everyone! We're so excited to be back on campus and hope you're all ready for another amazing year with ACM-W✨ Come join us for our Fall General Meeting on September 29 to learn more about what ACM-W has planned for the year and to meet the officers. We're all looking forward to meeting you 💚",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/3JAwOkrvR',
        ext: true,
      },
    ],
  },
  // WEEK 2
  {
    id: 101,
    title: 'Meet the Company: Human Capital',
    allDay: false,
    start: 1633395600000,
    end: 1633399200000,
    location: 'https://ucla.zoom.us/j/91835413451',
    committee: 'board',
    description:
      'We’re bringing back the Meet the Company series! 💙\n\nWelcome to our first event featuring Human Capital, an engineering talent agency for founders and engineers. As a company, they bridge the gap between promising engineers in need of career mentorship and start up companies with fewer recruitment resources. Human Capital believes that great engineers build great companies, and as a result, those companies can then become training grounds for a new generation of entrepreneurial engineers.\n\nCome hear about their unique mission, career coaching process, and investing strategies on October 4, 2021 from 6 to 7 PM PDT, and make sure to RSVP with our form 🤩',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2sJQj107Y',
        ext: true,
      },
      {
        text: 'RSVP Form',
        href: 'https://forms.gle/AraRS4uFqkjVyv437',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Breaking into Tech as a Non-CS Major | Michelle from ACM W',
    allDay: false,
    start: 1633564800000,
    end: 1633568400000,
    location: '2763 Boelter Hall',
    committee: 'board',
    description:
      'Interested in tech but not a CS major? Welcome to our first event of ACM’s Breaking into Tech as a Non-CS Major series for the 2021 - 2022 school year where we highlight current members of ACM navigating the tech world without a formal technical background.\n\nThis week we have Michelle Kim from ACM W to talk about her story as an English major in a CS dominated space.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/601350427714979/?ref=newsfeed',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Studio Fall GM',
    allDay: false,
    start: 1633572000000,
    end: 1633579200000,
    location: 'Eng VI - 134',
    committee: 'studio',
    description:
      "We'll be having our  Studio Fall GM October 6, 7:00 - 9:00 PM in Eng VI 134. This is a great opportunity to meet our officers and socialize with others interested in game development, learn specifics about our timeline, and how to get involved. Please RSVP if you plan on attending since we do have limited room capacity--hope to see you there!",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CUaeVluvnkq/',
        ext: true,
      },
      {
        text: 'RSVP Form',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfo5e0_IiDXoA8Em74lkrr-X-O8ud6Mk8JmnF7Yc-e6uNtFSg/viewform?usp=sf_link',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM Design | UXLA #1: Intro to UI/UX',
    allDay: false,
    start: 1633651200000,
    end: 1633654800000,
    location: 'Boelter Hall Room 2763',
    committee: 'design',
    description:
      '🎉 HELLO, DESIGN FRIENDS! Thank you for a packed ACM Design GM, and without further ado, welcome to our FIRST 🍾 design workshop in person - our first UXLA series workshop, 🔶 Intro to UI/UX 🔶 at Boelter 2763 from 5-6PM. Remember to bring your Bruincard 💳 and mask 😷!\n\nEver thought about how well (or badly) things we use every day are designed for us? Curious about the world of user experience but not sure where to start? Wanna start recruiting ASAP? Don’t worry 💪 we got you! In this workshop, we’ll be going over your 🎁 starter pack for being a UXer - what a good user experience means, the kinds of roles that exist and what they do, and the design thinking approach at the 💗 heart of everything we do. Let’s GO!!! 🔥🔥',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1cOoyG4sa',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'ACM Hack | Hackschool #1: Intro to HTML/CSS',
    allDay: false,
    start: 1633572000000,
    end: 1633579200000,
    location: 'Perloff 1102',
    committee: 'hack',
    description:
      'If you want to learn web dev and get the tools to build your own personal project, hop on board our 💜 beginner friendly 💜 workshop series! At our first Hackschool workshop this Wednesday, we’ll be going over the fundamentals of HTML and CSS! 🎉  We’ll teach you everything you need to know, so no prior experience is required :) Everyone is welcome to come but make sure you RSVP and bring your bruin card! The workshop will be held on Wednesday October 6th 7-9 PM in Perloff 1102. We hope to see you there! ',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1vzEKgyVM',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'ACM ICPC | SoCal Regionals Tryout #1',
    allDay: false,
    start: 1633806000000,
    end: 1633816800000,
    location: 'Eng VI - 289',
    committee: 'icpc',
    description: '',
    links: [],
  },
  {
    id: 109,
    title: 'ACM ICPC | Beginner Track',
    allDay: false,
    start: 1633568400000,
    end: 1633575600000,
    location: 'Kerckhoff State Room',
    committee: 'icpc',
    description:
      'Quick!! 🙊 How do you find the shortest path from your dorm to the lecture hall? Not sure? Come to ACM ICPC at UCLA’s Beginner Track this Wednesday @ 6 to learn that and much, much more!!!\n\nIn Beginner’s Track, our popular introduction to the world of competitive programming, we’ll be exploring beginner friendly topics and algorithms in competitive programming 🌱 We will walk you through everything you need to know to go from earthbound n00b to galaxy brained red coder Chad, guaranteed 😳🧠 absolutely no experience required!!!\n\nJoin us this Wednesday from 6-8 in the Kerchoff State Room for a warm welcome to competitive programming and to solve some fun ad-hoc problems! :)',
    links: [],
  },
  // RECUR
  {
    id: 20,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1633485600000,
    end: 1633489200000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 21,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1634090400000,
    end: 1634094000000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 22,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1634695200000,
    end: 1634698800000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 23,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1635300000000,
    end: 1635303600000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 24,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1635904800000,
    end: 1635908400000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 25,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1636513200000,
    end: 1636516800000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 26,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1637118000000,
    end: 1637121600000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 27,
    title: 'ACM Teach LA Curriculum Meetings',
    allDay: false,
    start: 1637722800000,
    end: 1637726400000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 20,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1633482000000,
    end: 1633485600000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 21,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1634086800000,
    end: 1634090400000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 22,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1634691600000,
    end: 1634695200000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 23,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1635296400000,
    end: 1635300000000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 24,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1635901200000,
    end: 1635904800000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 25,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1636509600000,
    end: 1636513200000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 26,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1637114400000,
    end: 1637118000000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 27,
    title: 'ACM Teach LA Dev Team Meetings',
    allDay: false,
    start: 1637719200000,
    end: 1637722800000,
    location: 'Mathematical Sciences Building - Room 5203',
    committee: 'teach-la',
    description: '',
    links: [],
  },
  {
    id: 20,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1633741200000,
    end: 1633748400000,
    location: 'Kinsey Pavilion 1240B',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 21,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1634346000000,
    end: 1634353200000,
    location: 'Kinsey Pavilion 1240B',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 22,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1634950800000,
    end: 1634958000000,
    location: 'Kinsey Pavilion 1240B',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 20,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1633482000000,
    end: 1633489200000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 21,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1634086800000,
    end: 1634094000000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 22,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1634691600000,
    end: 1634698800000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 23,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1635296400000,
    end: 1635303600000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 24,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1635901200000,
    end: 1635908400000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 25,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1636509600000,
    end: 1636516800000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 26,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1637114400000,
    end: 1637121600000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },
  {
    id: 27,
    title: 'ACM AI Advanced Track Workshops',
    allDay: false,
    start: 1637719200000,
    end: 1637726400000,
    location: 'Engineering VI 289',
    committee: 'ai',
    description:
      'Want to take the next step in your journey with AI? Look no further than ACM AI’s Advanced Track offering for Fall 2022. This quarter-long workshop covers everything from logistic regression to convolutional neural networks. Working alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/2981152132202759',
        ext: true,
      },
    ],
  },

  {
    id: 20,
    title: 'ACM Impact: Careers Workshop Series',
    allDay: false,
    start: 1633395600000,
    end: 1633399200000,
    location: 'https://ucla.zoom.us/j/96653581209',
    committee: 'board',
    description:
      'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/622886719081419',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/96653581209',
        ext: true,
      },
    ],
  },
  // w3
  {
    id: 100,
    title: 'Computer Science Career Fair',
    allDay: false,
    start: 1634140800000,
    end: 1634162400000,
    location: 'Highre',
    committee: 'board',
    description:
      'The UCLA Computer Science Department, in collaboration with ACM and UPE, is hosting the Computer Science Career Fair on Wednesday, October 13th. Come speak about opportunities with our industry affiliates and startups, including Stripe, Northrop Grumman, and Duffl!\n\nThis event will be held virtually on Highre. You will receive your time slot confirmation, overview of event, and link to the event through email by Sunday, October 10th 11:59 PM PT. First come first serve! Spots are limited.\n\nThe sessions for the event are as follows:\n1. 9:00AM -11:00AM PT (open to all with preference for international students in different time zones)\n2. 11:00AM - 1:00PM PT (open to all UPE honors students only)\n3. 1:00PM - 3:00 PM PT (open to all)\n\n\n\nDeadline to register: Saturday, October 9th at 11:59 PM PT.\n\nAllowed Majors: CS, CSE, and CE only',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/HKFQM8J6',
        ext: true,
      },
      {
        text: 'RSVP Form',
        href: 'https://tinyurl.com/cscareerfair2021',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'Tech in the Park',
    allDay: false,
    start: 1634338800000,
    end: 1634346000000,
    location: 'Sunset Recreation Center',
    committee: 'board',
    description:
      'Wanna break from Week 3 😌? Then come hang out with ACM, UPE, and exploretech.la on Friday October 15th for Tech in the Park 🌳! From 4-6 PM at Sunset Rec, we will be hosting our new social event where you can come out and enjoy activities like football 🏈, volleyball 🏐, spikeball, and painting 🎨! Here you will have the chance to wind down from the week while also getting to know members from all three CS organizations🤪!\n\nPlease RSVP if you are interested in socializing and meeting new people at Tech in the Park! 🤩 ',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1WMw8I3NU',
        ext: true,
      },
      {
        text: 'RSVP Here',
        href: 'https://forms.gle/QSswbF8TEiC99j8B8',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Meet the Company: Deloitte',
    allDay: false,
    start: 1634000400000,
    end: 1634005800000,
    location: 'https://ucla.zoom.us/j/93393420709',
    committee: 'board',
    description:
      "Tune in for Meet the Company: Deloitte, the second event in our affiliate series! 👀\n\nInterested in consulting and technology? Deloitte is a leading consulting firm with offices worldwide. Providing a large range of services across multiple industries, Deloitte presents a wide variety of work for prospective applicants to choose from. With opportunities to experience work in different settings and with different clients, monotony isn't a concern for a Deloitte employee 🥰\nPlease RSVP!\n\nCome hear about how to navigate Deloitte with a technical degree and the personal journeys of some of their employees on October 11, 2021 from 6 to 7:30 PM PDT!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2yJvYGWzW',
        ext: true,
      },
      {
        text: 'RSVP',
        href: 'https://tinyurl.com/ACMMeettheCompany2021',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Demystifying AI',
    allDay: false,
    start: 1634173200000,
    end: 1634176800000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'ai',
    description:
      'Interested in Artificial Intelligence, but not sure what it is or where to start? Not to worry, we got you covered! Come out to ACM AI’s Demystifying AI on Wednesday, October 16 from 6-7 PM PDT at Engineering IV Faraday Room 67-124.\n\nGet a high-level introduction on what AI is 🧠, debunk some popular AI myths 🤖, explore AI ethics with interactive Mario Kart 🚗 and Among Us 🚀 themed activities, and more! You’ll be able to meet others just as interested in AI as you and even have the chance to win some prizes 👀\n\nEverybody is welcome no matter your year, major, background, or experience (absolutely none needed)! See you there :) ',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/933027177622129',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Cyber Academy: Intro to Web Hacking',
    allDay: false,
    start: 1634000400000,
    end: 1634007600000,
    location: 'Boelter Hall 9436 and on Zoom!',
    committee: 'cyber',
    description:
      'CCLE is down again? I wonder why? Whether you are an impulsive online shopper, chat on Discord, pay your credit cards, or simply want CCLE to work, these web applications are handling your data. Come to Cyber’s first Fall workshop to learn the basics of web hacking in preparation for our future workshops.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2Ej3pnrbG',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/96092075831?pwd=K0U5Q1VJUW1OV2M2U3Nnd291Z1dyUT09',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'UXLA #2: User Research',
    allDay: false,
    start: 1634256000000,
    end: 1634259600000,
    location: 'Room: Boelter Hall 2760',
    committee: 'design',
    description:
      "Come out for ACM Design's second UI/UX Workshop: User Research 🔎 !\n\nLearn about building a user flow map 🔄, user testing 🧪, user personas 👤, and much more! Don't worry if you have not attended the previous workshop, we still encourage you to come visit! Everyone is welcome 🧡\n\nDue to COVID-19, please wear a MASK and bring your BRUIN CARD to sign in!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/14SI1unYS',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM ICPC | SoCal Regionals Tryout #2',
    allDay: false,
    start: 1634497200000,
    end: 1634508000000,
    location: 'Eng VI - 289',
    committee: 'icpc',
    description:
      'Always dreamed of making it to the Olympics of Programming Competitions? 👀 Waiting for the opportunity to represent UCLA at the ICPC World Finals? Look no further, for official tryouts are here! 🎉\n\nOur first tryout took place this Saturday October 9, but we still have a second tryout coming up where we will select 7 more people for the team! Every UCLA student is welcome to participate, regardless of year, major, or prior competitive programming experience 🙂\n\nFor more details about the tryout, as well as results from the last tryout, see the link below.',
    links: [
      {
        text: 'Tryout Information',
        href: 'https://tinyurl.com/ucla-icpc-tryouts-2021',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'ACM ICPC | Beginner Track',
    allDay: false,
    start: 1634173200000,
    end: 1634180400000,
    location: 'location TBD / Zoom link will be provided closer to event',
    committee: 'icpc',
    description:
      'Quick!! 🙊 How do you find the shortest path from your dorm to the lecture hall? Not sure? Come to ACM ICPC at UCLA’s Beginner Track this Wednesday @ 6 to learn that and much, much more!!!\n\nIn Beginner’s Track, our popular introduction to the world of competitive programming, we’ll be exploring beginner friendly topics and algorithms in competitive programming 🌱 We will walk you through everything you need to know to go from earthbound n00b to galaxy brained red coder Chad, guaranteed 😳🧠 absolutely no experience required!!!\n\nJoin us this Wednesday from 6-8 (location TBD!) to learn a few fancy array techniques, and some things about strings! :)',
    links: [],
  },
  {
    id: 108,
    title: 'CS Transfer Welcome Event',
    allDay: false,
    start: 1634601600000,
    end: 1634605200000,
    location: 'Boelter 2763 (ACM/UPE Clubhouse)',
    committee: 'board',
    description:
      "We're so excited to welcome our new incoming transfer class this year! ACM and UPE are co-hosting a CS Transfer Welcome Event, targeted towards incoming computer science (and related major) transfers. We'll do a quick lightning round of discussions on internship recruiting, getting involved with student organizations, navigating tricky upper-division CS classes, and just meeting people! After that, we'll have opportunities for you to meet CS transfers who've gone through it all, and members of different CS orgs on campus. And, we'll have some cookies :) ",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1XG6oUruw',
        ext: true,
      },
    ],
  },
  {
    id: 110,
    title: 'ACM Hack | Hackschool #2: Intro to JavaScript',
    allDay: false,
    start: 1634176800000,
    end: 1634184000000,
    location: 'Perloff 1102',
    committee: 'hack',
    description:
      'Do you want to build dynamic and amazing web projects? Look no further, Hackschool is back with Session 2: Intro to JavaScript 🎉In this workshop, we’ll be teaching you all there is to know about basic JavaScript. Aside from syntax, we will also be going over some programming basics! 🤩Mark your calendars, we’ll see you on Wednesday at 7 PM in Perloff 1102! As always no experience is required, and make sure you RSVP!\n\nIf you missed our first session, you can check out the attached links!✨',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1KOlFRumY',
        ext: true,
      },
      {
        text: 'Session 1 Slides',
        href: 'http://links.uclaacm.com/hackschool21-s1-slides',
        ext: true,
      },
      {
        text: 'Session 1 README',
        href: 'http://links.uclaacm.com/hackschool21-s1',
        ext: true,
      },
    ],
  },
  // w4
  {
    id: 100,
    title: 'ACM-W Undergrad Mentorship Kick-Off',
    allDay: false,
    start: 1634691600000,
    end: 1634695200000,
    location: 'Engineering VI 289',
    committee: 'w',
    description:
      "Involved in ACM-W's Undergraduate Mentorship Program? Come out for a night of introductions as you can meet your mentors and mingle with fellow mentees! It will be a huge blast making new friends and getting to know other people with similar interests. (P.S. We will be serving free food, so you won't want to miss out!)",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1abxjQlPv',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'ACM Impact: Careers Workshop Series',
    allDay: false,
    start: 1634605200000,
    end: 1634608800000,
    location: 'Zoom - check Facebook for link',
    committee: 'board',
    description:
      'Interested in using your tech skills to drive positive change? Come out to ACM Impact’s next  careers workshop! We’ve partnered with the awesome team at Nova to talk about how they use tech to develop solutions for nonprofit organizations. This will be a virtual event at 6pm on Monday, 10/18. The Zoom link will be posted on Facebook 30 minutes before the start!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/622886725748085/',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Meet the Company: Facebook',
    allDay: false,
    start: 1634769000000,
    end: 1634774400000,
    location: 'https://ucla.zoom.us/j/91498464135',
    committee: 'board',
    description:
      'The next installment in our series is Meet the Company: Facebook! 💙✨\r\nFacebook almost needs no introduction: one of the largest tech companies in the world with the biggest social platforms, its umbrella also covers Oculus VR, Ciphy, and Instagram.\r\nHeadquartered in Menlo Park, Facebook is no stranger to extensive internship programmes and UCLA students🧚‍♂️ Come by to learn more about company culture, interviewing tips, and insider experiences on Wednesday, October 20, 2021, from 3:30 to 5 PM PDT!\r\nRSVP to book your spot at our event! Link will be released by email to the people who filled out the form 🤩',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2bKr0MGrE',
        ext: true,
      },
      {
        text: 'RSVP',
        href: 'https://forms.gle/2EyEUSWJx2Q8KQAX7',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM Hack | Hackschool #3: Intro to React',
    allDay: false,
    start: 1634781600000,
    end: 1634788800000,
    location: 'Perloff 1102',
    committee: 'hack',
    description:
      "This week on Hackschool we're getting to a heavily requested topic: React! React is a powerful Javascript framework used for building beautiful user interfaces and it is pervasive in the industry. Companies like Facebook, Amazon, Instagram, and more use React throughout many of their products! Come get a glimpse of why it's so popular in our Intro to React workshop this week! As always the workshop will be held in Perloff 1102 on Wednesday from 7-9 PM and make sure to RSVP 💜",
    links: [
      {
        text: 'RSVP',
        href: 'http://links.uclaacm.com/hackschool21-s3-rsvp',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/18T2DTn4a',
        ext: true,
      },
      {
        text: 'Session 2 Slides',
        href: 'http://links.uclaacm.com/hackschool21-s2-slides',
        ext: true,
      },
      {
        text: 'Session 2 README',
        href: 'http://links.uclaacm.com/hackschool21-s2',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'ACM Hack | Passion Talks: Blockchain',
    allDay: false,
    start: 1634864400000,
    end: 1634871600000,
    location: 'Dodd 121',
    committee: 'hack',
    description:
      'Would you like to blockchainge your life 🤯?\r\nIf so, come to our first installment of Passion Talks™️ where Jason Huan will give us the deets on ⛓blockchain, ฿ cryptocurrency ฿, and much more! Jason is UCLA’s resident expert on all things to do with decentralized finance 🏦🙅‍♀️🚫. He is a cofounder of Blockchain at UCLA 🎓and has also co-founded the first fractional-algorithmic stablecoin Frax 📈!\r\nThe talk will cover topics from decentralized exchange and P2P lending all the way to the wizardry 🧙‍♂️that is stablecoins. If these words mean nothing to you, don’t worry – this talk will change that! Everyday, it’s looking more and more like blockchain and decentralized finance are the future, so come on by and find out what the craze is all about!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1KSnnBSvC',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM Studio | Creative Track | Sprite Sheets & Tilemaps',
    allDay: false,
    start: 1634608800000,
    end: 1634616000000,
    location: 'Zoom link: https://ucla.zoom.us/j/94661432392',
    committee: 'studio',
    description:
      "Come learn about Sprite Sheets and Tilemaps in Unity! We'll be going over best practices for making art assets as easy as possible for programmers to implement, and how to process and use Sprite Sheets and Tilemaps in Unity. You can find more details and a walkthrough in our Github repo: https://github.com/uclaacm/studio-creative-tutorials-f21",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CU57x2mPTa5/',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/94661432392',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'ACM Studio | Beginner Track | Roll a Ball Pt. 2',
    allDay: false,
    start: 1634695200000,
    end: 1634702400000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'studio',
    description:
      "Join us for ✨Roll a Ball Part II✨, where we'll be going over more Unity fundamentals, such as how to implement basic UI, scene management,  a scoring system and more! If you missed last week's tutorial, don't worry you can find out what you missed by watching our video or step-by-step walkthrough over on our GitHub!",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CU_L-wKv3Y6/',
        ext: true,
      },
      {
        text: 'GitHub Repo',
        href: 'https://tinyurl.com/roll-a-ball-pt1-repo',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'ACM Studio | Advanced Track | Programming Essentials',
    allDay: false,
    start: 1634781600000,
    end: 1634788800000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'studio',
    description:
      "This week in the Advanced Track we're covering best practices and essential features of Unity and C# to make programming your games easier and better! You can find more details and a walkthrough in our Github repo!",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CVJbfNfvx4S/',
        ext: true,
      },
      {
        text: 'GitHub Repo',
        href: 'https://github.com/uclaacm/studio-advanced-tutorials-f21',
        ext: true,
      },
    ],
  },
  // w4.5 regen (AI beginner track, impact blog, icpc interview)
  {
    id: 21,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1635213600000,
    end: 1635220800000,
    location: 'Young CS76',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 22,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1635818400000,
    end: 1635825600000,
    location: 'Young CS76',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 23,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1636426800000,
    end: 1636434000000,
    location: 'Young CS76',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 24,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1637031600000,
    end: 1637038800000,
    location: 'Young CS76',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 25,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1637636400000,
    end: 1637643600000,
    location: 'Young CS76',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 26,
    title: 'ACM AI Beginner Track Workshops',
    allDay: false,
    start: 1638241200000,
    end: 1638248400000,
    location: 'Young CS76',
    committee: 'ai',
    description:
      "Heard a lot about AI in the news lately? Always been  curious  about exploring machine learning but didn’t know where to start? The Beginner Track has you covered! We'll be starting from the ground-up and exploring the core concepts of ML, including the theory and implementation of fundamental models. The workshops will include both concept-based learning  as well as guided a mini-project with useful ML libraries . By the end of the series you will have a firm foundation in the fundamentals of ML and understand some of the common techniques at the heart  of AI and data science! No prior experience required!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/388424459452807',
        ext: true,
      },
    ],
  },
  {
    id: 27,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1634160600000,
    end: 1634164200000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 28,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1634765400000,
    end: 1634769000000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 29,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1635370200000,
    end: 1635373800000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 30,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1635975000000,
    end: 1635978600000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 31,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1636583400000,
    end: 1636587000000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 32,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1637188200000,
    end: 1637191800000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 33,
    title: 'ACM Impact Blog Office Hours',
    allDay: false,
    start: 1637793000000,
    end: 1637796600000,
    location: 'https://ucla.zoom.us/j/96602298075',
    committee: 'board',
    description:
      "Want to rant about a tech issue you're passionate about? Want to tell us about a tech + social good project you created? Write for ACM Impact's blog! Tell us about ANYTHING tech + society related, like CA Prop 22, Big Tech regulation, or Amazon's treatment of workers! Check out this link to learn more about how you can get involved!",
    links: [],
  },
  {
    id: 34,
    title: 'ACM ICPC Interview Track Sessions',
    allDay: false,
    start: 1633654800000,
    end: 1633662000000,
    location: 'Boelter 2760',
    committee: 'icpc',
    description:
      'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
    links: [],
  },
  {
    id: 35,
    title: 'ACM ICPC Interview Track Sessions',
    allDay: false,
    start: 1634259600000,
    end: 1634266800000,
    location: 'Boelter 2760',
    committee: 'icpc',
    description:
      'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
    links: [],
  },
  {
    id: 36,
    title: 'ACM ICPC Interview Track Sessions',
    allDay: false,
    start: 1634864400000,
    end: 1634871600000,
    location: 'Boelter 2760',
    committee: 'icpc',
    description:
      'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
    links: [],
  },
  {
    id: 37,
    title: 'ACM ICPC Interview Track Sessions',
    allDay: false,
    start: 1635469200000,
    end: 1635476400000,
    location: 'Boelter 2760',
    committee: 'icpc',
    description:
      'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
    links: [],
  },
  {
    id: 38,
    title: 'ACM ICPC Interview Track Sessions',
    allDay: false,
    start: 1636074000000,
    end: 1636081200000,
    location: 'Boelter 2760',
    committee: 'icpc',
    description:
      'Worried about your upcoming coding interview? Don’t worry, we got you covered! ACM ICPC is hosting a crash course that’ll give you the data structure and algorithm knowledge you’ll need to ace your next technical interview. Come through to hone your skills and get a head start on your CS career!',
    links: [],
  },
  // week 5
  {
    id: 100,
    title: 'Meet the Company: Green Hills Software',
    allDay: false,
    start: 1635382800000,
    end: 1635388200000,
    location: 'MAXWELL ROOM (Room 57-124 ENGR IV)',
    committee: 'board',
    description:
      'We’re back in-person!\n\nOur Meet the Company in-person event with Green Hills Software is happening this Wednesday, October 27, 2021, from 6 to 7:30 PM PT at the MAXWELL ROOM (Room 57-124 ENGR IV)!\n\nGreen Hills Software is the world leader in embedded safety and security. With the Internet of Things as a major trend in the coming years, the work they do in embedded end-to-end security is of great relevance. Holding stakes in multiple fields from aerospace and defense to medical and telecom, Green Hills offers the ability to apply your technical skills in a variety of settings for information safety\n\nRSVP to come learn about the specialized software Green Hills builds and how they achieved success in information safety!\n*Event will be following COVID-19 guidelines and all participants must be wearing masks* ',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/28hQFYCQA',
        ext: true,
      },
      {
        text: 'RSVP',
        href: 'https://forms.gle/7Fg2EhpmAf1yZRVSA',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'ACM W Alumni Mentorship Kickoff',
    allDay: false,
    start: 1635382800000,
    end: 1635386400000,
    location: 'https://ucla.zoom.us/j/97721046447',
    committee: 'w',
    description:
      'Welcome mentors and mentees to our ACM W Alumni Mentorship Kickoff! This will be your first chance to meet your mentors and mentees. It will be a great time so come prepared to meet some amazing people 🙂',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/UKItzxfg',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/97721046447',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'ACM Internship Information Event',
    allDay: false,
    start: 1635206400000,
    end: 1635210000000,
    location: 'https://tinyurl.com/intern2021info',
    committee: 'board',
    description:
      'Do you have questions about the ACM Internship Application Program/Process? Come to our Internship Info Event and get your questions about the Internship Program and Application answered by current ACM officers. ',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2GA7ITa1Z',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://tinyurl.com/intern2021info',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM Hack | Hackschool #4: Props and Layout',
    allDay: false,
    start: 1635386400000,
    end: 1635393600000,
    location: 'Perloff 1102',
    committee: 'hack',
    description:
      "We know you love React, so this week on Hackschool we're diving even deeper into it with a workshop on props and layout! After this week, you'll be able to make beautiful, reusable React components! We'll also be uncovering some more fun CSS properties which we KNOW you'll love, so come on out to this week's Hackschool :) As always we'll be in Perloff 1102 this Wednesday from 7-9 and don't forget to RSVP!  💜\n\nIf you missed our first session, you can check it out here!✨\n",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/18T2DTn4a',
        ext: true,
      },
      {
        text: 'RSVP',
        href: 'http://links.uclaacm.com/hackschool21-s4-rsvp',
        ext: true,
      },
      {
        text: 'Session 3 Slides',
        href: 'http://links.uclaacm.com/hackschool21-s3-slides',
        ext: true,
      },
      {
        text: 'Session 3 README',
        href: 'http://links.uclaacm.com/hackschool21-s3',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'ACM Design | UXLA #3: Ideation',
    allDay: false,
    start: 1635465600000,
    end: 1635469200000,
    location: 'Kinsey Pavilion 1200B',
    committee: 'design',
    description:
      "Welcome back to our UXLA series - the third installment has arrived, and it's all about one of our favorite parts of the design process - ideation! 💡\n\nThis workshop isn't just about creating ideas for design - it gets right to the core of how innovation works, and how we can be more ✨ creative ✨ with our problem-solving. Come join us this week to learn how a problem statement leads us to viable product ideas 📝 , to ideate both on paper and virtually 💻, and to create a low fidelity mockup of a product 📦 !\n\nRemember to bring your BRUINCARD, a MASK and your SYMPTOM MONITORING SURVEY!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1kFgnXnYn',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM ICPC | Beginner Track',
    allDay: false,
    start: 1635382800000,
    end: 1635390000000,
    location: 'Boelter 3400',
    committee: 'icpc',
    description:
      'Quick!! 🙊 How do you find the shortest path from your dorm to the lecture hall? Not sure? Come to ACM ICPC at UCLA’s Beginner Track this Wednesday @ 6 to learn that and much, much more!!!\n\nIn Beginner’s Track, our popular introduction to the world of competitive programming, we’ll be exploring beginner friendly topics and algorithms in competitive programming 🌱 We will walk you through everything you need to know to go from earthbound n00b to galaxy brained red coder Chad, guaranteed 😳🧠 absolutely no experience required!!!\n\nJoin us this Wednesday from 6-8 in Boelter 3400 to learn some super spicy 🔥 stuff about sorting! :)',
    links: [],
  },
  {
    id: 107,
    title: 'Computer Science Town Hall | Fall 2021',
    allDay: false,
    start: 1636597800000,
    end: 1636605000000,
    location: 'Mong Auditorium and Online',
    committee: 'board',
    description:
      "Ask questions and get your voice heard! The Fall 2021 Computer Science Town Hall is your opportunity to voice your concerns directly to professors and staff in the CS Department. In past years, we've been able to advocate for changes in the school, including 35L and engineering ethics reform, improving tech breadth/sci-tech electives, and hiring professors with a focus on diversity and inclusion.\nThe event will be hybrid, with an in-person focus in Mong Auditorium (Engineering VI) and an online version livestreamed with a Q&A. Learn more, RSVP, and fill out pre-event surveys on the website page!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2F2a31mIu',
        ext: true,
      },
      { text: 'Website', href: '/town-hall/f21' },
    ],
  },
  // week 6
  {
    id: 100,
    title: 'AI Research Panel',
    allDay: false,
    start: 1635987600000,
    end: 1635993000000,
    location: 'Young Hall Room CS76',
    committee: 'ai',
    description:
      'Interested in Artificial Intelligence research but not sure where to start? Want to join an AI lab, but not sure how? Or debating whether AI research is even the right path for you? Not to worry, we got you covered! Check out ACM AI’s Research Panel on Wednesday, November 3 from 6-7:30 PM PDT at Young Hall Room CS76.\n\nCome out to see what AI research looks like at UCLA and learn how you can get involved! You’ll be able to ask any questions you have and even mingle with professors, grad students, and undergraduates working in all sorts of areas including computer vision 👀, biomedicine 🧬, language processing 🗣️, and more!\n\nAll majors and backgrounds are welcome, no artificial intelligence or computer science experience is necessary to come! See you there :))\n\n*Bruin card and symptom monitoring survey confirmation are required for entry.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/894375184526273',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'Cyber Academy: XSS and CSRF',
    allDay: false,
    start: 1635814800000,
    end: 1635822000000,
    location: 'Boelter Hall 9436 and Zoom',
    committee: 'cyber',
    description:
      'Come learn about Extra Small Spaghetti and Surfing the Sea with us! Wait no, that’s wrong. Let’s try again. Come learn about Cross-Site Scripting and Cross-Site Request Forgery with us! We’ll teach you about how malicious code can be injected into both web pages and your browser, how you can protect yourself against it, but most importantly, how you can conduct your own XSS and CSRF attacks.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1r6w629eE',
        ext: true,
      },
      {
        text: 'Zoom',
        href: 'https://ucla.zoom.us/j/96092075831?pwd=K0U5Q1VJUW1OV2M2U3Nnd291Z1dyUT09',
      },
    ],
  },
  {
    id: 102,
    title: 'ACM Studio | Creative Track | Audio & Sound Design',
    allDay: false,
    start: 1635818400000,
    end: 1635825600000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Come learn about Audio and Sound Design in Unity at Studio's Creative Track this Monday! Learn how to make proximity-based audio, change audio based on terrain, and the basics of adding audio effects and audio engineering with just the few clicks of a button! You can find more details and a walkthrough in our GitHub repo!",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CU57x2mPTa5/',
        ext: true,
      },
      {
        text: 'GitHub Repo',
        href: 'https://github.com/uclaacm/studio-creative-tutorials-f21/tree/main/Audio%20%26%20Sound%20Design',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/99684783298?pwd=Ykh2NlJCTDdoRGYxZzg2Z2xVWU1RZz09',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM Studio | Beginner Track | 2D Platformer Pt 2',
    allDay: false,
    start: 1635904800000,
    end: 1635912000000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'studio',
    description:
      "Come to Part II of our 2D Platformer workshop! Feel free to install the completed project from Part I to catch up if you couldn't make it last week! This week, we'll be learning about enemy AI, platformer mechanics, and level design. You can find more details and a walkthrough in our Github repo.",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.instagram.com/p/CU_L-wKv3Y6/',
        ext: true,
      },
      {
        text: 'GitHub Repo',
        href: 'https://github.com/uclaacm/studio-beginner-tutorials-f21',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'ACM Studio | Advanced Track | Yarnspinner',
    allDay: false,
    start: 1635991200000,
    end: 1635998400000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'studio',
    description:
      'Learn about YarnSpinner, an in-game dialogue framework that allows u to program dialog portions of your game in the way of your choice. The tutorial will cover the basic integration of Yarn into Unity, command system, and how to create a functioning dialog system with them. Sample code and details in this repo.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.instagram.com/p/CVJbfNfvx4S/',
        ext: true,
      },
      {
        text: 'GitHub Repo',
        href: 'https://github.com/uclaacm/studio-advanced-tutorials-f21/tree/main/YarnSpinner',
      },
    ],
  },
  {
    id: 105,
    title: 'ACM Impact: Careers Workshop Series',
    allDay: false,
    start: 1635814800000,
    end: 1635818400000,
    location: 'Zoom - check Facebook for link',
    committee: 'board',
    description:
      "What do a Machine Learning Engineer at The Trevor Project and a User Researcher at Code for America have in common? They're both going to be speakers at ACM Impact's next workshop! Catch both of them plus a Software Engineer at the Chan Zuckerberg Initiative and a Product Manager at Terrafuse AI at ACM Impact's careers panel at 6pm on Monday, 11/1. The Zoom link will be posted on Facebook 30 minutes before the start!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/622886725748085/',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM Design | Intro to Figma',
    allDay: false,
    start: 1636070400000,
    end: 1636074000000,
    location: 'Kinsey Pavilion 1200B',
    committee: 'design',
    description:
      'Y’all have been asking, and we delivered - we’re having a 🎨 FIGMA WORKSHOP 🎨 to give you a crash course into the best design tool we know!\n\nIntro to Figma will have you ready to design UI in a jiffy - learning how to work with layers, edit shapes and text, and assemble entire designs using all the helpful tools Figma has to offer. Come out this Thursday from 5-6PM at Kinsey 1200B to grow! As always, don’t forget the BRUINCARD, MASK and SYMPTOM MONITORING SURVEY 😊',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/29bjyfqIV',
        ext: true,
      },
    ],
  },

  // w7
  {
    id: 100,
    title: 'ACM Hack | Scraping UCLA at Scale',
    allDay: false,
    start: 1636426800000,
    end: 1636434000000,
    location: 'Zoom',
    committee: 'hack',
    description:
      "With class enrollment right around the corner ⏰, there’s no better time for this special one-off event, where Hack alum Timothy Gu and UCLA graduate Nathan Smith 🎓 talk all about web scraping at scale through a case study of their web app, Hotseat! 🔥\n\nHotseat 🌶️🪑 helps you with your class schedule by providing real-time stats 📈 and predictions 🔮 for when classes fill up, among many other features. At the core of Hotseat's functionality is web scraping 🕸️, which is used to collect all the historical data needed from the UCLA registrar 💾. Tim and Nathan have learned tons about how to provide this service in a scalable way ⚖️ to millions of users, and want to share this knowledge with you! 📚 This virtual event is happening ONE TIME ONLY, so be sure to join us Nov. 8 @ 7 PM!\n\n ",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/62TWNqDZs',
        ext: true,
      },
      { text: 'Hotseat Website', href: 'https://hotseat.io/', ext: true },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93858581122?pwd=L3VDK0o5UjJNN2dSZTN0Y0xLclpQUT09&fbclid=IwAR05Q9LbKEVHOqH8pS8r82d5KG3Ww16470ZbSBfdhbMoG3uw4VZfRj9w7es',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'ACM Hack | Passion Talks: Web Accessibility',
    allDay: false,
    start: 1636513200000,
    end: 1636520400000,
    location: 'Royce 190',
    committee: 'hack',
    description:
      'Do you want to make your next website accessible to everyone? Who wouldn’t! 😌 \n\nIf you come to the second 2️⃣ installment of Passion Talks™️, you can learn all about how websites can be more usable 💪 and inclusive toward a broader audience 👥🗣! Our very own, Omer Demirkan will be breaking down the cryptic❓texts of web accessibility standards, as well as the different sensory aids 👂👁️👄👁️👂 you can add to websites so that anyone can peruse them comfortably. Come on by to learn about web accessibility so you can add the final oomph 😳 to your website that’ll get the clicks through the roof 🏠! \n\nPlease RSVP!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2C6aZg6VV',
        ext: true,
      },
      {
        text: 'RSVP',
        href: 'http://links.uclaacm.com/passiontalksf21-webaccessibility-rsvp',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: "ACM Hack | Hackschool #6: Asynchronous Programming and Web API's",
    allDay: false,
    start: 1636599600000,
    end: 1636606800000,
    location: 'Perloff 1102',
    committee: 'hack',
    description:
      "The past few weeks on Hackschool we've been covering React in depth, but this week we'll be taking a breather to talk about Asynchronous Programming! Asynchronous programming is a powerful and common programming technique used in web development and beyond, and is an essential tool for your coding arsenal! So if that sound exciting to come on out this week! As always we'll be in Perloff 1102 this Wednesday from 7-9 and don't forget to RSVP 💜\n\nIf you missed our last session, you can check it out here!✨",
    links: [
      {
        text: 'RSVP',
        href: 'https://forms.gle/3G2DBwYEXm39D3XX7',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/18T2DTn4a',
        ext: true,
      },
      {
        text: 'Session 5 Slides',
        href: 'http://links.uclaacm.com/hackschool21-s5-slides',
        ext: true,
      },
      {
        text: 'Session 5 README',
        href: 'http://links.uclaacm.com/hackschool21-s5',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Studio Collab: Aimbot + Cheat Engine',
    allDay: false,
    start: 1636599600000,
    end: 1636606800000,
    location: 'Engr IV 67-124',
    committee: 'cyber',
    description:
      'Psst 🤫. Wanna learn how to do hackity hack 🤭 of games 🎮?? Then come out to ACM Cyber and Studio’s Fall collab workshop on Aimbot 😵 and using Cheat Engine 🤯🤯! We’ll teach you the fundamentals 📝  of game hacking, the tools 🛠  you’ll need to use, and run 🏃‍♂️💨 through some cool demos 👬👭👫 of how it all works (featuring games that Studio made!). No prior experience is necessary 👶! Be ready to leave with a huger brain 💪🧠 , and a radiant 🔥💥✨🌟 aura knowing you can now assert your dominance 😤 on your friends 🤔 with your hacc skills 👹.\n\nNote: If you want to follow along, be sure to download these before the workshop:\nVisual Studio (Install .NET Framework for C# development, Use .NET 4.0 Framework)\nCheat Engine\n\nOther tools we’ll use:\ndnSpy\nmono injector\n',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/467305528024898/',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'ACM ICPC | Beginner Track',
    allDay: false,
    start: 1636596000000,
    end: 1636603200000,
    location: 'Boelter 3400',
    committee: 'icpc',
    description:
      'Quick!! 🙊 How do you find the shortest path from your dorm to the lecture hall? Not sure? Come to ACM ICPC at UCLA’s Beginner Track this Wednesday @ 6 to learn that and much, much more!!!\n\nIn Beginner’s Track, our popular introduction to the world of competitive programming, we’ll be exploring beginner friendly topics and algorithms in competitive programming 🌱 We will walk you through everything you need to know to go from earthbound n00b to galaxy brained red coder Chad, guaranteed 😳🧠 absolutely no experience required!!!\n\nJoin us this Wednesday from 6-8 in Boelter 3400 to become enlightened by ~*Dynamic Programming*~, a most mysterious and powerful CP technique! :)',
    links: [],
  },

  // w8
  {
    id: 100,
    title: 'ACM W x Meta Networking Night',
    allDay: false,
    start: 1637022600000,
    end: 1637026200000,
    location: 'Zoom',
    committee: 'w',
    description:
      "Want to meet some of the faces of Meta? Come out for the ACM W x Meta Networking Night where you can meet some of Meta's brightest stars! We will have guest speakers Shameiz Rangwala from Instagram, Ryan Peterman from Facebook, and Maurene Jiang from Oculus! Come prepared with questions to ask them about anything you are curious about. RSVP and ask questions!",
    links: [
      { text: 'RSVP', href: 'https://bit.ly/3C3z0FL', ext: true },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1iXalSfHj',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/96144195803',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'ACM Hack | Hackschool #7: Life Cycle',
    allDay: false,
    start: 1637204400000,
    end: 1637211600000,
    location: 'Perloff 1102',
    committee: 'hack',
    description:
      "This year's Hackschool is nearing the end of its Life Cycle :( but don't be sad because our workshop this week will be covering just that! We'll be jumping into Life Cycle in React and covering a new React hook: useEffect. After learning all the fundamentals of React,  we can now move into some of these more ~advanced~ concepts that can really make your app interesting. We hope to see you in Perloff 1102 this Wednesday from 7-9! (don't forget to RSVP) 💜\n\nIf you missed our last session, you can check it out here!✨",
    links: [
      {
        text: 'RSVP',
        href: 'http://links.uclaacm.com/hackschool21-s7-rsvp',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/18T2DTn4a',
        ext: true,
      },
      {
        text: 'Session 6 Slides',
        href: 'http://links.uclaacm.com/hackschool21-s6-slides',
        ext: true,
      },
      {
        text: 'Session 6 README',
        href: 'http://links.uclaacm.com/hackschool21-s6',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM Impact: Open Source Careers',
    allDay: false,
    start: 1637114400000,
    end: 1637118000000,
    location: 'Zoom link on FB page',
    committee: 'board',
    description:
      "Come out to Impact's FINAL installment of our Careers in Social Impact Technology workshop! This workshop is about careers in open source technology. Come out to talk to the G.O.A.T. himself, Professor Eggert, and G.O.A.T. in the making, UCLA student Bryan Pan, about their experiences in open source and how you can turn that into your career! Keep in mind that this week it's on a TUESDAY!!!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/622886712414753',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'ACM Studio | Beginner Track | First Person Shooter Part 1',
    allDay: false,
    start: 1637118000000,
    end: 1637125200000,
    location: 'Engineering IV Faraday Room 67-125',
    committee: 'studio',
    description:
      'You’ve learned a lot about 2D games over the past two tutorials, but now we’re jumping back into three dimensions with the first of two tutorials on first-person shooters! This Tuesday, we’ll go over how to smoothly move and animate a character in 3D space, as well as how to use Unity’s Cinemachine tool to implement classic FPS camera mechanics!',
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CVJbfNfvx4S/',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'ACM Studio | Advanced Track | Netcode',
    allDay: false,
    start: 1637204400000,
    end: 1637211600000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'studio',
    description:
      'Interested in building a multiplayer game but don’t know where to start? Join Studio this Wednesday to learn about some of the basic theory and netcode that forms the foundation of many small-scale multiplayer applications created in Unity!',
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CVJbfNfvx4S/',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM Studio | Creative Track | 2D/3D Animation',
    allDay: false,
    start: 1637031600000,
    end: 1637038800000,
    location: 'Zoom link on IG page',
    committee: 'studio',
    description:
      "Learn the basics of 2D/3D Animation! This includes skeleton rigging, Unity's animation state machine, inverse kinematics, animation transitioning, and more!",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CU_L-wKv3Y6/',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'ACM Hack | Passion Talks: Music Technology',
    allDay: false,
    start: 1637287200000,
    end: 1637294400000,
    location: 'Kaplan Hall A65',
    committee: 'hack',
    description:
      'Do you like jazz 🐝? Have you ever had a deep-rooted 🌲and all-consuming desire to understand the inner workings of modern music 🎶technology?\n\nIf so, come on over to the third installment of 💜Passion Talks 💜where you can learn all about the exciting world of music technology! ACM’s Ben Hankin will be giving us a thorough rundown of all the latest and greatest technology used in modern music making 🪕 and how it really works. He’ll be talking about the different music tech applications 🎤, the API’s used in the process 👩‍💻, and even about the companies involved in the music scene right now 🏚! After listening to this talk, you’ll be 100% certified to pull up to the studio and cook 👩‍🍳 up some straight fire🔥.\n\nCheck out some past projects that Ben has worked on his website!',
    links: [
      {
        text: 'RSVP',
        href: 'http://links.uclaacm.com/passiontalksf21-musictech-rsvp',
        ext: true,
      },
      {
        text: "Ben's website",
        href: 'https://benh4627.github.io/',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1bTnvYtol',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'ACM Impact: Tech Ethics Fireside Chat with Prof. Villasenor',
    allDay: false,
    start: 1637110800000,
    end: 1637114400000,
    location: 'Engineering 6 Room 289',
    committee: 'board',
    description:
      'Machine learning! Cybersecurity! Social Media! M E T A. How do we deal with issues that permeate through society? We don’t know, but we hope our speaker does. Join us and UCLA’s very own tech policy expert Professor Villasenor next Tuesday, 11/16 from 5-6pm for an open discussion about how we can collectively begin to tackle some of the most prevailing issues of our time.\n\nJohn Villasenor is a professor of electrical engineering, law, public policy, and management at UCLA, and is the faculty director of the UCLA Institute for Technology, Law, and Policy. He is also a nonresident senior fellow at the Brookings Institution and a member of the Council on Foreign Relations. Villasenor’s work addresses the intersection of technology, law, and policy.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/207764888056067/',
        ext: true,
      },
    ],
  },
  {
    id: 109,
    title: 'ACM ICPC | Beginner Track',
    allDay: false,
    start: 1637200800000,
    end: 1637208000000,
    location: 'Boelter 3400',
    committee: 'icpc',
    description:
      'Cheetos and chewy bars and chips ahoy, oh my! Come to ACM ICPC at UCLA’s Beginner Track this Wednesday @ 6 for the snacks, and stay for the graph theory ;)\n\nIn Beginner’s Track, our popular introduction to the world of competitive programming, we’ll be exploring beginner friendly topics and algorithms in competitive programming 🌱 We will walk you through everything you need to know to go from earthbound n00b to galaxy brained red coder Chad, guaranteed 😳🧠 absolutely no experience required!!!\n\nJoin us this Wednesday from 6-8 in Boelter 3400 for a lesson in Graph Theory, a fun and essential paradigm for your CP toolkit! :)',
    links: [],
  },
  // week 9
  {
    id: 101,
    title: 'Alumni Panel: Tips and Tricks for Recruiting',
    allDay: false,
    start: 1637632800000,
    end: 1637636400000,
    location: 'Zoom',
    committee: 'board',
    description:
      'Wondering how to snag your dream internship / job? Interested in working in big tech? You’ve come to the right place!\r\nNext Monday we’ll be joined by alumni working at ✨Amazon, Salesforce, Redfin, and Stripe✨ who will be talking about their career journeys and giving tips to current students on mastering the recruiting process. Register now to lock in your spot! 🤩',
    links: [
      {
        text: 'Register',
        href: 'https://ucla.zoom.us/meeting/register/tJUqd-qqrTMuHtKfL26wIf0kUSQ-TxwWhA6y',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'ACM Studio | Beginner Track | First Person Shooter Part 2',
    allDay: false,
    start: 1637722800000,
    end: 1637730000000,
    location: 'Engineering IV Faraday Room 67-124',
    committee: 'studio',
    description:
      "This Tuesday, we’ll be finishing up part two of our FPS tutorials series. Specifically, we'll go over how to implement shooting mechanics with raycasting and introduce you to Unity's particle system to set up some awesome effects!\r\nDon't worry if you missed part one, since we have a package which you can download to pick up where we left off last week!",
    links: [
      {
        text: 'Instagram Post',
        href: 'https://www.instagram.com/p/CU_L-wKv3Y6/',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM Studio | Creative Track | Effectors and Joints',
    allDay: false,
    start: 1637636400000,
    end: 1637643600000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Want to learn how to make conveyors, rivers, force fields, and trap doors with just a few clicks of a button? What about springs and breakable walls, in both 2D and 3D? Come learn all of that (and more!) at this week's creative tutorial!\r\nAs always, a package will be linked on the Discord to download!\r\n",
    links: [
      {
        text: 'Zoom',
        href: 'https://ucla.zoom.us/j/99684783298?pwd=Ykh2NlJCTDdoRGYxZzg2Z2xVWU1RZz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.instagram.com/p/CU57x2mPTa5/',
        ext: true,
      },
    ],
  },

  // WINTER 2022
  //week 2
  {
    id: 100,
    title: 'Studio Winter General Meeting 2021',
    allDay: false,
    start: 1641870000000,
    end: 1641877200000,
    location: 'https://ucla.zoom.us/j/92213893127',
    committee: 'studio',
    description:
      "Are you interested in making games 🎮? If so, come to ACM Game Studio's winter GM on January 10th 7-9pm PST on Zoom to hear about upcoming events (tutorials, guest speakers, and more!).  We're also super excited to announce our annual program, ✨ Students Run Studios ✨, in which students develop indie games over the course of two quarters. We'll be pitching all the 12 games we'll be developing and you'll have the opportunity to hear from every team lead. Anyone with a desire to make games is welcome to participate in SRS — regardless of your current experience level or what skill set you have (be it programming, art, music or anything else). We are very beginner friendly so even if you don't have much experience, please sign up — you will have a lot of fun while learning a lot through the process.",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/445949347125772',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'ICPC Winter GM',
    allDay: false,
    start: 1641870000000,
    end: 1641871800000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      'This winter ICPC is hosting more events then we ever have. Come out to learn more about our offerings, get your questions answered, and make your voice heard!',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91529021066?pwd=cmp6QUdObU1UZy93ZENaVm9EaXV0QT09',
        ext: 'true',
      },
    ],
  },
  {
    id: 103,
    title: 'Beginner Track ++',
    allDay: false,
    start: 1642039200000,
    end: 1642046400000,
    location: 'https://ucla.zoom.us/j/97210316561',
    committee: 'icpc',
    description:
      'The winter may be cold and lonely, but we’ve got algorithms to keep you warm! <33\r\n\r\nAre you completely new to competitive programming? Maybe you attended Beginner Track last quarter and are hungry for more? Or perhaps you’re just a wandering problem-solving enthusiast looking for a place to rest your weary bones? Have no fear, no matter who you are, ACM ICPC’s Beginner Track ++ is here for you! As the continuation of our popular Fall workshop, Beginner Track ++ is here to nurture and deepen your knowledge of competitive programming. No prior experience required! This quarter, we have an exciting lineup of topics: Ad-Hoc, Graph Theory, Dynamic Programming, and Bit-Masking. \r\n\r\nCome to our first workshop of the quarter this Wednesday @ 6 for a warm welcome and some brain-tickling ad-hoc problems! :)',
    links: [],
  },
  {
    id: 104,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1642039200000,
    end: 1642046400000,
    location: 'Zoom',
    committee: 'hack',
    description:
      'On your mark 🏁. Get set. GOOOO! 🏃ACM Hack’s Hack Sprint is coming up fast! 🚨 Join us Wednesday, January 12th from 6-8 PM PST as we launch into the world of iOS mobile development 📱with beginner-friendly workshops in Swift. 🕊 Our first workshop will introduce you to Swift basics 🧑‍🏫and history, and throughout the quarter, we will (Swift-ly) teach you everything you need to know to develop your very own iOS app and publish it on the App Store 📈. Hope to see you there! 💜',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1EKKZMJjs',
        ext: true,
      },
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
        ext: 'true',
      },
    ],
  },
  {
    id: 105,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1642125600000,
    end: 1642132800000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Wanna learn how to ace your technical interviews? Come to ICPC's Winter Interview Workshop, where we'll be going over data structures and algorithms to prep for your next coding interview! Get ready to become BOOSTED(™) 🤠😎 with some s l i c c problem-solving skills, so you'll nail those interview problems real q u i c c. This quarter we'll be focusing on how to express ideas, simplify problems, and all the technical topics you'll need to pass those interviews!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: 'true',
      },
    ],
  },
  {
    id: 106,
    title: 'ACM AI Beginner Track Workshop',
    allDay: false,
    start: 1642125600000,
    end: 1642132800000,
    location: '',
    committee: 'ai',
    description:
      'Interested in AI but don’t know where to start? Want to learn about how machine learning (ML) models work and how to code them yourself? Join us for ACM AI’s Beginner Track Series Thursdays 6 - 8pm starting January 13th! The Beginner Track delves into the core fundamentals of ML. Most workshops will not only have interactive activities that’ll help you understand ML theory, but also have coding walkthroughs designed to help you put that theory to practice . By the time the track ends, you’ll have a solid grasp of how ML models work on a conceptual level and be able to program some models on your own! We hope to see you there!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/1958197451020087',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Studio Alumni Panel',
    allDay: false,
    start: 1642213800000,
    end: 1642219200000,
    location: ' https://ucla.zoom.us/j/99889626466',
    committee: 'studio',
    description:
      "Curious about what it's like working as a game designer or programmer 🕹? Want to know what it was like developing Minecraft RTX ⛏? What about stop-motion 🎞️ and puppet work for Netflix & Hulu? Or how about cutting-edge development in computer graphics and AR technologies 👓? If so, please join us as we welcome back our Studio alumni officers for panel on Friday, January 14th 6:30 - 8:00 PM PST on Zoom to learn about some of the projects they've been working after college and ask them any questions you may have!  ",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/215935663980092?ref=newsfeed',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'ACM Impact Fireside Chat',
    allDay: false,
    start: 1642208400000,
    end: 1642212000000,
    location:
      'Zoom link will be posted on Facebook event 30 minutes before the event!',
    committee: 'board',
    description:
      "Kent Wong is the director of the UCLA Labor Center and has previously moderated discussions about the gig economy and advocated for a fairer compensation structure for gig workers.\r\nIn this fireside chat we will be posing some important questions about corporations that make use of gig workers (eg. Lyft, Doordash, Uber, Airbnb, TaskRabbit), and other questions about work in the tech industry. If you're confused about the labor market and don't see where you think you'd fit in todays economy, come out to ACM Impact’s fireside chat to get a better idea about the future of work!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/650563502740863/',
        ext: true,
      },
    ],
  },
  {
    id: 21,
    title: 'ACM AI Advanced Track Workshop',
    allDay: false,
    start: 1641866400000,
    end: 1641873600000,
    location: 'https://ucla.zoom.us/j/4330112741',
    committee: 'ai',
    description:
      'Come out to ACM AI’s Advanced Track Workshops this quarter Mondays 6 - 8pm starting January 10th! While the beginner track is focused on classical AI techniques like linear regression, the Advanced Workshop is concentrated on the theory and application of neural networks. Alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/606250730635412',
        ext: true,
      },
    ],
  },
  {
    id: 23,
    title: 'ACM AI Advanced Track Workshop',
    allDay: false,
    start: 1643076000000,
    end: 1643083200000,
    location: 'https://ucla.zoom.us/j/4330112741',
    committee: 'ai',
    description:
      'Come out to ACM AI’s Advanced Track Workshops this quarter Mondays 6 - 8pm starting January 10th! While the beginner track is focused on classical AI techniques like linear regression, the Advanced Workshop is concentrated on the theory and application of neural networks. Alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/606250730635412',
        ext: true,
      },
    ],
  },
  {
    id: 24,
    title: 'ACM AI Advanced Track Workshop',
    allDay: false,
    start: 1643680800000,
    end: 1643688000000,
    location: 'https://ucla.zoom.us/j/4330112741',
    committee: 'ai',
    description:
      'Come out to ACM AI’s Advanced Track Workshops this quarter Mondays 6 - 8pm starting January 10th! While the beginner track is focused on classical AI techniques like linear regression, the Advanced Workshop is concentrated on the theory and application of neural networks. Alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/606250730635412',
        ext: true,
      },
    ],
  },
  {
    id: 25,
    title: 'ACM AI Advanced Track Workshop',
    allDay: false,
    start: 1644285600000,
    end: 1644292800000,
    location: 'https://ucla.zoom.us/j/4330112741',
    committee: 'ai',
    description:
      'Come out to ACM AI’s Advanced Track Workshops this quarter Mondays 6 - 8pm starting January 10th! While the beginner track is focused on classical AI techniques like linear regression, the Advanced Workshop is concentrated on the theory and application of neural networks. Alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/606250730635412',
        ext: true,
      },
    ],
  },
  {
    id: 26,
    title: 'ACM AI Advanced Track Workshop',
    allDay: false,
    start: 1644890400000,
    end: 1644897600000,
    location: 'https://ucla.zoom.us/j/4330112741',
    committee: 'ai',
    description:
      'Come out to ACM AI’s Advanced Track Workshops this quarter Mondays 6 - 8pm starting January 10th! While the beginner track is focused on classical AI techniques like linear regression, the Advanced Workshop is concentrated on the theory and application of neural networks. Alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/606250730635412',
        ext: true,
      },
    ],
  },
  {
    id: 28,
    title: 'ACM AI Advanced Track Workshop',
    allDay: false,
    start: 1646100000000,
    end: 1646107200000,
    location: 'https://ucla.zoom.us/j/4330112741',
    committee: 'ai',
    description:
      'Come out to ACM AI’s Advanced Track Workshops this quarter Mondays 6 - 8pm starting January 10th! While the beginner track is focused on classical AI techniques like linear regression, the Advanced Workshop is concentrated on the theory and application of neural networks. Alongside your peers, you’ll be spending ample time on both machine learning theory and hands-on projects – all aiming to equip you with the necessary knowledge to integrate in your personal projects. You will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects initiative. Basic programming and prior ML experience are preferred but regardless of where you stand, don’t hesitate to stop by!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/606250730635412',
        ext: true,
      },
    ],
  },

  //week 3
  {
    id: 100,
    title: 'Build an RPG: Combat',
    allDay: false,
    start: 1642561200000,
    end: 1642568400000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Want to learn how to make Pokémon 👀?  Beginner track is back this quarter and we'll be having a crash course introduction to Unity. This week, we'll be implementing a turn-based combat system ⚔️ .  Even if you've already attended tutorials last quarter, we'll be covering new topics and connecting all the tutorials in this track to create the framework for an ✨ RPG. ✨ ",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93198710813',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1CN570QoU',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Advanced Track',
    allDay: false,
    start: 1642644000000,
    end: 1642651200000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "In ICPC's Advanced Track, we submerge and dive deep into the world of algorithms and data structures, tackling ones often found in harder competitive programming problems. ICPC competitors, competitive programming fanatics, and anyone interested in expanding their programming brain are wholeheartedly invited to come and explore these awesome algorithmic wonders with us.\r\n\r\nCome to our first workshop of the quarter this Wednesday at 6:00 for an exciting kickoff with algorithms solving the famous problem of finding the shortest path!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/3616763997',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Beginner Track++',
    allDay: false,
    start: 1642644000000,
    end: 1642651200000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Oh no! Gotta get back to school, but you can’t find the *shortest path* from your hometown to UCLA’s campus? Never fear! At this week's Intro to Graph Theory workshop, we’re covering one of the most important topics in competitive programming: graphs! We’ll work on problems like this and so much more, so come on out, this Wednesday @ 6 :)",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/97210316561',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1642644000000,
    end: 1642651200000,
    location: 'Zoom',
    committee: 'hack',
    description: (
      <>
        And we’re off to the races! 🎉 🎉 ACM Hack is back with heat 2 of Hack
        Sprint, our beginner-friendly iOS mobile development workshop! 🚨 Join
        us Wednesday, January 19th from 6-8 PM PST as we hurdle straight into
        teaching Swift! 🕊 Last time, we covered Swift basics and history. This
        session, we’ll tell you everything you need to know about the Swift
        fundamentals, so you can create your own iOS app in no time! Race ya
        there! 💜 <br /> Missed our last session? <br /> Check out the
        recording:{' '}
        <a href="https://youtu.be/swXXKGc5A58">https://youtu.be/swXXKGc5A58</a>{' '}
        <br /> Here’s our comprehensive README:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s1">
          http://links.uclaacm.com/hacksprint22-s1
        </a>
      </>
    ),
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1BpXrJohW',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Creative Tutorial: Game Design',
    allDay: false,
    start: 1642647600000,
    end: 1642654800000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Ever wanted to learn more about video game design (including what it even is)? What about how to apply your ideas and what to keep in mind to excel as a game designer? Learn all of that and more at Studio's Game Design Tutorial! Not only will you get valuable insight into the ways a game designer might think and design, there will also be case studies and popular interview questions to get you thinking about the intricacies of game design.",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/99684783298?pwd=Ykh2NlJCTDdoRGYxZzg2Z2xVWU1RZz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/263085649289238/',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1642730400000,
    end: 1642737600000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Wanna learn how to ace your technical interviews? Come to ICPC's Winter Interview Workshop, where we'll be going over data structures and algorithms to prep for your next coding interview! Get ready to become BOOSTED(™) 🤠😎 with some s l i c c problem-solving skills, so you'll nail those interview problems real q u i c c. This week we’ll focus on basic data structures (arrays, vectors, linked lists, hashmaps) to build the fundamentals of solving advanced interview questions. ",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Cyber Academy | Network Packet Capture',
    allDay: false,
    start: 1642730400000,
    end: 1642737600000,
    location: 'Zoom',
    committee: 'cyber',
    description:
      'Now you know all about files and data on your computer, but what if you want to do something more interesting, like playing a video game with your friends, or watching the latest acm cyber workshop on youtube? (Not because you missed it, of course, but because it was so awesome and you just need to see it again). All of this happens over networks--usually THE INTERNET 🌈🤩 (*oooh aaah*). Join us this week to learn how your information and activities propagate through networks, what kinds of things make a network unsecure, and what kinds of things you can do to protect your data on the wild-wild-web. We’ll be doing a demo to show how private information can be captured over an unsecured network, so you won’t want to miss this one!\r\n\r\nIMPORTANT: make sure you have wireshark downloaded before the workshop!\r\nhttps://www.wireshark.org/#download',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/95081428653?pwd=am9rb2JuK25LVmFMT3NxaHJyV3J6Zz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/SP0MErK0 ',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'UCLA x UCSD Game Jam',
    allDay: true,
    start: 1642816800000,
    end: 1643076000000,
    location: 'Discord',
    committee: 'studio',
    description:
      "ACM Studio is incredibly excited to announce our first cross-campus game jam, in collaboration with VGDC from UCSD! This game jam will start on Friday, January 21st at 6:00PM PST and end Monday, January 24th at 6:00PM PST. While the game jam is 72 hours, we still encourage you to join even if you can't commit to the full time period! 👾 This game jam will be held on the UCLA x UCSD game jam server, which you can find in our linktree. You can also find the signup form there! We hope to see you join us 🎮 ✨ ",
    links: [
      {
        text: 'Discord Server',
        href: 'https://discord.gg/RKzTCxhTv3',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1whfpHA6X',
        ext: true,
      },
    ],
  },
  {
    id: 109,
    title: 'Tech Ethics: Tech + Environment',
    allDay: false,
    start: 1642813200000,
    end: 1642816800000,
    location: 'Zoom',
    committee: 'board',
    description:
      'ACM Impact’s first Tech Ethics workshop for this week will be looking at ways in which the media we consume affects the environment. Often, we tend to decouple the realm of ideas from physical space, this workshop / discussion will be looking to disprove that idea. Ever wondered the environmental consequences of switching from 1080p to 4K on that last YouTube video you watched? We will be looking at ways in which data centers are destroying the world, and how collecting an increasingly greater amount of data is not ecologically sustainable along with some reasonable solutions!',
    links: [
      {
        text: 'Zoom Link',
        href: 'tinyurl.com/impact-ethics-series',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/603940534005083/',
        ext: true,
      },
    ],
  },
  {
    id: 21,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1006308000000,
    end: 1006311600000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 22,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1642557600000,
    end: 1642561200000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 23,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1643162400000,
    end: 1643166000000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 24,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1643767200000,
    end: 1643770800000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 25,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1644372000000,
    end: 1644375600000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 26,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1644976800000,
    end: 1644980400000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 27,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1645581600000,
    end: 1645585200000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 28,
    title: 'ACM Teach LA Dev Team Meeting',
    allDay: false,
    start: 1646186400000,
    end: 1646190000000,
    location: 'https://tinyurl.com/tla-dev-w22',
    committee: 'teach-la',
    description:
      "Are you an aspiring developer? Do you want to make CS education more accessible? If so, join us for Teach LA's weekly Dev Team Meetings. You'll have the opportunity to gain hands-on web development experience by working on our editor/static site or help create learning labs to teach kids various CS topics! No experience is required (in fact, we would love to train you)! :)",
    links: [],
  },
  {
    id: 29,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1006311600000,
    end: 1006315200000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 30,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1642561200000,
    end: 1642564800000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 31,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1643166000000,
    end: 1643169600000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 32,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1643770800000,
    end: 1643774400000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 33,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1644375600000,
    end: 1644379200000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 34,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1644980400000,
    end: 1644984000000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 35,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1645585200000,
    end: 1645588800000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },
  {
    id: 36,
    title: 'ACM Teach LA Curriculum Meeting',
    allDay: false,
    start: 1646190000000,
    end: 1646193600000,
    location: 'https://tinyurl.com/tla-curriculum-w22',
    committee: 'teach-la',
    description:
      "Do you like teaching? Are you interested in making CS education more accessible? If so, join us for Teach LA's weekly curriculum meetings, where you'll get a chance to learn more about pedagogy, develop curriculum, and become an instructor for one of the many courses we teach!",
    links: [],
  },

  // week 4
  {
    id: 101,
    title: 'Build an RPG: Overworld',
    allDay: false,
    start: 1643166000000,
    end: 1643173200000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Want to learn how to make Pokémon 👀? This week, we'll be creating a top-down character controller that will allow you to talk to NPCs and encounter wild Pokémon🍃. We'll also be connecting last-week's battle system ⚔️ with the overworld 🌎, but don't worry if you missed last week, we have a package you can download on our GitHub to get caught up! Even if you've already attended tutorials last quarter, we'll be covering new topics and connecting all the tutorials in this track to create the framework for an ✨ RPG. ✨ ",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/97596929153',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1CN570QoU',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Advanced Track',
    allDay: false,
    start: 1643248800000,
    end: 1643256000000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "In ICPC's Advanced Track, we submerge and dive deep into the world of algorithms and data structures, tackling ones often found in harder competitive programming problems. ICPC competitors, competitive programming fanatics, and anyone interested in expanding their programming brain are wholeheartedly invited to come and explore these awesome algorithmic wonders with us.\n\nCome to our second workshop of the quarter this Wednesday at 6:00 to learn about complex string algorithms every competitive programmer needs to know!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/3616763997',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/4QVOk38pd',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM-W Internet Scavenger Hunt',
    allDay: false,
    start: 1643248800000,
    end: 1643254200000,
    location: 'Zoom',
    committee: 'w',
    description:
      'Ready to channel your inner detective 🕵️ Join ACM-W for our first ever Internet Scavenger Hunt, where we scour the world wide web and use those handy CS skills to help you find some of the most elusive webpages on the Internet for awesome prizes 🏆 Some example treasures that we’ll be looking for include:\nA Github page that has been active for the last three days 🖥️\nA URL with 3 consecutive numbers 🔢\nA Wikipedia page with less than 50 occurrences of the word “the” 🌐\n',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93342296948',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/49jGXQW8z',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1643248800000,
    end: 1643256000000,
    location: 'Zoom',
    committee: 'hack',
    description: (
      <>
        With Week 4 coming up fast, we’re hurtling 🏃‍♀️ around the corner to
        session 3 of Hack Sprint, our beginner-friendly iOS mobile development
        workshop! What better way to have fun 🤸‍♀️ as we jump into midterm season
        than learning about mobile app development in Swift! 🚨 Join us
        Wednesday, January 26th from 6-8 PM PST as talk about views 🔍, view
        modifiers, states, and bindings! Off you pop, and see you there! 💜
        <br />
        <br />
        Missed our last session?
        <br />
        Check out the recording:{' '}
        <a href="https://youtu.be/ayzYEj6OZFA">
          https://youtu.be/ayzYEj6OZFA
        </a>{' '}
        <br />
        Here’s our comprehensive README:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s2">
          http://links.uclaacm.com/hacksprint22-s2
        </a>
      </>
    ),
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1FvZyUmkT',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Advanced Tutorial: Random Dungeon Generation',
    allDay: false,
    start: 1643252400000,
    end: 1643259600000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Interested in creating infinitely replayable games? Random Dungeon Generation is a core feature of many roguelikes like The Binding of Isaac and Moonlighter. In this tutorial, we'll be covering everything you need to implement a random dungeon generation algorithm from coding the dungeon crawler, to managing scenes, and finally to top-down camera movement.",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/92138796419',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1643335200000,
    end: 1643342400000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Hi queue-ties 🦖Wanna learn how to ace your technical interviews? Come to ICPC's Winter Interview Workshop, where we'll be going over data structures and algorithms to prep for your next coding interview! Get ready to become BOOSTED(™) 🤠😎 with some s l i c c problem-solving skills, so you'll nail those interview problems real q u i c c. This week we'll be focusing on 👾stacks and queues👾So make sure to comethru!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Cyber Academy | Memory Analysis',
    allDay: false,
    start: 1643335200000,
    end: 1643342400000,
    location: 'Zoom',
    committee: 'cyber',
    description:
      "Your memory is chock-full of information: names, faces, passwords, and embarrassing memories. Likewise, computers have similar information in their memory: text files, images, account details, and even your browser history 🤭. There's so much going on in a computer's metaphorical brain, and you can extract it with a little know-how! Attend Cyber's memory forensics workshop this Thursday to learn all about analyzing memory dumps and uncovering their obscured secrets.",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/95081428653?pwd=am9rb2JuK25LVmFMT3NxaHJyV3J6Zz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/288937773115413/',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'Fireside Chat w/ Professor Karen McKinnon',
    allDay: false,
    start: 1643425200000,
    end: 1643428800000,
    location: 'Zoom',
    committee: 'board',
    description:
      'Are you worried about the effects of climate change, or want to educate yourself? 🧐 Are you interested in advocating for environmental justice? 🌳🌱Join us in a fireside chat this Thursday 7-8 with Professor Karen McKinnon, climate scientist and statistician, to learn more about her research and how YOU can do your part in climate change as a student interested in tech! 🥳💫 See you at tinyurl.com/impact-fireside-chat, be there or be square ❌',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/98755847523',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/992353958127688/',
        ext: true,
      },
    ],
  },

  // week 5
  {
    id: 100,
    title: 'Build an RPG: Inventory',
    allDay: false,
    start: 1643772600000,
    end: 1643779800000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "Want to learn how to make Pokémon 👀? This week, we'll be creating an inventory system for you to store potions, pokeballs, and all that jazz 👜. Even if you've already attended tutorials last quarter, we'll be covering new topics and connecting all the tutorials in this track to create the framework for an ✨ RPG. ✨ Don't worry if you have not attended the past tutorials! You can find all the packages you need on github.",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/98566049793',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/454938049440248',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Advanced Track',
    allDay: false,
    start: 1643853600000,
    end: 1643860800000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "In ICPC's Advanced Track, we submerge and dive deep into the world of algorithms and data structures, tackling ones often found in harder competitive programming problems. ICPC competitors, competitive programming fanatics, and anyone interested in expanding their programming brain are wholeheartedly invited to come and explore these awesome algorithmic wonders with us.\n\nCome to our workshop this Wednesday at 6:00 for minimum spanning and all sorts of other tree algorithms!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/3616763997',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/4QVOk38pd',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Beginner Track++',
    allDay: false,
    start: 1643853600000,
    end: 1643860800000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "BT++ is back (in-person!) with all the graph theory you can handle, this Wednesday @ 6! We'll be taking all of the concepts we learned last week, like BFS/DFS and the shortest path algorithm, and applying them in novel ways to come up with some crazy cool algorithms and solve some exciting new problems. Some come on down, becuase you're not gonna wanna miss it!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/97210316561',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'AI Labs: Modern Applications of AI',
    allDay: false,
    start: 1643853600000,
    end: 1643857200000,
    location: '2760 Boelter Hall and Zoom',
    committee: 'ai',
    description:
      'Curious about artificial intelligence but not sure where to start? Look no further than AI Labs: Modern Applications of AI, a workshop hosted by UCLA ACM AI on Wednesday, February 2 from 6 -7 PM at Engineering IV Maxwell Room 57-124! An online option will also be available through Zoom.\n\nCome find out ​​why you shouldn’t believe everything you hear from your favorite celebrities 🤷‍♀️, how Netflix always knows exactly what you’re in the mood to binge-watch 📺, and why your machine learning models might need a little positive reinforcement too 🏅\n\nThis workshop will be a friendly beginner’s guide to AI and some of the ways it can be applied to fields outside of computer science. Everybody is welcome no matter your year, major, background, or experience (absolutely none needed)! See you there 🙂\n\n*Bruin card and symptom monitoring survey confirmation are required for entry.\n\nGraphic made by Daniel Dai.',
    links: [
      {
        text: 'Zoom Link',
        href: 'In-Person: Engineering IV Maxwell Room 57-124, Zoom: https://ucla.zoom.us/j/92812904150?pwd=QTFhRXF5ZmhUZG1Eb1VTbDI4WnlCZz09\nhttps://ucla.zoom.us/j/92812904150?pwd=QTFhRXF5ZmhUZG1Eb1VTbDI4WnlCZz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/1584703548574057',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1643853600000,
    end: 1643860800000,
    location: 'Zoom',
    committee: 'hack',
    description: (
      <>
        Week 5 is here and with it, the return of Hack Sprint!!! 🎉 🎉 Session 4
        of our beginner-friendly iOS mobile development workshop is racing 🏃‍♀️
        towards us, so be ready to join us in our relay race to learn everything
        you need to make your own iOS app 📱. 🚨 Join us Wednesday, February 2nd
        from 6-8 PM PST as we long jump into advanced views. Don’t know what
        those are? Come to session 4 and we’ll tell you all about navigation
        views, observable objects, protocols and more! 💜
        <br />
        <br />
        Missed our last session?
        <br />
        Check out the recording:{' '}
        <a href="https://youtu.be/qlHPOjy2lBs">https://youtu.be/qlHPOjy2lBs</a>
        <br />
        Here’s our comprehensive README:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s3">
          http://links.uclaacm.com/hacksprint22-s3
        </a>
      </>
    ),
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/3aBBJOKZx',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1643940000000,
    end: 1643947200000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "This week for ICPC's interview track we'll be holding open office hours for anyone who wants to do a mock interview or ask any questions! There won't be a presentation this week but feel free to stop by if you just want to chill!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'Tech Ethics Series: Crypto',
    allDay: false,
    start: 1644022800000,
    end: 1644026400000,
    location: 'Zoom',
    committee: 'board',
    description:
      "Are you an aspiring crypto investor raring to decentralize finance 🔥🏦🔥? Have you been hearing way too much about NFTs and bitcoin and are wondering what all the fuss is about 🤨? Do you know these coins impact much more than just your pocket 👀? If so, join ACM Impact this Friday (1/4) from 5-6pm to learn about the ethics of cryptocurrency, from blockchain ⬛️⛓😤 to climate change 🌿🌡🥵! Zoom over to tinyurl.com/impact-ethics-series or we're headed to the moon w/o you 😭🚀🌝",
    links: [
      {
        text: 'Zoom Link',
        href: 'http://tinyurl.com/impact-ethics-series',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/362189072011265/',
        ext: true,
      },
    ],
  },

  // week 6
  {
    id: 100,
    title: 'Santa Monica Used Bookstore Run',
    allDay: false,
    start: 1644357600000,
    end: 1644368400000,
    location: 'Santa Monica (meet at Gayley & Le Conte)',
    committee: 'board',
    description:
      "Destress with some ~ retail therapy ~ and come to Santa Monica with the rest of ACM! Our main stop will be Book Monster, a used bookstore with a big (and cheap) collection! We'll also walk around the Promenade. Transportation will be via (free) public transit and/or cars; if you're interested, you can show up and/or RSVP to the Discord Event!",
    links: [
      {
        text: 'Discord Event',
        href: 'https://discord.com/events/702801010426511373/934957423876259930',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'Transfer Alumni Panel',
    allDay: false,
    start: 1644368400000,
    end: 1644372000000,
    location: 'Zoom',
    committee: 'board',
    description:
      'Are you a transfer interested in working in tech ?? Whether you want to pursue a Master’s, work in UX/UI, or software engineering , we’ve got you covered! Come talk to our amazing panelists for some tips/tricks on navigating your transfer experience.\nEric is an alumni who majored in CS and has interned at Facebook X3 🥵. He transferred from UCSD, and was involved in UPE at UCLA. He’s now pursuing a masters at Cornell.\nLily is a recent graduate who transferred UCSC working at Tinder for UX/UI, and our last guest is a software engineer at…guess you’ll have to come to find out 😏\nCome next Tuesday (2/8) from 5-6 pm on zoom!!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1tUx10HUT',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Advanced Track',
    allDay: false,
    start: 1644458400000,
    end: 1644465600000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "In ICPC's Advanced Track, we submerge and dive deep into the world of algorithms and data structures, tackling ones often found in harder competitive programming problems. ICPC competitors, competitive programming fanatics, and anyone interested in expanding their programming brain are wholeheartedly invited to come and explore these awesome algorithmic wonders with us.\n\nThis Wednesday at 6:00, we'll be hosting a workshop about segment trees, a powerful tool to tackle all sorts of problems with. We hope you can make it!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/3616763997',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/4QVOk38pd',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Beginner Track++',
    allDay: false,
    start: 1644458400000,
    end: 1644465600000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      'If masks keep us safe out in the world, imagine what they can do for your code! 👀🦠 A bit mask might not protect your code from bugs, but it can make it lighter, faster, and easier to work with! Beginner Track has never covered this powerful tool before 🙊 so come to this ~*super beginner friendly*~ workshop to learn the never before shared secrets of the bit mask!',
    links: [
      {
        text: 'Zoom Link',
        href: 'In-Person: 2760 Boelter Hall, Zoom: https://ucla.zoom.us/j/97210316561',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1644544800000,
    end: 1644552000000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Wanna learn how to ace your technical interviews? Come to ICPC's Winter Interview Workshop, where we'll be going over data structures and algorithms to prep for your next coding interview! Get ready to become BOOSTED(™) 🤠😎 with some s l i c c problem-solving skills, so you'll nail those interview problems real q u i c c. This week we’ll focus on recursion and dynamic programming, and solving some of the most complicated problems from interviews.",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Cyber Academy | Smart Contracts',
    allDay: false,
    start: 1644544800000,
    end: 1644552000000,
    location: 'Young Hall 4216 and Zoom',
    committee: 'cyber',
    description:
      'Crypto currencies are everywhere these days, but have you ever wondered how they work? Join our workshop to find out about how smart contracts automate the exchange of crypto currencies! By the end, you might even learn enough to make the next 🐶 Dogecoin!\n\nNote: This meeting will be held in person (WOO) so if you plan on attending, please wear a mask and bring your ID + completed symptom monitoring survery! Otherwise, hope to see you on Zoom! ',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/95081428653?pwd=am9rb2JuK25LVmFMT3NxaHJyV3J6Zz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2ahAFrgz9',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1644458400000,
    end: 1644465600000,
    location: 'Zoom',
    committee: 'hack',
    description: (
      <>
        🎉 Session 5 of Hack Sprint is here, and with it comes the start of our
        400m sprint to the finish line 🏁! Join us at this week’s
        beginner-friendly iOS mobile development workshop as we pole vault into
        data and networking. We’ll talk about URLSession and 🔥Firebase🔥, and
        get you ready and steady to make your own iOS app this quarter. 🚨 Join
        us Wednesday, February 9th from 6-8 PM PST! Hope to see you there! 💜
        <br />
        <br />
        Missed our last session?
        <br />
        Check out the recording:
        <a href="https://youtu.be/s_MPo0ISL-4">https://youtu.be/s_MPo0ISL-4</a>
        <br />
        Here’s our comprehensive README:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s4">
          http://links.uclaacm.com/hacksprint22-s4
        </a>
      </>
    ),
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1BmNFqil6',
        ext: true,
      },
    ],
  },

  // week 7
  {
    id: 100,
    title: 'Advanced Track',
    allDay: false,
    start: 1645063200000,
    end: 1645070400000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "In ICPC's Advanced Track, we submerge and dive deep into the world of algorithms and data structures, tackling ones often found in harder competitive programming problems. ICPC competitors, competitive programming fanatics, and anyone interested in expanding their programming brain are wholeheartedly invited to come and explore these awesome algorithmic wonders with us.\n\nWe invite you to come to our last workshop of the quarter this Wednesday at 6:00 to learn about the exciting world of maximum flow (and minimum cut) problems!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/3616763997',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/4QVOk38pd',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1644544800000,
    end: 1644552000000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Want to ace your technical interviews? Come to ICPC's Winter Interview Workshop! This week, we'll focus on trees and graphs, covering useful techniques for this extremely common class of problems.\n\nGet ready to become BOOSTED(™) 🤠😎 with some s l i c c problem-solving skills, so you'll nail those interview problems real q u i c c.",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Beginner Track++',
    allDay: false,
    start: 1645063200000,
    end: 1645070400000,
    location: 'Engineering VI, Room 472 and Zoom',
    committee: 'icpc',
    description:
      'Join us in worshipping our lord and savior, Dynamic Programming, this Wednesday @ 6! 😌🙏 This extremely powerful technique will allow you to turn exponential solutions linear with a wave of your hand, and solve problems that may currently have you mystified...! Intrigued? You should be! Can’t wait to see you there :)',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/97210316561',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM-W Undergraduate Menttorship Reboot',
    allDay: false,
    start: 1645149600000,
    end: 1645153200000,
    location: 'Math Science Building, RM 5117',
    committee: 'w',
    description:
      "Welcome back to campus friends 🏫 Come join us for our amazing Undergraduate Mentorship Reboot, where we will be talking about topics ranging from diversity in tech 💻, finding internships/research 🐱‍💻, and imposter syndrome followed by a Q&A panel. We're excited to see you all there 🤩",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1nY6gSI6u',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Cyber Academy | Steganography',
    allDay: false,
    start: 1645149600000,
    end: 1645156800000,
    location: 'Young Hall 4216 and Zoom',
    committee: 'cyber',
    description:
      'We’ve all heard the saying “a picture is worth a thousand words”, but did you know that a picture could actually contain a top secret message? Come to our Steganography workshop to learn how you, too, can hide your messages in plain sight within an image, audio file, or even a physical object!\n\nNote: This meeting will be held in person (WOO) so if you plan on attending, please wear a mask and bring your ID + completed symptom monitoring survery! Otherwise, hope to see you on Zoom! ',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/95081428653?pwd=am9rb2JuK25LVmFMT3NxaHJyV3J6Zz09',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1w0Omv01e ',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Guest Speaker (Carey Nachenberg)',
    allDay: false,
    start: 1645066800000,
    end: 1645070400000,
    location: 'Engineering VI 289 and Zoom',
    committee: 'cyber',
    description:
      'Have you heard of cybersecurity but have no idea what it really is? Are you interested in learning what a security engineer does (and why it’s where all the money’s at 🤑)? Or maybe, do you just love Carey 😍? Come out to our Industry Talk featuring our very own Professor Carey Nachenberg as he shares with us his experiences in cybersecurity 🔓 and his role at companies like Symantec 😎 and Google’s Chronicle 😳. You don’t want to miss it 🔥!',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/98818892523?pwd=MVVuVXNTQm5YenJPdGl5RE5rVXR1QT09 ',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1qfxVJjMt',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'Explore: Tech & Society - Digital Citizenship',
    allDay: false,
    start: 1645146000000,
    end: 1645149600000,
    location: 'Boelter 2763 (the ACM Clubhouse)',
    committee: 'board',
    description:
      'Do civil rights and liberties exist in a digital landscape? Are we considered citizens of the Internet? If so, are the rules and liberties of “digital citizenship” necessary? Whose responsibility is it to regulate digital platforms so our "rights" are not violated? Discuss these questions (and get some free food! 🍪) at the first of three Explore: Tech & Society discussions on Thursday, February 17th from 5:00 - 6:00 at Boelter 2763 (the ACM Clubhouse)! ✨',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1ppTpxsTg',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1645063200000,
    end: 1645070400000,
    location: 'Boelter 2760',
    committee: 'hack',
    description: (
      <>
        It&apos;s Valentine&apos;s Day, so… will you be our 💜 Valentine 💜?
        <br />
        We&apos;d love to &lsquo;sprint&rsquo; more time with you at Session 6
        of Hack Sprint 🏃, ACM Hack&apos;s beginner-friendly iOS mobile
        development workshop! This week, Eugene Lo, our very own Hack president
        and creator of the Detox session jingle (for you folks who took CS 32
        with Nachenberg) will be giving a mini-talk 🎤 about uploading your iOS
        app to the app store. Additionally, this session will have dedicated
        work time for you to start building your own iOS app📱!!! 🚨
        <br />
        Join this Wednesday, February 16th from 6-8 PM PST at Boelter 2760 just
        in Valen-time for Hack Sprint! Don&apos;t forget to fill out the RSVP
        form! We&apos;d &lsquo;relay&rsquo; love to see you there! 💜
        <br />
        RSVP:{' '}
        <a href="https://forms.gle/WiotyMA5cV3vehMv6">
          https://forms.gle/WiotyMA5cV3vehMv6
        </a>
        <br />
        Missed our last session?
        <br />
        Check out the recording:{' '}
        <a href="https://youtu.be/g8YQ9iSOvwo">https://youtu.be/g8YQ9iSOvwo</a>
        <br />
        Here&apos;s our comprehensive README:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s5">
          http://links.uclaacm.com/hacksprint22-s5
        </a>
      </>
    ),
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1ypLcKhsG',
        ext: true,
      },
    ],
  },
  {
    id: 109,
    title: 'ACM Explore Quantum Workshop Series',
    allDay: false,
    start: 1645066800000,
    end: 1645074000000,
    location: 'ACM Clubhouse (Boelter 2763) and Zoom',
    committee: 'board',
    description: (
      <>
        Checkout ACM&apos;s beginner-friendly Qu-Bites 💫Quantum Computing
        💫Workshop Series! Probe the field of quantum computing with a
        💼mini-project💼, learn about quantum phenomena and gates, and come out
        for 🍪food🍪 Wednesday!
        <br />
        <br />
        ACM Moonshots presents ACM Explore, a new initiative covering
        underexplored topics in CS! This quarter, our topic is Quantum
        Computing! We&apos;ll be going over the mathematical and physics
        background during the workshops, so anyone is welcome regardless of
        background! During this workshop series, we will cover quantum gates,
        the applications of quantum computing, and building your first quantum
        circuit and algorithm!
        <br />
        <br />
        Come out to our second workshop on Wednesday 2/16 at 7pm in Boelter 2763
        (ACM clubhouse) or on Zoom to learn more! Free food will be provided for
        attendees!
        <br />
        <br />
        Missed our last workshop? Here&apos;s the recording:{' '}
        <a href="https://tinyurl.com/acm-qc-1">https://tinyurl.com/acm-qc-1</a>
      </>
    ),
    links: [
      {
        text: 'Zoom Link',
        href: 'https://tinyurl.com/acm-qc-zoom',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/428022309108485/',
        ext: true,
      },
    ],
  },
  {
    id: 110,
    title: 'Tech Ethics Series: Data Ethics',
    allDay: false,
    start: 1645232400000,
    end: 1645236000000,
    location: 'ACM Clubhouse (Boelter 2763) and Zoom',
    committee: 'board',
    description:
      'Are you looking to break into data science and wonder what being a data scientist entails? ⁉️From algorithmic bias 😵 to data privacy 🤳, come to the ACM Clubhouse (Boelter 2763) or zoom in this Friday 2/18 from 5-6PM for a beginner-friendly workshop on data ethics 🤩 See you there!',
    links: [
      {
        text: 'Zoom Link',
        href: 'http://tinyurl.com/impact-ethics-series',
        ext: true,
      },
    ],
  },
  {
    id: 111,
    title: 'Cyber x ICPC Puzzle Hunt',
    allDay: false,
    start: 1645151400000,
    end: 1645160400000,
    location: 'EVI 289',
    committee: 'icpc-cyber',
    description: (
      <>
        The long awaited, ACM Cyber and ICPC collaboration event is here! Take a
        break from solving your daily WORDLE, and come out to try your hand at
        some riddles and brain teasers created by your favorite ACM officers.
        This year all the puzzles are Club Penguin themed. Get ready for some
        nostalgia because these problems have puffles, secret missions, card
        dojo and more. Whether you are a practiced puzzle solver, die hard club
        penguin fan, or someone just looking to make their Week 7 Thursday more
        fun, come on out to Puzzle Hunt!! Did we mention prizes up to $90?!
        <br />
        <br />
        To get an idea of what kind of puzzles you will see at Puzzle Hunt, help
        Captain Rockhopper find a locker combination in this puzzle:{' '}
        <a href="https://icpc.uclaacm.com/puzzlehunt">
          https://icpc.uclaacm.com/puzzlehunt
        </a>
        . Submit your answers and get a chance to win an Amazon gift card! Too
        easy? Come out on Thursday to solve more challenging and interesting
        problems. Make sure to RSVP on{' '}
        <a href="https://forms.gle/n4VsBwi9LnQURo5A8">
          https://forms.gle/n4VsBwi9LnQURo5A8
        </a>
        <br />
        <br />
        P.S. There is no CS knowledge or coding experience needed for these
        problems. We wrote these problems on Google Docs :)
      </>
    ),
    links: [
      {
        text: 'RSVP Link',
        href: 'https://forms.gle/n4VsBwi9LnQURo5A8',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/6cqZTe8EU',
        ext: true,
      },
    ],
  },

  // week 8
  {
    id: 100,
    title: 'Beginner Track++',
    allDay: false,
    start: 1645063200000,
    end: 1645070400000,
    location: 'Engineering VI, Room 472 and Zoom',
    committee: 'icpc',
    description:
      'Join us in worshipping our lord and savior, Dynamic Programming, this Wednesday @ 6! 😌🙏 This extremely powerful technique will allow you to turn exponential solutions linear with a wave of your hand, and solve problems that may currently have you mystified...! Intrigued? You should be! Can’t wait to see you there :)',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/97210316561',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1645754400000,
    end: 1645761600000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "This week for ICPC's interview track we'll be holding open office hours for anyone who wants to do a mock interview or ask any questions! There won't be a presentation this week but feel free to stop by if you just want to chill!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Build an RPG: Shop',
    allDay: false,
    start: 1645585200000,
    end: 1645589700000,
    location: 'Zoom',
    committee: 'studio',
    description: (
      <>
        Want to learn how to make Pokémon 👀? This week, we&apos;ll be creating
        a shop so that you can use coins to buy whatever you want - weapons,
        potions, etc.! Even if you&apos;ve already attended tutorials last
        quarter, we&apos;ll be covering new topics and connecting all the
        tutorials in this track to create the framework for an ✨ RPG. ✨
        Don&apos;t worry if you have not attended the past tutorials! You can
        find all the packages you need on Github (
        <a href="https://github.com/uclaacm/studio-beginner-tutorials">
          https://github.com/uclaacm/studio-beginner-tutorials
        </a>
        ).
      </>
    ),
    links: [
      {
        text: 'Zoom Link',
        href: 'https://zoom.us/j/99049255714?pwd=WjhNWno3MS9YZ3kreG51UmR4VFkyUT09',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Testing in Unity',
    allDay: false,
    start: 1645671600000,
    end: 1645676100000,
    location: 'Zoom',
    committee: 'studio',
    description:
      "You've done it. You've just finished implementing that last enemy behavior script that you've been at for the past 5 hours. It's 3 AM and your head is throbbing from all the vector math Brackeys walked you through. But it's all over now. With a sigh of relief, you sit back and click the play button to watch all of your hard work in action. Unity pauses for a second... and then BOOM! your screen is engulfed in red as your console log gets absolutely obliterated by nullref exceptions. Your heart sinks as you realize you're gonna be at your desk for another 5 hours.\n\nYes, that's happened to all of us before. Testing regularly and thoroughly is the key to avoiding unfortunate surprises at the last minute and for tracking down slippery bugs that can take ages to locate otherwise. Join us this Wednesday from 7:00 - 8:15 PM PST at the zoom link provided to learn about how Unity's unit testing framework can be used to keep your games in check all throughout the development process!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/92719137254',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Industry Speaker: Tim Ford',
    allDay: false,
    start: 1645754400000,
    end: 1645765200000,
    location: 'Engineering VI 289',
    committee: 'studio',
    description:
      "Curious about AAA game development? Please join us on Feb. 24, 6:00-9:00 PM PST in ENG VI 289 to hear from UCLA alumnus TIM FORD who was a Lead Programmer for Blizzard Entertainment's multiplayer shooter Overwatch and oversaw a team of engineers responsible for game simulation, animation, UI, and AI, while working on all aspects of gameplay code. Before joining Blizzard in 2009, he was also a Lead Animation and AI Programmer for EA's Medal of Honor series. We understand that 3 hours is a large time commitment, but you are welcome to attend any part of the event!\n6:00 - 7:00 PM - Presentation on Tim's introduction to game development, time at UCLA, advice for getting into the games industry\n7:00 - 8:00 PM - Q&A\n8:00 - 9:00 PM - Open showcase for any developers/teams to share their games with Tim!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/651917402721714',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'coronAvIrus',
    allDay: false,
    start: 1645668000000,
    end: 1645673400000,
    location: 'Dodd Hall Room 170',
    committee: 'ai',
    description:
      'Tired of hearing about coronavirus? Well how about coronAvIrus!? If you’re interested in learning about AI in the context of COVID-19, look no further than coronAvIrus, a panel hosted by UCLA ACM AI in collaboration with Professor Quanquan Gu on Wednesday, February 23 from 6-7:30 PM at Dodd Hall Room 170! Professor Gu and his team will be discussing their work at UCLA’s Statistical Machine Learning Lab so come out to ask questions and to learn about how it’s like working in a lab!\n\nWe’ll be diving deeper into how AI has helped in developing preventative and tracking methods 💉, what we’ve learned AI can and can’t do in the context of pandemics 🦠, and more 🤭!\n\nEverybody is welcome to join no matter your year, major, background or experience (absolutely none needed)! See you there :)\n\n*Bruin card and symptom monitoring survey confirmation are required for entry.',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/666703241148818',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'CTF After Dark Kickoff',
    allDay: false,
    start: 1645754400000,
    end: 1645761600000,
    location: 'Young Hall 4216',
    committee: 'cyber',
    description:
      'BEep beep? Boop boop BeeP Bop?\nYou’ve been training 🏋️all quarter (¼) long for this. You’ve been walking from your bed 😴to your computer 💻 to Young Hall ⛪️ for this 🥵. You’re tired 😣. Mom’s spaghetti 🍝. But you don’t care 🙅🙅‍♀️🙅‍♂️. Your megamind brain 🧠 is ready for anything that comes your way. You, my dear friend 🦌, are an absolute unit.\nBeep! Boop Beep Boop!\nCome play our 🚩 Capture the Flag (CTF) 🚩competition on Forensics 🕵️‍♀️👨‍💻 and FLEX 💪 off all that you’ve learned from our workshops this Winter ❄️. Winners 🏅will be rewarded 👀.\nCTF AD kickoff 🦵 🚫🔛 is this Thursday, February 24 in Young Hall 4216, and the competition will last till the following Thursday! ~ Come come ~, and as Abraham Lincoln 🎩 would say, “Be there or be square 🟨.”',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/38P6BedjG',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Explore: Tech & Society - Fireside Chat with Apurva Panse',
    allDay: false,
    start: 1645750800000,
    end: 1645754400000,
    location: 'Zoom',
    committee: 'board',
    description:
      "Interested in working in working at Google or going to law school? Apurva Panse successfully pursued both! Come ask her questions about working in tech, pursuing law with a background in tech, and more at our fireside chat! 🔥\n\nApurva is a first-year student at NYU Law and is interested in protecting civil rights in the digital age. She graduated from UCLA in 2018 with an undergraduate degree in computer science. At UCLA, she was involved in ACM, Camp Kesem, and was the head learning assistant for Smallberg's intro computer science courses. Prior to starting law school, Apurva worked for several years at Google and YouTube. \n",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://bit.ly/explorefiresidechat',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1645668000000,
    end: 1645675200000,
    location: 'Boelter 2760',
    committee: 'hack',
    description: (
      <>
        We&apos;re racing towards the finish line, so join us for one final
        sprint 🏃 at ACM Hack&apos;s Hack Sprint. 🚨This Wednesday, February 23
        from 6-8 PM PST at Boelter 2760 we&apos;ll be having a special guest
        speaker! Kevin Tan, a full-time iOS developer 👨🏻‍💻 for a startup called
        Raya (and former ACM president), will be giving a talk 🎤 about what
        it&apos;s like being an iOS developer, what it entails, and how he
        developed the skills necessary for the job both inside and outside of
        the classroom. Afterwards, you can hang out and chill or join our work
        session for people who are working on building their very own iOS
        app📱!!! Don&apos;t forget to fill out the RSVP form! We look forward to
        seeing you! 💜
        <br />
        <br />
        RSVP:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s7-rsvp">
          http://links.uclaacm.com/hacksprint22-s7-rsvp
        </a>
      </>
    ),
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1xictx2Yn',
        ext: true,
      },
    ],
  },

  // week 9
  {
    id: 101,
    title:
      'Explore: Tech & Society - Digital Privacy Discussion with Philosophy Club',
    allDay: false,
    start: 1646186400000,
    end: 1646190000000,
    location: 'Dodd 399',
    committee: 'board',
    description:
      'What should tech companies be able to do with our data? How trustworthy are our favorite services? Who’s responsibility is it to regulate digital platforms? Discuss these questions and more at our collaboration with the Undergraduate Philosophy Club! ✨',
    links: [],
  },
  {
    id: 102,
    title: 'CS32 Interview Track',
    allDay: false,
    start: 1646359200000,
    end: 1646366400000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "This week we'll be holding a contest! We'll be providing problems based on topics from previous workshops. The top 3 winners will be eligible to win prizes!",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/91829572673?pwd=SG5ROHpXYWM4S0pXTUkrby9MbnhHZz09',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Students Run Studios Winter Showcase',
    allDay: false,
    start: 1646535600000,
    end: 1646542800000,
    location: 'Hybrid on Discord and TBD physical location',
    committee: 'studio',
    description:
      "We're one quarter into Studio's flagship program Students Run Studios (SRS), in which teams of students develop indie games! At this showcase, we'll celebrate the progress of our twelve teams this year, and you'll have the opportunity to ask individual teams more questions about their development process in person and also in the Discord server. We will have questions about each game, and for each correct answer you submit, you earn a raffle ticket for a $10 Amazon gift card.",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/1423025621477688',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Hack Sprint Mobile Development Series',
    allDay: false,
    start: 1646272800000,
    end: 1646280000000,
    location: 'Boelter 2760',
    committee: 'hack',
    description: (
      <>
        This is it, you made it to the end! 🏁 Congrats!! 🎉 🎉 Join us this
        Wednesday, March 2 from 6-8PM PST at Boelter 2760 for a 🍕pizza party🍕!
        Hang out and chill at the end of the quarter and see what people have
        been working on during the quarter with our Hack Sprint Project
        Showcase. Be inspired by cool apps, cool people, and even cooler food
        🙃. As always, please remember to fill out our RSVP form, and we
        can&apos;t wait to see you all there! 💜
        <br />
        <br />
        RSVP:{' '}
        <a href="http://links.uclaacm.com/hacksprint22-s8-rsvp">
          http://links.uclaacm.com/hacksprint22-s8-rsvp
        </a>
      </>
    ),
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/5mbh1ckHu',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'ACM-W ConScience: Women in the Tech Industry',
    allDay: false,
    start: 1646272800000,
    end: 1646276400000,
    location: 'Ackerman Union 2410',
    committee: 'w',
    description:
      "Hey hey hey! Come out for ACM-W's second installment of conScience for the quarter! Join us this Wednesday as we learn about the current state and recent history of women in the tech industry! We'll be discussing topics like: \r\n- What women have contributed to the tech world 🌐\r\n- Important women currently involved in tech 🖥️\r\nWe hope to see you there as we discuss this fascinating topic 💗",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1ClT3RDtK',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title:
      'Engineering & CS Luncheon with the Venture Accelerator at UCLA Anderson',
    allDay: false,
    start: 1646940600000,
    end: 1646944200000,
    location: 'UCLA Anderson School of Management North Terrace',
    committee: 'board',
    description:
      'Are you interested in entrepreneurship? Do you want to work with companies out of Anderson? Or, do you just want some FREE FOOD? Join us for a free Engineering & CS x Anderson lunch and network with some startup founders and VCs! To attend, you must RSVP on the Eventbrite!',
    links: [
      {
        text: 'Eventbrite',
        href: 'https://www.eventbrite.com/e/engineering-cs-luncheon-with-the-venture-accelerator-at-ucla-anderson-tickets-277775151957',
        ext: true,
      },
    ],
  },

  {
    id: 101,
    title: 'ACM Game Night',
    allDay: false,
    start: 1646535600000,
    end: 1646542800000,
    location: ' Sunset Village Learning Center',
    committee: 'board',
    description:
      " Tired after midterms? 😭 Feeling burnt out after CS 32 Project 3? ☠️ Is school just NOT IT right now?\r\nMaybe you’ve been thinking about making new friends…🧑🏻Trying to find that one study buddy that becomes something more than a buddy🙋‍♀️🙋‍♀️🙋‍♀️?!?!? Hopefully, even find the one…\r\nIf so, join us for ACM Game Night at Sunset Village Learning Center 🌅 on Saturday, March 5, 2022, from 7-9PM PST. You can engage in board games, play with the Switch, watch TV, play poker, and more!\r\nThere will also be 🍪🍪🍪INSOMNIA COOKIES🍪🍪🍪for everyone attending. Come chat, interact with others, and make some new friends!\r\nSee you there!!\r\n(It's located @ Delta Terrace next to Cafe 1919 & the Housing Mail Center)",
    links: [
      {
        text: 'Facebook Event',
        href: ' https://fb.me/e/6ApmQxTbc',
        ext: true,
      },
    ],
  },

  {
    id: 102,
    title: 'Studio Game Night Social',
    allDay: false,
    start: 1649556000000,
    end: 1649561400000,
    location: 'Engineering VI 289',
    committee: 'studio',
    description:
      'Studio Game Night is back! Join Studio this Friday from 7:00 - 9:00 PM at Engineering VI 289 for some chill vibes. Meet up with your fellow SRS team members or meet new people apart of the Studio community. There will be snacks and board games, so come through for a fun break from school before midterms! 🤩',
    links: [],
  },

  // Week 3 S22
  {
    id: 100,
    title: 'Cyber Academy: Reverse Engineering and Dynamic Analysis',
    allDay: false,
    start: 1649898000000,
    end: 1649905200000,
    location: 'Bunche Hall 3211 (zoom link TBA in Cyber Discord)',
    committee: 'cyber',
    description:
      'Want to learn about examining computer memory during program execution? Need help with your CS projects? Come to our workshop this week to learn all about dynamic analysis! Whether you want to learn the fundamentals or already know a bit and are just looking for tips and tricks to make your life easier, we can help!',
    links: [{ text: 'Facebook Event', href: 'none', ext: true }],
  },
  {
    id: 101,
    title: 'Hot Tech Tour ',
    allDay: false,
    start: 1649898000000,
    end: 1649905200000,
    location: 'Boelter 9436',
    committee: 'hack',
    description:
      "For the first time ever, ACM Hack is putting on a 🔥 LIT 🔥 new workshop/competition series called Hot Tech Tour! Throughout the quarter, we'll introduce several technologies such as Git and Svelte, show you the ropes, and then pit you against each other in our fast paced competition sessions! If you're interested in cool technologies that go beyond what you'll learn in class and challenging puzzles that will test your new knowledge, then come on out to Hot Tech Tour Wednesdays 6-8 PM in Boelter 9436. Our first session will be Wednesday, April 13th and it will cover Git, VS Code, and the Shell. See you there!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2ZUSMdlHj',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Beginner Track++ Workshop #1',
    allDay: false,
    start: 1649898000000,
    end: 1649905200000,
    location: 'Kerckhoff Hall Meeting Room 133',
    committee: 'icpc',
    description:
      'Get your engines revving and your wheels rolling, because ICPC is zooming into another quarter of exhilarating competitive programming workshops! Get your feet wet in the vast realm of competitive coding with our Beginner Track++ workshop series on Wednesdays at 6pm in Kerckhoff Hall Meeting Room 133. This week we will be kicking off with an introductory workshop chalk-full of coding tips, problem-solving strategies, and mind-bending practice problems that are sure to get you psyched for competitive programming. Be there or be to the power of two! (Intended for people with roughly CS31 or CS32 experience)',
    links: [{ text: 'Facebook Event', href: 'none', ext: true }],
  },
  {
    id: 103,
    title: 'Interview Track Workshop #2',
    allDay: false,
    start: 1649984400000,
    end: 1649991600000,
    location: 'Engineering VI Room 289',
    committee: 'icpc',
    description:
      "Wanna learn how to ace your technical interviews? 👀 Come to ICPC's Spring Interview Workshop, where we'll be going over 🦖 data structures, algorithm, and proper coding techniques 🦖 to prep for your next coding interview! Regardless of whether you already have an internship or not, this workshop will be very useful for the 🔅current 🔅 AND ⚠️ upcoming application season ⚠️ too (because some applications start ridiculously early in this field ) 🥴😩. This workshop will cover algorithms for graphs 📈 and trees 🌲 , such as BFS/DFS, and practice problems in related topics. We will also be holding the first mock interviews 👩🏻‍💼👨🏻‍💻 of the quarter at the end of the workshop! The workshop is held at Engineering VI 289 on Thursday (4/14) at 6PM. We can’t wait to see you there!! 🥳🤩",
    links: [{ text: 'Facebook Event', href: 'none', ext: true }],
  },
  {
    id: 105,
    title: 'Spring Officer Applications',
    allDay: false,
    start: 1650005940000,
    end: 1650005940000,
    location: 'Application Form',
    committee: 'board',
    description:
      'Spring has sprung and so have ACM Spring Officer Applications! Some ACM Committees are looking for officers this Spring so apply if you would like to be an ACM Officer! You will join a community of kind and dedicated students that are passionate about Computer Science. Applications are due this Thursday (April 14, 2022). All experience levels are welcome!',
    links: [
      {
        text: 'Application Form',
        href: 'https://forms.gle/SRkRD8G6xhXoqzSc9',
        ext: true,
      },
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2mSVKmVdW',
        ext: true,
      },
    ],
  },

  // Week 4 S22
  {
    id: 100,
    title: 'Mini Game Jam',
    allDay: false,
    start: 1650420000000,
    end: 1650427200000,
    location: 'MS 5127',
    committee: 'studio',
    description:
      "Interested in adding your own touch to games but don't have that much time on your hands or have little experience building games? Then ACM Studio's first ever Mini Game Jam on Tuesday April 19th at MS 5127 is perfect for you! We'll work in small teams on understanding and adding new features to a game which was previously submitted in a Game Jam. You'll have the freedom to implement any features you'd like while having others around you to help work through any issues you may come across. Depending on your level of interest, some things you could experiment with are adding new movement mechanics, animation events, post-processing effects, and enemy or map generation. No experience is necessary!",
    links: [{ text: 'Facebook Event', href: 'N/A', ext: true }],
  },
  {
    id: 101,
    title: 'Beginner Track++ Workshop #2',
    allDay: false,
    start: 1650506400000,
    end: 1650513600000,
    location: 'ACM Clubhouse',
    committee: 'icpc',
    description:
      'Get your engines revving and your wheels rolling, because ICPC is zooming into another quarter of exhilarating competitive programming workshops! Get your feet wet in the vast realm of competitive coding with our Beginner Track++ workshop series on Wednesdays at 6pm in Kerckhoff Hall Meeting Room 133. This week we will be continuing on from our intro/ad hoc workshop and into the wild world of graph theory... Be ready for hidden graph definitions, feral graph search algorithms, and some rare graphical coding problems! Be there or be to the power of two! (Intended for people with roughly CS31 or CS32 experience)',
    links: [{ text: 'Facebook Event', href: 'none', ext: true }],
  },
  {
    id: 102,
    title: 'Cyber Academy: Buffer Overflow and Binary Exploitstion',
    allDay: false,
    start: 1650502800000,
    end: 1650510000000,
    location: 'Bunche 3211 and Zoom',
    committee: 'cyber',
    description:
      'Ever wanted to be able to modify a program to arbitrarily execute your own code? Well you’re in luck! Come to our workshop on buffer overflow and binary exploitation in week 4 to learn more about how to take advantage of the stack using non-arbitrated input.',
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/94178019377',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Hot Tech Tour:',
    allDay: false,
    start: 1650502800000,
    end: 1650510000000,
    location: 'Boelter 9436',
    committee: 'hack',
    description:
      'This week Hack is back with another session of HOT TECH TOUR, but this time with a twist :0 This Wednesday from 6-8pm in Boelter 9436, we will be putting you head to head with other workshop attendees to see how much you learned last week! There will be fun puzzles that involve scripting and the shell, so make sure to study up! And of course, there will be food 👺.\r\nDon’t forget to RSVP!\r\nSee you there!\r\n',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1J7bXudPj',
        ext: true,
      },
      {
        text: 'RSVP Link',
        href: 'http://links.uclaacm.com/HotTechTour-s2-RSVP',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Video Game Music with Robby Good',
    allDay: false,
    start: 1650592800000,
    end: 1650600000000,
    location: 'Boelter 5422',
    committee: 'studio',
    description:
      'Come chat with Robby, a 4th year music composition and percussion performance major, about what kinds of thought processes and considerations go into making video game music, such as genre, mood, and more! Bring your questions about video game scenarios and situations that would need music or sound design. :)',
    links: [],
  },
  {
    id: 105,
    title: 'Interview Track Office Hours',
    allDay: false,
    start: 1650589200000,
    end: 1650596400000,
    location: 'Zoom',
    committee: 'icpc',
    description:
      "Wanna learn how to ace your technical interviews? 👀 Come to ICPC's Spring Interview Workshop, where we'll be going over 🦖 data structures, algorithm, and proper coding techniques 🦖 to prep for your next coding interview! This week we will be holding office hours to answer any questions you may have about previous workshops, or in general! We will be online, Thursday (4/21) at 6PM. We can’t wait to see you there!! 🥳🤩",
    links: [
      {
        text: 'Zoom Link',
        href: 'https://ucla.zoom.us/j/94219232675',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'Movie Night',
    allDay: false,
    start: 1650679200000,
    end: 1650686400000,
    location: 'Engineering VI 289',
    committee: 'studio',
    description:
      "Want to find some inner peace  to cope with the onslaught of midterms? Looking for the secret ingredient  to acing all your midterms? Come to Studio's Movie Night from 7-9 PM this Friday, April 22 tentatively at Eng VI 289! We'll be watching Kung Fu Panda  ",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/groups/uclaacmstudio/posts/4976379645783901/',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'HackSpace: Project Liftoff',
    allDay: false,
    start: 1650589200000,
    end: 1650596400000,
    location: 'Math Sciences 6229',
    committee: 'hack',
    description:
      "📡Hailing all HackSpace teams! This is mission control—your operations are a go! Welcome to the second session of HackSpace! So far, we have focussed on helping you condense your nebulous 🌌 app ideas into concentrated brilliance. Now, we’re gonna get you, your team, and your project on the path to going supernova 🌠 with a dedicated work session with full access to our entire team of mentors and some team-building games 🎮. So maybe midterm season’s getting you down, but sa-turn 🪐 your frowns upside down, cus we’ve got Diddy Riese cookies 🍪 that you’ll undoubtedly gravitate towards and some truly astronomical vibes! 🔭 🚨🚨Come out and join us this Thursday April 21 from 6-8 PM at Mathematical Sciences 6229. It’ll be all ☀️sun☀️ and games!! Missed last week's session? Get caught up with the session slides",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1gBQwyAA4',
        ext: true,
      },
      {
        text: 'Session Slides',
        href: 'http://links.uclaacm.com/session-2',
        ext: true,
      },
    ],
  },

  // Week 5 S22
  {
    id: 100,
    title: 'Beginner Track++ Workshop #3',
    allDay: false,
    start: 1651111200000,
    end: 1651118400000,
    location: 'ACM Clubhouse (Across from Boelter 2760)',
    committee: 'icpc',
    description:
      'Get your engines revving and your wheels rolling, because ICPC is zooming into another quarter of exhilarating competitive programming workshops! Get your feet wet in the vast realm of competitive coding with our Beginner Track++ workshop series on Wednesdays at 7pm in the ACM Clubhouse across from Boelter 2760. This week we will be continuing with our two-part graph theory crash course with our Advanced Graph Theory Workshop. Come to learn more about graph traversal algorithms, trees, cycle detection, and topological sorting! Be there or be to the power of two! (Intended for people with roughly CS31 or CS32 experience)',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1NaX8aoxN',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'Interview Track Workshop #3',
    allDay: false,
    start: 1651194000000,
    end: 1651201200000,
    location: 'Engineering VI Room 289',
    committee: 'icpc',
    description:
      "Wanna learn how to ace your technical interviews? 👀 Come to ICPC's Spring Interview Workshop, where we'll be going over 🦖 data structures, algorithm, and proper coding techniques 🦖 to prep for your next coding interview! This weeks workshop will cover the applications of binary search and binary search trees! The workshop is held at Engineering VI 289 on Thursday (4/28) at 6PM. We can’t wait to see you there!! 🥳🤩",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1KEarFAfu',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Advanced Track: Collaborative Coding',
    allDay: false,
    start: 1651197600000,
    end: 1651204800000,
    location: 'Boelter 5422',
    committee: 'studio',
    description:
      "In the industry, you're rarely ever going to be building games alone. Come join us this Thursday to learn about some of the tools and techniques for coding in parallel with other developers and then apply it all in a 4-day mini project with your peers!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/338378608300208',
        ext: true,
      },
    ],
  },

  // Week 1 F22
  {
    id: 100,
    title: 'ACM Fall General Meeting 2020',
    allDay: false,
    start: 1664240400000,
    end: 1664247600000,
    location: 'Ackerman Grand Ballroom',
    committee: 'board',
    description:
      'Are you interested in building your own iOS application, developing neural networks, creating your own video game from scratch, or just learning about what technology is? Then come join ACM on Monday, September 26th from 6 PM - 8PM PT at Ackerman Grand Ballroom for our Fall General Meeting (GM) to learn about how you can get involved in these and more!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/824096978764689',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'Studio Fall General Meeting',
    allDay: false,
    start: 1664503200000,
    end: 1664508600000,
    location: 'Haines Hall A18',
    committee: 'studio',
    description:
      "Do you enjoy playing games? Want to learn how to make them? 🎮 💖 ACM Studio is hosting our Fall General Meeting this Thursday, September 29th @7:00PM in Haines A18. Here you can meet our wonderful board of officers and learn more about what we do here in Studio, from game jams to our Student Run Studios program to fun socials. If you have any interest in developing games from start to finish, we're the committee for you! Whether it's programming, art, narrative, sound design, UI/UX, or any other aspect, you are welcome to join, regardless of skill level 🎵 🎨 💻 !! Come check us out, and let's make some games together! See you there 💖",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.instagram.com/p/CivIm1wJfyr/',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Ludum Dare 51 Kickoff',
    allDay: false,
    start: 1664587800000,
    end: 1664595000000,
    location: 'Engineering VI 289',
    committee: 'studio',
    description:
      "Ready to open the school year with a bang🤯 ? The biannual game jam, Ludum Dare is having its 51st jam this Friday, September 30th. The 🕐72 hour countdown🕐  begins once the jam's theme is revealed at 3:00 pm. Studio will be hosting a kickoff in E6 289 at 6:30 pm on Friday, so come join us and meet your team 💖 and get on the game jam grind! Don't worry if you missed the initial sign ups! You can sign up for the waitlist if you're interested in looking for a team through Studio: https://forms.gle/rNESbkHmRUXE3sMeA. Get ready to brainstorm, create, and realize a full game in just 72 hours!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.instagram.com/p/Cissl1WPwkF/',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Cyber Fall GM',
    allDay: false,
    start: 1664586000000,
    end: 1664593200000,
    location: 'KH 133+135',
    committee: 'cyber',
    description:
      "🧩 Like solving technical puzzles? 🖥 Want to learn all the extra, juicy details of computers? 🎯 Curious how organizations are attacked, both digitally and socially? If you said \"yes\" to any of these, ACM Cyber is the club for you! 🔐\n\nCome on over to Cyber's Fall General Meeting on Friday, September 30th from 6 to 8 pm at Kerchoff Hall 133 and 135 to learn more about what we do, meet the officers, befriend some like-minded individuals, and try solving some challenges! Bring your lassos (actually please don't), it's 👢cowgirl/boy/person themed🐴! No experience necessary :)\n\n(note: bring a laptop to delve into the cool challenges! or share one with someone you meet!)",
    links: [],
  },
  {
    id: 104,
    title: 'ICPC Team Kickoff',
    allDay: false,
    start: 1664643600000,
    end: 1664661600000,
    location: 'SCRC Mesa Lawn + Boelter 4760',
    committee: 'icpc',
    description:
      'The ICPC Team Kickoff is for those hoping to try out for the ICPC team or interested in algorithmic programming. Attendees will get to know each other through team building activities and hone their skills in a warm up contest. Lunch will be provided! Kickoff will take place 10/1 from 10AM-3PM starting at the Sunset Recreation Center for some team games, and moving to Boelter 4760 for a warm up problem set.',
    links: [],
  },
  {
    id: 105,
    title: 'CS Career Fair',
    allDay: false,
    start: 1288594800000,
    end: 1270105200000,
    location: 'Bruin Reception Room',
    committee: 'board',
    description:
      'It is that time of year again! The UCLA Computer Science Department, in collaboration with ACM and UPE, is hosting the annual Computer Science Career Fair. Come learn about opportunities with our industry affiliates, such as Green Hills Software, Meta, and TikTok!\nThis event will be held in person in the Bruin Reception Room and is first come first serve! Spots are limited.\n\nRSVP with your @ucla.edu email: https://tinyurl.com/ucla-cscf-rsvp-22\nDeadline to register: Saturday, October 3rd at 11:59pm PT.\nAllowed Majors: CS, CSE, and CE only\n\nThe sessions for the event are as follows:\n1. 11:00AM -12:00PM (open to UPE honors students only)\n2. 12:00PM - 1:00PM (open to UPE honors students only)\n3. 1:00PM - 2:00 PM PT (open to all)\n4. 2:00PM - 3:00 PM PT (open to all)\n5. 3:00PM - 4:00 PM PT (open to all)',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/groups/uclaacm/permalink/5696009730420509/',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'ACM AI Fall Info Session',
    allDay: false,
    start: 1664591400000,
    end: 1664595000000,
    location: 'Mong Learning Center in Engineering VI',
    committee: 'ai',
    description:
      "Interested in Artificial Intelligence 🤖, but have no idea what it is or where to pursue it at UCLA 🐻? Don’t worry, we've got you covered! Come out to ACM AI’s Fall Info Session on Friday, September 30th 7:30 - 8:30 pm at the Mong Learning Center (in Engineering VI) to learn more about our initiatives for the Fall '22 quarter, to talk to our officers and to learn how to get involved! 🧑‍💻\n\nACM AI is focused on creating a passionate and socially conscious community of UCLA students dedicated to learning about artificial intelligence 🧑‍🎓 and building meaningful projects 🔬. Throughout the year, we host many workshops, projects, and events for attendees with varying levels of experience - from beginner to advanced! 🧑‍🚀\n\nMost importantly, we welcome students of all backgrounds, majors, and years and have offerings that can benefit each one of you! See you on Friday 😎",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2hY1qii6I',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'ACM Hack Fall General Meeting',
    allDay: false,
    start: 1664413200000,
    end: 1664416800000,
    location: 'Haines Hall Room A2',
    committee: 'hack',
    description:
      "Does building projects and exploring software development sound exciting to you? Do you want to learn how to make the next Instagram or Facebook? At ACM Hack, we’re committed to helping passionate students like you do exactly that! 🧑‍💻\n\nThroughout the year, we host interactive workshops on web/mobile development and software skills, as well as fun one-off events like our annual hackathon. All of our events are ✨beginner-friendly✨ and open to all majors. \n\nIf this sounds interesting to you, come out to ACM Hack’s Fall GM this Wednesday to meet our wonderful team and learn more about what we do, what events we'll be putting on this upcoming quarter, and how you can get involved! 💜\n\nRSVP here: http://links.uclaacm.com/hack-gm-fall22",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/5f62mfpxG',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'ICPC Team Kickoff',
    allDay: false,
    start: 1664643600000,
    end: 1664661600000,
    location: 'Outdoors + Boelter 4760',
    committee: 'icpc',
    description:
      'The ICPC Team Kickoff is for those hoping to try out for the ICPC team or interested in algorithmic programming. Attendees will get to know each other through team building activities and hone their skills in a warm up contest. Lunch will be provided! Kickoff will take place 10/1 from 10AM-3PM starting outdoors for some team games, and moving to Boelter 4760 for a warm up problem set. RSVP here!\n\nUPDATE: The outdoor location will be confirmed in an email sent out Friday to those RSVPed.',
    links: [],
  },
  {
    id: 109,
    title: 'All About ACM Internship Panel',
    allDay: false,
    start: 1664845200000,
    end: 1664848800000,
    location: 'To Be Announced but in-person',
    committee: 'board',
    description:
      'Are you interested in getting more involved with ACM and eventually becoming an officer?🧑‍💻 \nIf so, the ✨ACM Internship Program✨ is for you!Join us for the 💥All About ACM Internships Panel💥 on Monday, October 3rd from 6 - 7 pm.\nLocation: To Be Announced',
    links: [],
  },
  {
    id: 110,
    title: 'Front-end Engineering at Meta',
    allDay: false,
    start: 1665104400000,
    end: 1665108000000,
    location: 'Engineering VI - Cohen Room',
    committee: 'board',
    description:
      'Come out to learn more about front-end engineering at Meta! Please RSVP if you are interested in attending. Hope to see you there!',
    links: [],
  },
  {
    id: 111,
    title: 'Deloitte Tech Trends',
    allDay: false,
    start: 1664845200000,
    end: 1664850600000,
    location: 'Engineering VI 289',
    committee: 'board',
    description:
      'Interested in technology trends? Join Deloitte at this special event\nto learn more about the emerging\ntechnologies in use at Deloitte and how\npractitioners leverage these\ntechnologies to solve business\nproblems.',
    links: [],
  },

  // Week 2 F22
  {
    id: 100,
    title: 'ACM-W Fall General Meeting 2022',
    allDay: false,
    start: 1664935200000,
    end: 1664938800000,
    location: 'Math Science 5203',
    committee: 'w',
    description:
      'Are you interested in learning how diversity, representation, and inclusivity are huge parts of the tech industry? Do you want to hear from industry professionals about how to enhance your skills?\n\nIf you are curious about any of these things, come out to the ACM-W Fall General Meeting on October 4 at 7:00 PM to learn more!!! We will introduce our upcoming events and you will get a chance to learn more about what we do!!\n\nWe look forward to meeting you!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/25PnVG0br',
        ext: true,
      },
    ],
  },
  {
    id: 101,
    title: 'ACM Hack | Hackschool Session 1: Intro to React & HTML',
    allDay: false,
    start: 1665018000000,
    end: 1665025200000,
    location: 'Haines Hall A2',
    committee: 'hack',
    description:
      "Have you ever wanted to learn how to make a website, or are procrastinating on making your own personal website? 🖥️ Then keep reading, because school's back in session 🧑‍🏫🔔 for ACM Hack's 6th annual Hackschool this Fall quarter! 🎉\n\nHackschool is a beginner-friendly workshop series guiding you through all the skills and knowledge you need to be able to make a snazzy personal website! We'll be teaching you all you need to know for HTML, CSS, and JavaScript through React, the hottest web development technology out there currently. 🔥😮‍💨We'll also be awarding to $100 in prizes at the end for the best websites created during Hackschool! 💸👀\n\nWhether you've never coded or made a website before, or you'd just like a refresher on web development skills, we welcome everyone to our workshops! Starting this week, workshops will be held **weekly on Wednesdays from 6-8pm PT in Haines Hall, Room A2**. Come to our first session, where you'll learn about all the basics of React and HTML to get started with creating awesome websites! Hope to see you there! 💜",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1DyIHjLes',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Psi Beta Rho Interest Meeting',
    allDay: false,
    start: 1665104400000,
    end: 1665111600000,
    location: 'Boelter Hall 4685 + 4801',
    committee: 'cyber',
    description:
      "Want to be a hacker? 💻Come join Psi Beta Rho, ACM Cyber's competitive CTF team! 🥳 CTFs or Capture-the-Flags are competitions where you solve cybersecurity problems to earn points. 💯 This is a great opportunity to add to your resume and build on the skills you have learned at Cyber Academy! 📄 😎We will be having an interest meeting on Thursday, October 6th from 6-8 pm. Location at the ACM Clubhouse (Boelter Hall 4685 + 4801). NO EXPERIENCE NECESSARY! All skill levels and experiences are welcome! We will be going through information about the Fall 2022 season and having a short social where we will do some challenges (so make sure to bring a laptop)! Be sure to invite your friends!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/5seYOjZ4u',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'ACM Studio Boba Night',
    allDay: false,
    start: 1665194400000,
    end: 1665199800000,
    location: 'Bruin Bear',
    committee: 'studio',
    description:
      "Did the onslaught of assignments in Week 2 leave a bitter taste in your mouth? Sweeten up the end of the week by joining ACM Studio for a 🧋 boba run 🧋! Meet us at the Bruin Bear 🐻 at 7:00PM on Friday October 7, and we'll head down to Westwood together, and we can explore our options after we get there 👀",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/774071490375012',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'ICPC Team Tryout #1',
    allDay: false,
    start: 1665255600000,
    end: 1665268200000,
    location: 'Boelter 4760',
    committee: 'icpc',
    description:
      'Think you have what it takes? 💪 Come tryout for the UCLA ICPC team! Each Fall, we host two tryouts to select the 15 best contestants 🤩 to represent UCLA at ICPC Regionals, where we compete against other schools in SoCal for a chance to advance to the National Championship or even the World Finals!',
    links: [],
  },

  // Week 3 F22
  {
    id: 100,
    title: 'Intro to Competitive Programming Workshop #1',
    allDay: false,
    start: 1665450000000,
    end: 1665455400000,
    location: 'Kerckhoff State Room (Room 133+135)',
    committee: 'icpc',
    description:
      'Are you interested in problem-solving? Do you like computer science? Have you heard of competitive programming? Now you have! Come out to Kerckhoff State Room (133+135) on Mondays from 6:00-7:30pm to see what competitive programming is all about. We have food, prizes, practice problems, and more, and we will be having weekly workshops all quarter long on topics like Strings, Math, Divide & Conquer, Binary Search, and more. This Monday, we will be hosting our first workshop of the quarter on Intro & Ad Hoc, so grab your laptops and your thinking caps and show out for some fun and competitive programming wisdom!',
    links: [],
  },
  {
    id: 101,
    title: 'Intro Track: Roll a Ball pt. 1',
    allDay: false,
    start: 1665453600000,
    end: 1665460800000,
    location: 'Boelter 2760',
    committee: 'studio',
    description:
      "Interested in learning about gameplay programming but don't know where to start? Come through tomorrow to the  🏀 Roll a Ball (Part 1) ⚾  of the Intro Track at Boelter 2760, 7:00 - 9:00 PM. No experience in coding or game dev is required! Please try to download Unity prior to the tutorial, we will be using 2021.3.11f1 but any version is good. Additionally, it would be great if you could create an empty 3D project prior to the tutorial. Some of these instructions 📖  can be found on our GitHub repository along with the rest of the tutorial to help with following along live or completing asynchronously. Join us where we'll be going over navigating Unity, creating a scene and objects, and scripting. Also bring a mouse 🐭 if you have one!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/465011785419358',
        ext: true,
      },
      {
        text: 'Github Repo',
        href: 'https://tinyurl.com/Roll-A-Ball-part1-repo',
        ext: true,
      },
      {
        text: 'Slides',
        href: 'https://tinyurl.com/Roll-A-Ball-part1-slides',
        ext: true,
      },
    ],
  },
  {
    id: 102,
    title: 'Beginner Track Workshop #1',
    allDay: false,
    start: 1665453600000,
    end: 1665459000000,
    location: 'Boelter Hall 4760',
    committee: 'ai',
    description:
      'Are you interested in AI but don’t know where to start? 🤖 Have no programming experience but want to learn? 🧑‍💻 Curious about how machine learning (ML) models work and how to code them yourself? 🧠Then join us for ACM AI’s first Beginner Track workshop from 7 to 8:30 pm this Monday (October 10th) at Boelter Hall 4760!\n\nThe Beginner Track delves into the core fundamentals of machine learning! Workshops will not only have interactive and team-bonding activities with prizes that’ll help you understand ML theory, but also provide coding walk-throughs designed to help you put that theory to practice.\n\nIf you have no experience or no knowledge about machine learning (ML), this workshop is perfect for you as we assume no prior knowledge in ML or programming.\n\nBy the time the weekly track ends (around week 9), you’ll have a solid grasp of how ML models work on a conceptual level and be able to program some models on your own!\n\nAll of our workshops are walk-in! Drop by whenever you like. We hope to see you there! 🎉\n\nFeel free to ask any of your questions in the comments or in our DMs. 📩',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/5iV42UnrD',
        ext: true,
      },
    ],
  },
  {
    id: 103,
    title: 'Special Topics Track: Programming Essentials',
    allDay: false,
    start: 1665540000000,
    end: 1665547200000,
    location: 'Boelter 4685',
    committee: 'studio',
    description:
      'Kicking off our Special Topics Track with a quick intro on building games with Unity 👨‍💻! Join us this Tuesday from 7 - 9 PM at Boelter 4685, where we’ll get you all set up with the materials for our main tutorial sessions and show you some of the tricks to building solid code in Unity!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/3313656115563398',
        ext: true,
      },
    ],
  },
  {
    id: 104,
    title: 'Advanced Track Workshop #1',
    allDay: false,
    start: 1665540000000,
    end: 1665545400000,
    location: 'Boelter Hall 7460',
    committee: 'ai',
    description:
      'Have you ever thought of designing a self-driving car? 🚗 Have you ever wondered how Instagram always seems to know what you want before you want it? 👁 Have you ever wanted to understand how computers can learn temporal trends in numerical as well as textual data? 📈 Come out to the first workshop of ACM AI’s Advanced Track this Tuesday (11th October) at 7 pm at Boelter Hall 4760!\n\nOur Advanced Track workshop is concentrated on the theory and application of neural networks covering deep learning concepts crucial for computer vision and natural language processing (NLP)! 🤖 Alongside your peers, you’ll be spending ample time on machine learning theory, a hands-on PyTorch project, and interactive activities with fun prizes – all aiming to equip you with the necessary knowledge to integrate in your personal deep learning projects. 🛠\n\nAfter completing this track, you will also have the opportunity to apply your skills from the get go through ACM AI’s very own Projects track! 💮\n\nPrior experience in programming and machine learning (such as linear and logistic regression, and basics of fully connected neural networks) is recommended for the Advanced Track but regardless of where you stand, don’t hesitate to stop by and see for yourself!\n\nAll of our workshops are walk-in! Drop by whenever you like. Hope to see you there! 🎉',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/33LzIxQok',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Cyber Academy: OSINT & Social Engineering',
    allDay: false,
    start: 1665630000000,
    end: 1665637200000,
    location: 'Boelter 4760',
    committee: 'cyber',
    description:
      'Ever want to learn how to (ethically) cyberstalk someone? How to prevent yourself from being cyberstalked? Come learn about using open source intelligence (OSINT) and social engineering to learn juicy secrets about your frenemies!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1LPm9kiMv',
        ext: true,
      },
    ],
  },
  {
    id: 106,
    title: 'Creative Track: Concept Art Workshop',
    allDay: false,
    start: 1665626400000,
    end: 1665633600000,
    location: 'Boelter 5280',
    committee: 'studio',
    description:
      'Ever wanted to know what constitutes concept art for games, or what concept art is in general? Come to our CONCEPT ART WORKSHOP 🎨🖌 where we will guide you through the process of both understanding and CREATING concept art for your game ideas! We will be sharing some guidance and quick tips on how to do concept art, and you will create some concept art of your own. Come with your own supplies: sketchbooks, pencils, drawing tablets, or any other tools you can use to draw. Join us to create, learn, and meet some new people!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/465555872301415',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'Intro to Social Impact Technology',
    allDay: false,
    start: 1665626400000,
    end: 1665630000000,
    location: 'TBD',
    committee: 'board',
    description:
      "Are you interested in making an impact as a technologist but don't know where to start? Are you a senior stressed about recruitment? 😷 Come to our Careers in Social Impact Tech (SIT) event series to learn more about creating social impact, navigate recruitment season, and have a chance to connect with our speakers! This series will be held on Wednesday week 3, 4, 6, 8 - exact time and location TBD. The first event will be an introduction and open discussion on SIT with food and drinks provided! <3 Be there or be squared!\n ",
    links: [],
  },
  {
    id: 108,
    title: 'ACM Hack | Hackschool Session 2: Intro to CSS & Layout',
    allDay: false,
    start: 1665622800000,
    end: 1665630000000,
    location: 'Haines Hall A2',
    committee: 'hack',
    description:
      "Do you want to make your website look pretty and colorful? 🎨 You're in luck, because ACM Hack's Hackschool 🧑‍🏫 is back with its second session on CSS and Layout!\n\nAt this workshop, you'll learn how to work with images, text, and generally how to style the display of your content on the page! 👀\n\nThe workshop will be held Wednesday from 6-8pm PT in **Haines Hall, Room A2**. Food will be provided! 😋Hope to see you there! 💜",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1UnT73NXu',
        ext: true,
      },
    ],
  },
  {
    id: 109,
    title: 'CS in Health: Research Panel ',
    allDay: false,
    start: 1665709200000,
    end: 1665714600000,
    location: 'Boelter 4760',
    committee: 'board',
    description:
      "Interested in the application of big data and artificial intelligence to problems in medicine? Do you want to work in a lab that does cutting-edge research at the intersection of computer science, statistics, and biomedicine? Or learn more about how computer science contributes to research in genomics? Learn more about all these exciting intersectional domains from amazing UCLA professors who hold appointments in both the Computer Science and Computational Medicine Department.\n\n Professor Ernst, Sankararaman, Chiang will be attending this event! This panel will have a fun faculty introduction followed by a discussion/presentation of the faculty's labs. And how to join them!. \n\nLocation: Boelter 4760 \nDate and time: 6 pm to 7:30 pm on Thursday October 13\n*** RSVP Required: https://forms.gle/y3Y1p142JN12GLG28  ***\n**** Snacks and beverages will be provided **** \n\nIf you have any questions or concerns, please feel free to email acm@ucla.edu ",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/450720973793163',
        ext: true,
      },
    ],
  },
  {
    id: 110,
    title: 'Interview Track Workshop #1',
    allDay: false,
    start: 1665795600000,
    end: 1665802800000,
    location: 'Boelter 4760',
    committee: 'icpc',
    description:
      'Need help cracking the code interview? Our workshop series will review all the most important content for acing your coding interviews  - data structures, algorithms, coding techniques, problem solving skills. On top of that, we’ll be solving practice interview problems to hone your interviewing skills. This week’s workshop will focus on fundamental data structures and their designs. The workshop is held at Boelter 4760 on Friday (Oct. 14) at 6-8 PM. We can’t wait to see you there!\n\nFor this first workshop, we have an interest form to gauge interest in certain topics, as well as previous coding experience. Please fill it out if possible!\nInterest form link: http://links.uclaacm.com/ICPCInterviewTrackInterest',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2V6KuXhzX',
        ext: true,
      },
    ],
  },
  {
    id: 111,
    title: 'Hyper Light Speaker',
    allDay: false,
    start: 1665802800000,
    end: 1665810000000,
    location: 'Boelter 4760',
    committee: 'studio',
    description:
      "Heart Machine, the studio behind the hit indie game Hyper Light Drifter ✨, is coming to Boelter 4760 this Friday (October 14) 8-10PM! Come listen to Alx Preston, Heart Machine's founder & creative director, speak about his experiences with game development 🎮, and ask him questions you might have! We strongly recommend masking 😷 for this event -- the speaker is immunocompromised and will be wearing a mask for his own safety.\n\nThis is a rare opportunity, and worry not if you can't stay the whole time -- you're free to drop in late or leave early if that's what works best with your schedule!",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/1712949579105275',
        ext: true,
      },
    ],
  },
  {
    id: 112,
    title: 'ICPC Team Tryout #2',
    allDay: false,
    start: 1665957600000,
    end: 1665970200000,
    location: 'Boelter 4760',
    committee: 'icpc',
    description:
      'Think you have what it takes? 💪 Come tryout for the UCLA ICPC team and see if you can snatch the last 7 spots! 🧍 Each Fall, we host two tryouts to select the 15 best contestants 🤩 to represent UCLA at ICPC Regionals, where we compete against other schools in SoCal for a chance to advance to the National Championship or even the World Finals! 🌎 Check here for more information. 📄',
    links: [],
  },
  {
    id: 113,
    title: 'ACM Hack | Hack Kitchen',
    allDay: false,
    start: 1667710800000,
    end: 1667692800000,
    location: 'TBD',
    committee: 'hack',
    description:
      'Calling all culinary and coding enthusiasts alike! \nApplications are now OPEN for Hack Kitchen, ACM Hack’s food-themed 🍽️ coding puzzle competition! Join us for a day of cooking-show themed puzzles 🧩, during which you’ll get to explore Github, React, and more, while feasting on some good food 🍕, and competing to win prizes 🏆! Absolutely no experience is necessary, so sign up now!\n\nWhen: Saturday, November 5th, 2022. Deadline to apply: Monday, October 31st, 2022 at 11:59pm',
    links: [
      {
        text: 'Apply Here!',
        href: 'http://links.uclaacm.com/hack-kitchen-f22-application',
        ext: true,
      },
    ],
  },

  // Week 4 F22
  {
    id: 100,
    title: 'Intro Track: Roll a Ball pt. 2',
    allDay: false,
    start: 1666058400000,
    end: 1666065600000,
    location: 'Boelter 2760',
    committee: 'studio',
    description:
      "Interested in learning more about gameplay programming essentials? Come through Monday (10/17) to the 🏐 Roll a Ball (Part 2) ⚽ of the Intro Track at Boelter 2760, 7:00 - 9:00 PM. No experience in coding or game dev is required! We'll be going over Unity UI, collectable objects, respawning, and scene management. Bring a mouse 🐭 if you have one!",
    links: [],
  },
  {
    id: 101,
    title: 'Intro to Competitive Programming Workshop #2',
    allDay: false,
    start: 1666054800000,
    end: 1666060200000,
    location: 'Kerckhoff State Room (Room 133+135)',
    committee: 'icpc',
    description:
      'Are you interested in problem-solving? Do you like computer science? Have you heard of competitive programming? Now you have! Come out to Kerckhoff State Room (133+135) on Mondays from 6:00-7:30pm to see what competitive programming is all about. We have food, prizes, practice problems, and more, and we will be having weekly workshops all quarter long on topics like Strings, Math, Divide & Conquer, Binary Search, and more. This Monday, we will be hosting our second workshop of the quarter on Strings & Arrays, so grab your laptops and your thinking caps and show out for some fun and competitive programming wisdom!',
    links: [],
  },
  {
    id: 102,
    title: 'Special Topics Track: Physics and Planetary Gravity',
    allDay: false,
    start: 1666144800000,
    end: 1666152000000,
    location: 'Ackerman 2408',
    committee: 'studio',
    description:
      'Get ready for a lightning intro on Planetary Gravity and Physics by Henry and Cole from the Special Topics Committee! Build your very own Super Mario Galaxy-inspired outer space playground with us Wednesday 7-9pm at Ackerman 2408!',
    links: [],
  },
  {
    id: 103,
    title: 'AI Research Panel',
    allDay: false,
    start: 1666227600000,
    end: 1666233000000,
    location: 'Mong Learning Center, Engineering VI',
    committee: 'ai',
    description:
      'Calling all students interested in AI research at UCLA! Do you want to learn all about cutting-edge research in natural language processing 🗣️, machine learning for climate change research ☁️, automated reasoning 🤔, and more? Come out to our AI Research Panel on Wednesday, October 19 from 6 - 7:30 PM PDT in the Mong Learning Center in Engineering VI! Network with professors, chat with PhD students, and find out how you can get involved in research labs at UCLA! All majors are welcome - no artificial intelligence or computer science experience necessary.\n\nSign up here to get reminders about the panel: bit.ly/ACMAIFall22Research\n\nSee you there! 😇',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/1211994316377417',
        ext: true,
      },
    ],
  },
  {
    id: 105,
    title: 'Creative Track: Spritesheets and Tilemaps',
    allDay: false,
    start: 1666231200000,
    end: 1666238400000,
    location: 'Boelter 5280',
    committee: 'studio',
    description:
      "Interested in learning more about game art? 🎮 🎨 We know you are 😉 This week, we'll be learning about the art that you can use directly in a game! You'll learn about how to use Spritesheets and Tilemaps in Unity and the how-tos in creating the foundation of your characters and your game environment. We will also be using our spritesheets and tilemaps to make a small platformer game level that you can share! Come on by Boelter 5280 on Wednesday, October 19th from 7-9PM. 🚶Remember to bring a laptop with Unity 💻  installed on it so that you can follow along! ",
    links: [],
  },
  {
    id: 106,
    title: 'Cyber Academy: Scripting and Linux Fundamentals',
    allDay: false,
    start: 1666234800000,
    end: 1666242000000,
    location: 'Boelter 4760',
    committee: 'cyber',
    description:
      'Want to emulate the hackers of mainstream TV with cool terminal-based shenanigans? Tired of manually carrying out long tasks? Come out to Cyber’s scripting and Linux fundamentals workshop to learn all about what you can do with a terminal, get into some basic bash and Python, and build the foundation to become an elite hacker!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://www.facebook.com/events/878063223178167',
        ext: true,
      },
    ],
  },
  {
    id: 107,
    title: 'ACM Hack | Hackschool Session 3: Components & Props',
    allDay: false,
    start: 1666227600000,
    end: 1666234800000,
    location: 'Haines Hall A2',
    committee: 'hack',
    description:
      "Ready to learn more about what React has to offer? 🧑‍🏫 ACM Hack's Hackschool is back with its third session on Components & Props!\n\nAt this workshop, you'll learn about why React is so useful through one of its core features: components! 👀 You'll be able to improve your website development game and impress all your friends! 😤\n\nThe workshop will be held this Wednesday from 6-8pm PT in Haines Hall, Room A2. Hope to see you there! 💜\n\nRSVP: http://links.uclaacm.com/hackschool-f22-s3-rsvp",
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/1RhgALkC1',
        ext: true,
      },
    ],
  },
  {
    id: 108,
    title: 'Social Impact Tech: Club Panel',
    allDay: false,
    start: 1666227600000,
    end: 1666231200000,
    location: 'The Branch in Olympic',
    committee: 'board',
    description:
      "Are you trying to make an impact as a STEM student? Are you looking to get involved in tech clubs at UCLA? Come to Impact's Club Panel - the second event in our Social Impact Tech workshop series - to learn about different orgs that are radicalizing the tech scene at UCLA! 🤩You will get to connect with represeCome to The Branch in Olympic (opposite to the Makerspace) this Wednesday 6-7PM and bring your friends, we may or may not have FREE Portos pastries for you 🤫😩ntatives from LA Blueprint, ACM Teach LA, NOVA Tech For Good, SWE, and QWERHacks, discover how they are using technology to leave an impact, and learn how YOU can do the same! 🥳 ",
    links: [],
  },
  {
    id: 109,
    title: 'Computer Science Undergraduate Research Forum',
    allDay: false,
    start: 1666314000000,
    end: 1666319400000,
    location: 'Cohen Multipurpose Room',
    committee: 'board',
    description:
      'Would you like to be an Undergraduate Researcher at UCLA? Are you unsure how to get involved and want to know what Computer Science Labs at UCLA are looking for new researchers? Come to the first ever Computer Science Undergraduate Research Forum also known as CSURF! Learn from researchers and Principal Investigators in 6 different CS Labs at UCLA about their research and how to get involved. You will also have the opportunity to network and ask questions about research to the professors. \n\nThe event will be on Thursday, October 20 from 6-7:30 PM. If you would like to come to the event, please fill out this check-in form here: https://forms.gle/A6vESGcNAXqgxj4RA. The location of the event will be sent to those that fill out this form!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2fek6k1bD',
        ext: true,
      },
    ],
  },
  {
    id: 110,
    title: 'Studio Boba Night',
    allDay: false,
    start: 1666404000000,
    end: 1666411200000,
    location: 'Bruin Bear',
    committee: 'studio',
    description:
      "Want to take a break and destress from all your upcoming midterms? Come hang out with some people at ACM Studio for our ✨🧋 Studio Boba Night 🧋✨ !! Come meet us at Bruin Bear 🐻 this Friday, October 21 @7:00PM and we'll head down to Westwood together, excited to see you all there!! 💛",
    links: [],
  },
  {
    id: 111,
    title: 'Interview Track Workshop #2',
    allDay: false,
    start: 1666400400000,
    end: 1666407600000,
    location: 'Boelter 4760',
    committee: 'icpc',
    description:
      'Need help cracking the code interview? Our workshop series will review all the most important content for acing your coding interviews  - data structures, algorithms, coding techniques, problem solving skills. On top of that, we’ll be solving practice interview problems to hone your interviewing skills. This week’s workshop will focus on search algorithms, along with an introduction to graphs and trees. The workshop is held at Boelter 4760 on Friday (Oct. 21) at 6-8 PM. We can’t wait to see you there!',
    links: [
      {
        text: 'Facebook Event',
        href: 'https://fb.me/e/2dDeA9GpO',
        ext: true,
      },
    ],
  },
];

export default events;
