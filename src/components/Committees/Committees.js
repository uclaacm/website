import React from 'react';
import Config from '../../config';
import CommitteeBanner from './CommitteesBanner/CommitteesBanner'
import CommitteeSections from './CommitteeSections/CommitteeSections'
import Banner from '../Banner/Banner';

export default class Sponsors extends React.Component {
	render() {
		return (
			<div>
				<Banner decorative />
				<div className="page-content">
				<CommitteeBanner />
				<CommitteeSections committees={Config.committees}/>
				</div>
			</div>
		);
	}
}
