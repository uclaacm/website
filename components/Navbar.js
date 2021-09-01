import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // set states
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const router = useRouter();

  // switches mobile menu state
  const menuActivate = () => {
    setMenuActive(menuActive ? false : true);
  };

  useEffect(() => {
    // highlights link for current route
    setActiveLink(router.asPath);
  }, [menuActive]);

  return(
    <nav id="navbar">
      <section id="nav-container">
        <Link href="/">
          <a id="nav-title" className="nav-section left" aria-label="acm home">
            {/* TODO: resolve next/image issue */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/images/acm_wordmark&logo.svg'} id="acm-logo" alt="ACM at UCLA Logo"></img>
            {/* TODO: use next image without breaking deploy */}
          </a>
        </Link>
        <section id="nav-items-container">
          <button className={menuActive ? 'active' : ''} id="hamburger" type="button" onClick={menuActivate} aria-label="navigation menu" aria-expanded={menuActive} tabIndex="0">
            <span className="bar"></span>
          </button>
          <section className={menuActive ? 'active' : ''} id="menu-modal">
            <ul className={`nav-items ${menuActive ? 'active' : ''}`} role="presentation">
              <li><Link href="/about" passHref={true}><button className={activeLink === '/about' ? 'active' : ''} type="button" role="link" onClick={menuActivate}>About</button></Link></li>
              <li><Link href="/committees" passHref={true}><button className={activeLink === '/committees' ? 'active' : ''} type="button" role="link" onClick={menuActivate}>Committees</button></Link></li>
              {/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
              <li id="committee-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  <li><Link href="/committees#studio" passHref={true}><button className={activeLink === '/committees#studio' ? 'active' : ''} type="button" onClick={menuActivate}>Studio</button></Link></li>
                  <li><Link href="/committees#icpc" passHref={true}><button className={activeLink === '/committees#icpc' ? 'active' : ''} type="button" onClick={menuActivate}>ICPC</button></Link></li>
                  <li><Link href="/committees#design" passHref={true}><button className={activeLink === '/committees#design' ? 'active' : ''} type="button" onClick={menuActivate}>Design</button></Link></li>
                  <li><Link href="/committees#cyber" passHref={true}><button className={activeLink === '/committees#cyber' ? 'active' : ''} type="button" onClick={menuActivate}>Cyber</button></Link></li>
                  <li><Link href="/committees#teachla" passHref={true}><button className={activeLink === '/committees#teachla' ? 'active' : ''} type="button" onClick={menuActivate}>Teach LA</button></Link></li>
                  <li><Link href="/committees#w" passHref={true}><button className={activeLink === '/committees#w' ? 'active' : ''} type="button" onClick={menuActivate}>W</button></Link></li>
                  <li><Link href="/committees#ai" passHref={true}><button className={activeLink === '/committees#ai' ? 'active' : ''} type="button" onClick={menuActivate}>AI</button></Link></li>
                  <li><Link href="/committees#hack" passHref={true}><button className={activeLink === '/committees#hack' ? 'active' : ''} type="button" onClick={menuActivate}>Hack</button></Link></li>
                </ul>
              </li>
              <li><Link href="/events" passHref={true}><button className={activeLink === '/events' ? 'active' : ''} type="button" role="link" onClick={menuActivate}>Events</button></Link></li>
              <li><Link href="/sponsors" passHref={true}><button className={activeLink === '/sponsors' ? 'active' : ''} type="button" role="link" onClick={menuActivate}>Sponsors</button></Link></li>
              <li><Link href="https://members.uclaacm.com"><a className="button button-transparent button-lg font-header">Member Login</a></Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </nav>
  );
}
