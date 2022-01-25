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
    fromTime: '',
    toTime: '',
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

  const handleSearch = () => {
    // Check search input
    const lowerCaseSearch = searchValue.toLowerCase();
    let allEvents = events.filter((item) =>
      [item.title, item.committee, item.location, item.description].some(
        (itemsToSearch) =>
          String(itemsToSearch).toLowerCase().includes(lowerCaseSearch),
      ),
    );

    // Check time filter
    const isFilterTimeEmpty = Object.keys(chosenTimes).every(
      (time) => chosenTimes[time] === '',
    );
    if (!isFilterTimeEmpty) {
      const filterFromMins =
        parseInt(chosenTimes.fromTime.split(':')[0]) * 60 +
        parseInt(chosenTimes.fromTime.split(':')[1]);
      const filterToMins =
        parseInt(chosenTimes.toTime.split(':')[0]) * 60 +
        parseInt(chosenTimes.toTime.split(':')[1]);

      allEvents = allEvents.filter((item) => {
        const itemStartMins = dateToMinutes(new Date(item.start));
        const itemEndMins = dateToMinutes(new Date(item.end));
        return itemStartMins >= filterFromMins && itemEndMins <= filterToMins;
      });
    }

    // Check committee filter
    const isCommEmpty = Object.keys(chosenComms).every(
      (comm) => !chosenComms[comm],
    );
    if (!isCommEmpty) {
      allEvents = allEvents.filter((item) => {
        if (!item.committee) return false;
        return chosenComms[item.committee];
      });
    }

    // Check days filter
    const isDaysEmpty = Object.keys(chosenDays).every(
      (day) => !chosenDays[day],
    );
    if (!isDaysEmpty) {
      allEvents = allEvents.filter((item) => {
        const date = new Date(item.start);
        const itemDay = Object.keys(chosenDays)[date.getDay()];
        return chosenDays[itemDay];
      });
    }

    // Check location filter
    const isLocEmpty = Object.keys(chosenLoc).every((loc) => !chosenLoc[loc]);
    if (!isLocEmpty) {
      allEvents = allEvents.filter((item) => {
        const itemLoc = item.location.toLowerCase().includes('zoom') ? 'Online' : 'In-Person';
        return chosenLoc[itemLoc];
      });
    }

    const newEvents = allEvents.map((original_event, index) => ({
      ...original_event,
      id: index,
    }));
    props.handleChange(newEvents);
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
