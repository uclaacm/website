import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';

export default class History extends React.Component {
	render() {
		return (
			<div className="history-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h2>Our History</h2>
					{Config.history.map(history =>
						<div className="history-container">
							<h1>{history.name}</h1>
							<p>{history.tagline}</p>
						</div>
					)}
				</div>
				<Footer />
			</div>
		);
	}
}