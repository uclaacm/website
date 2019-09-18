import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';

export default class Sponsors extends React.Component {
	render() {
		return (
			<div className="about-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section center">
					<h2>Our Sponsors</h2>
					<p className="subheading">Thanks to the UCLA Computer Science department for their continuous support of our programs. Thanks to UCLA Reslife for logistics and organizational help with our events, as well as for providing great venues to host them.</p>
					<div className="sponsor-container">
						<img className="sponsor sponsor-big" src="/images/sponsors/ucla-cs.jpg" />
						<img className="sponsor sponsor-big" src="/images/sponsors/reslife.svg" />
					</div>
					<p className="subheading">A special thanks to all of the UCLA Computer Science sponsors for helping support our programs:</p>
					<div className="sponsor-container">
						{Config.sponsors.map(sponsor =>
							<img className="sponsor" alt={sponsor.name} key={sponsor.name} src={sponsor.image} />
						)}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
