import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, React } from 'react';
import events from '../../data/event';
import styles from '../../styles/components/Events/Filters.module.scss';

export default function filters(props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [chosenComms, setChosenComms] = useState({
    'studio': false,
    'icpc': false,
    'design': false,
    'cyber': false,
    'teach-la': false,
    'w': false,
    'ai': false,
    'hack': false,
    'board': false,
  });
  const [chosenDays, setChosenDays] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });
  const [chosenTimes, setChosenTimes] = useState({
    from: '',
    to: '',
  });
  const [chosenLoc, setChosenLoc] = useState({
    'Online': false,
    'In-Person': false,
  });

  const dateToMinutes = (date) => {
    const itemMins =
      date.getHours() * 60 + date.getMinutes();
    return itemMins;
  };
  const filterTime = (filterEvents) => {
    const isFilterTimeEmpty = Object.keys(chosenTimes).every(
      (time) => chosenTimes[time] === '',
    );
    if (!isFilterTimeEmpty) {
      const filterFromMins =
        chosenTimes.from === '' ? 0 : // 12:00 AM if empty
          parseInt(chosenTimes.from.split(':')[0]) * 60 +
          parseInt(chosenTimes.from.split(':')[1]);
      const filterToMins =
        chosenTimes.to === '' ? 1440 :  // 11:59 PM if empty
          parseInt(chosenTimes.to.split(':')[0]) * 60 +
          parseInt(chosenTimes.to.split(':')[1]);

      return filterEvents.filter((item) => {
        const itemStartMins = dateToMinutes(new Date(item.start));
        const itemEndMins = dateToMinutes(new Date(item.end));
        return itemStartMins >= filterFromMins && itemEndMins <= filterToMins;
      });
    }
    return filterEvents;
  }
  const filterComm = (filterEvents) => {
    const isCommEmpty = Object.keys(chosenComms).every(
      (comm) => !chosenComms[comm],
    );
    if (!isCommEmpty) {
      return filterEvents.filter((item) => {
        if (!item.committee) return false;
        return chosenComms[item.committee];
      });
    }
    return filterEvents;
  }
  const filterDays = (filterEvents) => {
    const isDaysEmpty = Object.keys(chosenDays).every(
      (day) => !chosenDays[day],
    );
    if (!isDaysEmpty) {
      return filterEvents.filter((item) => {
        const date = new Date(item.start);
        const itemDay = Object.keys(chosenDays)[date.getDay()];
        return chosenDays[itemDay];
      });
    }
    return filterEvents;
  }
  const filterLoc = (filterEvents) => {
    const isLocEmpty = Object.keys(chosenLoc).every((loc) => !chosenLoc[loc]);
    if (!isLocEmpty) {
      return filterEvents.filter((item) => {
        const itemLoc = item.location.toLowerCase().includes('zoom') ? 'Online' : 'In-Person';
        return chosenLoc[itemLoc];
      });
    }
    return filterEvents;
  }
  const handleSearch = () => {
    // Check search input
    const lowerCaseSearch = searchValue.toLowerCase();
    let allEvents = events.filter((item) =>
      [item.title, item.committee, item.location, item.description].some(
        (itemsToSearch) =>
          String(itemsToSearch).toLowerCase().includes(lowerCaseSearch),
      ),
    );
    allEvents = filterTime(allEvents);
    allEvents = filterComm(allEvents);
    allEvents = filterDays(allEvents);
    allEvents = filterLoc(allEvents);
    const newEvents = allEvents.map((original_event, index) => ({
      ...original_event,
      id: index,
    }));
    props.handleChange(newEvents);
    setIsFilterOpen(false);
  };

  const handleWeekdayChange = (day, value) => {
    setChosenDays({ ...chosenDays, [day]: value });
  };

  const handleCommChange = (comm, value) => {
    setChosenComms({ ...chosenComms, [comm]: value });
  };

  const handleTimeChange = (key, value) => {
    setChosenTimes({ ...chosenTimes, [key]: value });
  };

  const handleLocationChange = (loc, value) => {
    setChosenLoc({ ...chosenLoc, [loc]: value });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.inner}>
        <input
          placeholder="Search Events"
          className={styles.searchbar}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} className={styles.searchbutton}>
          search
        </button>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={styles.searchbutton}
        >
          filter
          <FontAwesomeIcon
            className={styles.arrow}
            icon={isFilterOpen ? faChevronUp : faChevronDown}
          />
        </button>
        {isFilterOpen && (
          <div className={styles.filteroptions}>
            <div>
              <h3 className={styles.header}>Committees </h3>
              {Object.keys(chosenComms).map((comm) => (
                <div key={comm}>
                  <input
                    type="checkbox"
                    id={comm}
                    checked={chosenComms[comm]}
                    onChange={(e) => handleCommChange(comm, e.target.checked)}
                  />{' '}
                  {comm}
                </div>
              ))}
            </div>
            <div>
              <h3 className={styles.header}>Days</h3>
              {Object.keys(chosenDays).map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    id={day}
                    checked={chosenDays[day]}
                    onChange={(e) => handleWeekdayChange(day, e.target.checked)}
                  />{' '}
                  {day}
                </div>
              ))}
            </div>
            <div>
              <h3 className={styles.header}>Time</h3>
              <div className={styles.timecontainer}>
                <div>
                  <div>From </div>
                  <div>To </div>
                </div>
                <div>
                  {Object.keys(chosenTimes).map((time) => (
                    <div key={time}>
                      <input
                        type="time"
                        className={styles.timeinput}
                        value={chosenTimes[time]}
                        onChange={(e) => handleTimeChange(time, e.target.value)}
                      />
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.header}>Location</h3>
              {Object.keys(chosenLoc).map((loc) => (
                <div key={loc}>
                  <input
                    type="checkbox"
                    checked={chosenLoc[loc]}
                    onChange={(e) => handleLocationChange(loc, e.target.checked)}
                  /> {loc}
                </div>
              ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
