import React from 'react';

export default class MediaTile extends React.Component {
	render() {
		var mediaRender;
		if(this.props.media.media_type == 'img')
			mediaRender = <img src={this.props.media.image} />
		if(this.props.media.media_type == 'quote')
			mediaRender = <p>{this.props.media.quote} </p>
		return (
			<div className= "media">
				{mediaRender}
				<h2>{this.props.media.title}</h2><br />
				<p>{this.props.media.link}</p>
			</div>
		);
	}
}