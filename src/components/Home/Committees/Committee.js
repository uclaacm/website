import React from 'react';

function Committee(props){
	return (
		<a 
			className={`committee ${props.committee.class}`}
			target="_blank" rel="noreferrer noopener" 
			href={props.committee.link} 
		>
			<img src={props.committee.image} alt={`Logo for ACM ${props.committee.name}`} />
			<div className="info">
				<h2><span>ACM</span> {props.committee.name}</h2>
				<p>{props.committee.tagline}</p>
			</div>
		</a>
	);
}

export default Committee;