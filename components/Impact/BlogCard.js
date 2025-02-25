import Link from 'next/link';
import styles from '../../styles/pages/impact.module.scss';

export default function BlogCard({
  title,
  author,
  date,
  length,
  href,
  authorImg,
  authorAlt,
  backgroundStyle,
}) {
  // stylelint's CSS-in-JS is giving me an error here
  /* stylelint-disable */
  // const backgroundStyle = { backgroundImage: `url("${img}")`};
  /* stylelint-enable */

  return (
    // TODO: not sure how, but we need to semantically
    // insert a description of the image for screenreaders;
    // not natively supported by background-image
    (<Link
      href={href}
      target="_blank"
      className={styles['blog-card']}
      style={backgroundStyle}>

      <div className={styles['blog-card-content']}>
        <h4 className={styles['blog-title']}>{title}</h4>
        <div className={styles['blog-info']}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles['blog-author-img']}
            src={authorImg}
            alt={authorAlt}
          />
          <div>
            {author}
            <br />
            {/* TODO: moment for date? */}
            {date} • {length}
          </div>
        </div>
      </div>

    </Link>)
  );
}
