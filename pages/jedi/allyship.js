import React from 'react';

import AllyshipSpaceCard from '../../components/JEDI/AllyshipSpaceCard';
import Layout from '../../components/Layout';

import { allyshipSpaces as spaces } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';


function Allyship() {
	return (
		<Layout>
      <div className={styles.container}>
        <h1 className="text-right">allyship spaces</h1>
        <p className={`text-right ${styles['desktop-half-width-right']}`}>
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {spaces.map((space) => <AllyshipSpaceCard {...space} key={space.title} /> )}
      </div>
		</Layout>
	);
}

export default Allyship;
