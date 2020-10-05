import React from 'react';
import { Anchorme, LinkComponentProps } from 'react-anchorme'

function CommitteeEventCard(props){

    const CustomLink = (props) => {
        return (
             <a {...props}>here</a>
        )
      }
    
    const hasImage = props.image.src;
	return (
        <div className="info-card-container">
            {hasImage 
                ? <img src={props.image.src} alt={props.image.alt} />
                : <img src={`/images/committees/${props.committee}/${props.committee}_motif_base.png`} alt={props.image.alt} />
            }
            <h2>{props.title}</h2>
            <Anchorme linkComponent={CustomLink} target="_blank" rel="noreferrer noopener">
                {props.desc}
            </Anchorme>
        </div>
	);
}

export default CommitteeEventCard;