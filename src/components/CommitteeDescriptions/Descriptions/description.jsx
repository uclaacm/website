import React from 'react';

export default class Description extends React.Component {
	render() {
		return (
			<div className="description-component">
				<img src={this.props.description.image} />
				<a target="_BLANK" href={this.props.description.link} key={this.props.description.name}>
					<div className="info">
						<h2><span>ACM</span> {this.props.description.name}</h2>
					</div>
				</a>
				<p>{this.props.description.description}</p>
			</div>
		);
	}
}