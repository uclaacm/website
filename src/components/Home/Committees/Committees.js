import React from 'react';

import Committee from './Committee';


function Committees(props){
	return (
		<div className="committees">
			{props.committees.map(
				committee => <Committee key={committee.name} committee={committee} />
			)}
		</div>
	);
}

export default Committees;