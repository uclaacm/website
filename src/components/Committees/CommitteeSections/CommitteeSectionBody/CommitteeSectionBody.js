import React from 'react';

import CommitteeEventCard from './CommitteeEventCard/CommitteeEventCard'

function CommitteeSectionBody(props){
    return (
        <div className="body-wrapper">
            <h1>Events and Projects</h1>
            <div className="card-container">
                { props.committee.infoCards.map(card => {
                        const {image, title, desc} = card;
                        return <CommitteeEventCard committee={props.committee.class} image={image} title={title} desc={desc} key={title}/>;
                    })
                }
            </div>
        </div>
    );
}

export default CommitteeSectionBody;