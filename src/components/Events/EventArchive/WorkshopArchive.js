import React from 'react';
import CommitteeEventComponent from './CommitteeEventComponent';
import eventData from './eventData.js';
import './style.scss';

function WorkshopArchive(props) {
  function createEventBox (event) {
    return <CommitteeEventComponent committeeEvent={event}/>;
  }

  function createEventBoxes() {
    return eventData.map(createEventBox);
  }

  function filterEventName() {
    return eventData.filter(event => event.eventName.includes(document.getElementById('event-name-filter').value)).map(createEventBox);
  }

  return (
    <div className='wa-container'>
      <div className='search-container' style={{width: '100%', marginTop: '20px'}}>
        <input type='text' id='event-name-filter' placeholder='Search by event name' onChange={filterEventName} style={{width: '50%',height: '20px', borderRadius: '7px', borderWidth: '1px', borderColor: 'black'}}></input>
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
      </div>
      <div id='wa-ce-parent'>
        {createEventBoxes()}
      </div>
    </div>
  );
}

export default WorkshopArchive;