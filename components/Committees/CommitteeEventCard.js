import Image from 'next/image';
import React from 'react';

function CommitteeEventCard(props) {
    const hasImage = props.image.src;
    return (
        <div className="info-card-container">
            {hasImage
                ? <Image src={props.image.src} alt={props.image.alt} width={241.8} height={160}/>
                : <Image src={`/images/committees/${props.committee}/${props.committee}_motif_base.png`} alt={props.image.alt} width={241.8} height={160} />
            }
            <h4 className="font-header text-bold">{props.title}</h4>
            {props.desc}
        </div>
    );
}

export default CommitteeEventCard;
