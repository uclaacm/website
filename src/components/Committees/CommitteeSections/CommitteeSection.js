import React from 'react';
import Header from './CommitteeSectionHeader/CommitteeSectionHeader';
import Intro from './CommitteeSectionIntro/CommitteeSectionIntro';
import Body from './CommitteeSectionBody/CommitteeSectionBody';

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