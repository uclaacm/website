import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // set states
  const [menuActive, setMenuActive] = useState('');
  const [linkActive, setLinkActive] = useState('');

  const router = useRouter();

  // switches mobile menu state
  const menuActivate = () => {
    setMenuActive(menuActive ? '' : 'active');
  };

  // allows accessible access to mobile menu
  const menuAccessible = (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      setMenuActive(menuActive ? '' : 'active');
    }
  };

  useEffect(() => {
    const hamburger = document.querySelector('#hamburger');
    const navItems = document.querySelector('.nav-items');
    const listItems = navItems.querySelectorAll(':scope > li');

    setLinkActive(router.asPath);
    hamburger.addEventListener('click', menuActivate);
    hamburger.addEventListener('keyup', menuAccessible);
    // closes menu on link click
    listItems.forEach((item) => {
      item.addEventListener('click', menuActivate);
      item.addEventListener('keyup', menuAccessible);
    });

    return function cleanUp() {
      hamburger.removeEventListener('click', menuActivate);
      hamburger.removeEventListener('keyup', menuAccessible);
      listItems.forEach((item) => {
        item.removeEventListener('click', menuActivate);
        item.removeEventListener('keyup', menuAccessible);
      });
    };
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
          <div className={menuActive} id="hamburger" role="button" aria-label="navigation menu" aria-expanded={menuActive === 'active' ? true : false} tabIndex="0">
            <div className="bar" />
          </div>
          <section className={menuActive} id="menu-modal">
            <ul className={`nav-items ${menuActive}`} role="presentation">
              <li><Link href="/about"><a className={linkActive === '/about' ? 'active' : ''}>About</a></Link></li>
              <li><Link href="/committees"><a className={linkActive === '/commitees' ? 'active' : ''}>Committees</a></Link></li>
              {/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
              <li id="committee-mobile-nav-item">
                <ul className="committee-mobile-nav" role="presentation">
                  <li><Link href={'/committees#studio'}><a className={linkActive === '/committees#studio' ? 'active' : ''}>Studio</a></Link></li>
                  <li><Link href={'/committees#icpc'}><a className={linkActive === '/committees#icpc' ? 'active' : ''}>ICPC</a></Link></li>
                  <li><Link href={'/committees#design'}><a className={linkActive === '/committees#design' ? 'active' : ''}>Design</a></Link></li>
                  <li><Link href={'/committees#cyber'}><a className={linkActive === '/committees#cyber' ? 'active' : ''}>Cyber</a></Link></li>
                  <li><Link href={'/committees#teachla'}><a className={linkActive === '/committees#teachla' ? 'active' : ''}>Teach LA</a></Link></li>
                  <li><Link href={'/committees#w'}><a className={linkActive === '/committees#w' ? 'active' : ''}>W</a></Link></li>
                  <li><Link href={'/committees#ai'}><a className={linkActive === '/committees#ai' ? 'active' : ''}>AI</a></Link></li>
                  <li><Link href={'/committees#hack'}><a className={linkActive === '/committees#hack' ? 'active' : ''}>Hack</a></Link></li>
                </ul>
              </li>
              <li><Link href="/events"><a className={linkActive === '/events' ? 'active' : ''}>Events</a></Link></li>
              <li><Link href="/sponsors"><a className={linkActive === '/sponsors' ? 'active' : ''}>Sponsors</a></Link></li>
              <li><Link href="https://members.uclaacm.com"><a className="button button-transparent button-lg font-header">Member Login</a></Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </nav>
  );
}
