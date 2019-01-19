import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';

export default class Media extends React.Component {
	render() {
		return (
			<div className="media-page">
			<Navbar />
			<Banner decorative />
			<div className="content-section center">
				<h2> Media </h2>
				<p> Here are some of the times ACM has been mentioned in the media: </p>
					{Config.media.map(media =>
						<p> {media.date} - {media.description} </p>
					)}
			</div>

				
			<Footer />
			</div>
		);
	}
}