import React from 'react';

import CommitteeSidebar from './CommitteeSidebar';


function CommitteesSidebar(props){
	return (
		<div className="committeessidebar">
			{props.committees.map(
				committee => <CommitteeSidebar key={committee.name} committee={committee} />
			)}
		</div>
	);
}

export default CommitteesSidebar;