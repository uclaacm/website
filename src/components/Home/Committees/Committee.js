import React from 'react';

function Committee(props){
	return (
		<a
			className={`committee ${props.committee.class}`}
			href={`/committees#${props.committee.class}`}
		>
			<img src={process.env.PUBLIC_URL + props.committee.image} alt={`Logo and Wordmark for ACM ${props.committee.name}`} />
			<div className="info">
				{/* <h2><span>ACM</span> {props.committee.name}</h2> */}
				<p>{props.committee.tagline}</p>
			</div>
		</a>
	);
}

export default Committee;