import React from 'react';
import Config from '../../config';
import CommitteeBanner from './CommitteesBanner/CommitteesBanner'
import CommitteeSections from './CommitteeSections/CommitteeSections'
import Banner from '../Banner/Banner';

function Sponsors(props) {
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

export default Sponsors;