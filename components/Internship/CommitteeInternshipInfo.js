import Image from 'next/image';
import React, {useState} from 'react';

import styles from '../../styles/components/Internship/CommitteeInternshipInfo.module.scss';

function CommitteeInternshipInfo(props) {
    const {committees} = props;
    const [committeeName, setCommitteeName] = useState('Board');
    return(
        <>
            <div className={styles['logos-line']}>
                {committees.map(committee =>
                    <button 
                        className={styles['logo-diamond']}                            
                        key={committee.name} 
                        onClick={()=>setCommitteeName(committee.name)}
                    >
                        <Image
                            src={committee.diamond}
                            alt={`ACM ${committee.name}`}
                            width="100px"
                            height="100px"
                        />
                    </button>,
                )}
            </div>
            {committees.map(committee =>
                committeeName === committee.name ?
                <div className={`${styles['committee-internship-info']} ${styles[committee.class]}`} key={committee.name}>
                    <Image
                        src={committee.image}
                        alt={`${committee.name}'s wordmark`}
                        height="60px"
                        width="250px"
                    />
                    <h3>What do we do?</h3>
                    <p className={styles['internship-info-data']}> {committee.internship.whatWeDo} </p>
                    <h3>What will interns do?</h3>
                    <p className={styles['internship-info-data']}> {committee.internship.whatInternsWillDo} </p>
                </div> :  null,
            )}
        </>
    );
}

export default CommitteeInternshipInfo;
