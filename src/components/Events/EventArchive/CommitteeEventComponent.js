import React from 'react';
import EventTags from './EventTags';
import Links from './Links';
import { attendanceTypes } from './utils.js';
import './style.scss';

function CommitteeEventComponent(props) {
  let ce = props.committeeEvent;
  let inPerson = ce.attendanceType === attendanceTypes.hybrid || ce.attendanceType === attendanceTypes.inperson;
  let virtual = ce.attendanceType === attendanceTypes.hybrid || ce.attendanceType === attendanceTypes.virtual;
  return (
    <div className='ce-container'>
      <div className='ce-title-container'>
        <h2 className='ce-title'>{ce.eventName}</h2>
        <EventTags tags={ce.tags}/>
      </div>
      <hr/>
      <div className='ce-header'>
        <h3 className='ce-committee'>
          Hosted by
          <span className='ce-committee-name' style={{backgroundColor: ce.committee.color, color: 'white'}}>{ce.committee.name}</span>
        </h3>
        <h3>{(ce.isTrack) ? 'Session ' + ce.sessionNumber : ''}</h3>
        <h3>{ce.date.toLocaleDateString()}</h3>
        <h3>{ce.quarter.season} {ce.quarter.year}</h3>
      </div>
      <br/>
      <div className='ce-more-info-container'>
        <div className='ce-event-type'>
          <h3>{ce.attendanceType}
              {(inPerson) ? ' · ' + ce.physicalLocation : ''}
              {(virtual) ? ' · ' : ''}
              <a href={ce.virtualLocation}>{(virtual) ? 'Online location' : ''}</a>
          </h3>
        </div>
        <h3>Taught by <i>{ce.teachers.join(', ')}</i></h3>
      </div>
      <br/>
      <div className='ce-links'>
        <h4>Event Links</h4>
        <Links links={ce.eventLinks}/>
        <h4>Content Links</h4>
        <Links links={ce.contentLinks}/>
      </div>
    </div>
  );
}

export default CommitteeEventComponent;