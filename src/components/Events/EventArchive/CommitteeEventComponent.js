import React from 'react';
import Card from 'react-bootstrap/Card';
import EventTags from './EventTags';
import Links from './Links';
import { attendance } from './ArchiveUtils';
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function CommitteeEventComponent(props) {
  const defaultEventImage = '/images/committees/icpc/intro.png';

  let ce = props.committeeEvent;
  let inPerson = ce.attendanceType === attendance.hybrid || ce.attendanceType === attendance.inperson;
  let virtual = ce.attendanceType === attendance.hybrid || ce.attendanceType === attendance.virtual;
  let topImage = (ce.hasOwnProperty('eventPicture')) ? ce.eventPicture : defaultEventImage;
  let attendanceStrings = ['In-person', 'Virtual', 'Hybrid'];

  function ceSession() {
    if (ce.hasOwnProperty('trackID')) {
      return <Card.Subtitle className='ce-session'>{'Session ' + ce.sessionNumber}</Card.Subtitle>;
    }
    return null;
  }

  return (
    <Card style={{ width: '18rem', height: '18rem', border: '1px solid red'}}>
      <Card.Img variant='top' src={topImage} style={{width: '100%', height: '9rem', objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title>{ce.eventName}</Card.Title>
        {ceSession()}
        <EventTags tags={ce.tags}/>
        <div className='ce-event-type'>
            <h4>{attendanceStrings[ce.attendanceType]}
                {(inPerson) ? ' · ' + ce.physicalLocation : ''}
                {(virtual) ? ' · ' : ''}
                <a href={ce.virtualLocation}>{(virtual) ? 'Online' : ''}</a>
            </h4>
          </div>
      </Card.Body>
    </Card>
  );
}

export default CommitteeEventComponent;

/*
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
*/