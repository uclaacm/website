import Link from 'next/link';
import React from 'react';

import styles from '../../styles/components/TechGala/ViewBanner.module.scss';

function TGBanner() {
    return (
        <div className={styles.blue}>
            <div id={styles.signUpSection} className={styles.bannerSection}>
                <div id={styles.bannerLeft} className={styles.halfWidth}>
                    <h2 style={{fontSize: '1.6em'}}>Check out the projects from Tech Gala Winter &apos;21!</h2>
                </div>
                <div id={styles.bannerRight} className={styles.halfWidth}>
                    <Link href="/techgala">
                        <a className="button tight dark">
                            View Projects
                        </a>
                    </Link>
                </div>
			</div>
		</div>
    );
}

export default TGBanner;
