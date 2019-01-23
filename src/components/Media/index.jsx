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
					<h2>Our Media</h2>
					<p className="subheading">Rad pics.</p>
						{Config.media.map(media =>
							<p> {media.name} </p>
						)}
				</div>
				<Footer />
			</div>
		);
	}
}