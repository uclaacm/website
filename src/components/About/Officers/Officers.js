import React from 'react';
import Officer from './Officer';

function Officers(props){
	return (
		<div id="officers-container">
			{
				props.officers.map(
					officer => <Officer officer={officer} key={officer.email} />
				)
			}
		</div>
	);
}

export default Officers;