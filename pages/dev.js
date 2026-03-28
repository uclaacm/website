import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Banner from '../components/Banner';
import Projects from '../components/DevProjectCards';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';
import { projects } from '../data/dev';
import data from '../data/officeroutput.json';
import styles from '../styles/pages/Dev.module.scss';



function DevTeam() {
  const devTeamExec = data.filter((officer) => {
    const role = officer.role || '';
    const hasExecRole = role.includes('Director') || role.includes('Advisor') || role.includes('Project Manager');
    return hasExecRole && officer.committee.includes('Dev Team');
  });

  const devTeamOfficers = data.filter((officer) => {
    const role = officer.role || '';
    const hasExecRole = role.includes('Director') || role.includes('Advisor') || role.includes('Project Manager');
    const hasDevTeamRole = role.includes('Dev Team');
    return hasDevTeamRole && !hasExecRole && officer.committee.includes('Board, Dev Team');
  });
  return (
    <Layout>
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
        <h2 className="text-center">Leadership</h2>
        <div className="grid-desktop-3 text-center-mobile">
          <Officers officers={devTeamExec} />
        </div>
        <h2 className="text-center">Members</h2>
        <div className="grid-desktop-3 text-center-mobile">
          <Officers officers={devTeamOfficers} />
        </div>
      </div>
    </Layout>
  );
}

export default DevTeam;
