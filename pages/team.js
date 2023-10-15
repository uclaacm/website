import { NextSeo } from 'next-seo';
import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';
import data from '../data';
import styles from '../styles/pages/About.module.scss';

function About() {
  const { leadership } = data;
  return (
    <Layout>
      <NextSeo
        title="About | ACM at UCLA"
        description="As a student chapter of the international Association for Computing Machinery, ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!"
        openGraph={{
          images: [
            {
              url: 'https://www.uclaacm.com/images/logo.png',
              width: 1200,
              height: 1200,
              alt: 'The ACM at UCLA logo',
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <div className={styles['about-page']}>
        <Banner decorative />
        <div className={styles['content-section']}>
          <div className={`${styles.ornament} ${styles['square-ornament']}`}>
            {/* TODO: resolve next/image issue */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
              className={styles['square-splash']}
              src="/images/about1.png"
              alt="ACM students at our annual CS BBQ!"
            /> */}
            {/* TODO: use next image without breaking deploy */}
            <div className={styles['square-small']} />
            <div className={styles['square-tiny']} />
          </div>
         </div>
        <div className={`${styles['content-section']} ${styles.leadership}`}>
          <h2>Our Team</h2>
          <p>Our President and Internal/External Vice Presidents support the entire ACM community
          while our committee presidents foster the growth of their committee.</p>
					<div className="grid-desktop-3">
						<Officers officers={leadership} size="compact" />
					</div>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}

export default About;
