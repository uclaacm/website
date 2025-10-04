import Link from 'next/link';
import { useState } from 'react';
import ActiveLink from './ActiveLink';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  // switches mobile menu state
  const menuActivate = () => {
    setMenuActive(prev => !prev);
  };

  const committeeLinks = [
    { label: 'Studio', id: 'studio' },
    { label: 'ICPC', id: 'icpc' },
    { label: 'Design', id: 'design' },
    { label: 'Cyber', id: 'cyber' },
    { label: 'TeachLA', id: 'teachla' },
    { label: 'W', id: 'w' },
    { label: 'AI', id: 'ai' },
    { label: 'Cloud', id: 'cloud' },
    { label: 'Hack', id: 'hack' },
  ];

  const initiativeLinks = [
    { label: 'Dev Team', href: '/dev'},
    { label: 'Impact', href: '/impact'},
    { label: 'JEDI', href: '/jedi'},
  ];

  const eventLinks = [
    { label: 'Calendar', href: '/events'},
    { label: 'Linktree', href: 'https://linktr.ee/acmucla'},
    { label: 'General Meeting', href: '/gm'},
    { label: 'CS Town Hall', href: '/town-hall'},
  ];

  const aboutLinks = [
    { label: 'About Us',   href: '/about' },
    { label: 'Our Team',   href: '/officers' },
    { label: 'Open Source',href: 'https://opensource.uclaacm.com/' },
    { label: 'Internship', href: '/internship' },
    { label: 'Our History',href: '/history' },
    { label: 'Friends of ACM', href: '/friends' },
    { label: 'Sponsors',   href: '/sponsors' },
  ];

  return (
    <nav id="navbar">
      <section id="nav-container">
        <Link
          href="/"
          id="nav-title"
          className="nav-section left"
          aria-label="ACM Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/acm_wordmark_chapter.svg"
            className="acm-logo"
            alt="ACM at UCLA"
          />
        </Link>
        <section id="nav-items-container">
          <button
            className={menuActive ? 'active' : ''}
            id="hamburger"
            type="button"
            onClick={menuActivate}
            aria-label="navigation menu"
            aria-expanded={menuActive}
            tabIndex="0"
          >
            <span className="bar" id="bar-one"></span>
            <span className="bar" id="bar-two"></span>
            <span className="bar" id="bar-three"></span>
          </button>
          <section className={menuActive ? 'active' : ''} id="menu-modal">
            <ul
              className={`nav-items ${menuActive ? 'active' : ''}`}
              role="presentation"
            >
              <li className="top-item committees">
                <ActiveLink
                  activeClassName="active"
                  href="/committees">
                  <button type="button" onClick={menuActivate}>
                    Committees
                  </button>
                </ActiveLink>
                <ul className="dropdown">
                  {committeeLinks.map(({ label, id }) => (
                    <li key={id}>
                      <ActiveLink activeClassName="active" href={`/committees#${id}`}>
                        <button type="button" onClick={menuActivate}>
                          {label}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              {/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
              <li className="top-item">
                <button type="button" onClick={menuActivate}>
                  Initiatives
                </button>
                <ul className="dropdown">
                  {initiativeLinks.map(({ label, href }) => (
                    <li key={href}>
                      <ActiveLink activeClassName="active" href={href}>
                        <button type="button" onClick={menuActivate}>
                          {label}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="hide-on-desktop" id="initiatives-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  {initiativeLinks.map(({ label, href }) => (
                    <li key={label}>
                      <ActiveLink
                        activeClassName="active"
                        href={href}
                      >
                        <button type="button" onClick={menuActivate}>
                          {label}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="top-item">
                <ActiveLink
                  activeClassName="active"
                  href="/events"
                >
                  <button type="button" onClick={menuActivate}>
                    Events
                  </button>
                </ActiveLink>
                <ul className="dropdown">
                  {eventLinks.map(({ label, href }) => (
                    <li key={href}>
                      <ActiveLink activeClassName="active" href={href}>
                        <button type="button" onClick={menuActivate}>
                          {label}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="hide-on-desktop" id="initiatives-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  {eventLinks.map(({ label, href }) => (
                    <li key={label}>
                      <ActiveLink
                        activeClassName="active"
                        href={href}
                      >
                        <button type="button" onClick={menuActivate}>
                          {label}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="top-item">
                <ActiveLink
                  activeClassName="active"
                  href="/about"
                >
                  <button type="button" onClick={menuActivate}>
                    About
                  </button>
                </ActiveLink>
                <ul className="dropdown">
                  {aboutLinks.map(({ label, href }) => (
                    <li key={href}>
                      <ActiveLink activeClassName="active" href={href} onClick={menuActivate}>
                        <div className="dropdown-item">
                          {label}
                        </div>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="hide-on-desktop" id="initiatives-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  {aboutLinks.map(({ label, href }) => (
                    <li key={label}>
                      <ActiveLink
                        activeClassName="active"
                        href={href}
                      >
                        <button type="button" onClick={menuActivate}>
                          {label}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="member-login">
                <Link
                  href="https://members.uclaacm.com"
                  className="button button-transparent button-lg font-header">
                  Member Login
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </nav>
  );
}
