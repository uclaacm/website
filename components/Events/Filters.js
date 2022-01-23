import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, React } from 'react';
import events from '../../data/event';
import styles from '../../styles/components/Events/Filters.module.scss';

export default function filters(props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [chosenComms, setChosenComms] = useState({
    studio: false,
    icpc: false,
    design: false,
    cyber: false,
    teachLA: false,
    w: false,
    ai: false,
    hack: false,
    board: false,
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
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [chosenLoc, setChosenLoc] = useState({
    Online: false,
    In_person: false,
  });

  const handleSearch = () => {
    let allEvents = [...events];
    //Check search input
    const lowerCaseSearch = searchValue.toLowerCase();
    allEvents = allEvents.filter((item) => {
      if (String(item.title).toLowerCase().includes(lowerCaseSearch))
        return true;
      if (String(item.committee).toLowerCase().includes(lowerCaseSearch))
        return true;
      if (String(item.location).toLowerCase().includes(lowerCaseSearch))
        return true;
      if (String(item.description).toLowerCase().includes(lowerCaseSearch))
        return true;
      return false;
    });
    //Check filters
    const isTimeEmpty = fromTime === '' || toTime === '';
    const isCommEmpty = Object.keys(chosenComms).every(
      (comm) => !chosenComms[comm],
    );
    const isDaysEmpty = Object.keys(chosenDays).every(
      (day) => !chosenDays[day],
    );
    const isLocEmpty = Object.keys(chosenLoc).every((loc) => !chosenLoc[loc]);
    let fromMins = 0;
    let toMins = 0;
    if (!isTimeEmpty) {
      fromMins =
        parseInt(fromTime.split(':')[0]) * 60 +
        parseInt(fromTime.split(':')[1]);
      toMins =
        parseInt(toTime.split(':')[0]) * 60 + parseInt(toTime.split(':')[1]);
    }
    allEvents = allEvents.filter((item) => {
      const itemDate = new Date(item.start);
      const itemDay = Object.keys(chosenDays)[itemDate.getDay()];
      const itemLoc = item.location.toLowerCase().includes('zoom') ? 'Online' : 'In_person';
      if (!item.committee) return false;
      const itemComm =
        item.committee === 'teach-la' ? 'teachLA' : item.committee; //No hyphens in object key
      const itemMins = itemDate.getHours() * 60 + itemDate.getMinutes();
      const timeValid =
        isTimeEmpty || (itemMins >= fromMins && itemMins <= toMins);
      const dayValid = isDaysEmpty || chosenDays[itemDay];
      const commValid = isCommEmpty || chosenComms[itemComm];
      const onlineValid = isLocEmpty || chosenLoc[itemLoc];
      return timeValid && dayValid && commValid && onlineValid;
    });
    const newEvents = allEvents.map((original_event, index) => ({
      ...original_event,
      id: index,
    }));
    props.handleChange(newEvents);
  };
  const handleWeekdayChange = (day) => {
    const updated = { ...chosenDays };
    updated[day] = !updated[day];
    setChosenDays(updated);
  };
  const handleCommChange = (comm) => {
    const updated = { ...chosenComms };
    updated[comm] = !updated[comm];
    setChosenComms(updated);
  };
  const handleLocationChange = (loc) => {
    const updated = { ...chosenLoc };
    updated[loc] = !updated[loc];
    setChosenLoc(updated);
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
                    onChange={() => handleCommChange(comm)}
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
                    onChange={() => handleWeekdayChange(day)}
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
                  {[[fromTime, setFromTime],[toTime, setToTime]].map((state,index) => (
                    <div key={index}>
                      <input
                        type="time"
                        className={styles.timeinput}
                        value={state[0]}
                        onChange={(e) => state[1](e.target.value)}
                      />
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.header}>Location</h3>
              {Object.keys(chosenLoc).map((loc) => {
                let title = loc;
                if (loc === 'In_person') title = 'In-Person';
                return (
                  <div key={loc}>
                    <input
                      type="checkbox"
                      id="online"
                      checked={chosenLoc[loc]}
                      onChange={() => handleLocationChange(loc)}
                    />{title}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
