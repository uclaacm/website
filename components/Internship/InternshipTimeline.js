import React from 'react';

import styles from '../../styles/components/Internship/InternshipTimeline.module.scss';

function InternshipTimeline(props) {
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;

	return (
		<div className={`hidden-mobile ${styles.timeline}`}>
			<div className={styles['timeline-progress']} style={{ width: `${progressBarWidth}%`}}></div>
			<div className={styles['timeline-items']}>
				{items.map((item, i) => (
					<div key={i} className={`${styles['timeline-item']} ${styles[item.active ? 'active' : null ]}`}>
						<div className={styles['timeline-content']}>
                            {item.date} <br/>
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default InternshipTimeline;
