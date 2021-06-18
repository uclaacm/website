import React from 'react';

function ProjectCard(props) {
    const {image, title, winner, summary, names, url, category} = props.project;
    return (
        <div className="intro-row">
            <div className="show-mobile">
                <img src={image} alt={`showcase image for ${title}`}/>
            </div>
            <div className="left-col">
                <h2>{title}</h2>
                <div className='winner'>{winner}</div>
                <p>{summary}</p>
                <p>Created By: {names}</p>
                <a href={url} className="link">Learn More</a>
                <p>
                    <span className="tg-tag">{category}</span>
                </p>
            </div>
            <div className="right-col">
                <img src={image} alt={`showcase image for ${title}`}/>
            </div>
        </div>
    );
}

export default ProjectCard;
