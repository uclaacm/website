import React from 'react';

export default class FlagshipEvent extends React.Component {
	render() {
		return (
			<div className="flagship-event">
				<img src={this.props.event.image} />
				<h3>{this.props.event.name}</h3>
				<p>{this.props.event.about}</p>
			</div>
		);
	}
} 