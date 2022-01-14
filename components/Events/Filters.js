import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState, React } from 'react';
import events from '../../data/event';
import styles from '../../styles/components/Events/Filters.module.scss';

export default function filters(props) {
    const committees = ['studio','icpc','design','cyber','teachLA','w','ai','hack','board'];
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
    const [fromTime, setFromTime] = useState("0:00");
    const [toTime, setToTime] = useState("0:00");
    const [chosenOnline, setChosenOnline] = useState({
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
        const fromMins = parseInt(fromTime.split(":")[0]) * 60 + parseInt(fromTime.split(":")[1]);
        const toMins = parseInt(toTime.split(":")[0]) * 60 + parseInt(toTime.split(":")[1]);
        allEvents = allEvents.filter(item => {
            const itemDate = new Date(item.start);
            const itemLoc = item.location.includes('Zoom') ? 'online' : 'in_person';
            if (!item.committee) return false;
            const itemComm = item.committee === 'teach-la' ? 'teachLA' : item.committee; //No hyphens in object key
            const itemMins = itemDate.getHours() * 60 + itemDate.getMinutes();
            let timeValid = itemMins >= fromMins && itemMins <= toMins;
            if (fromMins === 0 && toMins === 0) timeValid = true; //Time input is empty
            let dayValid = chosenDays[itemDate.getDay()];
            if (chosenDays.every(day => !day)) dayValid = true;   //All days are unchecked
            let commValid = chosenComms[itemComm];
            if (Object.keys(chosenComms).every(comm => !chosenComms[comm])) commValid = true; //All committees are unchecked
            let onlineValid = chosenOnline[itemLoc];
            if (Object.keys(chosenOnline).every(loc => !chosenOnline[loc])) onlineValid = true; //All location options are unchecked
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
    const handleOnlineChange = (loc) => {
        const updated = {...chosenOnline};
        updated[loc] = !updated[loc];
        setChosenOnline(updated);
    };

    return (
        <div id={styles.filter}>
            <div>
                <input 
                    placeholder='Search Events' 
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                <button onClick={handleSearch} >Search</button>
                <button onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
            </div>
            {filterOpen &&
            <div id={styles['filter-options']}>
                <div>
                    Committees
                    {committees.map((comm) => (
                        <div key={comm}>
                            <input type="checkbox" id={comm} checked={chosenComms[comm]} onChange={() => handleCommChange(comm)}/> {comm}
                        </div>
                    ))}
                </div>
                <div>
                    Days
                    {days.map((day,index) => (
                        <div key={day}>
                            <input type="checkbox" id={index} checked={chosenDays[index]} onChange={() => handleWeekdayChange(index)}/> {day}
                        </div>
                    ))}
                </div>
                <div>
                    Time
                    <div className={styles.timeContainer}>
                        <div>
                            <div>From </div>
                            <div>To </div>
                        </div>
                        <div>
                            <input type='time'onChange={(e) => setFromTime(e.target.value)} />
                            <br/>
                            <input type='time' onChange={(e) => setToTime(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div>
                    Location <br/>
                    <input type="checkbox" id="online" checked={chosenOnline.online} onChange={() => handleOnlineChange('online')}/> Online <br/>
                    <input type="checkbox" id="in_person" checked={chosenOnline.in_person} onChange={() => handleOnlineChange('in_person')}/> In-Person
                </div>
            </div>}
        </div>
    );
}
