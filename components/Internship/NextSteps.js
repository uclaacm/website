import React from 'react';

function NextSteps(props) {
  const { image, name, info } = props;
  return (
    // <button className={styles['committee-card']} onClick={() => setFlipped(!isFlipped)} role='tab'>
    //     <div className={`${styles['next-steps-card-inner']} ${styles[isFlipped ? null : 'is-flipped']}`}>
    //         <div className={styles['next-steps-card-face']}>
    //             <Image
    //                 src={image}
    //                 alt={`${name}'s card. Click to see more information.`}
    //                 layout='fill'
    //             />
    //         </div>
    //         <div className={`${styles['next-steps-card-face']}`}>
    //             <h3 className={styles['card-info-name']}>{name}</h3>
    //             <p>{info}</p>
    //         </div>
    //     </div>
    // </button>
    (<>
      <div
        style={{
          border: '1px solid grey',
          margin: '5px',
          borderRadius: '5px',
          padding: '15px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} height="30px" />
        <p>{info}</p>
      </div>
    </>)
  );
}

export default NextSteps;
