// import Image from 'next/image';
import React from 'react';

function Committee(props){
	return (
		<a
			className={`committee ${props.committee.class}`}
			href={`/committees#${props.committee.class}`}
		>
			{/* TODO: use next image without breaking deploy */}
			<img src={props.committee.image} layout='fill' alt={`Logo and Wordmark for ACM ${props.committee.name}`} />
			<div className="info">
				<p>{props.committee.tagline}</p>
			</div>
		</a>
	);
}

function CommitteeSpread(props){
	return (
		<div className="committees">
			{props.committees.map(
				committee => <Committee key={committee.name} committee={committee} />,
			)}
		</div>
	);
}

export default CommitteeSpread;
