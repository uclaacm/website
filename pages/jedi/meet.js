import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { NextSeo } from 'next-seo';


import JEDINav from '../../components/JEDI/JEDINav';
import Layout from '../../components/Layout';
import Officers from '../../components/OfficerCard';

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
      <div className={`${styles.container} ${styles['container-padding']}`}>
        <JEDINav />
        <h1>meet the JEDIs</h1>
        <div className={styles['tri-grid']}>
          <Officers officers={jedis} style="jedi" />
        </div>
        <p className="text-center">
          not pictured:&nbsp;
          <Link
            href="https://arjunsubramonian.github.io/"
            className={styles['jedi-link']}
            target="_blank"
            rel="noopener noreferrer">

            Arjun

          </Link>
          &nbsp; and&nbsp;
          <Link
            href="https://sharvani.urspace.io/"
            className={styles['jedi-link']}
            target="_blank"
            rel="noopener noreferrer">

            Sharvani

          </Link>
          , who we wouldn&apos;t have JEDI without!
        </p>
        <hr />
        <h2 id="contact">contact</h2>
        <p>
          want to contact JEDI? your best bet is reaching out to Helia, our JEDI
          director! reach out via:
        </p>
        <ul className={`list-unstyled ${styles['mb-2']}`}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth aria-hidden={true} />
            &nbsp; Email:&nbsp;
            <a className={styles['jedi-link']} href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faSlack} fixedWidth aria-hidden={true} />{' '}
            Slack (ACM internal): Helia (she/her)
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Meet;
