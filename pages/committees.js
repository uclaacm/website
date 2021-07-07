import Image from 'next/image';
import React from 'react';
import Banner from '../components/Banner';
import CommitteeSection from '../components/Committees/CommitteeSection';
import Navigation from '../components/Committees/Sidebar';
import Layout from '../components/Layout';
import data from '../data';

import acmCommittees from '../public/images/acm_committees.png';
import styles from '../styles/pages/Committees.module.scss';


function CommitteesBanner() {
	return (
		<div className={styles.committeeBannerContainer}>
			<div className={styles.imageWrapper}>
				<Image src={acmCommittees} alt="the logos of all ACM committees" priority={true} />
			</div>
			<div>
				<h1>Committees</h1>
				<p>
					ACM comprises eight committees, each serving a unique topic and mission.
					All of our events are open to everyone. We strive to cover all of our members’
					interests and encourage members to explore new topics and events, too!
				</p>
			</div>
		</div>
	);
}

function CommitteesPage() {
	const { committees } = data;
	return (
		<Layout>
			<Banner decorative />
			<Navigation committees={committees} />
			<div className={styles.committeesPageContent}>
				<CommitteesBanner />
				<div className={styles.committeeSectionsContainer}>
					{committees.map(committee => <CommitteeSection key={committee.name} committee={committee} />) }
				</div>
			</div>
		</Layout>
	);
}

export default CommitteesPage;
