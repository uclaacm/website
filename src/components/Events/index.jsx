import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import FlagshipEvents from 'components/Events/Flagship';

export default class Events extends React.Component {
	render() {
		return (
			<div className="about-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h2>Flagship Events</h2>
					<div className="flagship-events">
						{ Config.events.map(events => {
							if (events.events.length !== 0) {
								return <FlagshipEvents key={events.season} events={events} />
							}
						})}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}