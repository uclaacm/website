import React from 'react';
import EventTags from '../EventTags/EventTags';
import Links from '../Links/Links';
import { attendance, attendanceStrings, getQuarter, committees } from '../ArchiveUtils';
import './style.scss';

function CommitteeEventCard(props) {
  const defaultEventImage = '/images/acm_committees.png'; // should be per committee

  const ce = props.committeeEvent;
  const inPerson = (ce.attendanceType === attendance.hybrid) || (ce.attendanceType === attendance.inperson);
  const virtual  = (ce.attendanceType === attendance.hybrid) || (ce.attendanceType === attendance.virtual);
  const topImage = (ce.hasOwnProperty('eventPicture')) ? ce.eventPicture : defaultEventImage;
  const date     = new Date(ce.date);
  const quarter  = getQuarter(date);

  const [modalOpen, setModalOpen] = React.useState(false);

  function ceCommittee(comm) {
    // todo: sass classes instead
    return (
      <h4 className='ce-committee'>
        <span className='ce-committee-name' style={{backgroundColor: committees[comm].color}}>{committees[comm].name}</span>
      </h4>
    );
  }

  function ceCommittees() {
    return (<div className='ce-committee-container'>{ce.committees.map(ceCommittee)}</div>);
  }

  function ceSession() {
    if (ce.hasOwnProperty('trackID')) {
      return <h4 className='ce-session'>{'Session ' + ce.sessionNumber}</h4>;
    }
    return <h4 className='ce-session-empty'>&nbsp;</h4>;
  }

  function ceTeachers() {
    if (ce.hasOwnProperty('teachers') && ce.teachers.length > 0) {
      return <h4 className='ce-teachers'>Taught by {ce.teachers.join(', ')}</h4>;
    }
    return null;
  }

  // I'm sure there's a way to simplify this lol
  function ceLinks() {
    if (ce.hasOwnProperty('eventLinks') && ce.hasOwnProperty('contentLinks')) {
      return (
        <div className='ce-links'>
          <h4 className='ce-links-first-title'>Event Links</h4>
          <Links links={ce.eventLinks}/>
          <h4>Content Links</h4>
          <Links links={ce.contentLinks} class='ce-bottom-links-container'/>
        </div>
      );
    } else if (ce.hasOwnProperty('eventLinks')) {
      return (
        <div className='ce-links'>
          <h4 className='ce-links-first-title'>Event Links</h4>
          <Links links={ce.eventLinks} class='ce-bottom-links-container'/>
        </div>
      );
    } else if (ce.hasOwnProperty('contentLinks')) {
      return (
        <div className='ce-links'>
          <h4 className='ce-links-first-title'>Content Links</h4>
          <Links links={ce.contentLinks} class='ce-bottom-links-container'/>
        </div>
      );
    }
  }

  return (
    <>
      <div className='ce-modal'>

      </div>

      <div className='ce-container'>
        <img src={topImage} className='ce-image'/>

        <div className='ce-below-image'>
          <div className='ce-title-container'>
              <h4 className='ce-title' onClick={() => setModalOpen(true)}>{ce.eventName}</h4>
              {ceCommittees()}
              {ceSession()}
          </div>

          <div className='ce-time'>
            <h4 className='ce-date'>{(date).toLocaleDateString()}</h4>
            <h4 className='ce-quarter'>{quarter.season} {quarter.year}</h4>
          </div>

          <EventTags tags={ce.tags}/>

  {/*        <div className='ce-more-info-container'>
            <div className='ce-event-type'>
              <h4>{attendanceStrings[ce.attendanceType]}
                    {(inPerson) ? ' · ' + ce.physicalLocation : ''}
                    {(virtual) ? ' · ' : ''}
                    <a href={ce.virtualLocation}>{(virtual) ? 'Online' : ''}</a>
              </h4>
            </div>
            {ceTeachers()}
          </div>

          {ceLinks()}*/}
        </div>
      </div>
    </>
  );
}

export default CommitteeEventCard;