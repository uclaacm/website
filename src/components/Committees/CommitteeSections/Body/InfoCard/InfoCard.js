import React from 'react';

function InfoCard(props){
    const hasImage = props.image.src;

	return (
        <div className="info-card-container">
            {hasImage 
                ? <img src={props.image.src} alt={props.image.alt} />
                : <img src={'/images/committees/placeholder.png'} alt={props.image.alt} />
            }
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
	);
}

export default InfoCard;