import React from 'react';
import Tag from './Tag/Tag';

function ProjectCard(props) {
    const {image, title, winner, summary, names, url, category} = props.project;
    return (
        <div className="intro-row">
            <div className="show-mobile">
                <img src={image} alt=""/>
            </div>
            <div className="left-col">
                <h2>{title}</h2>
                <div className='winner'>{winner}</div>
                <p>{summary}</p>
                <p>Created By: {names}</p>
                <a href={url} className="link">Learn More</a>
                <br/><br/>
                <Tag name={category}/>
            </div>
            <div className="right-col">
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default ProjectCard;
