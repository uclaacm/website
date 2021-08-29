import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

import JEDICard from '../../components/JEDI/JEDICard';
import JEDINav from '../../components/JEDI/JEDINav';
import Layout from '../../components/Layout';

import { contactEmail, jedis } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';

function Meet() {
	return (
		<Layout>
      <NextSeo
				title="Meet the JEDIs | ACM at UCLA"
				description="Meet our wonderful JEDIs that make our program happen!"
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
        <JEDINav />
        <h1 className="text-right">meet the JEDIs</h1>
        <div className={styles['tri-grid']}>
          {jedis.map((jedi) => <JEDICard {...jedi} key={jedi.name} /> )}
        </div>
        <p className="text-center">
          not pictured: <Link href="https://arjunsubramonian.github.io/"><a className={styles['jedi-link']} target='_blank' rel="noopener noreferrer">Arjun</a></Link> and <Link href="https://sharvani.urspace.io/"><a className={styles['jedi-link']} target='_blank' rel="noopener noreferrer">Sharvani</a></Link>, who we wouldn&apos;t have JEDI without!
        </p>
        <hr />
        <h2 id="contact">contact</h2>
        <p>
          want to contact JEDI? your best bet is reaching out to Helia, our JEDI director! reach out via:
        </p>
        <ul>
          <li>
            Email: <a className={styles['jedi-link']} href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </li>
          <li>
            Discord: cuddlefish#2308
          </li>
          <li>
            Slack (ACM internal): Helia (she/her)
          </li>
        </ul>
      </div>
		</Layout>
	);
}

export default Meet;
