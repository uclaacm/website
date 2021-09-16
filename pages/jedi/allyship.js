import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

import AllyshipSpaceCard from '../../components/JEDI/AllyshipSpaceCard';
import JEDINav from '../../components/JEDI/JEDINav';
import Layout from '../../components/Layout';

import { allyshipSpaces as spaces } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';


function Allyship() {
	return (
		<Layout>
      <NextSeo
				title="JEDI Allyship Spaces | ACM at UCLA"
				description="JEDI holds allyship spaces on a bunch of different topics related to EDI; check out our past events! Anyone can lead and attend an allyship space. If you have a topic you're interested in, let us know!"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/jedi/allyship-banner.png',
							width: 1920,
							height: 1005,
							alt: 'The JEDI Logo',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
      <div className={`${styles.container} ${styles['container-padding']}`}>
        <JEDINav />
        <h1>allyship spaces</h1>
        <p className={`${styles['desktop-half-width']}`}>
          {/* eslint-disable-next-line max-len */}
          We hold allyship spaces on a bunch of different topics related to EDI; check out our past events below! Anyone can lead and attend an allyship space. If you have a topic you&apos;re interested in, <Link href="/jedi/meet#contact"><a className={styles['jedi-link']}>let us know</a></Link>!
        </p>
        {spaces.map((space, i) => <AllyshipSpaceCard {...space} key={space.title} priority={i < 2} /> )}
      </div>
		</Layout>
	);
}

export default Allyship;
