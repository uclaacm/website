import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';

import impactMotifBanner from '../public/images/impact/impact-motif.png';
import sampleImpactImage from '../public/images/impact/sample-image.png';
import styles from '../styles/pages/impact.module.scss';


// TODO: move initiatives and past events to their own data files
const initiatives = [
	{
		title: 'A workshop 1',
		img: sampleImpactImage,
		alt: 'sample image - will change later, I promise!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'A workshop 2',
		img: sampleImpactImage,
		alt: 'sample image - will change later, I promise!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'A workshop 3',
		img: sampleImpactImage,
		alt: 'sample image - will change later, I promise!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

const pastEvents = initiatives;

// TODO: move people into its own data file, or rely on
// whatever infra our officer directory will use

const people = [
	{
		name: 'Maya Raman',
		pronouns: 'she/her',
		position: 'Impact Director',
		major: 'Computer Science Major',
		year: 2023,
		img: 'https://teachla.uclaacm.com/img/team/mayaraman.jpg',
		alt: 'a photo of maya smiling beside royce hall',
	},
	{
		name: 'Maya clone #1',
		pronouns: 'she/her',
		position: 'Impact Director',
		major: 'Computer Science Major',
		year: 2023,
		img: 'https://teachla.uclaacm.com/img/team/mayaraman.jpg',
		alt: 'a photo of maya smiling beside royce hall',
	},
	{
		name: 'Maya clone #2',
		pronouns: 'she/her',
		position: 'Impact Director',
		major: 'Computer Science Major',
		year: 2023,
		img: 'https://teachla.uclaacm.com/img/team/mayaraman.jpg',
		alt: 'a photo of maya smiling beside royce hall',
	},
];

// TODO: move this and accompanying styling into its own component file
function WorkshopCard({title, description, img, alt}) {
	return (
		<div className={styles['workshop-card']}>
			<div className={styles['workshop-image-container']}>
				<Image src={img} alt={alt} />
			</div>
			<h4 className="font-header">{title}</h4>
			<p>{description}</p>
		</div>
	);
}

// TODO: move this and accompanying styling into its own component file
function PersonCard({name, pronouns, position, major, year, img, alt}){
	return (
		<div className={styles['workshop-card']}>
			<div className={styles['workshop-image-container']}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={img} alt={alt} style={{maxWidth: '100%'}} />
			</div>
			{/* TODO: align this w/ flexbox like in the mockup */}
			<h3 className="font-header">{name} | {pronouns}</h3>
			<ul className="list-unstyled">
				<li>{position}</li>
				<li>{major}</li>
				<li>Class of {year}</li>
			</ul>
		</div>
	);
}

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
				<h3 className="text-uppercase">Past Events</h3>
				<div className="grid-desktop-3">
					{pastEvents.map((event) => <WorkshopCard {...event} key={event.title} />)}
				</div>
				<h2 className="text-center">People</h2>
				<div className="grid-desktop-3">
					{people.map((person) => <PersonCard {...person} key={person.name} />)}
				</div>
				<h2 className="text-center">Stay Connected</h2>
				<p className="text-center">
					logos go here
				</p>
			</div>
		</Layout>
	);
}

export default Impact;
