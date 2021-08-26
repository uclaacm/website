import React from 'react';

import AllyshipSpaceCard from '../../components/JEDI/AllyshipSpaceCard';
import JEDINav from '../../components/JEDI/JEDINav';
import Layout from '../../components/Layout';

import { allyshipSpaces as spaces } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';


function Allyship() {
	return (
		<Layout>
      <div className={styles.container}>
        <JEDINav />
        <h1 className="text-right">allyship spaces</h1>
        <p className={`text-right ${styles['desktop-half-width-right']}`}>
          {/* eslint-disable-next-line max-len */}
          We hold allyship spaces on a bunch of different topics related to EDI; check out our past events below! Anyone can lead and attend an allyship space. If you have a topic you&apos;re interested in, [let us know](/contact)!
        </p>
        {spaces.map((space) => <AllyshipSpaceCard {...space} key={space.title} /> )}
      </div>
		</Layout>
	);
}

export default Allyship;
