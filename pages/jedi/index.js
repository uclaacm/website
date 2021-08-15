import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Layout from '../../components/Layout';

import { blogLink, contactEmail } from '../../data/jedi';
import tempJediCard from '../../public/images/jedi/allyship-space-temp.png';
import tempJediBanner from '../../public/images/jedi/banner-temp.png';
import styles from '../../styles/pages/jedi.module.scss';

function JEDIAbout () {
  return (
		<Layout>
      <div className={styles.container}>
        <div className="text-center">
          <Image src={tempJediBanner} alt="a temporary banner image with a diverse group of people experiencing technology" />
        </div>
        <div className="text-center">
          <h1 className={styles['hero-title']}>ACM | JEDI</h1>
          <p>justice, equity, diversity, inclusion</p>
        </div>
        <div className={styles['hero-row']}>
          <nav>
            <ul className={styles['nav-links']}>
              <li><Link href="/jedi/meet"><a>meet the JEDIs</a></Link></li>
              <li><Link href="/jedi/allyship"><a>allyship spaces</a></Link></li>
              <li><Link href={blogLink}><a>blog</a></Link></li>
            </ul>
          </nav>
          <div>
            <h2>what is JEDI?</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h2 className={styles['mt-2']}>how can I get involved?</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/jedi"><a className="button">get involved!</a></Link>
          </div>
        </div>
        <hr />
        <h2 className="text-center">what JEDI does</h2>
        <div className={styles['tri-grid']}>
          <div>
            <Image src={tempJediCard} alt="sample image - we'll change this soon, i promise" />
            <h3>allyship spaces</h3>
            <p>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <Image src={tempJediCard} alt="sample image - we'll change this soon, i promise" />
            <h3>allyship spaces</h3>
            <p>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <Image src={tempJediCard} alt="sample image - we'll change this soon, i promise" />
            <h3>allyship spaces</h3>
            <p>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2>don&apos;t be a stranger!</h2>
          <p>
            say hi to our JEDI director helia at <a className={styles['jedi-link']} href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default JEDIAbout;
