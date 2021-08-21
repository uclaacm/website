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

const pastEvents = initiatives;

function Impact() {
	return (
		<Layout>
			<Banner decorative />
			<div className={styles.container}>
				<div className="text-center">
					<Image src={impactMotifBanner} alt='Impact by ACM at UCLA' />
				</div>

				<h2 className="text-center">Tech Ethics.</h2>
				<p>
					{/* eslint-disable-next-line max-len */}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

        <h2 className="text-center">Our Initiatives</h2>
				<h3 className="text-uppercase">Workshops</h3>
				<div className="grid-desktop-3">
					{initiatives.map((initiative) => <WorkshopCard {...initiative} key={initiative.title} />)}
				</div>
				<h3 className="text-uppercase">Blog</h3>
				<Carousel/>
				<h3 className="text-uppercase">Past Events</h3>
				<div className="grid-desktop-3">
					{pastEvents.map((event) => <WorkshopCard {...event} key={event.title} />)}
				</div>
				<h2 className="text-center">People</h2>
				<div className="grid-desktop-3">
					{people.map((person) => <PersonCard {...person} key={person.name} />)}
				</div>
				<h2 className="text-center">{/*Stay Connected*/}</h2>
				<p className="text-center">
					{/*logos go here*/}
				</p>
			</div>
		</Layout>
	);
}

export default Impact;
