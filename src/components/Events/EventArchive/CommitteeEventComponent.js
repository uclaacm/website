import React from 'react';
import EventTags from './EventTags';
import './style.scss';

function CommitteeEventComponent(props) {
  let ce = props.committeeEvent;
  return (
    <div className='ce-container'>
      <h1 className='ce-title'>{ce.eventName}</h1>
      <EventTags tags={ce.tags}/>
      <div className='ce-header'>
        <h3><i>Hosted by {ce.committee}</i></h3>
        <h3>{ce.date.toLocaleDateString()}</h3>
        <h3>{ce.quarter.season} {ce.quarter.year}</h3>
      </div>
      <h3><i>Taught by {ce.teachers.join(', ')}</i></h3>
      <h3>{(ce.isTrack) ? 'Session ' + ce.sessionNumber : ''}</h3>
      <div className='ce-event-type'>
        <h3>{ce.attendanceType}</h3>
        <div>
          <h3>{ce.physicalLocation}</h3>
          <a href={ce.virtualLocation}><h3>Online location</h3></a>
        </div>
      </div>
    </div>
  );
}

export default CommitteeEventComponent;