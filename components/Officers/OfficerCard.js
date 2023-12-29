import Image from 'next/image';
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; 
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
    return sharedUrl;
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
          <p className={styles['email-container']}>  <a href={`mailto:${email}`} className={styles['officer-email']}> <FontAwesomeIcon icon={faEnvelope} className={styles['email-icon']} />{/* Email icon */} 
        {email}
      </a></p>
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
        <Officer 
          {...officer} 
          size={props.size} 
          style={props.style} 
          key={officer.name} 
          cname={officer.committee} 
          position={officer.role} 
          img={getDirectImageUrl(officer.photo)} 
        />
      ))}
    </>
  );
}

export default Officers;
