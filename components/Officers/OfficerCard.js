// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/legacy/image';
import { useState } from 'react';

import styles from '../../styles/components/Officers/OfficerCard.module.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

const DEFAULT_PHOTO =
  'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg';

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
  // Fall back to the default photo if the image fails to load
  // (e.g. a Google Drive file that isn't shared publicly)
  const [failedImg, setFailedImg] = useState(null);
  const photo = img && img !== failedImg ? img : DEFAULT_PHOTO;
  if (size && size.toLowerCase() === 'compact') {
    return (
      <div
        className={`${styles['officer-card']} ${styles['officer-grid-row']}`}
      >
        <div className={styles['officer-grid-col']}>
          <div className={styles['image-container']}>
            <Image
              className="officer-image"
              src={photo}
              alt={alt}
              width={130}
              height={130}
              objectFit="cover" // Crop to fit the aspect ratio
              unoptimized={true}
              referrerPolicy="no-referrer" // Google Drive images return 429 when a Referer is sent
              onError={() => setFailedImg(img)}
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
