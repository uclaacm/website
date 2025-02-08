// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/legacy/image';
import React from 'react';
import styles from '../../styles/components/Officers/OfficerCard.module.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

function Officer({
  name,
  position,
  img,
  alt,
  year,
  // email,
  size,
  /* eslint-disable-next-line no-unused-vars */
  committee, // no officer card formats use committee yet
}) {
  if (size && size.toLowerCase() === 'compact') {
    return (
      <div
        className={`${styles['officer-card']} ${styles['officer-grid-row']}`}
      >
        <div className={styles['officer-grid-col']}>
          <div className={styles['image-container']}>
            <Image
              className="officer-image"
              src={img}
              alt={alt}
              width={130}
              height={130}
              objectFit="cover" // Crop to fit the aspect ratio
              unoptimized={true}
            />
          </div>
        </div>
        <div
          className={`${styles['officer-grid-col']} ${styles['officer-info']}`}
        >
          <h3 className={styles['officer-title']}>{name}</h3>
          <p className={styles['officer-text']}>{position}</p>
          <p className={styles['officer-text']}>Class of {year}</p>
          {/* <p className={styles['email-container']}>  <a href={`mailto:${email}`} className={styles['officer-email']}> <FontAwesomeIcon icon={faEnvelope} className={styles['email-icon']} />Email icon
        {email}
      </a></p> */}
        </div>
      </div>
    );
  }
}

function Officers(props) {
  return (
    <>
      {props.officers.map((officer) => (
        <Officer
          {...officer}
          size={props.size}
          style={props.style}
          key={officer.name}
          cname={officer.committee}
          position={officer.role}
          img={officer.photo}
        />
      ))}
    </>
  );
}

export default Officers;
