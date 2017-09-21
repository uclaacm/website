import React from 'react';

export default class Committee extends React.Component {
	render() {
		return (
			<div key={this.props.committee.name} className={`committee ${this.props.committee.class}`}>
				<img src={this.props.committee.image} />
				<div className="info">
					<h2><span>ACM</span> {this.props.committee.name}</h2>
					<p>{this.props.committee.tagline}</p>
				</div>
			</div>
		);
	}
}