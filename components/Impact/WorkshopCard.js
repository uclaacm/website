import Image from 'next/image';
import React from 'react';

import styles from '../../styles/pages/impact.module.scss';

export default function WorkshopCard({title, description, img, alt}) {
	return (
		<div className={`${styles['workshop-card']} grid-mobile-2`}>
			<div className={styles['workshop-image-container']}>
				<Image src={img} alt={alt} />
			</div>
			<div>
				<h4 className="font-header">{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}
