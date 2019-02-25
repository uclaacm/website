import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Descriptions from 'components/Committees/Descriptions';

export default class Committees extends React.Component {
	render() {
		return (
			<div className="committee-descriptions-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section">
					<h1>What are ACM committees?</h1>
					<p className="half-size">ACM is split into eight committees, each serving a different topic and mission. Some of our events may be categorized as a part of a specific committee, but being a member of a committee is the same as being a member of ACM. Our events are open to everyone. We strive to cover all of our members' interests and encourage members to explore new topics and events as well!</p>
				</div>
				<Descriptions committees={Config.committees} />
				
				<Footer />
			</div>
		);
	}
}