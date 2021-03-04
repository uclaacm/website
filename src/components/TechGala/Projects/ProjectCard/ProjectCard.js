import React from 'react';
import Tag from './Tag/Tag';

function ProjectCard(props) {
    return (
        <div className="intro-row">
            <div className="show-mobile">
                <img src={props.project.image} alt=""/>
            </div>
            <div className="left-col">
                <h2>{props.project.title}</h2>
                <div className='winner'>{props.project.winner}</div>
                <p>{props.project.summary}</p>
                <p>Created By: {props.project.names}</p>
                <Tag name={props.project.category}/>
            </div>
            <div className="right-col">
                <img src={props.project.image} alt=""/>
            </div>
        </div>
    );
}

export default ProjectCard;