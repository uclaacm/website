import { NextSeo } from 'next-seo';
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
      <NextSeo
				title="About JEDI | ACM at UCLA"
				description="JEDI is an initiative that aims to make ACM's culture and presence on campus more inclusive. We aim to prioritize equity, diversity, and inclusion within our committees by identifying and addressing areas of improvement in terms of inclusion, as well as better including all minoritized and marginalized groups in tech."
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/jedi/jedi-logo.png',
							width: 714,
							height: 395,
							alt: 'The JEDI Logo',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
      <div className={styles.container}>
        <div className={`text-center ${styles['mt-2']}`}>
          <Image src={tempJediBanner} alt="a temporary banner image with a diverse group of people experiencing technology" />
        </div>
        <div className="text-center">
          <h1 className={styles['hero-title']}>ACM | JEDI</h1>
          <p className={styles['hero-subtitle']}>justice, equity, diversity, inclusion</p>
        </div>
        <div className={styles['hero-row']}>
          <nav aria-label="JEDI link nav">
            <ul className={styles['nav-links']}>
              <li><Link href="/jedi/meet"><a>meet the JEDIs</a></Link></li>
              <li><Link href="/jedi/allyship"><a>allyship spaces</a></Link></li>
              <li><Link href={blogLink}><a target="_blank" rel="noopener noreferrer">blog</a></Link></li>
            </ul>
          </nav>
          <div>
            <h2>what is JEDI?</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              JEDI is an initiative that aims to make ACM&apos;s culture and presence on campus more inclusive. It was proposed through the Moonshots initiative and was first run during Fall 2020. We aim to prioritize equity, diversity, and inclusion within our committees by identifying and addressing areas of improvement in terms of inclusion, as well as better including all minoritized and marginalized groups in tech.
            </p>
            <p>
              So far, we&apos;ve worked with each committee to reach specific EDI goals within ACM - read more about our achievements <Link href="https://medium.com/acm-at-ucla/may-the-force-be-with-acm-at-ucla-49e9258d71e1"><a className={styles['jedi-link']} target='_blank' rel="noopener noreferrer">in this blog post</a></Link>. We also hold allyship spaces on various EDI topics (not always related to tech) such as <Link href="https://drive.google.com/file/d/1Agve-hqXOZ4D0H2PnzaklDcazoND-39F/view"><a className={styles['jedi-link']} target='_blank' rel="noopener noreferrer">queer and trans representation in computer science</a></Link> and  <Link href="https://drive.google.com/drive/folders/16Jk212gr2jC4xJbKEkFVxwdukwF902-o"><a className={styles['jedi-link']} target='_blank' rel="noopener noreferrer">Asian representation and the otherization of kpop</a></Link>.
            </p>
            <p>
              <Link href="/jedi/meet"><a className={styles['jedi-link']}>Meet our JEDIs</a></Link>, <Link href="/jedi/allyship"><a className={styles['jedi-link']}>see past allyship spaces</a></Link>, or <Link href="https://medium.com/acm-at-ucla/may-the-force-be-with-acm-at-ucla-49e9258d71e1"><a className={styles['jedi-link']} target='_blank' rel="noopener noreferrer">read our blog</a></Link>!
            </p>
            <h2 className={styles['mt-2']}>how can I get involved?</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              If you&apos;re interested in ACM&apos;s diversity and inclusion goals, reach out to any of our <Link href="/jedi/meet"><a className={styles['jedi-link']}>JEDIs</a></Link> on Slack or <a className={styles['jedi-link']} href={`mailto:${contactEmail}`}>shoot an email ({contactEmail})</a>! Being a JEDI isn&apos;t a big commitment--you can get involved with anything, be it programming, one-off events, or anything else. You can also sign up to hold an allyship space on any EDI-related topic! If you&apos;re not interested in getting involved but have any quick suggestions or questions, feel free to contact us as well :)
            </p>
            <Link href="/jedi/meet#contact"><a className="button">get involved!</a></Link>
          </div>
        </div>
        <hr className={styles['mt-2']} />
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
        <div className={`text-center ${styles['container-padding']} ${styles['mb-2']}`}>
          <h2>don&apos;t be a stranger!</h2>
          <p>
            say hi to our JEDI director Helia at <a className={styles['jedi-link']} href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default JEDIAbout;
