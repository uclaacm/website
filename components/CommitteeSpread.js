import React from 'react';
import Image from 'next/image';

function Committee(props){
	return (
		<a
			className={`committee ${props.committee.class}`}
			href={`/committees#${props.committee.class}`}
		>
			<div className="committee-image">
				<Image src={process.env.PUBLIC_URL + props.committee.image} 
					layout="fill"
					objectFit="contain"
					objectPosition="0% 100%"
					alt={`Logo and Wordmark for ACM ${props.committee.name}`} />
			</div>
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
