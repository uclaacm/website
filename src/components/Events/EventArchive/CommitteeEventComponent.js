import React from 'react';
import EventTags from './EventTags';
import Links from './Links';
import { attendanceTypes } from './utils.js';
import './style.scss';

function CommitteeEventComponent(props) {
  let ce = props.committeeEvent;
  let inPerson = ce.attendanceType === attendanceTypes.hybrid || ce.attendanceType === attendanceTypes.inperson;
  let virtual = ce.attendanceType === attendanceTypes.hybrid || ce.attendanceType === attendanceTypes.virtual;

  function ceSession() {
    if (ce.isTrack) {
      return <h4 className='ce-session'>{'Session ' + ce.sessionNumber}</h4>;
    }
    return null;
  }
  return (
    <div className='ce-container'>
      <div className='ce-title-container'>
        <div className='ce-title-container-first'>
          <h3 className='ce-title'>{ce.eventName}</h3>
          {ceSession()}
          <h4 className='ce-committee'>
            <span className='ce-committee-name' style={{backgroundColor: ce.committee.color}}>{ce.committee.name}</span>
          </h4>
        </div>
        <EventTags tags={ce.tags}/>
      </div>
      <hr className='ce-title-header-hr'/>
      <div className='ce-header'>
        <h4 className='ce-date'>{ce.date.toLocaleDateString()}</h4>
        <h4 className='ce-quarter'>{ce.quarter.season} {ce.quarter.year}</h4>
      </div>
      <div className='ce-more-info-container'>
        <div className='ce-event-type'>
          <h4>{ce.attendanceType}
              {(inPerson) ? ' · ' + ce.physicalLocation : ''}
              {(virtual) ? ' · ' : ''}
              <a href={ce.virtualLocation}>{(virtual) ? 'Online' : ''}</a>
          </h4>
        </div>
        <h4 className='ce-teachers'>Taught by {ce.teachers.join(', ')}</h4>
      </div>
      <div className='ce-links'>
        <h4 style={{marginTop: '-5px'}}>Event Links</h4>
        <Links links={ce.eventLinks}/>
        <h4>Content Links</h4>
        <Links links={ce.contentLinks} class='ce-content-links-container'/>
      </div>
    </div>
  );
}

export default CommitteeEventComponent;