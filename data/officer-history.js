const officers = [
  {
    roles: [
      'President',
    ],
    name: 'Matthew Wang',
    year: '2022',
    major: 'Computer Science, Math-Economics',
  },
  {
    roles: [
      'Internal Vice President',
    ],
    name: 'Evan Zhong',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Internal Affairs Director',
      'Finance Director',
    ],
    name: 'Zack Pakin',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Internal Affairs Director',
    ],
    name: 'Ray Huang',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Operations Director',
    ],
    name: 'Rish Jain',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Operations Director',
      'Hack Officer',
    ],
    name: 'Christina Tong',
    year: '2023',
    major: 'Computer Science & Engineering',
  },
  {
    roles: [
      'Internship Director',
      'AI Outreach Director',
      'Teach LA School Lead',
    ],
    name: 'Ava Asmani',
    year: '2024',
    major: 'Electrical Engineering',
  },
  {
    roles: [
      'Dev Team Director',
      'Teach LA Special Events Director',
    ],
    name: 'Advaith Gowrishetty',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team PM',
    ],
    name: 'Anna Guo',
    year: '2024',
    major: 'Computational and Systems Biology',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Saagar Mahadev',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Dylon Tjanaka',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Jeremy Tsujihara',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Isaac Chettiath',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Julia Yin',
    year: '2023',
    major: 'Linguistics & Computer Science',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Charles Liu',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team Officer',
    ],
    name: 'Samarth Upadhyaya',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Dev Team Advisor',
    ],
    name: 'Nhi Van',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'JEDI Advisor',
      'Teach LA School Lead',
    ],
    name: 'Helia Woo',
    year: '2023',
    major: 'CSE (cognitive science and english)',
  },
  {
    roles: [
      'Advisor (Very Spicy New News)',
    ],
    name: 'Gloria Yang',
    year: '2022',
    major: 'Linguistics & Computer Science',
  },
  {
    roles: [
      'Advisor',
    ],
    name: 'Daniel Jaffe',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Advisor/IVP Emeritus',
    ],
    name: 'William Chern',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Impact Director',
      'AI Advisor',
    ],
    name: 'Maya Raman',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Impact Officer',
    ],
    name: 'Rohan Bansal',
    year: '2022',
    major: 'Mathematics of Computation',
  },
  {
    roles: [
      'External Vice President',
    ],
    name: 'Tina Huang',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Alumni Director',
    ],
    name: 'Pranjal Hendre',
    year: '2024',
    major: 'Business Economics',
  },
  {
    roles: [
      'External Affairs Director',
    ],
    name: 'Megan Pham',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'External Affairs Director',
      'W Mentorship chair',
    ],
    name: 'Ruining Ding',
    year: '2022',
    major: 'Computer Science, Math',
  },
  {
    roles: [
      'Marketing Director',
    ],
    name: 'Danah Tommalieh',
    year: '2022',
    major: 'Cognitive Science',
  },
  {
    roles: [
      'Marketing Officer (Media)',
    ],
    name: 'Joey Li',
    year: '2023',
    major: 'Statistics + Cognitive Science',
  },
  {
    roles: [
      'Marketing Officer (Photographer)',
    ],
    name: 'Hubert Chen',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Moonshots Advisor',
      'AI Advisor',
    ],
    name: 'John Dang',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Transfer Outreach Director',
    ],
    name: 'Ben Hankin',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Advisor (Old Asian Man)',
    ],
    name: 'Jack Gardner',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Advisor',
    ],
    name: 'Raphael Gatchalian',
    year: '2023',
    major: 'Linguistics & CS',
  },
  {
    roles: [
      'Advisor (Expired Vegetable)',
    ],
    name: 'Katherine Chong',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI President',
    ],
    name: 'Justin Yi',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Advisor',
    ],
    name: 'Harsh Chobisa',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Advisor',
    ],
    name: 'Vaishnavi Tipireddy',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'AI Events Director',
    ],
    name: 'Kaivalya Tota',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Projects Officer',
    ],
    name: 'Jason Jewik',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Outreach/Events Officer',
    ],
    name: 'Aman Oberoi',
    year: '2023',
    major: 'Computer Science and Mathematics',
  },
  {
    roles: [
      'AI Outreach/Events Officer',
    ],
    name: 'Nisha McNealis',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Outreach/Events Officer',
    ],
    name: 'Matthew Ruiz',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Outreach/Events Officer',
      'Teach LA Learning Labs Director',
    ],
    name: 'Jiin Kim',
    year: '2024',
    major: 'Linguistics and Computer Science',
  },
  {
    roles: [
      'AI Projects Director',
    ],
    name: 'Frank Zheng',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Workshops Officer',
    ],
    name: 'Jenson Choi',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Workshops Officer',
    ],
    name: 'Adithya Nair',
    year: '2023',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'AI Workshops Officer',
    ],
    name: 'Sudhanshu Agrawal',
    year: '2023',
    major: 'Computer Science and Mathematics',
  },
  {
    roles: [
      'AI Workshops Officer',
    ],
    name: 'Paymon Haddad',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Workshops Officer',
    ],
    name: 'Varun Sivashankar',
    year: '2022',
    major: 'Mathematics',
  },
  {
    roles: [
      'AI Workshops Director',
    ],
    name: 'Nikhil Suresh',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Projects Officer',
    ],
    name: 'Edmond Wen ',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'AI Projects Officer',
    ],
    name: 'Kyle Whitecross',
    year: '2023',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Cyber Co-President',
    ],
    name: 'Joshua Lee',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Co-President',
    ],
    name: 'Henry Chang',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Advisor, Outgoing Co-President',
      'Teach LA Training Director',
    ],
    name: 'Ellie Cheng',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Cyber Advisor, Outgoing Co-President',
    ],
    name: 'Disha Zambani',
    year: '2022',
    major: 'Computer Science and Engineering ',
  },
  {
    roles: [
      'Cyber Vice President',
    ],
    name: 'William Wang',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Retired',
      'Game Studio Co-President',
    ],
    name: 'Peter Sutarjo',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Retired',
    ],
    name: 'Alyssa Wang',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Cyber Retired',
    ],
    name: 'Kimberly Shi',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Retired',
    ],
    name: 'Aarin Martinez',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Cyber Retired',
    ],
    name: 'Ted Yarmoski',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Matthew Craig',
    year: '2023',
    major: 'Computer Science, Economics',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Jeffrey Ma',
    year: '2023',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Yunfan Zhong',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Chujun (Jerry) Xu',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Sophia Adrangi',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Luke Bender',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Steph Mach',
    year: '2024',
    major: 'Undeclared/CS',
  },
  {
    roles: [
      'Cyber Officer',
    ],
    name: 'Stephen Kelman',
    year: '2024',
    major: 'Computer Science + Engineering',
  },
  {
    roles: [
      'Design President',
    ],
    name: 'Crystal Huynh',
    year: '2022',
    major: 'Economics',
  },
  {
    roles: [
      'Design Vice President',
    ],
    name: 'Muthu Palaniappan',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Design Director',
    ],
    name: 'Amy Seo',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Workshops Director',
    ],
    name: 'Chinmaya Vempati',
    year: '2022',
    major: 'Cognitive Science',
  },
  {
    roles: [
      'Design Dev Director',
    ],
    name: 'Kevin Tang',
    year: '2023',
    major: 'Computer Engineering',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Francis Feng',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Daniel Dai',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Michael Shi',
    year: '2024',
    major: 'Undeclared/CS',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Isabelle Goralsky',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'William Hsieh',
    year: '2024',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Tiffany Lee',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Hannah Chu',
    year: '2024',
    major: 'Linguistics ',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Kathleen Yang',
    year: '2023',
    major: 'Design Media Arts',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Megan Schmid',
    year: '2023',
    major: 'Linguistics & Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Annie Bou',
    year: '2024',
    major: 'Human Biology and Society',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Steve KX',
    year: '2022',
    major: 'Design Media Arts + Applied Math',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Solomon Lo',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Jon Yun',
    year: '2024',
    major: 'Statistics',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Angela Zhang',
    year: '2023',
    major: 'Computer Science & Engineering',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Brian Ng',
    year: '2023',
    major: 'Cognitive Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Colleen Li',
    year: '2023',
    major: 'Cognitive Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Andy Goh',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Stephanie Chang',
    year: '2022',
    major: 'Sociology',
  },
  {
    roles: [
      'Design Officer',
    ],
    name: 'Ivy Kang',
    year: '2023',
    major: 'Cognitive Science',
  },
  {
    roles: [
      'Game Studio Co-President',
    ],
    name: 'Christian Loanzon',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Kade Adams',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Zoë Chavez',
    year: '2023',
    major: 'Theater',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Brandon Truong',
    year: '2023',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Ray Hsiao',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Ryan Vuong',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Caroline Wang',
    year: '2024',
    major: 'Design Media Arts',
  },
  {
    roles: [
      'Game Studio Officier',
    ],
    name: 'Johnny Wan',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Connor Daly',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Athena Dai',
    year: '2022',
    major: 'Linguistics & Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Aaron Isara',
    year: '2024',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Richard Cheng',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Game Studio Officer',
    ],
    name: 'Kelly Doherty',
    year: '2023',
    major: 'Linguistics & Computer Science',
  },
  {
    roles: [
      'Hack Co-President',
    ],
    name: 'Asha Kar',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Co-President',
    ],
    name: 'Eugene Lo',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Miles Wu',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Alex Xia',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Sahen Rai',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Einar Balan',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Chandra Suresh',
    year: '2023',
    major: 'Computer Engineering',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Jakob Reinwald',
    year: '2024',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Eric Yang',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Officer',
    ],
    name: 'Nareh Agazaryan',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Advisor',
    ],
    name: 'Rajeshwari Jadhav',
    year: '2022',
    major: 'Mathematics of Computation',
  },
  {
    roles: [
      'Hack Advisor',
    ],
    name: 'Jody Lin',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Hack Advisor',
    ],
    name: 'Jamie Liu',
    year: '2021',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC President',
    ],
    name: 'Jacob Zhang',
    year: '2022',
    major: 'Computer Science, Mathematics',
  },
  {
    roles: [
      'ICPC Advisor',
    ],
    name: 'Nikil Roashan Selvam',
    year: '2022',
    major: 'Computer Science, Mathematics',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Rohit Nema',
    year: '2022',
    major: 'Computer Science, Mathematics',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Tony Xia',
    year: '2023',
    major: 'Computer Science, Mathematics',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Ana Gu',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Rishi Sankar',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Arihant Jain',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Bill Liu',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Justin Li',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Alvin Nguyen',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Saarthak Sharma',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Lenny Wu',
    year: '2023',
    major: 'Computer Science, Mathematics',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Katie Chang',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Reiya Downs',
    year: '2022',
    major: 'Math of Computation',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Robert Lee',
    year: '2024',
    major: 'Math of Computation, Aerospace Engineering',
  },
  {
    roles: [
      'ICPC Officer',
    ],
    name: 'Ho Lyun Jeong',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA President',
    ],
    name: 'Sophie Schoenmeyer',
    year: '2023',
    major: 'Applied Mathematics',
  },
  {
    roles: [
      'Teach LA Vice President',
    ],
    name: 'Chloe Uy',
    year: '2022',
    major: 'Math of Computation',
  },
  {
    roles: [
      'Teach LA Curriculum Director',
    ],
    name: 'Nikhil Kumar',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Curriculum Director',
    ],
    name: 'Milo Kearney',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Outreach Director',
    ],
    name: 'Ishani Sarkar',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA JEDI Director',
    ],
    name: 'Christine Kim',
    year: '2024',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Special Events Director',
    ],
    name: 'Nina Lu',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Teach LA Special Events Director',
    ],
    name: 'Kaitlyn Wang',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Special Events Director',
    ],
    name: 'Eden Yu',
    year: '2024',
    major: 'Linguistics and Computer Science',
  },
  {
    roles: [
      'Teach LA School Lead',
    ],
    name: 'Chase Kapler',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA School Lead',
    ],
    name: 'Robert Tran',
    year: '2023',
    major: 'Psychobiology',
  },
  {
    roles: [
      'Teach LA Advisor',
    ],
    name: 'Keertana Namuduri',
    year: '2022',
    major: 'Cognitive Science',
  },
  {
    roles: [
      'Teach LA Dev Team Director',
    ],
    name: 'Divya Ponniah',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Design Director',
    ],
    name: 'Archie Datta',
    year: '2024',
    major: 'Math of Computation',
  },
  {
    roles: [
      'Teach LA Editor Director',
    ],
    name: 'Timothy Poon',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Static Site Director',
    ],
    name: 'Vivian Ha',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Training Director',
    ],
    name: 'Regina Wang',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'Teach LA Training Director',
    ],
    name: 'Matthew Nieva',
    year: '2024',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'Teach LA Advisor',
    ],
    name: 'Leo Krashanoff',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'W President',
    ],
    name: 'Cindy Zhang',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'W Vice President',
    ],
    name: "Lena O'Grady",
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'W Publicity',
    ],
    name: 'Ethan Wong',
    year: '2023',
    major: 'Computer Science',
  },
  {
    roles: [
      'W Day of Code Chair',
    ],
    name: 'Michelle Kim',
    year: '2022',
    major: 'English',
  },
  {
    roles: [
      'W Finance Chair',
    ],
    name: 'Maggie Huang',
    year: '2022',
    major: 'Computer Science',
  },
  {
    roles: [
      'W External Chair',
    ],
    name: 'Marie Chu',
    year: '2022',
    major: 'Computer Science and Engineering',
  },
  {
    roles: [
      'W Outreach Chair',
    ],
    name: 'Paige Brown',
    year: '2023',
    major: 'Computer Science',
  },
];

export default officers;
