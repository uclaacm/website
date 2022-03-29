import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

import Banner from '../components/Banner';
import PersonCard from '../components/Impact/PersonCard';
import Layout from '../components/Layout';

import { people } from '../data/dev';

import styles from '../styles/pages/Dev.module.scss';

const devTeamDirector = {
	name: 'Matthew Nieva',
	email: 'matthewcn56@gmail.com',
};

function DevTeam() {
	return (
		<Layout>
			<NextSeo
				title="ACM Dev Team | ACM at UCLA"
				description="The ACM Dev Team handles general internal development needs for ACM at UCLA. We maintain and create organization-wide projects such as the website, Discord bot, Membership Portal, and link shortener."
			/>
			<Banner decorative />
			<div className={'content-section text-center'}>
				<h1 className="text-center">Dev Team</h1>
				<p className={styles['dev-team-info']}>
					{/* eslint-disable-next-line max-len */}
					The ACM Dev Team handles general internal development needs for all of ACM at UCLA. We maintain and create organization-wide projects such as the website, Discord bot, Membership Portal, and link shortener.
				</p>
				<p className={styles['dev-team-info']}>
					If you&apos;re interested in joining us,&nbsp;
					<Link href='https://uclaacm.com/internship'>
						<a>apply to intern</a>
					</Link>&nbsp;with the Dev Team!
				</p>
				<h2 className="text-center">Our Projects</h2>
				<div className='text-left'>
					<h3 id={styles['first-project']}>ACM at UCLA Website</h3>
						<p className={styles['project-info']}>The&nbsp;
							<Link href='https://www.uclaacm.com'>
								<a target='_blank' rel='noopener noreferrer'>ACM at UCLA Website</a>
							</Link>
							{/* eslint-disable-next-line max-len */}
							&nbsp;is the one-stop shop for all things ACM! We develop and maintain this website, keeping it up-to-date with all the latest news and events. In fact, we made the page you&apos;re looking at right now! This website is built with React.js and Next.js and deployed with Netlify - if you&apos;re curious, feel free to check out the&nbsp;
							<Link href='https://www.github.com/uclaacm/website'>
								<a target='_blank' rel='noopener noreferrer'>source code</a>
							</Link>
							!
						</p>
					<h3>Membership Portal</h3>
						<p className={styles['project-info']}>The&nbsp;
							<Link href='https://members.uclaacm.com/'>
								<a target='_blank' rel='noopener noreferrer'>Membership Portal</a>
							</Link>
							{/* eslint-disable-next-line max-len */}
							&nbsp;is where ACM members can check in to events to earn points! We built the Membership Portal with Node.js, Express.js, PostgreSQL, Redux and React.js.
						</p>
					<h3>Discord Bot</h3>
						<p className={styles['project-info']}>The Discord bot is our in-house email verification bot for the ACM at UCLA&nbsp;
							<Link href='https://discord.gg/eWmzKsY'>
								<a target='_blank' rel='noopener noreferrer'>Discord</a>
							</Link>
							&nbsp;server! It&apos;s written in JavaScript using the Discord API and Amazon SES.
						</p>
					<h3>Link Shortener</h3>
						<p className={styles['project-info']}>The&nbsp;
							<Link href='http://links.uclaacm.com/'>
								<a target='_blank' rel='noopener noreferrer'>link shortener</a>
							</Link>
							{/* eslint-disable-next-line max-len */}
							&nbsp;is an ongoing project aimed at generating shortened links for use by our committees. The link shortener is built with Flask.</p>
					<h3>???</h3>
						<p className={styles['project-info']}>Have an idea for a project or any questions? Feel free to contact <a href={`mailto:${devTeamDirector.email}`}>{`${devTeamDirector.name} (${devTeamDirector.email})`}</a>, our Dev Team Director.</p>

				</div>
				<h2 className="text-center">Our Commitment to Open Source</h2>
				<p className={styles['project-info']}>
					Everything we build is&nbsp;
					<Link href='https://opensource.uclaacm.com/'>
						<a target='_blank' rel='noopener noreferrer'>open source</a>
					</Link>!
					In the spirit of open-source, anyone is welcome to view and contribute to our projects on&nbsp;
					<Link href='https://github.com/uclaacm'>
						<a target='_blank' rel='noopener noreferrer'>Github</a>
					</Link>.
				</p>
				<h2 className="text-center">People</h2>
				<div className="grid-desktop-3 text-center-mobile">
					{people.map((person) => <PersonCard {...person} key={person.name} />)}
				</div>
			</div>
		</Layout>
	);
}

export default DevTeam;
