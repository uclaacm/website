import React from 'react';

export default class HistoryTile extends React.Component {
	render() {
		return (
			<div>
                <h2>{this.props.history.title}</h2>
                <p>{this.props.history.date}</p>
                <p>{this.props.history.description}</p>
            </div>
        );
	}
}