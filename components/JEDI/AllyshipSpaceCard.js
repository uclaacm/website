import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/pages/jedi.module.scss';

// TODO: flesh out docs
/**
 * creates an allyship space card from input parameters, using
 * next/image and next/link
 */
function AllyshipSpaceCard({ title, presenters, date, location, description, pic, alt, rsvp, slides }) {
  return (
    <div className={styles['allyship-row']}>
      <div className={styles['allyship-image']}>
        <Image src={pic} alt={alt} />
      </div>
      <div>
        <h2 className={`${styles['allyship-title']}`}>{title}</h2>
        <p className={styles['my-tight']}>{ presenters }</p>
        <p className={styles['my-tight']}>{date} | { location }</p>
        <p className={styles['my-tight']}>
          {description}
        </p>
        {/* wrapped in a fragment to allow for spacing */}
        {rsvp && <><Link href={rsvp}><a className="button">RSVP</a></Link>{' '}</>}
        {slides && <><Link href={slides}><a className="button">Slides</a></Link>{' '}</>}
      </div>
    </div>
  );
}

export default AllyshipSpaceCard;
