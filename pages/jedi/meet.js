import React from 'react';

import JEDICard from '../../components/JEDI/JEDICard';
import Layout from '../../components/Layout';

import { jedis } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';

function Meet() {
	return (
		<Layout>
      <div className={styles.container}>
        <h1 className="text-right">meet the JEDIs</h1>
        <div className={styles['tri-grid']}>
          {jedis.map((jedi) => <JEDICard {...jedi} key={jedi.name} /> )}
        </div>
      </div>
		</Layout>
	);
}

export default Meet;
