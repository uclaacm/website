import Image from 'next/image';
import React from 'react';

import styles from '../../styles/components/TechGala/ProjectCard.module.scss';

function ProjectCard(props) {
    const {image, title, winner, summary, names, url, category} = props.project;
    return (
        <div className={styles.introRow}>
            <div className={styles.showMobile}>
                <Image src={image} alt={`showcase image for ${title}`} height={280} width={370} />
            </div>
            <div className={styles.leftCol}>
                <h2>{title}</h2>
                <div className={styles.winner}>{winner}</div>
                <p>{summary}</p>
                <p>Created By: {names}</p>
                <a href={url} className="link">Learn More</a>
                <p>
                    <span className={styles.tgTag}>{category}</span>
                </p>
            </div>
            <div className={styles.rightCol}>
                <Image src={image} alt={`showcase image for ${title}`} height={280} width={370} />
            </div>
        </div>
    );
}

export default ProjectCard;
