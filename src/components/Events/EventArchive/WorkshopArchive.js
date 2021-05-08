import React from 'react';
import CommitteeEventComponent from './CommitteeEventComponent';
import eventData from './eventData.js';
import './style.scss';

function WorkshopArchive(props) {
  function createEventBox (event) {
    return <CommitteeEventComponent committeeEvent={event} />;
  }
  function createEventBoxes(events) {
    return events.map(createEventBox);
  }
  return (
    <div className='wa-container'>
      {/*<h1>Search</h1>
      <br/>
      <div>
        <input type='text' placeholder='🔍'></input>
        <select id='' name=''>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
        </select>
      </div>*/}
      {createEventBoxes(eventData)}
    </div>
  );
}

export default WorkshopArchive;