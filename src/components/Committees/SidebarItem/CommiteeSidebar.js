import React from 'react';

function CommitteeSidebar(props){
	return (
		<a
			className={`committee ${props.committee.class}`}
			href={`#${props.committee.class}`}
		>
			<img src={process.env.PUBLIC_URL + props.committee.image} alt={`Logo and Wordmark for ACM ${props.committee.name}`} />
		</a>
	);
}

export default CommitteeSidebar;