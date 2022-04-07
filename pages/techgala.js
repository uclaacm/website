import { NextSeo } from 'next-seo';
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
			<NextSeo
				title="Tech Gala | ACM chapter at UCLA"
				description="Tech Gala is ACM's annual showcase of the amazing projects that our student body has worked on. Learn more about the projects developed here, and keep your eyes out for the next Tech Gala!"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/techgala/techgala-banner-dark.jpg',
							width: 1920,
							height: 1005,
							alt: 'The Tech Gala banner; features an isometric view of a lightbulb and stage props. Reads: "Thursday, February 11th 2021 at 6:30 PM PST on the ACM Discord"',
						},
					],
					site_name: 'ACM chapter at UCLA',
				}}
			/>
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
