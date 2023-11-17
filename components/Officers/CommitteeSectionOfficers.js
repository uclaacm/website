// import Image from 'next/image';
import React from 'react';
import CommitteeEventCard from '../Committees/CommitteeEventCard';
import Intro from '../Committees/CommitteeSectionIntro';
import Officers from "../Officers/OfficerCard";
import data from '../../data';

function CommitteeOfficers({committee}) {   //replace this with a map of officers! - take in list of officers and committee name
	const { leadership } = data;
	return (
		<div className="body-wrapper">
			<div className="card-container">
				{committee.infoCards.map((card) => {		//conditional mapping, if officer committee matches with committee name
					// TODO: destructure class after renaming it
					return (
						<div className="grid-desktop-3">
						<Officers
							officers={leadership} 
							size="compact"
							committee={committee.name}
						/>
						</div>
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
      {/* <Intro committee={committee} /> */}
	
	  
      {/* Committee Body: events & projects */}
      <CommitteeOfficers committee={committee} />
    </div>
  );
}

export default CommitteeSection;
