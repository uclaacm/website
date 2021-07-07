// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import gmData from '../../config/gmData';

//to allow GM page to be visible on the navbar and accessible
//uncomment the above import line "import gmData from '../../config/gmData';" to get quarter from the gmData page
//uncomment the two lines saying  "/* <Link href="/gm"><li>{gmData.date.quarter} gm</li></Link> */"

import styles from '../styles/components/Navbar.module.scss';

function MobileNavItem() {
	return (
			<ul className={styles.committeeMobileNav}>
				<li><Link href={'/committees#studio'}><a>Studio</a></Link></li>
				<li><Link href={'/committees#icpc'}><a>ICPC</a></Link></li>
				<li><Link href={'/committees#design'}><a>Design</a></Link></li>
				<li><Link href={'/committees#cyber'}><a>Cyber</a></Link></li>
				<li><Link href={'/committees#teachla'}><a>Teach LA</a></Link></li>
				<li><Link href={'/committees#w'}><a>W</a></Link></li>
				<li><Link href={'/committees#ai'}><a>AI</a></Link></li>
				<li><Link href={'/committees#hack'}><a>Hack</a></Link></li>
			</ul>
	);
}


export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.clickMobileNav = this.clickMobileNav.bind(this);
	}

	clickMobileNav() {
		// TODO: remove direct DOM manipulation, make this stateful
		document.getElementById('menuToggle').checked = false;
	}

	// TODO: can we both refactor this to use useEffect, and/or remove
	// this listener entirely

	componentDidMount() {
		// TODO: remove direct DOM manipulation, make this stateful
		const items = document.querySelectorAll('#mobileNav .navItems li');
		for (const item of items) {
			item.addEventListener('click', this.clickMobileNav);
		}
	}

	componentWillUnmount() {
		// TODO: remove direct DOM manipulation, make this stateful
		const items = document.querySelectorAll('#mobileNav .navItems li');
		for (const item of items) {
			item.removeEventListener('click', this.clickMobileNav);
		}
	}

	render() {
		return (
			<div id={styles.navbar}>
				<div id={styles.navbarInner}>
					<Link href="/">
						<a id={styles.navTitle} className={` ${styles.navSection} ${styles.left} `}>
							<img src={'/images/acm_wordmark&logo.svg'} id={styles.acmLogo} alt="ACM at UCLA Logo"></img>
							{/* TODO: use next image without breaking deploy */}
						</a>
					</Link>
					<div className={` ${styles.navSection} ${styles.right} `} id={styles.desktopNav}>
						<ul className={styles.navItems}>
							<li><Link href="/about"><a>About</a></Link></li>
							<li><Link href="/committees"><a>Committees</a></Link></li>
							{/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
							<li><Link href="/events"><a>Events</a></Link></li>
							<li><Link href="/sponsors"><a>Sponsors</a></Link></li>
							<li><Link href="https://members.uclaacm.com">
								<a className={`${styles.button} ${styles.buttonTransparent} ${styles.buttonLg} ${styles.fontHeader} `}>
									Member Login
								</a></Link>
							</li>
						</ul>
					</div>
					<div className={`${styles.navSection} ${styles.right}`} id={styles.mobileNav}>
						<label htmlFor={styles.menuToggle}>
							<div className={styles.hamburgerIcon}>
								<div className={styles.bar}/>
								<div className={styles.bar}/>
								<div className={styles.bar}/>
							</div>
						</label>
						<input type="checkbox" id={styles.menuToggle} />
						<div id={styles.hamburgerMenu}>
							<ul className={styles.navItems}>
								<li><Link href="/about"><a>About</a></Link></li>
								<li><Link href="/committees"><a>Committees</a></Link></li>
								{/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
								<MobileNavItem/>
								<li><Link href="/events"><a>Events</a></Link></li>
								<li><Link href="/sponsors"><a>Sponsors</a></Link></li>
								<li><Link href="https://members.uclaacm.com">
									<a className={`${styles.button} ${styles.buttonTransparent} ${styles.buttonLg} ${styles.fontHeader} `}>
										Member Login
									</a></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
