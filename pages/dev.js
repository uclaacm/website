import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React from 'react';

import Banner from '../components/Banner';
import Projects from '../components/DevProjectCards';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';

import { projects } from '../data/dev';
import data from '../offoutput.json';
import styles from '../styles/pages/Dev.module.scss';

/*const devTeamDirector = {
    name: 'Snigdha Kansal',
    email: 'snigdha0206@g.ucla.edu',
};*/

const devTeamAdvisor = {
  role: 'Dev Team Advisor',
  name: 'Arsh Malik',
  pronouns: 'he/him/his',
  year: '2025',
  major: 'Computer Science',
  photo:
    'https://drive.google.com/thumbnail?id=1d1wYxOHHS5hGzC4xOU9_39sUFb1xxSv7',
};

function DevTeam() {
  const devTeamOfficers = data.filter(officer => officer.role.includes('Dev Team') && officer.committee.includes('Board, Internal'));
  devTeamOfficers.splice(1, 0, devTeamAdvisor);
  return (
    (<Layout>
      <NextSeo
        title="ACM Dev Team | ACM at UCLA"
        description="The ACM Dev Team handles general internal development needs for ACM at UCLA. We maintain and create organization-wide projects such as the website, Discord bot, Membership Portal, and CMS Template."
      />
      <Banner decorative />
      <div className={'content-section text-center'}>
        <h1 className="text-center">Dev Team</h1>
        <p className={styles['dev-team-info']}>
          {/* eslint-disable-next-line max-len */}
          The ACM Dev Team handles general internal development needs for all of ACM at UCLA. We maintain and create organization-wide projects such as the website, Discord bot, Membership Portal, and CMS Template.
        </p>
        <p className={styles['dev-team-info']}>
          If you&apos;re interested in joining us,&nbsp;
          <Link href="https://uclaacm.com/internship">
            apply to intern
          </Link>&nbsp;with the Dev Team!
        </p>
        <h2 className="text-center">Our Projects</h2>
        <div className="grid-desktop-3 text-center-mobile">
          <Projects projects={projects} />
        </div>
        <h2 className="text-center">Our Commitment to Open Source</h2>
        <p className={styles['project-info']}>
          Everything we build is&nbsp;
          <Link
            href="https://opensource.uclaacm.com/"
            target="_blank"
            rel="noopener noreferrer">
            open source
          </Link>!
          In the spirit of open-source, anyone is welcome to view and contribute to our projects on&nbsp;
          <Link
            href="https://github.com/uclaacm"
            target="_blank"
            rel="noopener noreferrer">
            Github
          </Link>.
        </p>
        <h2 className="text-center">People</h2>
        <div className="grid-desktop-3 text-center-mobile">
          <Officers officers={devTeamOfficers} />
        </div>
      </div>
    </Layout>)
  );
}

export default DevTeam;
