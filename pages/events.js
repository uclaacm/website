import moment from 'moment';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import Banner from '../components/Banner';
import SelectedEvent from '../components/Events/SelectedEvent';
import Layout from '../components/Layout';

import events from '../data/event';
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

const indexedEvents = events.map((original_event, index) => ({...original_event, id: index}));
const googleCalendarShare = 'https://calendar.google.com/calendar/u/2?cid=YWNtYnJ1aW5zQGdtYWlsLmNvbQ';

function Events() {
	const committees = ["studio","icpc","design","cyber","teachLA","w","ai","hack"];
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const [activeEvent, setActiveEvent] = useState(null);
	const [filterOpen, setFilterOpen] = useState(false);
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
					Take a look at our fancy calendar. Or, <a href={googleCalendarShare} target="_blank" rel="noopener noreferrer">subscribe to our Google Calendar</a>!
				</p>
				<div className={styles['calendar-view-container']}>
					<div>
						<div>
							<input placeholder='Search Events'/>
							<button>Search</button>
							<button onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
						</div>
						{filterOpen && 
						<div id={styles['filter-options']}>
							<div>
								Committees
								{committees.map((com) => (
									<div key={com}>
										<input type="checkbox"/>
										{com}
									</div>
								))}
							</div>
							<div>
								Days
								{days.map((day) => (
									<div key={day}>
										<input type="checkbox"/>
										{day}
									</div>
								))}
							</div>
							<div>
								Time
								<div className={styles['timeContainer']}>
									<div>
										<div>From </div>
										<div>To </div>
									</div>
									<div>
										<div>
											<input placeholder='HH' className={styles['timeInput']}/>
											:
											<input placeholder='SS' className={styles['timeInput']}/>
											<select>
												<option value ="AM">AM</option>
												<option value="PM">PM</option>
											</select>
										</div>
										<div>
											<input placeholder='HH' className={styles['timeInput']}/>
											:
											<input placeholder='SS' className={styles['timeInput']}/>
											<select>
												<option value ="AM">AM</option>
												<option value="PM">PM</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div>
								<input type="checkbox"/> Online
							</div>
						</div>}
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

export default Events;
