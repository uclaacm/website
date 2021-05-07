import React from 'react';
import EventTags from './EventTags';
import './style.scss';

function CommitteeEventComponent(props) {
  let ce = props.committeeEvent;
  return (
    <div className='ce-container'>
      <h2 className='ce-title'>{ce.eventName}</h2>
      <EventTags tags={ce.tags}/>
      <div className='ce-header'>
        <h3 className='ce-committee'><i>Hosted by </i><span className='ce-committee-name' style={{backgroundColor: ce.committee.color, color: 'white'}}>{ce.committee.name}</span></h3>
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