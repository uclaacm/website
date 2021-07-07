import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
// import data from '../data/events';

import styles from '../styles/pages/Events.module.scss';

function Events() {
	return (
		<Layout>
			<Banner decorative />
			<div className={styles.eventsContainer}>
				<h2>Our Events</h2>
				<p>
					We&apos;re taking the most of the summer off to
					rest, recharge, and prepare for a hybrid fall quarter.

					We&apos;ll see you soon!
				</p>
				<p>
					Want to know what our events look like? All of our 2020-2021 content was recorded and is available on our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube channel!</a>
				</p>
				{/* <p>
					Our events are open to everyone, regardless of major, background, or experience! Come find us on <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube!</a>
				</p>

				<br/><br/>
				<div className={styles.calendarContainer}>
				<iframe src={data.calendar_url}
					className={styles.calendarMain}
					frameBorder="0"
					scrolling="0"
					title="calendar"
					/>
				</div>
				<br/><br/><br/> */}
			</div>
		</Layout>
	);
}

export default Events;
