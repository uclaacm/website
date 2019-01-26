import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import HistoryTile from 'components/History/HistoryTile';

export default class History extends React.Component {
	render() {
		return (
			<div className="history-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h2>History of ACM</h2>
					<HistoryTile history={Config.history}/>
				</div>
				<Footer />
			</div>
		);
	}
}