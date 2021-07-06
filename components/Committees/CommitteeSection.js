// import Image from 'next/image';
import React from 'react';
import CommitteeEventCard from './CommitteeEventCard';
import Intro from './CommitteeSectionIntro';

import styles from '../../styles/pages/Committees.module.scss'

function CommitteeProjects({committee}) {
	return (
		<div className={styles.bodyWrapper}>
			<h3 className={`${styles.fontHeader} ${styles.textBold} ${styles.text25x}`}>Events and Projects</h3>
			<div className={styles.cardContainer}>
				{committee.infoCards.map((card) => {
					// TODO: destructure class after renaming it
					const { image, title, desc } = card;
					return (
						<CommitteeEventCard
							committee={committee.class}
							image={image}
							title={title}
							desc={desc}
							key={title}
						/>
					);
				})}
				</div>
		</div>
	);
}

function CommitteeSection(props) {
  const { committee } = props;
  // TODO: destructure committee after renaming the .class property
  return (
    <div id={committee.class} className="committee-section">
      {/* Header image */}
			{/* TODO: use next image without breaking deploy */}
      <div>
				<img src={committee.image} alt={`${committee.name}'s logo`} />
      </div>
      {/* Committee Intro */}
      <Intro committee={committee} />
      {/* Committee Body: events & projects */}
      <CommitteeProjects committee={committee} />
    </div>
  );
}

export default CommitteeSection;
