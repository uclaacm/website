import React from 'react';

import Article from './Article';

function News(props){
	return (
		<div className="achievements-container">			
			{props.news.map(
				article => <Article key={article.date} article={article} />			
			)}
		</div>
	);
}

export default News;