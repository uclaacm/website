import React from 'react';
import EventTags from './EventTags';
import Links from './Links';
import { attendance, getQuarter, committees } from './ArchiveUtils';
import './style.scss';

function CommitteeEventCard(props) {
  const defaultEventImage = '/images/acm_committees.png'; // should be per committee

  const ce = props.committeeEvent;
  console.log(ce);
  const inPerson = ce.attendanceType === attendance.hybrid || ce.attendanceType === attendance.inperson;
  const virtual = ce.attendanceType === attendance.hybrid || ce.attendanceType === attendance.virtual;
  const topImage = (ce.hasOwnProperty('eventPicture')) ? ce.eventPicture : defaultEventImage;
  const attendanceStrings = ['In-person', 'Virtual', 'Hybrid'];
  const date = new Date(ce.date);
  const quarter = getQuarter(date);

  function ceCommittee(c) {
    return (
      <h4 className='ce-committee'>
        <span className='ce-committee-name' style={{backgroundColor: committees[c].color}}>{committees[c].name}</span>
      </h4>
    );
  }

  function ceCommittees() {
    return ce.committees.map(ceCommittee);
  }

  function ceSession() {
    if (ce.hasOwnProperty('trackID')) {
      return <h4 className='ce-session'>{'Session ' + ce.sessionNumber}</h4>;
    }
    return null;
  }

  function ceTeachers() {
    if (ce.hasOwnProperty('teachers') && ce.teachers.length > 0) {
      return <h4 className='ce-teachers'>Taught by {ce.teachers.join(', ')}</h4>;
    }
    return null;
  }

  function ceLinks() {
    if (ce.hasOwnProperty('eventLinks') && ce.hasOwnProperty('contentLinks')) {
      return (
        <div className='ce-links'>
          <h4 style={{marginTop: '-5px'}}>Event Links</h4>
          <Links links={ce.eventLinks}/>
          <h4>Content Links</h4>
          <Links links={ce.contentLinks} class='ce-content-links-container'/>
        </div>
      );
    } else if (ce.hasOwnProperty('eventLinks')) {
      return (
        <div className='ce-links'>
          <h4 style={{marginTop: '-5px'}}>Event Links</h4>
          <Links links={ce.eventLinks}/>
        </div>
      );
    } else if (ce.hasOwnProperty('contentLinks')) {
      return (
        <div className='ce-links'>
          <h4 style={{marginTop: '-5px'}}>Content Links</h4>
          <Links links={ce.contentLinks}/>
        </div>
      );
    }
  }

  return (
    <div className='ce-container' style={{ width: '18rem', height: '18rem', border: '1px solid red'}}>
      <img src={topImage} style={{width: '100%', height: '9rem', objectFit: 'cover'}}/>

      <div className='ce-title-container'>
        <div className='ce-title-container-first'>
          <h4 className='ce-title'>{ce.eventName}</h4>
          {ceSession()}
          {ceCommittees()}
        </div>
        <EventTags tags={ce.tags}/>
      </div>
      <div className='ce-header'>
        <h4 className='ce-date'>{(date).toLocaleDateString()}</h4>
        <h4 className='ce-quarter'>{quarter.season} {quarter.year}</h4>
      </div>

      <div className='ce-more-info-container'>
        <div className='ce-event-type'>
          <h4>{attendanceStrings[ce.attendanceType]}
                {(inPerson) ? ' · ' + ce.physicalLocation : ''}
                {(virtual) ? ' · ' : ''}
                <a href={ce.virtualLocation}>{(virtual) ? 'Online' : ''}</a>
          </h4>
        </div>
        {ceTeachers()}
      </div>

      {ceLinks()}
    </div>
  );
}

export default CommitteeEventCard;