import React from 'react';
import Config from '../../config';
import Banner from '../Banner/Banner';
import CommitteeSection from './CommitteeSections/CommitteeSection';
import Navigation from './Sidebar/Sidebar';

function CommitteesBanner() {
	return (
		<div className="committee-banner-container">
			<div className="banner-main-content">
				<img src={process.env.PUBLIC_URL + '/images/acm_committees.png'} alt="the logos of all ACM committees" />
				<div className="info">
					<h1>Committees</h1>
					<p className="half-size">ACM comprises eight committees, each serving a unique topic and mission. All of our events are open to everyone. We strive to cover all of our members’ interests and encourage members to explore new topics and events, too!</p>
				</div>
			</div>
		</div>
	);
}

function CommitteesPage() {
	const committees = Config.committees;
	return (
		<div>
			<Banner decorative />
			<Navigation committees={committees} />
			<div className="page-content">
				<CommitteesBanner />
				<div className='committee-sections-container'>
					{committees.map(committee => <CommitteeSection key={committee.name} committee={committee} />) }
				</div>
			</div>
		</div>
	);
}

export default CommitteesPage;
