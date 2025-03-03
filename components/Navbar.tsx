import Link from 'next/link';
import { useState } from 'react';
import ActiveLink from './ActiveLink';

export default function Navbar() {
  // set states
  const [menuActive, setMenuActive] = useState(false);

  // switches mobile menu state
  const menuActivate = () => {
    setMenuActive(menuActive ? false : true);
  };

  return (
    (<nav id="navbar">
      <section id="nav-container">
        <Link
          href="/"
          id="nav-title"
          className="nav-section left"
          aria-label="acm home">

          {/* TODO: resolve next/image issue */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'/images/acm_wordmark_chapter.svg'}
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
            tabIndex={0}
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
                  passHref={true}
                >
                  <button type="button" role="link" onClick={menuActivate}>
                    About
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/committees"
                  passHref={true}
                >
                  <button type="button" role="link" onClick={menuActivate}>
                    Committees
                  </button>
                </ActiveLink>
              </li>
              {/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
              <li id="committee-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  <li><ActiveLink activeClassName="active" href="/committees#studio" passHref={true}><button type="button" onClick={menuActivate}>Studio</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#icpc" passHref={true}><button type="button" onClick={menuActivate}>ICPC</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#design" passHref={true}><button type="button" onClick={menuActivate}>Design</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#cyber" passHref={true}><button type="button" onClick={menuActivate}>Cyber</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#teachla" passHref={true}><button type="button" onClick={menuActivate}>Teach LA</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#w" passHref={true}><button type="button" onClick={menuActivate}>W</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#ai" passHref={true}><button type="button" onClick={menuActivate}>AI</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#cloud" passHref={true}><button type="button" onClick={menuActivate}>Cloud</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/committees#hack" passHref={true}><button type="button" onClick={menuActivate}>Hack</button></ActiveLink></li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#studio"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        Studio
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#icpc"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        ICPC
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#design"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        Design
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#cyber"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        Cyber
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#teachla"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        Teach LA
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#w"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        W
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#ai"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        AI
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/committees#hack"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        Hack
                      </button>
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li className="hide-on-desktop">initiatives</li>
              <li className="hide-on-desktop" id="initiatives-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  <li><ActiveLink activeClassName="active" href="/jedi" passHref={true}><button type="button" onClick={menuActivate}>JEDI</button></ActiveLink></li>
                  <li><ActiveLink activeClassName="active" href="/impact" passHref={true}><button type="button" onClick={menuActivate}>impact</button></ActiveLink></li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/jedi"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        JEDI
                      </button>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      activeClassName="active"
                      href="/impact"
                      passHref={true}
                    >
                      <button type="button" onClick={menuActivate}>
                        impact
                      </button>
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/officers"
                  passHref={true}
                >
                  <button type="button" role="link" onClick={menuActivate}>
                    Team
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/events"
                  passHref={true}
                >
                  <button type="button" role="link" onClick={menuActivate}>
                    Events
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="/internship"
                  passHref={true}
                >
                  <button type="button" role="link" onClick={menuActivate}>
                    Join Us
                  </button>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  activeClassName="active"
                  href="https://opensource.uclaacm.com/"
                  passHref={true}
                >
                  <button type="button" role="link" onClick={menuActivate}>
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
    </nav>)
  );
}
