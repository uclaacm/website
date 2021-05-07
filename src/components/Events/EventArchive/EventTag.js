import React from 'react';
import './style.scss';

function EventTag(props) {
  let tag = props.tag;
  return (
    <span className='event-tag'>{tag}</span>
  );
}

export default EventTag;