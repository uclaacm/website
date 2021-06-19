import React from 'react';
import EventTags from '../EventTags/EventTags';
import Links from '../Links/Links';
import { attendance, attendanceStrings, getQuarter, committees } from '../ArchiveUtils';
import './style.scss';

function CommitteeEventCard(props) {
  const defaultEventImage = '/images/acm_committees.png'; // should be per committee

  const ce       = props.committeeEvent;
  const inPerson = (ce.attendanceType === attendance.hybrid) || (ce.attendanceType === attendance.inperson);
  const virtual  = (ce.attendanceType === attendance.hybrid) || (ce.attendanceType === attendance.virtual);
  const topImage = (ce.hasOwnProperty('eventPicture')) ? ce.eventPicture : defaultEventImage;
  const date     = new Date(ce.date);
  const quarter  = getQuarter(date);


  ////////////////////////////////////////////////////////
  // check out this garbage :/
  // it works tho
  // open to suggestions!
  const [modalOpen, setModalOpen] = React.useState(false);

  let modalOpenClickCheck = false;
  function setModalOpenClickCheck(state) {
    modalOpenClickCheck = state;
  }

  // basically, onclick fires when opening a modal
  // and that causes the modal to instantly close
  // so I added another flag that only flips when
  // the state variable is true
  // thus we only close the modal on the second click
  // et voila
  // tbh I should probably go check how material implements
  // modals or sth
  window.onclick = (event) => {
    console.log(event);
    if (modalOpen) {
      setModalOpenClickCheck(!modalOpenClickCheck);
    }
    if (modalOpenClickCheck) {
      return;
    }
    const modal = getVisibleModal();
    console.log(modal);
    if (modal && event.target !== modal) {
      console.log('close modal');
      setModalOpen(false);
    }
  };
  ////////////////////////////////////////////////////////

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

  function ceSessionTag() {
    if (ce.hasOwnProperty('trackID')) {
      return <h4 className='ce-session-container'><span className='ce-session'>{'Session ' + ce.sessionNumber}</span></h4>;
    }
    return null;
  }

  function ceCommitteeModal(comm) {
    // todo: sass classes instead
    return (
      <h4 className='ce-committee-modal'>
        <span className='ce-committee-name-modal' style={{backgroundColor: committees[comm].color}}>{committees[comm].name}</span>
      </h4>
    );
  }

  function ceCommitteesModal() {
    return (<div className='ce-committee-container'>{ce.committees.map(ceCommitteeModal)}</div>);
  }

  function ceTrackTagModal() {
    if (ce.hasOwnProperty('trackName')) {
      return <h4 className='ce-track-container-modal'><span className='ce-track-modal'>{ce.trackName}</span></h4>;
    }
    return null;
  }

  function ceSessionTagModal() {
    if (ce.hasOwnProperty('trackID')) {
      return <h4 className='ce-session-container-modal'><span className='ce-session-modal'>{'Session ' + ce.sessionNumber}</span></h4>;
    }
    return null;
  }

  function ceTeachersModal() {
    if (ce.hasOwnProperty('teachers') && ce.teachers.length > 0) {
      return <h4 className='ce-teachers'>Taught by {ce.teachers.join(', ')}</h4>;
    }
    return null;
  }

  // I'm sure there's a way to simplify this lol
  function ceLinksModal() {
    if (ce.hasOwnProperty('eventLinks') && ce.hasOwnProperty('contentLinks')) {
      return (
        <div className='ce-links-modal'>
          <h4>Event Links</h4>
          <Links links={ce.eventLinks}/>
          <h4>Content Links</h4>
          <Links links={ce.contentLinks}/>
        </div>
      );
    } else if (ce.hasOwnProperty('eventLinks')) {
      return (
        <div className='ce-links-modal'>
          <h4>Event Links</h4>
          <Links links={ce.eventLinks}/>
        </div>
      );
    } else if (ce.hasOwnProperty('contentLinks')) {
      return (
        <div className='ce-links-modal'>
          <h4>Content Links</h4>
          <Links links={ce.contentLinks}/>
        </div>
      );
    }
  }

  function getVisibleModal() {
    const modals = document.getElementsByClassName('ce-modal');
    console.log(modals);
    for (let i = 0; i < modals.length; i++) {
      console.log(modals[i].style.display);
      if (modals[i].style.display !== 'none') {
        return modals[i];
      }
    }
    return null;
  }

  return (
    <>
      <div className='ce-modal' style={{display: (modalOpen) ? 'block' : 'none'}}>
        <div className='ce-title-container-modal'>
          <h1 className='ce-title-modal'>{ce.eventName}</h1>
          <br/>
          <div className='ce-header-line-modal'>
            {ceCommitteesModal()}

            <div className='ce-track-session-modal-container'>
              {ceTrackTagModal()}
              {ceSessionTagModal()}
            </div>
          </div>
          <div className='ce-time-modal'>
            <h4 className='ce-date-quarter-tag-container-modal'><span className='ce-date-modal'>{(date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</span></h4>
            <h4 className='ce-date-quarter-tag-container-modal'><span className='ce-quarter-modal'>{quarter.season} {quarter.year}</span></h4>
          </div>
          <br/>

          <p className='ce-desc-modal'>{ce.desc}</p>
        </div>

        <div className='ce-more-info-container'>
          <div className='ce-event-type'>
            <h4>{attendanceStrings[ce.attendanceType]}
                  {(inPerson) ? ' · ' + ce.physicalLocation : ''}
                  {(virtual) ? ' · ' : ''}
                  <a href={ce.virtualLocation}>{(virtual) ? 'Online' : ''}</a>
            </h4>
          </div>
          {ceTeachersModal()}
        </div>

        {ceLinksModal()}
      </div>

      <div className='ce-container'>
        <img src={topImage} className='ce-image' onClick={() => setModalOpen(true)}/>

        <div className='ce-below-image'>
          <div className='ce-title-container'>
            <h4 className='ce-title' onClick={() => setModalOpen(true)}>{ce.eventName}</h4>
            {ceCommittees()}
            {ceSessionTag()}
          </div>

          <div className='ce-time'>
            <h4 className='ce-date-quarter-tag-container'><span className='ce-date'>{(date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</span></h4>
            <h4 className='ce-date-quarter-tag-container'><span className='ce-quarter'>{quarter.season} {quarter.year}</span></h4>
          </div>

          <EventTags tags={ce.tags}/>
        </div>
      </div>
    </>
  );
}

export default CommitteeEventCard;