import Link from 'next/link';

import SocialMedia from './SocialMedia';
import committees from '../data/committees';
import styles from '../styles/components/Footer.module.scss';

const footerACMLinks = [
  { title: 'About', path: '/about' },
  { title: 'Events', path: '/events' },
  { title: 'General Meeting', path: '/gm' },
  { title: 'CS Town Hall', path: '/town-hall' },
  { title: 'Internship Program', path: '/internship' },
  //{ title: 'Dev Team', path: '/dev' },
  { title: 'Sponsors', path: '/sponsors' },
  { title: 'Our Team', path: '/officers' },
  {
    title: 'Membership Portal',
    path: 'https://members.uclaacm.com',
    ext: true,
  },
];

const footerInitiativeLinks = [
  {
    name: 'Dev Team',
    slug: 'dev',
    path: '/dev',
    wordmark_dark: '/images/dev/dev-team-footer.png',
    useImage: true,
  },
  {
    name: 'Impact',
    slug: 'impact',
    path: '/impact',
    wordmark_dark: '/images/impact/impact-footer.png',
    useImage: true,
  },
  {
    name: 'JEDI',
    slug: 'jedi',
    path: '/jedi',
    wordmark_dark: '/images/jedi/jedi-footer.png',
    useImage: true,
  },
];

function FooterLinkElement({ title, path, ext }) {
  return (
    (<Link
      href={path}
      className={styles['link-footer']}
      target={ext ? '_blank' : ''}
      rel={ext ? 'noopener noreferrer' : ''}>

      {title}

    </Link>)
  );
}

function Footer() {
  return (
    (<footer className={styles.footer}>
      <nav
        className={styles['footer-inner']}
        aria-labelledby="footer-navigation"
      >
        <h2 className="sr-only" id="footer-navigation">
          Footer Navigation
        </h2>
        <div className="grid-desktop-3">
          <div>
            <h3 className={styles['footer-header']}>Find us on social media</h3>
            <SocialMedia type="light" />
            <div className="mt-1">
              <Link
                href="http://eepurl.com/hdEvNP"
                className="button tight"
                target="_blank"
                rel="noreferrer noopener">

                Join our Mailing List

              </Link>
            </div>
            <div className="mt-1">
              <Link
                href="https://linktr.ee/acmucla"
                className="button tight"
                target="_blank"
                rel="noreferrer noopener">

                Linktree

              </Link>
            </div>
            <p className={styles['footer-header']}>Reach us at</p>
            <a className={styles['link-footer']} href="mailto: acm@ucla.edu">
              <span className="footer-text">acm@ucla.edu</span>
            </a>
          </div>
          <div>
            <h3 className={styles['footer-header']}>About ACM at UCLA</h3>
            <ul className="list-unstyled">
              {footerACMLinks.map((link) => (
                <li key={link.path}>
                  <FooterLinkElement {...link} />
                </li>
              ))}
            </ul>
            <h3 className={styles['footer-header']} style={{ textAlign: 'center' }}>ACM Initiatives</h3>
            <ul
              className={`list-unstyled text-left ${styles['footer-committee-sidebar-container']}`}
              //style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {footerInitiativeLinks.map((initiative) => (
                <li key={initiative.slug} style={{ textAlign: 'center', width: '100%' }}>
                  <FooterLinkElement
                    path={initiative.path}
                    title={
                      initiative.useImage ? (
                        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                          <img
                            className="committee-sidebar-image"
                            src={initiative.wordmark_dark}
                            alt={`ACM ${initiative.name}`}
                            style={{
                              margin: '0 auto',
                              transform:
                                initiative.name === 'Impact'
                                    ? 'translateX(-8.5px)'
                                    : initiative.name === 'Dev Team'
                                    ? 'translateX(-23px) scale(0.85)'
                                    : initiative.name === 'JEDI'
                                    ? 'translateX(-18px) scale(0.94)'
                                    : 'none',
                            }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              const parentNode = e.target.parentNode;
                              parentNode.textContent = `ACM ${initiative.name}`;
                              parentNode.style.textAlign = 'center';
                              parentNode.style.display = 'block';
                            }}
                          />
                        </div>
                      ) : (
                        <span style={{ display: 'block', textAlign: 'center' }}>ACM {initiative.name}</span>
                      )
                    }
                    ext={false}
                  />
                </li>
              ))}
            </ul>
            {/* TODO: consider where to put impact/jedi! events & initiatives? */}
          </div>
          <div>
            <h3 className={styles['footer-header']}>Committees</h3>
            <ul
              className={`list-unstyled text-left ${styles['footer-committee-sidebar-container']}`}
            >
              {committees.map(
                ({ name, slug, external_link, wordmark_dark }) => {
                  const path = external_link
                    ? external_link
                    : `/committees#${slug}`;
                  return (
                    <li key={slug}>
                      <FooterLinkElement
                        path={path}
                        /* TODO: resolve 404 with <Image /> component */
                        title={
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            className="committee-sidebar-image"
                            src={wordmark_dark}
                            alt={`ACM ${name}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                              const parentNode = e.target.parentNode;
                              parentNode.textContent = `ACM ${name}`;
                              parentNode.style.textAlign = 'center';
                              parentNode.style.display = 'block';
                            }}
                          />
                        }
                        ext={external_link}
                      />
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </div>
        <div className="mt-1">
          <a
            href="https://www.netlify.com"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            {/* TODO: resolve 404 with <Image /> component */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.netlify.com/img/global/badges/netlify-light.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </div>
        <div>
          <span className={styles['footer-text-thin']}>
            &copy; ACM at UCLA 2025.
          </span>
        </div>
      </nav>
    </footer>)
  );
}

export default Footer;
