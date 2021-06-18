import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import Button from '../components/Button';
import Layout from '../components/Layout';
import data from '../data';

import uclaCsDeptLogo from '../public/images/sponsors/ucla_cs_dept.png';
import reslifeLogo from '../public/images/sponsors/reslife.svg';

function Sponsors() {
	const { sponsors } = data;
	return (
		<Layout className="text-center">
			<Banner decorative />
			<div className="content-section">
				<h1>Our Sponsors</h1>
				<p className="subheading">A big thank-you to the <b>UCLA Computer Science Department</b> for their continuous partnership with and support of ACM at UCLA. Shout-out to <b>UCLA ResLife</b> for providing logistical assistance and stellar venues for our events.</p>
				<div className="sponsor-container">
					<a href="https://www.cs.ucla.edu" target="_blank" rel="noreferrer noopener">
						<Image className="sponsor" src={uclaCsDeptLogo} alt="UCLA CS Dept Logo" />
					</a>
					<a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">
						<Image className="sponsor" src={reslifeLogo} alt="UCLA ResLife Logo" />
					</a>
				</div>
				<p className="subheading">A special thanks to all of our UCLA Computer Science industry affiliates for their support:</p>
				<div className="sponsor-container">
					{sponsors.map(sponsor =>
						<a href={sponsor.link} target="_blank" rel="noreferrer noopener" key={sponsor.name}>
						<img className="sponsor" alt={sponsor.name} src={process.env.PUBLIC_URL + sponsor.image} layout="fill" />
						</a>,
					)}
				</div>
				<h2>Interested in becoming a sponsor?</h2>
				<div className="button-section">
					<a href="mailto:acm@ucla.edu"><Button text="Contact Us" /></a>
				</div><br /><br />
			</div>
		</Layout>
	);
}

export default Sponsors;
