import React from 'react';

export default class HistoryTile extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	// componentDidMount() {
	// 	this.timer = setInterval(() => {
	// 		this.setState({
	// 			sections: this.state.sections.map(section => {
	// 				section.left -= 1;
	// 				if (section.left < -this.sectionWidth) {
	// 					section.left = (this.state.sections.length - 1) * this.sectionWidth - 1;
	// 				}
	// 				return section;
	// 			})
	// 		});
	// 	}, 90);
	// }

	// componentWillUnmount() {
	// 	clearInterval(this.timer);
	// 	this.timer = null;
	// }

	render() {
		return (
			<div id="history-tile">
				<div id="history-inner">
					{ this.props.history.map(history => {
						<div>
							<h2>{this.props.history.title}</h2>
							<p>{this.props.history.date}</p>
							<p>{this.props.history.description}</p>
						</div>
					})}
				</div>
			</div>
		);
	}
}