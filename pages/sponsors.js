import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import data from '../data';

import reslifeLogo from '../public/images/sponsors/reslife.svg';
import uclaCsDeptLogo from '../public/images/sponsors/ucla_cs_dept.png';

function Sponsors() {
	const { sponsors } = data;
	return (
		<Layout>
			<Banner decorative />
			<div className="content-section text-center">
				<h1>Our Sponsors</h1>
				<p className="subheading">A big thank-you to the <a href="https://www.cs.ucla.edu" target="_blank" rel="noreferrer noopener">UCLA Computer Science Department</a> for their continuous partnership with and support of ACM at UCLA. Shout-out to <a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">UCLA ResLife</a> for providing logistical assistance and stellar venues for our events.</p>
				<div className="sponsor-container">
					<div className="sponsor">
						<a href="https://www.cs.ucla.edu" target="_blank" rel="noreferrer noopener">
							<Image src={uclaCsDeptLogo} alt="UCLA CS Dept Logo" />
						</a>
					</div>
					<div className="sponsor">
						<a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">
							<Image src={reslifeLogo} alt="UCLA ResLife Logo" />
						</a>
					</div>
				</div>
				<p className="subheading">A special thanks to all of our UCLA Computer Science industry affiliates for their support:</p>
				<div className="sponsor-container">
					{sponsors.map(sponsor =>
						// <div className="sponsor sponsor-sm" key={sponsor.name}>
							<a className="block-centered sponsor" href={sponsor.link} target="_blank" rel="noreferrer noopener" key={sponsor.name}>
								<Image
									alt={sponsor.name}
									src={sponsor.image}
								/>
							</a>,
						// </div>,
					)}
				</div>
				<h2>Interested in becoming a sponsor?</h2>
				<div className="button-section">
					<Link href="mailto:acm@ucla.edu">
						<a className="button">
							Contact Us at acm@ucla.edu
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export default Sponsors;
