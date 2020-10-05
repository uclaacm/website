import React from 'react';

function CommitteeSectionIntro(props) {
    return (
        <div className="intro-row">
            <div className="show-mobile">
                <img src={props.committee.introImage} alt=""/>
                <p>{props.committee.introImageDesc}</p>
            </div>
            <div className="left-col">
                <h2>{props.committee.tagline}</h2>
                <p>{props.committee.mission}</p>
                <div className="learn-more">
                    <h3>Learn More</h3>
                    { props.committee.links.map(link => <a href={link.link} target="_blank" rel="noreferrer noopener" key={link.platform}><div className={'icon ' + props.committee.class} id={link.platform} /></a>) }
                </div>
            </div>
            <div className="right-col">
                <img src={props.committee.introImage} alt=""/>
                <p>{props.committee.introImageDesc}</p>
            </div>
        </div>
    );
}

export default CommitteeSectionIntro;