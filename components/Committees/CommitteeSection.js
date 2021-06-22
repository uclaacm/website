// import Image from 'next/image';
import React from 'react';
import CommitteeEventCard from './CommitteeEventCard';
import Intro from './CommitteeSectionIntro';

function CommitteeProjects({committee}) {
	return (
		<div className="body-wrapper">
			<h3 className="font-header text-bold text-25x">Events and Projects</h3>
			<div className="card-container">
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
			{/* TODO: this could probably be a bit more accessible */}
      <div className={`committee-header ${committee.class}`}>
		<img src={committee.image} alt="committee logo" />
        {/* <Image src={committee.image} alt="committee logo" width={780} height={164}/> */}
      </div>
      {/* Committee Intro */}
      <Intro committee={committee} />
      {/* Committee Body: events & projects */}
      <CommitteeProjects committee={committee} />
    </div>
  );
}

export default CommitteeSection;
