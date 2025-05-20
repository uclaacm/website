// import Image from 'next/image';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';

// import data from '../../data/alumoutput.json';

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
  /*
  // Check if user has scrolled to the bottom of the page
  const footerHeight = 507.667; // is there a better way to do this?
  const [bottom, setBottom] = useState(false);
  const scrollBottomListener = () => {
    const difference =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = document.documentElement.scrollTop;
    setBottom(difference - scrollposition <= footerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollBottomListener);

    // cleanup
    return () => {
      window.removeEventListener('scroll', scrollBottomListener);
    };
  }, []);

  // Don't display sidebar if user has scrolled to the bottom of the screen
  if (bottom) {
    return null;
  }
  */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  const years = ['2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025'];

  return (
    <div className="sidebar-item">

      {/* Archive Dropdown */}
      <div className="archive-dropdown">
        <button className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="dropdown-label">ARCHIVE</span>
          <FontAwesomeIcon
            icon={isDropdownOpen ? faChevronUp : faChevronDown}
            className="dropdown-icon"
          />
        </button>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            {years.map((year) => (
              <button
                key={year}
                className={`dropdown-item ${year === selectedYear ? 'selected' : ''}`}
                onClick={() => {setSelectedYear(year); setIsDropdownOpen(false);}}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Committees */}
      {props.committees.map((committee) => (
        <SidebarLink key={committee.name} committee={committee} />
      ))}
    </div>
  );
}

export default Sidebar;
