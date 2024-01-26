import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import Banner from '../components/Banner';
import CommitteeSectionOfficers from '../components/Officers/CommitteeSectionOfficers';
import Navigation from '../components/Committees/Sidebar';
// import Archive from '../components/Committees/ArchiveSidebar';
import Layout from '../components/Layout';
import data from '../data';
import teamPhoto from '../public/images/officers/internal_compressed.png';


function OfficersBanner() {	//fix description
	return (
		<div className="committee-banner-container">
			<div className="banner-main-content">
				<div className="image-wrapper">
					<Image className='bannerpic' src={teamPhoto} alt="the logos of all ACM committees" priority={true} />
				</div>
				<div className="info">
					<h1>Our Team</h1>
					<p className="half-size">ACM officers make the amazing events and projects that we do possible. This page recognizes our entire team across the entire board and all eight committees. Don&apos;t hesitate to get in touch with any of them!</p>
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
				description="ACM officers make the amazing events and projects that we do possible. This page recognizes our entire team across the entire board and all eight committees. Don't hesitate to get in touch with any of them!"
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
			<div className="officers-page-content">
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
