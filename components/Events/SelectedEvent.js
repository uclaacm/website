import moment from 'moment';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/components/Events/SelectedEvent.module.scss';

function SelectedEvent({ event }) {
  if (event === null) {
    return <p>click on an event to see more!</p>;
  }
  const { title, start, description, links, image, alt } = event;
  const imageSrc = image ? image : '/images/events/default-event.png';
  return (
    <div className={styles['card-container']}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles['card-image']} src={imageSrc} alt={alt} />
      <div className={styles['card-body']}>
        <h3 className={styles['card-title']}>{title}</h3>
        <p className={styles['date-line']}>{moment(start).format('dddd, MMMM Do, YYYY -- h:mm a')}</p>
        <p className={styles.description}>{description}</p>
        {(links && links.length > 0) &&
          <ul className="list-unstyled">
            {links.map(({ text, href, ext }) => <li key={href}><Link href={href}><a className={styles['event-link']} target={ext ? '_blank': ''} rel={ext ? 'noopener noreferrer' : ''}>{text}</a></Link></li>)}
          </ul>
        }
      </div>
    </div>
  );
}

export default SelectedEvent;
