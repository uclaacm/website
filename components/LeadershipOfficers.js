import Image from 'next/image';
import React from 'react';

import styles from '../styles/components/LeadershipOfficers.module.scss';

function Officer(props){
	return (
		<div className={styles.officerGridRow}>
			<div className={styles.officerGridCol}>
				<Image
					className={styles.officerImage}
					src={props.officer.image}
					alt={props.officer.name}
					width={70}
					height={70}
				/>
			</div>
			<div className={`${styles.officerGridCol} ${styles.officerInfo}`}>
				<h3 className={styles.officerTitle}>{props.officer.name}</h3>
				<p>{props.officer.title}</p>
			</div>
		</div>
	);
}

function Officers(props){
	return (
		// TODO: more flexible mobile views
		<div className={styles.gridDesktop3}>
			{
				props.officers.map(
					officer => <Officer officer={officer} key={officer.email} />,
				)
			}
		</div>
	);
}

export default Officers;
