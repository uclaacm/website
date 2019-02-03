import React from 'react';

export default class Description extends React.Component {
	render() {
		return (
			<div className="committee-component">
				<div className="content-section left">
					<div className="ornament image-ornament">
						<img src={this.props.description.image} />
					</div>
				</div>
				<div className="content-section right">
					<div className="text-section">
						<a target="_BLANK" href={this.props.description.link} key={this.props.description.name} className={`description ${this.props.description.class}`}>
							<div className="info">
								<h1><span>ACM</span> {this.props.description.name}</h1>
							</div>
						</a>
						<p>{this.props.description.description}</p>
					</div>
				</div>
			</div>
		);
	}
}