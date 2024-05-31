import { NextSeo } from 'next-seo';
import React from 'react';

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';
import OfficerHistoryCard from '../../components/OfficerHistoryCard';

import officers from '../../data/officer-history';

function OfficerHistory() {
	return (
		<Layout>
			<NextSeo
				title="officer history"
				description="Ask questions and get your voice heard at the Fall 2021 Computer Science Town Hall! Wednesday, November 10th from 6:30 - 8:30 PM PT - we hope to see you there :)"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/logo.png',
							width: 1200,
							height: 1200,
							alt: 'The ACM at UCLA logo',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
			<Banner decorative />
			<div className="content-container-tight">
        {officers.map(officer => <OfficerHistoryCard {...officer} key={officer.name + officer.year}/>)}
			</div>
		</Layout>
	);
}

export default OfficerHistory;
