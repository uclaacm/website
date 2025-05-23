// Note: people array is now depreciated, board members is parsed from ggl sheets using officerparser.mjs
export const people = [
  {
    name: 'Arsh Malik',
    pronouns: 'he/him',
    position: 'Dev Team Director',
    major: 'Computer Science Major',
    year: 2025,
    img: '/images/officers/ArshMalik.jpg',
    alt: 'Arsh in front of the blue sky',
  },
  {
    name: 'Matthew Nieva',
    pronouns: 'he/him',
    position: 'Dev Team Advisor',
    major: 'Computer Science and Engineering Major',
    year: 2024,
    img: '/images/officers/MattNieva.jpg',
    alt: 'Matt standing below some arches',
  },
  {
    name: 'Advaith Gowrishetty',
    pronouns: 'he/him',
    position: 'Dev Team Advisor',
    major: 'Computer Science Major',
    year: 2023,
    img: '/images/officers/AdvaithGowrishetty.jpg',
    alt: 'Advaith standing in a park',
  },
  {
    name: 'Joseph Camyre',
    pronouns: 'he/him',
    position: 'Deployment Lead',
    major: 'Computer Science Major',
    year: 2025,
    img: '/images/officers/JosephCamyre.jpg',
    alt: 'Joseph at Royce Hall',
  },
  {
    name: 'Harvey Zhao',
    pronouns: 'he/him',
    position: 'Frontend Lead',
    major: 'Computer Science Major',
    year: 2024,
    img: '/images/officers/HarveyZhao.jpg',
    alt: 'Harvey with a white background',
  },
  {
    name: 'Victor Wen',
    pronouns: 'he/him',
    position: 'Backend Lead',
    major: 'Computer Science Major',
    year: 2024,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
  {
    name: 'Elizabeth Kim',
    pronouns: 'she/her',
    position: 'Dev Team Officer',
    major: 'Linguistics and Computer Science Major',
    year: 2025,
    img: '/images/officers/ElizabethKim.jpg',
    alt: 'Elizabeth in front of pink flowers',
  },
  {
    name: 'Franklin Zhu',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Cognitive Science Major',
    year: 2026,
    img: '/images/officers/FranklinZhu.jpg',
    alt: 'Franklin smiling in a suit',
  },
  {
    name: 'Utkarsh Lal',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Computer Science Major',
    year: 2025,
    img: '/images/officers/UtkarshLal.jpg',
    alt: 'Utkarsh smiling in a suit',
  },
  {
    name: 'Maxwell Gonick',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Computer Science Major',
    year: 2025,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
  {
    name: 'Amy He',
    pronouns: 'she/her',
    position: 'Dev Team Officer',
    major: 'Computer Science Major',
    year: 2024,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
  {
    name: 'Andy Ren',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Math of Computation Major',
    year: 2026,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
  {
    name: 'Yan Hauw',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Computer Science Major',
    year: 2023,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
  {
    name: 'Charles Zhu',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Computer Science Major',
    year: 2026,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
  {
    name: 'Chi-Wei Chen',
    pronouns: 'he/him',
    position: 'Dev Team Officer',
    major: 'Computer Science Major',
    year: 2026,
    img: '/images/officers/acmlogocopy.jpg',
    alt: 'acm logo',
  },
];

export const projects = [
  {
    name: 'ACM at UCLA Website',
    prim_lang: 'JS',
    proj_link: 'https://www.uclaacm.com',
    repo_link: 'https://github.com/uclaacm/website',
    description: `The ACM at UCLA Website is the one-stop shop for all things ACM! We develop 
    and maintain this website, keeping it up-to-date with all the latest news and events. `,
    img: '/images/dev-projects/acmwebsite.png',
    alt: 'ACM Website!',
  },
  {
    name: 'Membership Portal',
    prim_lang: 'JS',
    proj_link: 'https://members.uclaacm.com/login',
    repo_link: 'https://github.com/uclaacm/membership-portal',
    description: `The Membership Portal is where ACM members can check in to events to earn 
    points! We built the Membership Portal with Node.js, Express.js, PostgreSQL, Redux and React.js.`,
    img: '/images/dev-projects/membership.png',
    alt: 'Membership Portal!',
  },
  {
    name: 'Portal Refresh',
    prim_lang: 'JS',
    proj_link: 'https://members.uclaacm.com/login',
    repo_link: 'https://github.com/uclaacm/membership-portal',
    description: `We are in the process of updating the Membership Portal with a refreshed UI and new
    features! The new portal will be built with Next.js, TypeScript, and Tailwind CSS.`,
    img: '/images/dev-projects/membership_new.png',
    alt: 'New Membership Portal!',
  },
  {
    name: 'Server Cluster',
    prim_lang: 'N/A',
    proj_link: '',
    repo_link: '',
    description: `ACM server cluster to reduce our reliance on AWS and provide a more cost-effective 
    solution for hosting our projects. We are in the process of trialing a proof of concept.`,
    img: '/images/dev-projects/servercluster.png',
    alt: 'No to AWS!',
  },
  {
    name: 'Open Source',
    prim_lang: 'JS',
    proj_link: 'https://opensource.uclaacm.com/',
    repo_link: 'https://github.com/uclaacm/opensource',
    description: `Open Source highlights all open source projects managed by 
    <a href="https://github.com/uclaacm">ACM at UCLA</a>, and an activity feed showing
     recent contributions. Anyone is welcome to contribute - an open invitation to get 
     involved and make an impact!`,
    img: '/images/dev-projects/opensource.png',
    alt: 'Open Source!',
  },
  {
    name: 'CMS Template',
    prim_lang: 'JS',
    proj_link: 'https://github.com/uclaacm/committee-website-template-cms',
    repo_link: 'https://github.com/uclaacm/committee-website-template-cms',
    description: `This Committee Website template is a no-code solution that empowers any ACM 
    committee to build and deploy their website in minutes! It's actively in use by multiple
    committees as it saves time and ensures consistency across sites.`,
    img: '/images/dev-projects/cmsproject.png',
    alt: 'Committee Website Template!',
  },
  {
    name: 'Discord Bot',
    prim_lang: 'JS',
    proj_link: 'https://discord.gg/eWmzKsY',
    repo_link: 'https://github.com/uclaacm/ACM-at-UCLA-Discord-Bot',
    description: `The Discord bot is our in-house email verification bot for the ACM at UCLA 
    Discord server! It's written in JavaScript using the Discord API and Amazon SES.`,
    img: '/images/dev-projects/acmdiscord.png',
    alt: 'Discord Bot!',
  },
  {
    name: '???',
    prim_lang: '???',
    proj_link: 'mailto:dev@uclaacm.com',
    repo_link: 'mailto:dev@uclaacm.com',
    description: `Have an idea for a project or any questions?<br><br>Feel free to contact Alex Zheng
     (<a href="mailto:dev@uclaacm.com">Email</a>), our Dev Team Director.`,
    img: '/images/dev-projects/acmlogocopy.jpg',
    alt: 'ACM Logo!',
  },
];
