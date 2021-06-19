import React from 'react';
import './style.scss';

function Link(props) {
  return (
    <span className='custom-link'><a href={props.link.link}>{props.link.title}</a></span>
  );
}

function Links(props) {
  let links = props.links;

  function createLink (link) {
    return <Link link={link} />;
  }

  function createLinks(links) {
    return links.map(createLink);
  }

  return (
    <div className={(props.class) ? 'links-container ' + props.class : 'links-container'}>
      {createLinks(links)}
    </div>
  );
}

export default Links;