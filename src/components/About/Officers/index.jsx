import React from 'react';
import Officer from './officer';

export default class Officers extends React.Component {
	render() {
		return (
			<div id="officers-container">
				{ this.props.officers.map(officer => <Officer officer={officer} />) }
			</div>
		);
	}
}