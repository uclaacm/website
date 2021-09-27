import Image from 'next/image';
import React, {useState} from 'react';

import styles from '../../styles/components/Internship/NextSteps.module.scss';

function NextSteps(props) {
    const { image, name, info} = props;
    const [isFlipped, setFlipped] = useState(false);
    return (
        <button className={styles['committee-card']} onClick={() => setFlipped(!isFlipped)} role='tab'>
            <div className={`${styles['next-steps-card-inner']} ${styles[isFlipped ? null : 'is-flipped']}`}>
                <div className={styles['next-steps-card-face']}>
                    <Image
                        src={image}
                        alt={`${name}'s card. Click to see more information.`}
                        layout='fill'
                    />
                </div>
                <div className={`${styles['next-steps-card-face']}`}>
                    <h3 className={styles['card-info-name']}>{name}</h3>
                    <p>{info}</p>
                </div>
            </div>
        </button>
    );
}

export default NextSteps;
