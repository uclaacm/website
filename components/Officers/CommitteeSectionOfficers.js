// import Image from 'next/image';
import React from 'react';
import CommitteeEventCard from '../Committees/CommitteeEventCard';
import Intro from '../Committees/CommitteeSectionIntro';
import Officers from "../Officers/OfficerCard";
import data from '../../offoutput.json';

function CommitteeOfficers({committee}) {   //maps officers to a particular commitee
	// const { leadership } = data;
	return (
		<div className="body-wrapper">
			<div className="card-container">
						<div className="grid-desktop-3">
						{committee.name === 'Board' ? (	//Board is an execption
						<Officers	
							officers={data.filter(officer => (officer.committee === 'Board, Internal' || officer.committee === 'Board, External' || officer.committee === 'President'))} 
							size="compact"
							committee={committee.name}
						/>
						) : 
						<Officers		//all other officers are straightforward
							officers={data.filter(officer => officer.committee==committee.name)} 
							size="compact"
							committee={committee.name}
						/>
						}			
						</div>
				</div>
		</div>
	);
}

function CommitteeSection(props) {
  const { committee } = props;
  return (
    <div id={committee.class} className="committee-section">
      {/* Header image */}
			{/* TODO: use next image without breaking deploy */}
      <div className={`committee-header ${committee.class}`}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={committee.image} className="committeebanner" alt={`${committee.name}'s logo`} />
      </div>
      {/* Committee Intro */}
      {/* <Intro committee={committee} /> */}
	
	  
      {/* Committee Body: events & projects */}
      <CommitteeOfficers committee={committee} />
    </div>
  );
}

export default CommitteeSection;
