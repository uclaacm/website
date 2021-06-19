import React from 'react';
import './style.scss';

function EventTag(props) {
  let tag = props.tag;
  return (
    <span className='ce-event-tag'>{tag}</span>
  );
}

function EventTags(props) {
  let tags = props.tags;

  function createEventTag (tag) {
    return <EventTag tag={tag} />;
  }

  function createEventTags(tags) {
    return tags.map(createEventTag);
  }

  return (
    <div className='ce-tags-container'>
      {createEventTags(tags)}
    </div>
  );
}

export default EventTags;