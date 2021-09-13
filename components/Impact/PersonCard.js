import React from 'react';
import styles from '../../styles/pages/impact.module.scss';

export default function PersonCard({name, pronouns, position, major, year, img, alt}){
	return (
		<div className={`${styles['workshop-card']} ${styles['grid-tablet-only-2']}`}>
			<div className={styles['workshop-image-container']}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={img} alt={alt} style={{maxWidth: '100%'}} />
			</div>
			<div>
				<h3 className={styles.name}>{name}</h3>
				<h4 className={styles.pronouns}>{pronouns}</h4>
				<ul className="list-unstyled">
					<li>{position}</li>
					<li>{major}</li>
					<li>Class of {year}</li>
				</ul>
			</div>
		</div>
	);
}
