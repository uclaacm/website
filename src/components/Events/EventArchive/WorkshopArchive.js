import React, { useState } from 'react';
import CommitteeEventComponent from './CommitteeEventComponent';
import CustomDropdown from './CustomDropdown/CustomDropdown';
import './style.scss';

function getOnlyEvents(data) {
  let events = [];
  for (let i = 0; i < data.length; i++) {
    events = events.concat(data[i].events);
  }
  return events;
}

const tracksData = require('./eventData.json');
const onlyEvents = getOnlyEvents(tracksData);

function WorkshopArchive(props) {
/*  const [events, setEvents] = useState(eventData.sort((a, b) => b.events.date - a.events.date));*/

  function createEventBox (event) {
    return <CommitteeEventComponent committeeEvent={event}/>;
  }

  function createEventBoxes(events) {
    return events.map(createEventBox);
  }


/*  function filterEventName() {
    setEvents(eventData.filter(event => event.eventName.includes(document.getElementById('event-name-filter').value)));
  }
*/

  /*window.onload = (e) => {
    document.getElementById('event-order-button').addEventListener('click', function(event){
      event.preventDefault();*/


/*  function eventOrder() {
    if (document.getElementById('event-order-button').value === 'Sort by old') {
      document.getElementById('event-order-button').value = 'Sort by new';
      setEvents(eventData.sort((a, b) => a.date.getTime() - b.date.getTime()));
      console.log('a');
      console.log(events);
    } else {
      document.getElementById('event-order-button').value = 'Sort by old';
      setEvents(eventData.sort((a, b) => b.date.getTime() - a.date.getTime()));
      console.log('b');
      console.log(events);
    }
    //});
  }//;
*/
  return (
    <div className='wa-container'>
      {/*<div className='search-container'>
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
      </div>
      <div id='wa-ce-parent'>
        {createEventBoxes(events)}
      </div>*/}
      <CustomDropdown />
    </div>
  );
}

export default WorkshopArchive;