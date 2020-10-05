import React from 'react';

import CommitteeSection from './CommitteeSection';

function CommitteeSections(props) {
	return (
		<div className='committee-sections-container'>
			{ props.committees.map(committee => <CommitteeSection key={committee.name} committee={committee} />) }
		</div>
	);
}

export default CommitteeSections;