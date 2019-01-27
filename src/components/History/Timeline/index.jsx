import React from 'react';

import HistoryTile from './historytile';

export default class Timeline extends React.Component {
	render() {
		return (
			<div id="timeline">
				{ this.props.history.map(history => <HistoryTile key={history.title} history={history} />) }
			</div>
		);
	}
}