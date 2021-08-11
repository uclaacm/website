import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';

import impactMotifBanner from '../public/images/impact/impact-motif.png';
import styles from '../styles/pages/impact.module.scss';

function Impact() {
	return (
		<Layout>
			<Banner decorative />
			<div className={styles.container}>
        <Image src={impactMotifBanner} alt='Impact by ACM at UCLA' />
				<h2>Tech Ethics.</h2>
				<p>
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Our Initiatives</h2>
			</div>
		</Layout>
	);
}

export default Impact;
