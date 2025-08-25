// import Image from 'next/image';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';

/* eslint-disable import/no-unresolved */
import alumYears from '../../data/alumyears.json';
/* eslint-enable import/no-unresolved */

function SidebarLink(props) {
  return (
    <a
      className={`committee ${props.committee.class}`}
      href={`#${props.committee.class}`}
    >
      <div className="committee-sidebar-image">
        {/* TODO: resolve next/image issue */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.committee.image}
          alt={`Logo and Wordmark for ACM ${props.committee.name}`}
        />
      </div>
    </a>
  );
}

function Sidebar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="sidebar-item">

      {/* Archive Dropdown */}
      {props.showArchiveDropdown && <div className={`archive-dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="dropdown-label">ARCHIVE</span>
          <FontAwesomeIcon
            icon={isDropdownOpen ? faChevronDown : faChevronRight}
            className="dropdown-icon"
          />
        </button>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            {alumYears.map((year) => (
              <button
                key={year}
                className={`dropdown-item ${year === props.selectedYear ? 'selected' : ''}`}
                onClick={() => {props.setSelectedYear(year);}}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>}

      {/* Committees */}
      {props.committees.map((committee) => (
        <SidebarLink key={committee.name} committee={committee} />
      ))}
    </div>
  );
}

export default Sidebar;
