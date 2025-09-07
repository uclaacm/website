import moment from 'moment';
import Link from 'next/link';
import { React, useEffect, useState } from 'react';

import styles from '../../styles/components/Events/SelectedEvent.module.scss';

function SelectedEvent({ event }) {
  if (event === null) {
    return <p>click on an event to see more!</p>;
  }
  const { title, start, description, location, links, image, alt } = event;
  const [imageUrl, setImageUrl] = useState(
    image ?? '/images/events/default-event.png',
  );

  // Must set imageUrl if event prop changes
  useEffect(() => {
    setImageUrl(event.image);
  }, [event]);

  return (
    (<div className={styles['card-container']}>
      <h2 className={styles['card-header']}>event information</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles['card-image']}
        src={imageUrl}
        alt={alt}
        onError={() => setImageUrl('/images/events/default-event.png')}
      />
      <div className={styles['card-body']}>
        <h3 className={styles['card-title']}>{title}</h3>
        {/* Don't show start time if it starts at 12:00 am (missing start time in event spreadsheet) */}
        <p className={styles['date-line']}>
          {moment(start).get('hour') == 0
            ? moment(start).format('dddd, MMMM Do, YYYY')
            : moment(start).format('dddd, MMMM Do, YYYY -- h:mm a')}
        </p>
        {location && <p className={styles['date-line']}>{location}</p>}
        <p className={styles.description}>{description}</p>
        {links && links.length > 0 && (
          <ul className="list-unstyled">
            {links.map(({ text, href, ext }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles['event-link']}
                  target={ext ? '_blank' : ''}
                  rel={ext ? 'noopener noreferrer' : ''}>

                  {text}

                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>)
  );
}

export default SelectedEvent;
