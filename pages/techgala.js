import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Projects from '../components/TechGala/Projects';
import TechGalaBanner from '../components/TechGala/TechGalaBanner';
import data from '../data';

function TechGala() {
	const { tgprojects } = data;
	return (
		<Layout>
			<div className='content'>
				<Banner decorative/>
				<div className="page-content">
					<TechGalaBanner />
					<Projects projects={tgprojects}/>
				</div>
			</div>
		</Layout>
	);
}

export default TechGala;
