import Image from 'next/image';
import React from 'react';

function Article(props) {
	return (
		<a
			target="_blank" rel="noreferrer noopener"
			href={props.article.link}
		>
			<div className="achievement">
				<Image
					src={process.env.PUBLIC_URL + props.article.image}
					width={360}
					height={200}
					alt={props.article.alt}
				/>
				<h3>{props.article.headline}</h3>
			</div>
		</a>
	);
}

export default Article;
