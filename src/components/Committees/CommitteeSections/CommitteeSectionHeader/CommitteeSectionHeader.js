import React from 'react';

function CommitteeSectionHeader(props) {
    return (
        <div className={`committee-header ${props.committee.class}`}>
            <img src={props.committee.image} alt="committee logo"/>
        </div>
    );
}

export default CommitteeSectionHeader;
