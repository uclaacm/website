import Image from 'next/legacy/image';
import Link from 'next/link';


import styles from '../../styles/pages/jedi.module.scss';

// TODO: flesh out docs
/**
 * creates an allyship space card from input parameters, using
 * next/image and next/link
 */
function AllyshipSpaceCard({
  title,
  presenters,
  date,
  location,
  description,
  img,
  alt,
  rsvp,
  slides,
  priority,
}) {
  return (
    (<div className={`${styles['allyship-row']} ${styles['mb-2']}`}>
      <div className={styles['allyship-image']}>
        <Image src={img} alt={alt} priority={priority} />
      </div>
      <div>
        <h2 className={`${styles['allyship-title']}`}>{title}</h2>
        {/* wrapped in a fragment to allow for spacing */}
        {rsvp && (
          <>
            <Link href={rsvp} className={styles['jedi-link']}>
              RSVP
            </Link>{' '}
          </>
        )}
        {slides && (
          <>
            <Link href={slides} className={styles['jedi-link']}>
              Slides
            </Link>{' '}
          </>
        )}
        <p className={`${styles['my-tight']} ${styles['allyship-presenters']}`}>
          by {presenters}
        </p>
        <p className={styles['my-tight']}>
          <em>
            {date} | {location}
          </em>
        </p>
        <p className={styles['my-tight']}>{description}</p>
      </div>
    </div>)
  );
}

export default AllyshipSpaceCard;
