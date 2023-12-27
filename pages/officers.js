import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import CommitteeSectionOfficers from '../components/Officers/CommitteeSectionOfficers';
import Navigation from '../components/Committees/Sidebar';
import Archive from '../components/Committees/ArchiveSidebar';
import Layout from '../components/Layout';
import data from '../data';
import acmCommittees from '../public/images/acm_committees.png';


function OfficersBanner() {	//fix description
	return (
		<div className="committee-banner-container">
			<div className="banner-main-content">
				<div className="image-wrapper">
					<Image src={acmCommittees} alt="the logos of all ACM committees" priority={true} />
				</div>
				<div className="info">
					<h1>Our Team</h1>
					<p className="half-size">ACM comprises eight committees, each serving a unique topic and mission. All of our events are open to everyone. We strive to cover all of our members’ interests and encourage members to explore new topics and events, too!</p>
				</div>
			</div>
		</div>
	);
}


function OfficersPage() {
	const { committees, board } = data;
	const committeeInfo = board.concat(committees);
	return (
		<Layout>
			<NextSeo
				title="Our Team | ACM at UCLA"
				description="ACM comprises eight committees, each serving a unique topic and mission. Learn more about Studio, ICPC, Design, Cyber, Teach LA, W, AI, and Hack here! All of our events are open to everyone; we want to help you explore your passion!"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/acm_committees.png',
							width: 2506,
							height: 979,
							alt: 'The ACM at UCLA logo, surrounded by our eight committees: Studio, ICPC, Design, Cyber, Teach LA, W, AI, and Hack.',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
			<Banner decorative />
			<Navigation committees={committeeInfo} />
			
      {/* <Archive committees={committees} /> */}
			<div className="committees-page-content">
			<OfficersBanner />
			<div className='committee-sections-container'>
				{committeeInfo.map(committee => (
					<CommitteeSectionOfficers key={committee.name} committee={committee} />
				))}
			</div>


				
				
			</div>	
		</Layout>
	);
}

export default OfficersPage;
