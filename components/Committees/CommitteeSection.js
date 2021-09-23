// import Image from 'next/image';
import React from 'react';
import CommitteeEventCard from './CommitteeEventCard';
import Intro from './CommitteeSectionIntro';

function CommitteeProjects({committee}) {
	return (
		<div className="body-wrapper">
			<h3 className="font-header text-bold text-25x"> Past Events and Projects</h3>
			<div className="card-container">
				{committee.infoCards.map((card) => {
					// TODO: destructure class after renaming it
					const { image, title, desc } = card;
					return (
						<CommitteeEventCard
							name={committee.name}
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
      <div className={`committee-header ${committee.class}`}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
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
