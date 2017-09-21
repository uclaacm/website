import React from 'react';

import Committee from './committee';

export default class Committees extends React.Component {
	render() {
		return (
			<div className="committees">
				{ this.props.committees.map(committee => <Committee key={committee.name} committee={committee} />) }
			</div>
		);
	}
}