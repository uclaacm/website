import moment from 'moment';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import Banner from '../components/Banner';
import Filters from '../components/Events/Filters';
import SelectedEvent from '../components/Events/SelectedEvent';
import Layout from '../components/Layout';

import getAllEvents from '../scripts/event-generator-sheets.mjs';
import styles from '../styles/pages/Events.module.scss';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


// see eventPropGetter
const getEventClassByEvent = (event) => {
	let modifierStr = '';
	if (event.committee) {
		modifierStr = `rbc-override-${event.committee}`;
	}
	return ({
		className: `rbc-override-event ${modifierStr}`,
	});
};

// const googleCalendarShare = 'https://calendar.google.com/calendar/u/2?cid=YWNtYnJ1aW5zQGdtYWlsLmNvbQ';

function Events({ events }) {
	const [activeEvent, setActiveEvent] = useState(null);

	const [indexedEvents, setIndexedEvents] = useState(() => {
		// Check if events exist and have the expected structure
		if (!Array.isArray(events)) return [];
		return events.map((event, index) => ({...event, id: index}));
	});

	// Handle changes from Filters
	const handleFilteredEvents = (newEvents) => {
		// Validate newEvents before updating
		if (Array.isArray(newEvents)) {
			setIndexedEvents(newEvents);
		} else {
			// Optional: Handle unexpected newEvents format (maybe set to an empty array or log an error)
			setIndexedEvents([]);
		}
	};

	return (
		<Layout>
			<NextSeo
				title="Events | ACM at UCLA"
				description="Check out every single event ACM is running this quarter. All 100+! Crazy, right?"
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
					Take a look at our fancy calendar. An updated google calendar of events is in the works!
				</p>
				<div className={styles['calendar-view-container']}>
					<div>
						<Filters handleChange={handleFilteredEvents} />
						{indexedEvents.length ? (  // Check if we have events to show
						<Calendar
							localizer={localizer}
							events={indexedEvents}
							startAccessor={(event) => new Date(event.start)}
							endAccessor={(event) => new Date(event.end)}
							className={styles['calendar-size-controller']}
							onSelectEvent={setActiveEvent}
							eventPropGetter={getEventClassByEvent}
							// matt says: using these props this way *feels wrong*
							min={new Date('August 19, 1975 9:00:00')}
							max={new Date('August 19, 1975 22:00:00')}
							popup={true}
							views={{
								month: true,
								week: true,
								day: true,
								agenda: true,
							}}
						/>
						) : (
							<p>No events available at the moment. Please check back later.</p>
						)}
					</div>
					<SelectedEvent event={activeEvent}/>
				</div>
				<p>
					{/* eslint-disable-next-line max-len */}
					This event page is still new. Please send us any feedback you have via email (acm@ucla.edu) or your social media platform of choice!
				</p>
				<p>
					Want to see our past events? All of our 2020-2021 content was recorded and is available on our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube channel!</a>
				</p>
			</div>
		</Layout>
	);
}

export const getStaticProps = async () => {
	try {
		const events = await getAllEvents();
		return {
			props: {
				events: events,
			},
			revalidate: 3600,
		};
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Failed to fetch events:', error.message);
		return {
			props: {
				events: [],  // Return empty array as fallback
			},
			revalidate: 3600,
		};
	}
};

export default Events;

