import careersSocialImpactTech from '../public/images/impact/events/careers-social-tech.jpg';
import introTechEthics from '../public/images/impact/events/intro-tech-ethics.png';
import policyPitchathon21 from '../public/images/impact/events/policy-pitchathon-2021.png';
import brief from '../public/images/impact/events/brief.png'
import h2i from '../public/images/impact/events/h2i2024.jpg'
import pitchathon from '../public/images/impact/events/pitchathon.png'
import careerfair from '../public/images/impact/events/careerfair.png'
import socialpanel from '../public/images/impact/events/socialpanel.jpeg'

export const pastEvents = [

  {
    title: 'Social Good Pitch-a-Thon',
    quarter: 'Fall 2023',
    img: pitchathon,
    alt: 'A graphic for the Social Good Pitch-a-Thon',
    description: 'A hackathon-like event where participants teamed up to pitch technical solutions to real-world social justice and DEI issues, build connections with mentors, and win prizes.',
  },
  {
    title: 'Hack2Impact',
    quarter: 'Every Spring',
    img: h2i,
    alt: 'Over 20 people stand in front of a projected screen that says "Hack2Impact 2024"',
    description: 'Our flagship event in collaboration with LA Blueprint — an annual social good hackathon that challenges participants to develop technical solutions for local nonprofit organizations\' needs.',
  },
  {
    title: 'How to Get Your Start in AI Policy at UCLA',
    quarter: 'Coming soon!',
    img: brief,
    alt: 'A robotic arm holding a scale',
    description: 'A resource created alongside the AI Robotics Ethics Society and AI Safety at UCLA — get the inside scoop on how to get started in the field of AI policy as a UCLA undergraduate.',
    // link: 'https://docs.google.com/document/d/15hA2d5xXQifDabpwsogzKdfrXy8SCtPm2IY4QqqOO0w/edit?usp=sharing',
  },
  {
    title: 'Tech for Good Career Fair',
    quarter: 'Winter 2024',
    img: careerfair,
    alt: 'A graphic for the Tech for Good Career Fair',
    description: 'In collaboration with UPE Advocacy — an annual career fair that allows attendees to interact with companies, organizations, and opportunities that utilize technology for positive social impact.',
  },
  {
    title: 'Social Impact Panel',
    quarter: 'Winter 2024',
    img: socialpanel,
    alt: 'A laptop showing the panelists and moderators sits on a podium in a dimly lit room',
    description: 'In collaboration with LA Blueprint — our audience heard from 4 industry professionals working on high-impact tech initiatives and gained insights into aligning their skills and passions with a career that makes a difference.',
  },
  {
    title: 'Careers in Social Impact Tech',
    quarter: 'Winter 2021',
    img: careersSocialImpactTech,
    alt: 'a banner titled "acm impact: careers in social impact tech, thursdays at 5pm"; features an astronaut with a graduation cap in the visor, and some planets and stars in the background',
    description:
      'We hosted a biweekly series that introduced students at UCLA to various career paths in the realm of ethical technology! Topics included open source technology, sustainable tech, and more.',
  },
  {
    title: 'Intro to Tech Ethics Workshop',
    quarter: 'Fall 2020',
    img: introTechEthics,
    alt: 'a banner titled "acm impact: intro to tech ethics, thursdays at 6 pm pdt; features a space shuttle and a background of planets and stars',
    description:
      'Impact’s inaugural workshop – we held open and educational discussions on topics like bias in machine learning, Big Tech regulation, and military technology.',
  },
  {
    title: 'Policy Pitchathon',
    quarter: 'Spring 2021',
    img: policyPitchathon21,
    alt: 'a banner titled "impact by acm at ucla: policy pitchathon, saturday april 17 10 AM - 5 PM PDT. features a judicial scale with the earth on one arm, and high-tech scroll on the other.',
    description:
      'This was a hackathon-like event in which participants joined in teams to create legislation for legal issues like data privacy and sustainability, build connections with mentors, and win prizes!',
  },
];

export const people = [
  {
    name: 'Naisha Agarwal',
    pronouns: 'she/her',
    position: 'Impact Director',
    major: 'Computer Science Major',
    year: 2026,
    img: '/images/officers/NaishaAgarwal.jpg',
    alt: 'Naisha similing in a car',
  },
  {
    name: 'Aarohi Vohra',
    pronouns: 'she/her',
    position: 'Impact Director',
    major: 'Math Major',
    year: 2026,
    img: '/images/officers/AarohiVohra.jpg',
    alt: 'Alyssa smiling in front of a courtyard',
  },
  {
    name: 'Anne Do',
    pronouns: 'she/her',
    position: 'Impact Intern',
    major: 'Computer Science Major',
    year: 2027,
    img: '/images/officers/AnneDo.jpg',
    alt: 'Rohan posing on a bridge',
  },
  {
    name: 'Elena Yu',
    pronouns: 'she/her',
    position: 'Impact Intern',
    major: 'Computer Science Major',
    year: 2025,
    img: '/images/officers/ElenaYu.jpg',
    alt: 'a photo of jason smiling in front of some plants',
  },
];

export const blogs = [
  {
    title: 'Digital Tech for a Greener Future',
    author: 'Jason Jewik',
    date: 'Apr 3',
    length: '11 min read',
    img: 'https://miro.medium.com/max/1400/0*CtF08rCYE9G4Xqk7.jpg',
    href: 'https://medium.com/acm-at-ucla/digital-tech-for-a-greener-future-7bc7f2e00bda',
    authorImg:
      'https://miro.medium.com/fit/c/96/96/1*HdS_CXUnr6GGVUfMR66_4g.jpeg',
    authorAlt: 'a photo of Jason smiling',
    backgroundStyle: {
      backgroundImage:
        'url(' +
        'https://miro.medium.com/max/1400/0*CtF08rCYE9G4Xqk7.jpg' +
        ')',
    },
  },
  {
    title: 'Considerations for The Future of AI Governance',
    author: 'Justin Yi',
    date: 'Feb 10',
    length: '6 min read',
    img: 'https://miro.medium.com/max/1400/0*LSHF7HtyCOuJgbBP.jpg',
    href: 'https://medium.com/impact-labs/considerations-for-the-future-of-ai-governance-46d727012c5b',
    authorImg:
      'https://www.ssu.ca/wp-content/uploads/2020/08/default-profile.png',
    authorAlt: 'default profile pic',
    backgroundStyle: {
      backgroundImage:
        'url(' +
        'https://miro.medium.com/max/1400/0*LSHF7HtyCOuJgbBP.jpg' +
        ')',
    },
  },
  {
    title: "What's up with Google's ethics?",
    author: 'Maya Raman',
    date: 'May 19',
    length: '8 min read',
    img: 'https://miro.medium.com/max/1400/1*uGp6b0cdPgy2fwn5dzwhdA.jpeg',
    href: 'https://medium.com/acm-at-ucla/whats-up-with-google-s-ethics-6fd76a28e0d8',
    authorImg:
      'https://miro.medium.com/fit/c/96/96/1*vLJ5YoPEYKbDZw7OMMdXBQ.png',
    authorAlt: 'maya in front of royce hall!',
    backgroundStyle: {
      backgroundImage:
        'url(' +
        'https://miro.medium.com/max/1400/1*uGp6b0cdPgy2fwn5dzwhdA.jpeg' +
        ')',
    },
  },
];
