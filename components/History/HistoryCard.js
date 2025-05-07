'use client'
import { useState, useRef, useEffect } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/components/History/Timeline.module.scss';

function HistoryCard({ historyEvent }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);
  const [detailsHeight, setDetailsHeight] = useState(0);
  
  // Get the real height of the content when it changes
  useEffect(() => {
    if (detailsRef.current) {
      setDetailsHeight(detailsRef.current.scrollHeight);
    }
  }, [historyEvent.details]);

  const committeeColors = {
    "ACM-W": "#1BC3A9",
    "ACM-Hack": "#C960FF",
    "ACM-ICPC": "#FF8383",
    "ACM-AI": "#28B2FF",
    "ACM-Studio": "#FB4469",
    "ACM-Cyber": "#FFBA44",
    "ACM-Design": "#FE8D3C",
    "ACM-TeachLA": "#5EDA12",
    General: "#1E6CFF",
  }

  const getCommitteeColor = (committee) => {
    return committeeColors[committee] || "#1E6CFF"; // default color
  }
  
  const committeeColor = getCommitteeColor(historyEvent.committee);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={styles['timeline-card']}
      style={{ 
        borderLeft: `4px solid ${committeeColor}`,
      }}
      onClick={toggleExpand}
    >
      <div className={styles['timeline-card-content']}>
        <div className={styles['timeline-card-header']}>
          <div className={styles['timeline-card-date']}>
            {historyEvent.date.year} {historyEvent.date.month} {historyEvent.date.date}
          </div>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`${styles['timeline-card-chevron']} ${isExpanded ? styles['chevron-rotated'] : ''}`}
          />
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