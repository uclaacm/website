import React from 'react';

import Config from '../../config';

import Button from '../Button/Button';
import Banner from '../Banner/Banner';

function Sponsors() {
	return (
		<div className="about-page">
			<Banner decorative />
			<div className="content-section center">
				<h2>Our Sponsors</h2>
				<p className="subheading">We would like to thank the <b>UCLA Computer Science department</b> for their continuous support of ACM. Thanks to <b>UCLA ResLife</b> for logistical and organizational help with our events, as well as for providing great venues to host them.</p>
				<div className="sponsor-container">
					<a href="https://cs.ucla.edu" target="_blank" rel="noreferrer noopener">
						<img className="sponsor sponsor-big" src={process.env.PUBLIC_URL + "/images/sponsors/ucla_cs_dept.png"} alt="UCLA CS Dept Logo" />
					</a>
					<a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">
						<img className="sponsor sponsor-big" src={process.env.PUBLIC_URL + "/images/sponsors/reslife.svg"} alt="UCLA ResLife Logo" />
					</a>
				</div>
				<p className="subheading">A special thanks to all of the UCLA Computer Science sponsors for helping support our programs:</p>
				<div className="sponsor-container">
					{Config.sponsors.map(sponsor =>
						<a href={sponsor.link} target="_blank" rel="noreferrer noopener">
						<img className="sponsor" alt={sponsor.name} key={sponsor.name} src={process.env.PUBLIC_URL + sponsor.image} />
						</a>
					)}
				</div>
				<h3>Interesting in becoming a sponsor?</h3>
				<div className="button-section center">
					<a href="mailto:acm@ucla.edu"><Button text="Contact Us" /></a>
				</div><br /><br />
			</div>
		</div>
	);
}

export default Sponsors;
