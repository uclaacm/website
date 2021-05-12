import React from 'react';

function Officer(props){
	return (
		<div className="officer">
			<img src={process.env.PUBLIC_URL + props.officer.image} alt={props.officer.name}/>
			<div className="info">
				<h2>{props.officer.name}</h2><br />
				<p>{props.officer.title}</p>
			</div>
		</div>
	);
}

export default Officer;
