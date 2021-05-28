import React from 'react';
import Config from '../../config';
import Banner from '../Banner/Banner';
import CommitteeBanner from './CommitteesBanner/CommitteesBanner';
import CommitteeSections from './CommitteeSections/CommitteeSections';
import Navigation from './SidebarItem/SidebarItem';

function Sponsors() {
	return (
		<div>
			<Banner decorative />
			<Navigation committees={Config.committees} />
			<div className="page-content">
			<CommitteeBanner />
			<CommitteeSections committees={Config.committees}/>
			</div>
		</div>
	);
}

export default Sponsors;
