import moment from 'moment';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import Banner from '../components/Banner';
import SelectedEvent from '../components/Events/SelectedEvent';
import Layout from '../components/Layout';

import events from '../data/calendar';
import styles from '../styles/pages/Events.module.scss';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


// see eventPropGetter
const getEventClassByEvent = (event) => {
	let modifierStr = '';
	if (event.committee) {
		modifierStr = event.committee;
	}
	return ({
		className: `rbc-override-event rbc-override-${modifierStr}`,
	});
};

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
					Take a look at our fancy calendar.
				</p>
				<div className={styles['calendar-view-container']}>
					<Calendar
						localizer={localizer}
						events={events}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 600 }}
						onSelectEvent={setActiveEvent}
						eventPropGetter={getEventClassByEvent}
						// matt says: using these props this way *feels wrong*
						min={new Date('August 19, 1975 9:00:00')}
						max={new Date('August 19, 1975 22:00:00')}
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
