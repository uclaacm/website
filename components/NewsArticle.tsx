/*import Image from 'next/legacy/image';

function Article(props) {
  return (
    <a target="_blank" rel="noreferrer noopener" href={props.article.link}>
      <div className="achievement">
        <Image
          src={props.article.image}
          width={360}
          height={200}
          objectFit="cover"
          alt={props.article.alt}
        />
        <h3>{props.article.headline}</h3>
      </div>
    </a>
  );
}

export default Article;
*/
import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js Image component

interface ArticleProps {
  article: {
    link: string;
    image: string;
    alt: string;
    headline: string;
  };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <a target="_blank" rel="noreferrer noopener" href={article.link}>
      <div className="achievement">
        <Image
          src={article.image}
          width={360}
          height={200}
          objectFit="cover"
          alt={article.alt}
        />
        <h3>{article.headline}</h3>
      </div>
    </a>
  );
};

export default Article;