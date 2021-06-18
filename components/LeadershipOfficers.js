import Image from 'next/image';
import React from 'react';

function Officer(props){
	return (
		<div className="officer">
			<Image src={process.env.PUBLIC_URL + props.officer.image} alt={props.officer.name}/>
			<div className="info">
				<h2>{props.officer.name}</h2><br />
				<p>{props.officer.title}</p>
			</div>
		</div>
	);
}

function Officers(props){
	return (
		<div id="officers-container">
			{
				props.officers.map(
					officer => <Officer officer={officer} key={officer.email} />,
				)
			}
		</div>
	);
}

export default Officers;
