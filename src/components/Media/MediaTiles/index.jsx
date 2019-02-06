import React from 'react';

import MediaTile from './mediatile';

export default class MediaTiles extends React.Component {
	render() {
		return (
			<div id="mediatiles">
				{ this.props.media.map(media => <MediaTile key={media.title} media={media}/>) }
			</div>
		);
	}
}