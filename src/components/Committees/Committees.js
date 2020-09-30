import React from 'react';
import Config from '../../config';
import CommitteeLogos from './TableOfContents/CommitteeLogos'
import CommitteeSections from './CommitteeSections/CommitteeSections'
import Banner from '../Banner/Banner';

export default class Sponsors extends React.Component {
	render() {
		return (
			<div>
				<Banner decorative />
				{/* <div className="content-section center">
						<CommitteeLogos committees={Config.committees} />
				</div>
				<Banner decorative /> */}
				<div className="page-content">
					<CommitteeSections committees={Config.committees}/>
				</div>
			</div>
		);
	}
}
