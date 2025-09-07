import Image from 'next/legacy/image';
import styles from '../../styles/pages/impact.module.scss';

export default function WorkshopCard({ title, quarter, img, alt, description, link }) {
  return (
    <div className={styles.workshopCard}>
      <div className={styles.workshopImageContainer}>
        {img && (
          <Image
            src={img}
            alt={alt || `Image for ${title}`}
            layout="intrinsic"
            width={300}
            height={170}
            objectFit="contain"
          />
        )}
      </div>
      <h4 className={styles.impactEventHeader}>{title}</h4>
      {quarter && <p className={styles.impactEventQuarter}>{quarter}</p>}
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer noopener">
          Learn more
        </a>
      )}
    </div>
  );
}
