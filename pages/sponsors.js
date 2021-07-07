import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import data from '../data';

import reslifeLogo from '../public/images/sponsors/reslife.png';
import uclaCsDeptLogo from '../public/images/sponsors/ucla_cs_dept.png';

import styles from "../styles/pages/Sponsors.module.scss";

function Sponsors() {
	const { sponsors } = data;
	return (
		<Layout>
			<Banner decorative />
			<div className={`${styles.contentSection} ${styles.textCenter}`}>
				<h1>Our Sponsors</h1>
				<p className={styles.subheading}>A big thank-you to the <a href="https://www.cs.ucla.edu" target="_blank" rel="noreferrer noopener">UCLA Computer Science Department</a> for their continuous partnership with and support of ACM at UCLA. Shout-out to <a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">UCLA ResLife</a> for providing logistical assistance and stellar venues for our events.</p>
				<div className={styles.sponsorContainer}>
					<div className={styles.sponsor}>
						<a href="https://www.cs.ucla.edu" target="_blank" rel="noreferrer noopener">
							<Image src={uclaCsDeptLogo} alt="UCLA CS Dept Logo" priority={true} />
						</a>
					</div>
					<div className={styles.sponsor}>
						<a href="https://reslife.ucla.edu" target="_blank" rel="noreferrer noopener">
							<Image src={reslifeLogo} alt="UCLA ResLife Logo" priority={true} />
						</a>
					</div>
				</div>
				<p className={styles.subheading}>A special thanks to all of our UCLA Computer Science industry affiliates for their support:</p>
				<div className={styles.sponsorContainer}>
					{sponsors.map(sponsor =>
						<a className={`${styles.blockCentered} ${styles.sponsor}`} href={sponsor.link} target="_blank" rel="noreferrer noopener" key={sponsor.name}>
							<Image
								alt={sponsor.name}
								src={sponsor.image}
							/>
						</a>,
					)}
				</div>
				<h2>Interested in becoming a sponsor?</h2>
				<div className={styles.buttonSection}>
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
