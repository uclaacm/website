import React from 'react';

export default class HistoryTile extends React.Component {
	render() {
		return (
			<div className='history-tile'>
                <div className='history-date'>
                    <p>{this.props.history.date}</p>
                </div>
                <div className='history-info'>
                    <h2>{this.props.history.title}</h2>
                    <p>{this.props.history.description}</p>
                </div>
            </div>
        );
	}
}