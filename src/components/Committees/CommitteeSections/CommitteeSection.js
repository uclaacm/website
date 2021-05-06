import React from 'react';
import Body from './CommitteeSectionBody/CommitteeSectionBody';
import Header from './CommitteeSectionHeader/CommitteeSectionHeader';
import Intro from './CommitteeSectionIntro/CommitteeSectionIntro';

function CommitteeSection(props) {
	return (
		<div id={props.committee.class} className='committee-section'>
			<Header committee={props.committee}/>
			<Intro committee={props.committee}/>
			<Body committee={props.committee}/>
		</div>
	);
}

export default CommitteeSection;