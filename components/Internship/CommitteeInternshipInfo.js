import Image from 'next/image';
import React, { useState } from 'react';

import styles from '../../styles/components/Internship/CommitteeInternshipInfo.module.scss';

function CommitteeInternshipInfo(props) {
  const { committees } = props;
  const [committeeName, setCommitteeName] = useState('Board');
  return (
    <>
      <div
        className={styles['logos-line']}
        role="tablist"
        aria-label="committee logos for information"
      >
        {committees.map((committee) => (
          <button
            role="tab"
            className={styles['logo-diamond']}
            key={committee.name}
            onClick={() => setCommitteeName(committee.name)}
            style={{
              borderBottom:
                committeeName === committee.name ? '1px solid grey' : '',
            }}
          >
            <Image
              src={committee.diamond}
              alt={`ACM ${committee.name}`}
              width="100px"
              height="100px"
            />
          </button>
        ))}
      </div>
      {committees.map((committee) =>
        committeeName === committee.name ? (
          <div
            className={`${styles['committee-internship-info']} ${styles[committee.class]}`}
            key={committee.name}
          >
            <h2 className={styles['committee-image']}>
              <Image
                src={committee.image}
                alt={`${committee.name}'s wordmark`}
                layout="fill"
                objectFit="contain"
              />
            </h2>
            <h3>What do we do?</h3>
            <p className={styles['internship-info-data']}>
              {' '}
              {committee.internship.whatWeDo}{' '}
            </p>
            <h3>What will interns do?</h3>
            <p className={styles['internship-info-data']}>
              {' '}
              {committee.internship.whatInternsWillDo}{' '}
            </p>
          </div>
        ) : null,
      )}
    </>
  );
}

export default CommitteeInternshipInfo;
