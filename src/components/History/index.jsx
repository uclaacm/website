import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Timeline from 'components/History/Timeline';

export default class History extends React.Component {
	render() {
		return (
			<div className="history-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h2>History of ACM</h2>
				</div>
				<Timeline history={Config.history}/>
				<Footer />
			</div>
		);
	}
}