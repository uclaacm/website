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
      {createEventBoxes(eventData)}
    </div>
  );
}

export default WorkshopArchive;