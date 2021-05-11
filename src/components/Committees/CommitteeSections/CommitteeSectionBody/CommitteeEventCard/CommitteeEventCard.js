import React from 'react';

function CommitteeEventCard(props) {
    const hasImage = props.image.src;
    return (
        <div className="info-card-container">
            {hasImage
                ? <img src={props.image.src} alt={props.image.alt} />
                : <img src={`/images/committees/${props.committee}/${props.committee}_motif_base.png`} alt={props.image.alt} />
            }
            <h2>{props.title}</h2>
            {props.desc}
        </div>
    );
}

export default CommitteeEventCard;
