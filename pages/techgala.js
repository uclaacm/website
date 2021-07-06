import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Projects from '../components/TechGala/Projects';
import TechGalaBanner from '../components/TechGala/TechGalaBanner';
import data from '../data';

import styles from '../styles/pages/TechGala.module.scss';

function TechGala() {
	const { tgprojects } = data;
	return (
		<Layout>
			<div className={styles.content}>
				<Banner decorative/>
				<div className={styles.pageContent}>
					<TechGalaBanner />
					<Projects projects={tgprojects}/>
				</div>
			</div>
		</Layout>
	);
}

export default TechGala;
