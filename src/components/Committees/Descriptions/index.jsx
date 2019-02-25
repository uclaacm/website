import React from 'react';

import Description from './description';

export default class Descriptions extends React.Component {
	render() {
		return (
			<div className="descriptions">
				{ this.props.committees.map(description => <Description description={description} />) }
			</div>
		);
	}
}