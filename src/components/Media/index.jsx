import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import MediaTiles from 'components/Media/MediaTiles';

export default class Media extends React.Component {
	render() {
		return (
			<div className="media-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h1>ACM in the Media</h1>
					<MediaTiles media={Config.media} />
				</div>
				<Footer />
			</div>
		);
	}
} 


