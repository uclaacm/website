import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/DevProjCard.module.scss';
import carouselStyles from '../styles/pages/Dev.module.scss';

// Slot config: position offset -> { scale, zIndex, offset from center in px }
const SLOT_CONFIG = [
  { scale: 0.52, zIndex: 1,  offset: -320, opacity: 0.8 },
  { scale: 0.70, zIndex: 2,  offset: -175, opacity: 0.9 },
  { scale: 1.00, zIndex: 5,  offset: 0, opacity: 1 },
  { scale: 0.70, zIndex: 2,  offset: 175, opacity: 0.9 },
  { scale: 0.52, zIndex: 1,  offset: 320, opacity: 0.8 },
];

const BASE_SIZE = 280; // px, for the center diamond

function DiamondCard({ project, slotIndex, isCenter, onClick }) {
  const { scale, zIndex, offset, opacity } = SLOT_CONFIG[slotIndex];
  const size = BASE_SIZE * scale;

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
      style={{
        position: 'absolute',
        // eslint-disable-next-line quotes
        left: `calc(50% + ${offset}px)`,
        // eslint-disable-next-line quotes
        transform: `translateX(-50%)`,
        zIndex,
        opacity,
        transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <div
        className={`${styles['diamond-wrapper']} ${isCenter ? styles['is-center'] : ''}`}
        style={{ width: size, height: size }}
      >
        <div className={styles['diamond-inner']}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.img}
            alt={project.alt}
            className={styles['diamond-img']}
          />
          {isCenter && (
            <div className={styles['diamond-hover-content']}>
              <div className={styles['description-header']}>
                {project.name !== '???' && (
                  <>
                    <span
                      className={`${styles['dev-badge']} ${styles[project.prim_lang]}`}
                    />
                    &nbsp;
                  </>
                )}
                {project.prim_lang}
                {project.name !== '???' && (
                  <>
                    &nbsp;•&nbsp;
                    <a href={project.proj_link} target="_blank" rel="noopener noreferrer">
                      <u>Proj</u>
                    </a>
                    &nbsp;•&nbsp;
                    <a href={project.repo_link} target="_blank" rel="noopener noreferrer">
                      <u>Repo</u>
                    </a>
                  </>
                )}
              </div>
              <div className={styles['description-box']}>
                <p dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DiamondCarousel({ projects: projectList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projectList.length;

  const getWrapped = (i) => ((i % total) + total) % total;

  // The 5 visible projects, centered on activeIndex
  const visibleProjects = [-2, -1, 0, 1, 2].map((offset) => ({
    project: projectList[getWrapped(activeIndex + offset)],
    offset,
  }));

  return (
    <div className={carouselStyles['carousel-section']}>
      <div className={carouselStyles['carousel-track']}>
        <button
          className={carouselStyles['carousel-btn']}
          onClick={() => setActiveIndex(getWrapped(activeIndex - 1))}
          aria-label="Previous project"
          style={{ position: 'absolute', left: '-4.5rem', fontSize: '0.75rem', color: 'rgba(150, 150, 150, 1)' }}
        >
          ⟨
        </button>
        {visibleProjects.map(({ project, offset }, slotIndex) => (
          <DiamondCard
            key={project.name}
            project={project}
            slotIndex={slotIndex}
            isCenter={offset === 0}
            onClick={() => {
              if (offset !== 0) setActiveIndex(getWrapped(activeIndex + offset));
            }}
          />
        ))}
        <button
          className={carouselStyles['carousel-btn']}
          onClick={() => setActiveIndex(getWrapped(activeIndex + 1))}
          aria-label="Next project"
          style={{ position: 'absolute', right: '-4.5rem', fontSize: '0.75rem', color: 'rgba(150, 150, 150, 1)' }}
        >
          ⟩
        </button>
      </div>
      <p className={styles['diamond-title']} style={{ position: 'relative', zIndex: 10, marginTop: '1rem' }}>
        {projectList[activeIndex].name}
      </p>
      <div className={carouselStyles['carousel-controls']}>
        <div className={carouselStyles['carousel-dots']}>
          {projectList.map((p, i) => (
            <button
              key={p.name}
              className={`${carouselStyles['carousel-dot']} ${i === activeIndex ? carouselStyles.active : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${p.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

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
          <Image src={img} alt={alt} width={250} height={250} />
        </div>
        <div className={styles['jedi-card-body']}>
          <h2 className={styles['jedi-title']}>{name}</h2>
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
          <div
            className={`${styles['project-grid-col']} ${styles['project-info']}`}
          >
            <h3 className={styles['project-title']}>{name}</h3>
          </div>
        </div>
        <div className={styles['card-hover-content']}>
          <div>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <p>{prim_lang}</p>
            {name !== '???' && (
              <>
                <a href={repo_link} target="_blank" rel="noopener noreferrer">
                  View Repository<br></br>
                </a>
                <a href={proj_link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
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
          <div className={styles.rotated}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={alt} style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <div>
          <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles['card-hover-content']}>
          <div className={styles['description-header']}>
            <p className={`${styles['mobile-header']}`}>&nbsp;</p>
            {name !== '???' && (
              <>
                <span
                  className={`${styles['dev-badge']} ${styles[prim_lang]}`}
                ></span>
                &nbsp;
                {/* TODO: Try dev-badge lang-{prim_lang} */}
              </>
            )}
            {prim_lang}
            {name !== '???' && (
              <>
                &nbsp;•&nbsp;
                <a href={proj_link} target="_blank" rel="noopener noreferrer">
                  <u>Proj</u>
                </a>
                &nbsp;•&nbsp;
                <a href={repo_link} target="_blank" rel="noopener noreferrer">
                  <u>Repo</u>
                </a>
              </>
            )}
          </div>
          <div className={styles['description-box']}>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    );
  }
}

function projects(props) {
  // Use the diamond carousel for the default (no size/style) case
  if (!props.size && !props.style) {
    return <DiamondCarousel projects={props.projects} />;
  }

  return (
    // TODO: more flexible mobile views
    (<>
      {props.projects.map((project) => (
        <Project
          {...project}
          size={props.size}
          style={props.style}
          key={project.name}
        />
      ))}
    </>)
  );
}

export default projects;
