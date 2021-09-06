import { NextSeo } from 'next-seo';
import React from 'react';
// import data from '../data/events';

import Banner from '../components/Banner';
import Layout from '../components/Layout';

import styles from '../styles/pages/Events.module.scss';

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
				<p>
					Want to know what our events look like? All of our 2020-2021 content was recorded and is available on our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube channel!</a>
				</p>
				{/* <p>
					Our events are open to everyone, regardless of major, background, or experience! Come find us on <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube!</a>
				</p>

				<br/><br/>
				<div className={styles['calendar-container']}>
				<iframe src={data.calendar_url}
					className={styles['calendar-main']}
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
