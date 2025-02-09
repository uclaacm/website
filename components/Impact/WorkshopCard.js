import Image from 'next/legacy/image';
import styles from '../../styles/pages/impact.module.scss';

export default function WorkshopCard({
  title,
  description,
  quarter,
  img,
  alt,
  desktopHorizontal,
}) {
  const gridStyle = desktopHorizontal
    ? 'grid-tablet-2'
    : styles['grid-tablet-only-2'];
  return (
    <div className={`${styles['workshop-card']} ${gridStyle}`}>
      <div className={styles['workshop-image-container']}>
        <Image src={img} alt={alt} />
      </div>
      <div>
        <h4 className={styles['impact-event-header']}>{title}</h4>
        <p className={styles['impact-event-quarter']}>{quarter}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
