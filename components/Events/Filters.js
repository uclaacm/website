import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, React } from 'react';
import events from '../../data/event';
import styles from '../../styles/components/Events/Filters.module.scss';


export default function filters(props) {
	const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const [filterOpen, setFilterOpen] = useState(false);
    const [searchValue,setSearchValue] = useState("");
	const [chosenDays, setChosenDays] = useState(new Array(7).fill(false));
    const [chosenComms, setChosenComms] = useState({
        studio: false,
        icpc: false,
        design: false,
        cyber: false,
        teachLA: false,
        w: false,
        ai: false,
        hack: false,
        board: false
    });
    const [fromTime, setFromTime] = useState("");
    const [toTime, setToTime] = useState("");
    const [chosenLoc, setChosenLoc] = useState({
        online: false,
        in_person: false,
    });

    const handleSearch = () => {
        let allEvents = [...events];
        //Check search input
        const lowerCaseSearch = searchValue.toLowerCase();
        allEvents = allEvents.filter(item => {
            if (String(item.title).toLowerCase().includes(lowerCaseSearch)) return true;
            if (String(item.committee).toLowerCase().includes(lowerCaseSearch)) return true;
            if (String(item.location).toLowerCase().includes(lowerCaseSearch)) return true;
            if (String(item.description).toLowerCase().includes(lowerCaseSearch)) return true;
            return false;
        })
        //Check filters
        const timeEmpty = fromTime === "" || toTime === "";
        const commEmpty = Object.keys(chosenComms).every(comm => !chosenComms[comm]); 
        const daysEmpty = chosenDays.every(day => !day);
        const locEmpty =  Object.keys(chosenLoc).every(loc => !chosenLoc[loc]);
        let fromMins = 0;
        let toMins = 0;
        if (!timeEmpty) {
            fromMins = parseInt(fromTime.split(":")[0]) * 60 + parseInt(fromTime.split(":")[1]);
            toMins = parseInt(toTime.split(":")[0]) * 60 + parseInt(toTime.split(":")[1]);
        }
        allEvents = allEvents.filter(item => {
            const itemDate = new Date(item.start);
            const itemLoc = item.location.includes('Zoom') ? 'online' : 'in_person';
            if (!item.committee) return false;
            const itemComm = item.committee === 'teach-la' ? 'teachLA' : item.committee; //No hyphens in object key
            const itemMins = itemDate.getHours() * 60 + itemDate.getMinutes();
            const timeValid = timeEmpty || itemMins >= fromMins && itemMins <= toMins;
            const dayValid = daysEmpty || chosenDays[itemDate.getDay()];
            const commValid = commEmpty || chosenComms[itemComm];
            const onlineValid = locEmpty || chosenLoc[itemLoc];
            return timeValid && dayValid && commValid && onlineValid;
        });
        const newEvents = allEvents.map((original_event, index) => ({...original_event, id: index}));
        props.handleChange(newEvents);
    };
	const handleWeekdayChange = (index) => {
		const updated = [...chosenDays];
		updated[index] = !updated[index];
		setChosenDays(updated);
	};
    const handleCommChange = (comm) => {
        const updated = {...chosenComms};
        updated[comm] = !updated[comm];
        setChosenComms(updated);
    };
    const handleLocationChange = (loc) => {
        const updated = {...chosenLoc};
        updated[loc] = !updated[loc];
        setChosenLoc(updated);
    };

    return (
        <div className={styles.filter}>
            <div className={styles.inner}>
                <div>
                    <input 
                        placeholder='Search Events' 
                        className={styles.searchBar}
                        value={searchValue} 
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    <button onClick={handleSearch} className={styles.searchButton}>search</button>
                    <button onClick={() => setFilterOpen(!filterOpen)} className={styles.searchButton}>
                        filter <FontAwesomeIcon className={styles.arrow} icon={filterOpen ? faChevronUp : faChevronDown}/>
                    </button>
                </div>
                {filterOpen &&
                <div className={styles['filter-options']}>
                    <div>
                        <h3 className={styles.header}>Committees </h3>
                        {Object.keys(chosenComms).map((comm) => (
                            <div key={comm}>
                                <input type="checkbox" id={comm} checked={chosenComms[comm]} onChange={() => handleCommChange(comm)}/> {comm}
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className={styles.header}>Days</h3>
                        {days.map((day,index) => (
                            <div key={day}>
                                <input type="checkbox" id={index} checked={chosenDays[index]} onChange={() => handleWeekdayChange(index)}/> {day}
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className={styles.header}>Time</h3>
                        <div className={styles.timeContainer}>
                            <div>
                                <div>From </div>
                                <div>To </div>
                            </div>
                            <div>
                                <input type='time' className={styles.timeInput} value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
                                <br/>
                                <input type='time' className={styles.timeInput} value={toTime} onChange={(e) => setToTime(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.header}>Location</h3>
                        <input type="checkbox" id="online" checked={chosenLoc.online} onChange={() => handleLocationChange('online')}/> Online <br/>
                        <input type="checkbox" id="in_person" checked={chosenLoc.in_person} onChange={() => handleLocationChange('in_person')}/> In-Person
                    </div>
                </div>}
            </div>
        </div>
    );
}
