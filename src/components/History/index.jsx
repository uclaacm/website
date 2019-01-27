import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Timeline from 'components/History/Timeline';

export default class History extends React.Component {
	render() {
		return (
			<div className="about-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h2>History of ACM</h2>
					<Timeline history={Config.history}/>
				</div>
				<Footer />
			</div>
		);
	}
}