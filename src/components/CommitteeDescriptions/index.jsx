import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Descriptions from 'components/CommitteeDescriptions/Descriptions';

export default class CommitteeDescriptions extends React.Component {
	render() {
		return (
			<div className="committee-descriptions-page">
				<Navbar />
				<Banner decorative />
				<Descriptions descriptions={Config.descriptions} />


				<Footer />
			</div>
		);
	}
}