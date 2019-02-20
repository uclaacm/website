import React from 'react';

export default class MediaTile extends React.Component {
	render() {
		return (
			<a href={this.props.media.link}>
				<div className= "media" style= {{backgroundImage: 'url(' + this.props.media.image + ')'}}> 
					<h2>{this.props.media.title}</h2>
					<p>"{this.props.media.quote[0].content}"</p>
					<div className= "speaker">
						<p>-{this.props.media.quote[0].speaker},<br/>
						{this.props.media.quote[0].position}</p>
					</div>
				</div>
			</a>
		);
	}
}

