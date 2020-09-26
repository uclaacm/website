import React from 'react';

function Button(props){
	return (
        <div className="info-card-container">
            <img src='/images/committees/placeholder.png' alt={props.image.alt} />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
	);
}

export default Button;