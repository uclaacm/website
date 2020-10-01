import React from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Body from './Body/Body';

export default class CommitteeSection extends React.Component {
	render() {
		return (
			<div className='committee-section'>
				<Header committee={this.props.committee}/>
				<Intro committee={this.props.committee}/>
				<Body committee={this.props.committee}/>			
            </div>
		);
	}
}