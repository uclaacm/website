'use client';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/components/History/Timeline.module.scss';

function HistoryCard({ historyEvent }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);
  const [detailsHeight, setDetailsHeight] = useState(0);

  useEffect(() => {
    if (detailsRef.current) {
      setDetailsHeight(detailsRef.current.scrollHeight);
    }
  }, [historyEvent.details]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const getMonthName = (monthNumber) => {
    // Assumes monthNumber is 1-based (1 = January)
    return monthNames[monthNumber - 1] || '';
  };

  const committeeColors = {
    'ACM-W': '#1BC3A9',
    'ACM-Hack': '#C960FF',
    'ACM-ICPC': '#FF8383',
    'ACM-AI': '#28B2FF',
    'ACM-Studio': '#FB4469',
    'ACM-Cyber': '#FFBA44',
    'ACM-Design': '#FE8D3C',
    'ACM-TeachLA': '#5EDA12',
    'ACM-General': '#1E6CFF',
  };

  const getCommitteeColor = (committee) => {
    return committeeColors[committee] || committeeColors['ACM-General'];
  };

  const committeeColor = getCommitteeColor(historyEvent.committee);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleExpand();
    }
  };

  return (
    <div
      className={styles['timeline-card']}
      style={{ borderLeft: `4px solid ${committeeColor}` }}
      onClick={toggleExpand}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={styles['timeline-card-content']}>
        <div className={styles['timeline-card-header']}>
          <div className={styles['timeline-card-date']}>
            {historyEvent.dateObj.year} {getMonthName(historyEvent.dateObj.month)} {historyEvent.dateObj?.date}
          </div>
          <FontAwesomeIcon icon={faChevronDown} className={`${styles['timeline-card-chevron']} ${isExpanded ? styles['chevron-rotated'] : ''}`}/>
        </div>
        <div className={styles['timeline-card-description']}>
          {historyEvent.description}
        </div>
        <div
          className={styles['timeline-card-details-container']}
          style={{
            height: isExpanded ? `${detailsHeight}px` : '0px',
          }}
        >
          <div
            ref={detailsRef}
            className={styles['timeline-card-details']}
          >
            {historyEvent.details}
          </div>
        </div>
        <div className={styles['timeline-card-committee']} style={{ color: committeeColor }}>
          {historyEvent.committee}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
