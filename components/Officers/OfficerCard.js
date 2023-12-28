import Image from 'next/image';
import React from 'react';

import styles from '../../styles/components/OfficerCard.module.scss';

function Officer({
  name,
  cname,
  position,
  img,
  alt,
  year,
  email,
  size,
  /* eslint-disable-next-line no-unused-vars */
  committee, // no officer card formats use committee yet
}) {

  
  if (size && size.toLowerCase() === 'compact') {
    return (
      <div className={`${styles['officer-card']} ${styles['officer-grid-row']}`}>
        <div className={styles['officer-grid-col']}>
          {img ? (
            <div className={styles['image-container']}>
              <Image
                className={'officer-image'}
                src="https://drive.google.com/uc?id=1-0y_rpmxGnexeRPAFUffX-9jSqSuRHpH"
                alt={alt}
                width={100}
                height={100}
                unoptimized={true}
                style={{ borderRadius: '100%' }}
              />
            </div>
          ) : (
            <div className={styles['no-image']}>No image available</div>
          )}
        </div>
        <div className={`${styles['officer-grid-col']} ${styles['officer-info']}`}>
          <h3 className={styles['officer-title']}>{name}</h3>
          <p className={styles['officer-text']}>{position}</p>
          <p className={styles['officer-text']}>Class of {year}</p>
          <p className={styles['officer-email']}>{email}</p>
        </div>
      </div>
    );
  }
  // else {
//     return (
//       <div
//         className={`${styles['officer-card']} ${styles['grid-tablet-only-2']}`}
//       >
//         <div className={styles['officer-image-container']}>
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img src={img} alt={alt} style={{ maxWidth: '100%' }} />
//         </div>
//         <div>
//           <h3 className={styles.name}>{name}</h3>
//           <h4 className={styles.pronouns}>{pronouns}</h4>
//           <ul className="list-unstyled">
//             <li>{position}</li>
//             <li>{major}</li>
//             <li>Class of {year}</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
}

function Officers(props) {

  
  return (
    // TODO: more flexible mobile views
    <>
      {props.officers.map((officer) => (
        <Officer {...officer} size={props.size} style={props.style} key={officer.name} cname={officer.committee} position={officer.role} img={'https://drive.google.com/file/d/1-0y_rpmxGnexeRPAFUffX-9jSqSuRHpH/view?usp=sharing'} />
      ))}
    </>
  );
}

export default Officers;
