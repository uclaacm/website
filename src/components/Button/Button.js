import React from 'react';

function Button(props){
	return (
		<button onClick={props.onClick} className={props.styleClass}>{props.text}</button>
	);
}

export default Button;
