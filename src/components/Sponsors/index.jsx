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
					<p className="subheading">We would like to thank the <b>UCLA Computer Science department</b> for their continuous support of ACM. Thanks to <b>UCLA ResLife</b> for logistical and organizational help with our events, as well as for providing great venues to host them.</p>
					<div className="sponsor-container">
						<a href="https://cs.ucla.edu" target="_BLANK"><img className="sponsor sponsor-big" src="/images/sponsors/ucla_cs_dept.png" /></a>
						<a href="https://reslife.ucla.edu" target="_BLANK"><img className="sponsor sponsor-big" src="/images/sponsors/reslife.svg" /></a>
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
