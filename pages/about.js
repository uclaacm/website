import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Officers from '../components/LeadershipOfficers';
import SocialMedia from '../components/SocialMedia';
import data from '../data';

// import acmAbout1 from '../public/images/about1.png';
import acmCommittees from '../public/images/acm_committees.png';
import acmHowToJoin from '../public/images/how-to-join.png';

import styles from '../styles/pages/About.module.scss';

function About() {
	const { officers } = data;
	return (
		<Layout>
			<NextSeo
				title="About | ACM at UCLA"
				description="As a student chapter of the international Association for Computing Machinery, ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/logo.png',
							width: 1200,
							height: 1200,
							alt: 'The ACM at UCLA logo',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
			<div className={styles['about-page']}>
				<Banner decorative />
				<div className={styles['content-section']}>
					<div className={`${styles.ornament} ${styles['square-ornament']}`}>
						{/* TODO: resolve next/image issue */}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={styles['square-splash']} src='/images/about1.png' alt="ACM students at our annual CS BBQ!"/>
						{/* TODO: use next image without breaking deploy */}
						<div className={styles['square-small']} />
						<div className={styles['square-tiny']} />
					</div>
					<div className={styles['text-section']}>
						<h1>What is ACM?</h1>
						<p>As a student chapter of the international <a href="https://www.acm.org" target="_blank" rel="noreferrer noopener">Association for Computing Machinery,</a> ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!</p>
						<p>
							{/* eslint-disable-next-line max-len */}
							With events such as infosessions, workshops, speaker panels, hackathons, and competitions, we cover a variety of topics including artificial intelligence, virtual reality, cybersecurity, mobile and web development, diversity initiatives, community outreach, and much more. Our events are <strong>open to everyone</strong>, regardless of major or experience!
						</p>
					</div>
				</div>
				<div className={styles['content-section']}>
					<div className={`${styles.ornament} ${styles['image-ornament']} ${styles['image-ornament-right']}`}>
						<Image src={acmCommittees} alt="the logos of all ACM committees" priority={true} />
					</div>
					<div className={styles['text-section']}>
						<h1>What are ACM committees?</h1>
						<p>
							ACM is comprised of eight committees — each serving a different topic and mission.
							We strive to cover a plethora of interests and encourage members to explore new topics, too!
						</p>
					</div>
				</div>
				<div className={styles['content-section']}>
					<div className={`${styles.ornament} ${styles['image-ornament']} ${styles['image-ornament-right']}`}>
						<Image src={acmHowToJoin} alt="photos of acm events" />
					</div>
					<div className={styles['text-section']}>
						<h1>How do I get involved?</h1>
						<p>
							No matter what your background or major is,
							we would love to have you at our events and activities!
						</p>
						<p>
							To keep up with what&rsquo;s happening, we recommend joining&nbsp;
							<a href="https://members.uclaacm.com" target="_blank" rel="noreferrer noopener">
								our membership portal
							</a>,&nbsp;
							<a href="https://www.facebook.com/groups/uclaacm" target="_blank" rel="noreferrer noopener">
								our Facebook group
							</a>, and&nbsp;
							<a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">
								our weekly newsletter
							</a>.&nbsp;
							We will keep you up to date with everything ACM, and earning points on the portal
							might even earn you a prize!
						</p>
						<p>Here&rsquo;s our social media, where you can see what we&rsquo;re up to:</p>
						<div className={styles['social-media']}>
							<SocialMedia/>
						</div>
					</div>
				</div>
				<div className={`${styles['content-section']} ${styles.leadership}`}>
					<h2>Leadership</h2>
					<Officers officers={officers} />
				</div>
			</div>
		</Layout>
	);
}

export default About;
