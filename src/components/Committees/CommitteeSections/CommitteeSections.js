import React from 'react';

import CommitteeSection from './CommitteeSection';

export default class Intro extends React.Component {
	render() {
		return (
			<div className='committee-sections-container'>
				{ this.props.committees.map(committee => <CommitteeSection key={committee.name} committee={committee} />) }
			</div>
		);
	}
}