import React from 'react';

import Description from './description';

export default class Descriptions extends React.Component {
	render() {
		return (
			<div className="descriptions">
				{ this.props.descriptions.map(description => <Description description={description} />) }
			</div>
		);
	}
}