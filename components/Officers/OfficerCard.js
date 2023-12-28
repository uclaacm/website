import Image from 'next/image';
import React from 'react';

import styles from '../../styles/components/OfficerCard.module.scss';

function getDirectImageUrl(sharedUrl) {
  if (!sharedUrl){
    return null;
  }
  // console.log(sharedUrl);
  // Check if the URL is a Google Drive link
  if (sharedUrl.includes("drive.google.com")) {
    // Extract the file ID from the shared URL
    const fileIdMatch = sharedUrl.match(/\/d\/([^/]+)\//);
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1];
      // Construct the direct link
      const directUrl = `https://drive.google.com/uc?id=${fileId}`;
      return directUrl;
    } else {
      console.error("Invalid Google Drive shared URL");
      return null;
    }
  } else {
    console.error("Not a Google Drive link");
    return null;
  }
}


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
                className="officer-image"
                // src="https://drive.google.com/uc?id=1-0y_rpmxGnexeRPAFUffX-9jSqSuRHpH"
                src={img}
                alt={alt}
                width={130}
                height={130}
                unoptimized={true}
                // loading="eager" 
              />
            </div>
          ) : (
            
            <div className={styles['image-container']}>
              <Image
                className="officer-image"
                // src="https://drive.google.com/file/d/1hvYGQlU7DgsN8qDaMPrE9RG4KI_pGH2c/view?usp=sharing"
                src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                alt={alt}
                width={130}
                height={130}
                unoptimized={true}
              />
            </div>
          )}
        </div>
        <div className={`${styles['officer-grid-col']} ${styles['officer-info']}`}>
          <h3 className={styles['officer-title']}>{name}</h3>
          <p className={styles['officer-text']}>{position}</p>
          <p className={styles['officer-text']}>Class of {year}</p>
          <p><a href={`mailto:${email}`} className={styles['officer-email']}>
        {email}
      </a></p>
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
        <Officer {...officer} size={props.size} style={props.style} key={officer.name} cname={officer.committee} position={officer.role} img={getDirectImageUrl(officer.photo)} />
      ))}
    </>
  );
}

export default Officers;
