import moment from 'moment';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
// import data from '../data/events';

import Banner from '../components/Banner';
import SelectedEvent from '../components/Events/SelectedEvent';
import Layout from '../components/Layout';

import styles from '../styles/pages/Events.module.scss';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
	{
    id: 1,
    title: 'CS Welcome Day',
    allDay: true,
    start: new Date(2021, 8, 21),
    end: new Date(2021, 8, 22),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam orci, aliquet eget mollis at, facilisis porta odio. Cras mauris nisl, suscipit nec posuere semper, euismod sit amet nibh. Nulla facilisi. Praesent quam lacus, vulputate vel condimentum eget, congue ac justo.',
		links: [
			{ text: 'Event Website', href: 'https://www.cs.ucla.edu/cs-welcome-day/', ext: true },
		],
  },
	{
    id: 2,
    title: 'Fall GM',
    allDay: false,
    start: new Date(2021, 8, 27, 18),
    end: new Date(2021, 8, 27, 19, 30),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam orci, aliquet eget mollis at, facilisis porta odio. Cras mauris nisl, suscipit nec posuere semper, euismod sit amet nibh. Nulla facilisi. Praesent quam lacus, vulputate vel condimentum eget, congue ac justo.',
		image: '/images/events/f21-fall-gm.png',
		alt: 'a banner that says "ACM at UCLA: Fall GM, Monday, September 27th from 6-8 PM in the Court of Sciences". Features graphical elements representing each of ACM\'s committees: ACM Hack, ACM W, ACM AI, ACM ICPC, ACM Cyber, ACM Studio, ACM Teach LA, and ACM Design.',
		links: [
			{ text: 'Event Website', href: '/gm/f21' , ext: false },
		],
  },
];

function Events() {
	const [activeEvent, setActiveEvent] = useState(null);
	return (
		<Layout>
			<NextSeo
				title="Events | ACM at UCLA"
				description="ACM is currently taking the summer off to
				rest, recharge, and prepare for a hybrid fall quarter. As soon as we're back, this page is your one-stop shop for all the events we run. We'll see you soon!"
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
			<Banner decorative />
			<div className={styles['events-container']}>
				<h1 className="text-center">Our Events</h1>
				<p className="text-center">
					We&apos;re taking the most of the summer off to
					rest, recharge, and prepare for a hybrid fall quarter.

					We&apos;ll see you soon!
				</p>
				<div className={styles['calendar-view-container']}>
					<Calendar
						localizer={localizer}
						events={events}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 500 }}
						onSelectEvent={setActiveEvent}
					/>
					<SelectedEvent event={activeEvent}/>
				</div>
				<p>
					Want to see our past events? All of our 2020-2021 content was recorded and is available on our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube channel!</a>
				</p>
			</div>
		</Layout>
	);
}

export default Events;
