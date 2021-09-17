import React from 'react';

import styles from '../../styles/pages/jedi.module.scss';

// TODO: flesh out docs
/**
 * creates a JEDI card from props; for now, uses <img>
 * for image instead of next/image
 */
function JEDICard({ name, pronouns, bio, pic, alt }) {
  return (
    <div className={styles['mb-2']}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles['jedi-profile-img']} src={pic} alt={alt} />
      <div className={styles['jedi-card-body']}>
        <h2 className={styles['jedi-title']}>{name} <span className={styles.pronouns}>{pronouns}</span></h2>
        {/* <p className={styles['my-tight']}>
          {bio}
        </p> */}
      </div>
    </div>
  );
}

export default JEDICard;
