import Image from 'next/image';
import React from 'react';

import styles from '../styles/components/DevProjCard.module.scss';

function Project({
  name,
  prim_lang,
  proj_link,
  repo_link,
  description,
  img,
  alt,
  size,
  style,
}) {
  if (style && style.toLowerCase() === 'jedi') {
    return (
      <div className={styles['mb-2']}>
        <div className={styles['jedi-profile-img']}>
          <Image src={img} alt={alt} width={250} height={250}/>
        </div>
        <div className={styles['jedi-card-body']}>
          <h2 className={styles['jedi-title']}>
            {name}
          </h2>
        </div>
      </div>
    );
  } else if (size && size.toLowerCase() === 'compact') {
    return (
      <div className={styles['project-card']}>
        <div className={styles['project-grid-row']}>
          <div className={styles['project-grid-col']}>
            <Image
              className={styles['project-image']}
              src={img}
              alt={alt}
              width={70}
              height={70}
            />
          </div>
          <div className={`${styles['project-grid-col']} ${styles['project-info']}`}>
            <h3 className={styles['project-title']}>{name}</h3>
          </div>
        </div>
        <div className={styles['card-hover-content']}>
          <div>
            <p dangerouslySetInnerHTML={{ __html: description }}/>
            <p>{prim_lang}</p>
            { name !== '???' && (
              <>
              <a href={repo_link} target="_blank" rel="noopener noreferrer">View Repository<br></br></a>
              <a href={proj_link} target="_blank" rel="noopener noreferrer">View Project</a>
              </>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles['project-card']} ${styles['grid-tablet-only-2']}`}
      >
        <div className={styles['project-image-container']}>
          <img src={img} alt={alt} style={{ maxWidth: '100%' }}/>
        </div>
        <div>
          <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles['card-hover-content']}>
          <div className={styles['description-header']}>
            <p className={`${styles['mobile-header']}`}>&nbsp;</p>
            { name !== '???' && (
              <>
              <span className={`${styles['dev-badge']} ${styles[prim_lang]}`}></span>
              &nbsp;
              {/* TODO: Try dev-badge lang-{prim_lang} */}
              </>
            )}
            {prim_lang}
            { name !== '???' && (
              <>
                &nbsp;•&nbsp;
                <a href={proj_link} target="_blank" rel="noopener noreferrer"><u>Proj</u></a>
                &nbsp;•&nbsp;
                <a href={repo_link} target="_blank" rel="noopener noreferrer"><u>Repo</u></a>
              </>
            )}
          </div>
          <div className={styles['description-box']}>
            <p dangerouslySetInnerHTML={{ __html: description }}/>
          </div>
        </div>
      </div>
    );
  }
}

function projects(props) {
  return (
    // TODO: more flexible mobile views
    <>
      {props.projects.map((project) => (
        <Project {...project} size={props.size} style={props.style} key={project.name} />
      ))}
    </>
  );
}

export default projects;
