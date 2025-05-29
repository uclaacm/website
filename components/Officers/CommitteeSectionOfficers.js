// import Image from 'next/image';
import { useEffect } from 'react';

import alumData from '../../data/alumoutput.json';
import alumYears from '../../data/alumyears.json';
import offData from '../../data/offoutput.json';

import Officers from '../Officers/OfficerCard';

function getCommitteeOfficers(committee, selectedYear) {
  let yearData = alumData[selectedYear];
  // This will be unnecessary if we combine offoutput and alumyears.
  if (selectedYear === alumYears[0]) {
    yearData = offData;
  }

  if (!yearData) {
    return [];
  }

  if (committee.name === 'Board') {
    return yearData.filter((officer) =>
      ['Board', 'Board, Dev Team', 'Board, Internal', 'Board, External', 'President'].includes(officer.committee)
    );
  }

  return yearData.filter((officer) => officer.committee === committee.name);
}

function CommitteeOfficers({ officers, committee }) {
  return (
    <div className="officers-body-wrapper">
      <div className="officers-card-container">
        <Officers
          officers={officers}
          size="compact"
          committee={committee.name}
        />
      </div>
    </div>
  );
}

function CommitteeSection(props) {
  const { committee, selectedYear, updateCommitteeVisibility } = props;

  const officers = getCommitteeOfficers(committee, selectedYear);
  const isVisible = officers.length > 0;

  useEffect(() => {
    updateCommitteeVisibility(committee, isVisible);
  }, [committee, isVisible, updateCommitteeVisibility]);

  if (!isVisible) {
    return null;
  }

  return (
    <div id={committee.class} className="committee-section">
      <div className={`committee-header ${committee.class}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={committee.image}
          className="committeebanner"
          alt={`${committee.name}'s logo`}
        />
      </div>
      <CommitteeOfficers officers={officers} committee={committee} />
    </div>
  );
}

export default CommitteeSection;
