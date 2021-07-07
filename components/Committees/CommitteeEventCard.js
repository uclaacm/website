import Image from 'next/image';
import React from 'react';

import styles from '../../styles/components/Committees/CommitteeEventCard.module.scss';

function CommitteeEventCard(props) {
    const hasImage = props.image.src;
    return (
        <div className={styles.infoCardContainer}>
            <div className={styles.imageWrapper}>
            {hasImage
                ? <Image src={props.image.src} alt={props.image.alt} width={241.8} height={160}/>
                : <Image src={`/images/committees/${props.committee}/${props.committee}_motif_base.png`} alt={props.image.alt} width={241.8} height={160} />
            }
            </div>
            <h4 className={`${styles.fontHeader} ${styles.textBold}`}>{props.title}</h4>
            {props.desc}
        </div>
    );
}

export default CommitteeEventCard;
