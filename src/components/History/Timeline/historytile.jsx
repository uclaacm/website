import React from 'react';

export default class HistoryTile extends React.Component {
	render() {
		return (
			<div>
                <div id='history-tile'>
                    <div class='history-date'>
                        <p>{this.props.history.date}</p>
                    </div>
                    <div class='history-info'>
                        <h2>{this.props.history.title}</h2>
                        <p>{this.props.history.description}</p>
                    </div>
                </div>
            </div>
        );
	}
}