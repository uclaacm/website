import React, { useState } from 'react';
import CommitteeEventCard from './CommitteeEventCard/CommitteeEventCard';
import './style.scss';

function getOnlyEvents(data) {
  let events = [];
  for (let i = 0; i < data.length; i++) {
    let temp = data[i].events;
    for (let j = 0; j < temp.length; j++) {
      temp[j].committees = data[i].committees;
    }
    events = events.concat(temp);
  }
  return events;
}

const tracksData = require('./eventData.json');
const onlyEvents = getOnlyEvents(tracksData);

console.log(tracksData);
console.log(onlyEvents);

function WorkshopArchive(props) {
  const [events, setEvents] = useState(onlyEvents.sort((a, b) => b.date - a.date));

  function createEventBox (event) {
    return <CommitteeEventCard committeeEvent={event}/>;
  }

  function createEventBoxes(events) {
    return events.map(createEventBox);
  }

  function filterEventName() {
    setEvents(onlyEvents.filter(event => event.eventName.includes(document.getElementById('ea-event-name-filter').value)));
  }

  function eventOrder() {
    if (document.getElementById('ea-event-order-button').value === 'Sort by old') {
      document.getElementById('ea-event-order-button').value = 'Sort by new';
      setEvents(onlyEvents.sort((a, b) => a.date.getTime() - b.date.getTime()));
      console.log('a');
      console.log(events);
    } else {
      document.getElementById('ea-event-order-button').value = 'Sort by old';
      setEvents(onlyEvents.sort((a, b) => b.date.getTime() - a.date.getTime()));
      console.log('b');
      console.log(events);
    }
  }

  return (
    <div className='ea-content-container'>
      {/*<div className='ea-search-container'>
        <input type='text' id='event-name-filter' placeholder='Search by event name' onChange={filterEventName}></input>
        <select id='' name='' style={{width: '25%', height: '20px', borderRadius: '7px', borderWidth: '1px', borderColor: 'black'}}>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
        </select>
        <select id='' name='' style={{width: '25%', height: '20px', borderRadius: '7px', borderWidth: '1px', borderColor: 'black'}}>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
        </select>
        <input id='event-order-button' type='button' value='Sort by old' onClick={() => eventOrder()} style={{width: '15%', height: '20px', borderRadius: '7px', borderWidth: '1px', borderColor: 'black', fontFamily: 'Poppins', backgroundColor: '#dddddd'}}></input>
      </div>*/}
      <div id='ea-ce-parent'>
        {createEventBoxes(events)/*createEventBox(events[0])*/}
      </div>
    </div>
  );
}

export default WorkshopArchive;

/*
todo:
get a decent, more compact UI
get filtering, sorting working
show tracks first with dropdown that shows events
show events or tracks
clickable tags to filter
committee tag and color
*/

// forget the css dropdowns for tracks! I have been inspired