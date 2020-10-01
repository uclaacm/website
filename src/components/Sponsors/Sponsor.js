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
				<p className="subheading">A big thank-you to the <b>UCLA Computer Science Department</b> for their continuous partnership with and support of ACM at UCLA. Shout-out to <b>UCLA ResLife</b> for providing logistical assistance and stellar venues for our events.</p>
				<div className="sponsor-container">
					<a href="https://www.cs.ucla.edu" target="_blank" rel="noreferrer noopener">
						<img className="sponsor" src={process.env.PUBLIC_URL + "/images/sponsors/ucla_cs_dept.png"} alt="UCLA CS Dept Logo" />
					</a>
					<a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">
						<img className="sponsor" src={process.env.PUBLIC_URL + "/images/sponsors/reslife.svg"} alt="UCLA ResLife Logo" />
					</a>
				</div>
				<p className="subheading">A special thanks to all of our UCLA Computer Science industry affiliates for their support:</p>
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
