import moment from 'moment';
import { NextSeo } from 'next-seo';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
// import data from '../data/events';

import Banner from '../components/Banner';
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
  },
];

function Events() {
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
				<h1>Our Events</h1>
				<p>
					We&apos;re taking the most of the summer off to
					rest, recharge, and prepare for a hybrid fall quarter.

					We&apos;ll see you soon!
				</p>
				<Calendar
					localizer={localizer}
					events={events}
					startAccessor="start"
					endAccessor="end"
					style={{ height: 500 }}
				/>
				<p>
					Want to see our past events? All of our 2020-2021 content was recorded and is available on our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube channel!</a>
				</p>
			</div>
		</Layout>
	);
}

export default Events;
