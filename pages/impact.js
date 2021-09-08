import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import Carousel from '../components/Impact/Carousel';
import PersonCard from '../components/Impact/PersonCard';
import WorkshopCard from '../components/Impact/WorkshopCard';
import Layout from '../components/Layout';

import { initiatives, people } from '../data/impact';

import impactMotifBanner from '../public/images/impact/impact-motif.png';
import styles from '../styles/pages/impact.module.scss';

const impactBlog = 'https://medium.com/acm-at-ucla';
const pastEvents = initiatives;

function Impact() {
	return (
		<Layout>
			<NextSeo
				title="ACM Impact | ACM at UCLA"
				description="ACM Impact is an up-and-coming initiative of ACM whose mission is to start conversations and promote an understanding of how tech and society affect each other. Our aim is to build a community of people who are passionate about ethical technology, socially impactful engineering, and creating a better future for all!"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/impact/impact-motif.png',
							width: 2665,
							height: 1333,
							alt: 'The ACM Impact banner: a space shuttle taking off, with a moon behind it',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
			<Banner decorative />
			<div className={styles.container}>
				<div className="text-center">
					<Image src={impactMotifBanner} alt='Impact by ACM at UCLA' />
				</div>

				<h2 className="text-center">Tech Ethics.</h2>
				{/* TODO: make this not use an h2 */}
				<h2 className={styles['text-center-holographic']}>Ethics.</h2>
				<p>
					{/* eslint-disable-next-line max-len */}
					ACM Impact is an up-and-coming initiative of ACM whose mission is to start conversations and promote an understanding of how tech and society affect each other. Our aim is to build a community of people who are passionate about ethical technology, socially impactful engineering, and creating a better future for all!
				</p>

        <h2 className="text-center">Our Initiatives</h2>
				<h3 className="text-uppercase">Workshops</h3>
				<div className="grid-desktop-3">
					{initiatives.map((initiative) => <WorkshopCard {...initiative} key={initiative.title} />)}
				</div>
				<h3 className="text-uppercase">Blog</h3>
				<p>
					Anyone from UCLA can write for our <a href={impactBlog} target="_blank" rel="noreferrer noopener">our blog</a>! Check this out to see how you can get involved. We look forward to reading your work—in the meantime, check out some of our existing posts!
				</p>
				<Carousel/>
				<h3 className="text-uppercase">Past Events</h3>
				<div className="grid-desktop-3">
					{pastEvents.map((event) => <WorkshopCard {...event} key={event.title} />)}
				</div>
				<h2 className="text-center">People</h2>
				<div className="grid-desktop-3">
					{people.map((person) => <PersonCard {...person} key={person.name} />)}
				</div>
			</div>
		</Layout>
	);
}

export default Impact;
