import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useReducer, React } from 'react';
import allEvents from '../../data/event';
import styles from '../../styles/components/Events/Filters.module.scss';

const dateToMinutes = (date) => {
  const itemMins = date.getHours() * 60 + date.getMinutes();
  return itemMins;
};

export default function filters(props) {
  function reducer(state, action) {
    switch (action.type) {
      case 'comms':
        return {
          ...state,
          comms: {
            ...state.comms,
            [action.payload.key]: action.payload.val,
          },
        };
      case 'days':
        return {
          ...state,
          days: {
            ...state.days,
            [action.payload.key]: action.payload.val,
          },
        };
      case 'times':
        return {
          ...state,
          times: {
            ...state.times,
            [action.payload.key]: action.payload.val,
          },
        };
      case 'loc':
        return {
          ...state,
          loc: {
            ...state.loc,
            [action.payload.key]: action.payload.val,
          },
        };
      default:
        throw new Error();
    }
  }
  const initialState = {
    comms: {
      'studio': false,
      'icpc': false,
      'design': false,
      'cyber': false,
      'teach-la': false,
      'w': false,
      'ai': false,
      'hack': false,
      'board': false,
    },
    days: {
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    },
    times: {
      from: '',
      to: '',
    },
    loc: {
      'Online': false,
      'In-Person': false,
    },
  };
  const [filterVals, dispatch] = useReducer(reducer, initialState);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filterTime = (events) => {
    const isFilterTimeEmpty = Object.keys(filterVals.times).every(
      (time) => filterVals.times[time] === '',
    );
    if (!isFilterTimeEmpty) {
      const filterFromMins =
        filterVals.times.from === ''
          ? 0 // 12:00 AM if empty
          : parseInt(filterVals.times.from.split(':')[0]) * 60 +
            parseInt(filterVals.times.from.split(':')[1]);
      const filterToMins =
        filterVals.times.to === ''
          ? 1440 // 11:59 PM if empty
          : parseInt(filterVals.times.to.split(':')[0]) * 60 +
            parseInt(filterVals.times.to.split(':')[1]);

      return events.filter((item) => {
        const itemStartMins = dateToMinutes(new Date(item.start));
        const itemEndMins = dateToMinutes(new Date(item.end));
        return itemStartMins >= filterFromMins && itemEndMins <= filterToMins;
      });
    }
    return events;
  };

  const filterComm = (events) => {
    const isCommEmpty = Object.keys(filterVals.comms).every(
      (comm) => !filterVals.comms[comm],
    );
    if (!isCommEmpty) {
      return events.filter((item) => {
        if (!item.committee) return false;
        return filterVals.comms[item.committee];
      });
    }
    return events;
  };

  const filterDays = (events) => {
    const isDaysEmpty = Object.keys(filterVals.days).every(
      (day) => !filterVals.days[day],
    );
    if (!isDaysEmpty) {
      return events.filter((item) => {
        const date = new Date(item.start);
        const itemDay = Object.keys(filterVals.days)[date.getDay()];
        return filterVals.days[itemDay];
      });
    }
    return events;
  };

  const filterLoc = (events) => {
    const isLocEmpty = Object.keys(filterVals.loc).every(
      (loc) => !filterVals.loc[loc],
    );
    if (!isLocEmpty) {
      return events.filter((item) => {
        const itemLoc = item.location.toLowerCase().includes('zoom')
          ? 'Online'
          : 'In-Person';
        return filterVals.loc[itemLoc];
      });
    }
    return events;
  };

  const handleSearch = () => {
    // Check search input
    const lowerCaseSearch = searchValue.toLowerCase();
    let filteredEvents = allEvents.filter((item) =>
      [item.title, item.committee, item.location, item.description].some(
        (itemsToSearch) =>
          String(itemsToSearch).toLowerCase().includes(lowerCaseSearch),
      ),
    );
    filteredEvents = filterTime(filteredEvents);
    filteredEvents = filterComm(filteredEvents);
    filteredEvents = filterDays(filteredEvents);
    filteredEvents = filterLoc(filteredEvents);
    const newEvents = filteredEvents.map((original_event, index) => ({
      ...original_event,
      id: index,
    }));
    props.handleChange(newEvents);
    setIsFilterOpen(false);
  };

  const handleFilterChange = (type, key, value) => {
    dispatch({ type: type, payload: { key: key, val: value } });
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
              {Object.keys(filterVals.comms).map((comm) => (
                <div key={comm}>
                  <input
                    type="checkbox"
                    id={comm}
                    checked={filterVals.comms[comm]}
                    onChange={(e) =>
                      handleFilterChange('comms', comm, e.target.checked)
                    }
                  />{' '}
                  {comm}
                </div>
              ))}
            </div>
            <div>
              <h3 className={styles.header}>Days</h3>
              {Object.keys(filterVals.days).map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    id={day}
                    checked={filterVals.days[day]}
                    onChange={(e) =>
                      handleFilterChange('days', day, e.target.checked)
                    }
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
                  {Object.keys(filterVals.times).map((time) => (
                    <div key={time}>
                      <input
                        type="time"
                        className={styles.timeinput}
                        value={filterVals.times[time]}
                        onChange={(e) =>
                          handleFilterChange('times', time, e.target.value)
                        }
                      />
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.header}>Location</h3>
              {Object.keys(filterVals.loc).map((loc) => (
                <div key={loc}>
                  <input
                    type="checkbox"
                    checked={filterVals.loc[loc]}
                    onChange={(e) =>
                      handleFilterChange('loc', loc, e.target.checked)
                    }
                  />{' '}
                  {loc}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
