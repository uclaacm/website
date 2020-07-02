import React from 'react';

export default class Officer extends React.Component {
	render() {
		return (
			<div className="officer">
				<img src={this.props.officer.image} alt={this.props.officer.name}/>
				<div className="info">
					<h2>{this.props.officer.name}</h2><br />
					<p>{this.props.officer.title}</p>
				</div>
			</div>
		);
	}
}