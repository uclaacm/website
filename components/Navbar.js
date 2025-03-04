import Link from 'next/link';
import { useState } from 'react';
import ActiveLink from './ActiveLink';

export default function Navbar() {
  // set states
  const [menuActive, setMenuActive] = useState(false);

  // switches mobile menu state
  const menuActivate = () => {
    setMenuActive(prev => !prev);
  };

  return (
    <nav id="navbar">
      <section id="nav-container">
        <Link
          href="/"
          id="nav-title"
          className="nav-section left"
          aria-label="ACM Home">
          {/* TODO: resolve next/image issue */}
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
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/about"
                >
                  <button type="button" onClick={menuActivate}>
                    About
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/committees">
                  <button type="button" onClick={menuActivate}>
                    Committees
                  </button>
                </ActiveLink>
              </li>
              {/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
              <li id="committee-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  {[
                    { name: 'Studio', id: 'studio' },
                    { name: 'ICPC', id: 'icpc' },
                    { name: 'Design', id: 'design' },
                    { name: 'Cyber', id: 'cyber' },
                    { name: 'Teach LA', id: 'teachla' },
                    { name: 'W', id: 'w' },
                    { name: 'AI', id: 'ai' },
                    { name: 'Cloud', id: 'cloud' },
                    { name: 'Hack', id: 'hack' },
                  ].map(({ name, id }) => (
                    <li key={id}>
                      <ActiveLink
                        activeClassName="active"
                        href={`/committees#${id}`}
                      >
                        <button type="button" onClick={menuActivate}>
                          {name}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="hide-on-desktop">initiatives</li>
              <li className="hide-on-desktop" id="initiatives-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  {[
                    { name: 'JEDI', href: '/jedi' },
                    { name: 'Impact', href: '/impact' },
                  ].map(({ name, href }) => (
                    <li key={name}>
                      <ActiveLink
                        activeClassName="active"
                        href={href}
                      >
                        <button type="button" onClick={menuActivate}>
                          {name}
                        </button>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/officers"
                >
                  <button type="button" onClick={menuActivate}>
                  Team
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/events"
                >
                  <button type="button" onClick={menuActivate}>
                    Events
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/internship"
                >
                  <button type="button" onClick={menuActivate}>
                    Join Us
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="https://opensource.uclaacm.com/"
                >
                  <button type="button" onClick={menuActivate}>
                    Open Source
                  </button>
                </ActiveLink>
              </li>
              <li>
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
