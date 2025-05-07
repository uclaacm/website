/*
pass in events json file
events will be mapped to specific time cards
based on the committee
*/
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/components/History/Timeline.module.scss';
import HistoryCard from './HistoryCard';

const monthToNumber = {
  January: 1, February: 2, March: 3, April: 4,
  May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12
};


function Timeline({ historyLog }) {
  /*
  TODO:
  - render icon with each card on timeline
  - create card design for each event
  - add a state for each card to be open or closed (within the card)
  - stagger cards on both sides of timeline
  - add finishing animation touches
  */

  /*
  sort all the historical events by date
  */
  historyLog.sort((a, b) => {
    const yearDiff = b.date.year - a.date.year;
    if (yearDiff !== 0) return yearDiff;

    const monthA = typeof a.date.month === 'string' ? monthToNumber[a.date.month] : a.date.month;
    const monthB = typeof b.date.month === 'string' ? monthToNumber[b.date.month] : b.date.month;

    if (monthA - monthB === 0 && a.date.date && b.date.date) {
      const dateDiff = b.date.date - a.date.date;
      return dateDiff;
    }

    return monthB - monthA;
  });

  console.log(historyLog);


  return (
    <div className={styles['timeline-Container']}>
      <div className={styles['timeline-VerticalLine-Container']}>
        <div className={styles['timeline-VerticalLine']}></div>
        {historyLog.map((event, index) => (
          <div key={index} className={styles['timeline-event-container']}>
            {index % 2 === 0 ? (
              <>
                <div className={styles['timeline-card-container-left']}>
                  <HistoryCard historyEvent={event} />
                </div>
                <div className={styles['timeline-center']}>
                  <div className={styles['calendar-icon']}>
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                </div>
                <div className={styles['timeline-card-container-right-empty']}></div>
              </>
            ) : (
              <>
                <div className={styles['timeline-card-container-left-empty']}></div>
                <div className={styles['timeline-center']}>
                  <div className={styles['calendar-icon']}>
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                </div>
                <div className={styles['timeline-card-container-right']}>
                  <HistoryCard historyEvent={event} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
