import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/pages/jedi.module.scss';

// TODO: flesh out docs
/**
 * creates an allyship space card from input parameters, using
 * next/image and next/link
 */
function AllyshipSpaceCard({ title, date, location, description, pic, alt, rsvp, slides }) {
  return (
    <div className={styles['allyship-row']}>
      {/* TODO: better CSS styling */}
      <Image src={pic} alt={alt} />
      <div>
        <h2 className={styles['my-tight']}>{title}</h2>
        <p className={styles['my-tight']}>{date} | { location }</p>
        <p className={styles['my-tight']}>
          {description}
        </p>
        {/* TODO: icon fonts? */}
        {/* TODO: decoupling specific data structures */}
        {/* wrapped in a fragment to allow for spacing */}
        {rsvp && <><Link href={rsvp}><a className="button">RSVP</a></Link>{' '}</>}
        {slides && <><Link href={slides}><a className="button">Slides</a></Link>{' '}</>}
      </div>
    </div>
  );
}

export default AllyshipSpaceCard;
