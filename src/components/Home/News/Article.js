import React from 'react';

function Article(props){
	return (
		<a
			target="_blank" rel="noreferrer noopener"
			href={props.article.link}
		>
            <div className="achievement">
                <img src={process.env.PUBLIC_URL + props.article.image} alt={props.article.alt}/>
                <h3>{props.article.headline}</h3>
            </div>
		</a>
	);
}

export default Article;
