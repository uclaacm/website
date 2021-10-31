import Image from 'next/image';
import React from 'react';

import styles from '../styles/components/OfficerCard.module.scss';

function Officer({
  name,
  pronouns,
  position,
  /* eslint-disable-next-line no-unused-vars */
  committee, // no officer card formats use committee yet
  major,
  year,
  img,
  alt,
  bio,
  size,
  style,
}) {
  if (style && style.toLowerCase() === 'jedi') {
    return (
      <div className={styles['mb-2']}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles['jedi-profile-img']} src={img} alt={alt} />
        <div className={styles['jedi-card-body']}>
          <h2 className={styles['jedi-title']}>
            {name} <span className={styles['pronouns-jedi']}>{pronouns}</span>
          </h2>
          <p className={styles['my-tight']}>{bio}</p>
        </div>
      </div>
    );
  } else if (size && size.toLowerCase() === 'compact') {
    return (
      <div className={styles['officer-grid-row']}>
        <div className={styles['officer-grid-col']}>
          <Image
            className={styles['officer-image']}
            src={img}
            alt={alt}
            width={70}
            height={70}
          />
        </div>
        <div className={`${styles['officer-grid-col']} ${styles['officer-info']}`}>
          <h3 className={styles['officer-title']}>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles['workshop-card']} ${styles['grid-tablet-only-2']}`}
      >
        <div className={styles['workshop-image-container']}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={alt} style={{ maxWidth: '100%' }} />
        </div>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.pronouns}>{pronouns}</h4>
          <ul className="list-unstyled">
            <li>{position}</li>
            <li>{major}</li>
            <li>Class of {year}</li>
          </ul>
        </div>
      </div>
    );
  }
}

function Officers(props) {
  return (
    // TODO: more flexible mobile views
    <>
      {props.officers.map((officer) => (
        <Officer {...officer} size={props.size} style={props.style} key={props.officers.name} />
      ))}
    </>
  );
}

export default Officers;
