import React from 'react';
import EventTag from './EventTag';
import './style.scss';

function EventTags(props) {
  let tags = props.tags;

  function createEventTag (tag) {
    return <EventTag tag={tag} />;
  }

  function createEventTags(tags) {
    return tags.map(createEventTag);
  }

  return (
    <div className='tags-container'>
      {createEventTags(tags)}
    </div>
  );
}

export default EventTags;