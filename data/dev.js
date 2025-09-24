import Link from 'next/link';

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

// Data for Dev Team Internship Info
export const dev = [
  {
    name: 'Dev Team',
    class: 'board',
    image: '/images/committees/dev/dev_wordmark.png',
    introImage: '/images/committees/studio/studio_motif_applied.png',
    infoCards: [
      {
        title: 'Dev Team',
        image: {
          src: '',
          alt: '',
        },
        desc: '',
      },
    ],
    diamond: '/images/committees/dev/dev_diamond.png',
    links: [
      {
        platform: 'carrd',
        link: 'https://acmstudio.carrd.co/',
      },
      {
        platform: 'discord',
        link: 'https://discord.gg/9jDH6rN',
      },
      {
        platform: 'itch',
        link: 'https://acmstudio.itch.io/',
      },
      {
        platform: 'instagram',
        link: 'https://www.instagram.com/acmstudio.ucla/?hl=en',
      },
      {
        platform: 'facebook',
        link: 'https://www.facebook.com/groups/uclaacmstudio',
      },
    ],
    internship: {
      whatWeDo: (
        <>
          The Dev Team is the technical backbone of ACM, maintaining core platforms for 230
          officers and 1,000+ members. We maintain and create open source
          organization-wide projects such as the official ACM at UCLA website, building a server
          cluster, membership portal, open source, committee website template, and the discord  
          bot. Any previous experience is not required but well appreciated!

          Check out our projects{' '}
          <Link href="/dev" target="_blank" rel="noopener noreferrer">
            here!
          </Link>
        </>
      ),
      whatInternsWillDo: (
        <ul>
          <li>
            {' '}
            You will go through an intern training program through Fall quarter, before tackling
            real projects for Dev Team under the guidance of another Dev Team member.
            {' '}
          </li>
          <li>
            {' '}
            Interns will have the opportunity to work on real projects that will be used by the 
            entire ACM organization. Starting Winter quarter, interns will be assigned to a project 
            team based on their interests and the needs of the Dev Team.
            {' '}
          </li>
          <li>
            {' '}
            Project teams are interdiciplinary and interns will have the opportunity to work in 
            fields such as frontend, backend, design, devops, system administration, server 
            management, and more.
            {' '}
          </li>
          <li>
            {' '}
            All interns have the opportunity to become Dev Team officers in the Spring.
            {' '}
          </li>
          <li>
            {' '}
            You will also have the opportunity to run for the position of Dev Team Director in the 
            Spring.
          </li>
        </ul>
      ),
      card: '/images/cards/board_card.svg',
      nextSteps:
        'Dev Team interns have the opportunity to become Dev Team officers in the spring, and will be assigned to a project team based on their interests and the needs of the Dev Team.',
    },
  },
];
