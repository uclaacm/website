import React from 'react';

import HistoryTile from './historytile';

export default class HistoryTiles extends React.Component {
	render() {
		return (
			<div id="history-tile">
				<div id="history-inner">
					{ this.props.history.map(history => <HistoryTile history={history} /> ) }
				</div>
			</div>
		);
	}
}