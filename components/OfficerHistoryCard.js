import React from 'react';

function OfficerHistoryCard({ name, major, year, roles }) {
  return (
    <>
      <h3>{name}</h3>
      <dl>
        <dt>Major</dt>
        <dd>{major}</dd>
        <dt>Graduation Year</dt>
        <dd>{year}</dd>
        <dt>Officer Roles</dt>
        <dd>{roles.join(', ')}</dd>
      </dl>
    </>
  );
}

export default OfficerHistoryCard;
