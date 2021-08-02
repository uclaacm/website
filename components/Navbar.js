// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import gmData from '../../config/gmData';

//to allow GM page to be visible on the navbar and accessible
//uncomment the above import line "import gmData from '../../config/gmData';" to get quarter from the gmData page
//uncomment the two lines saying  "/* <Link href="/gm"><li>{gmData.date.quarter} gm</li></Link> */"

function MobileNavItem() {
	return (
			<ul className="committee-mobile-nav">
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
		document.getElementById('menu-toggle').checked = false;
	}

	// TODO: can we both refactor this to use useEffect, and/or remove
	// this listener entirely

	componentDidMount() {
		// TODO: remove direct DOM manipulation, make this stateful
		const items = document.querySelectorAll('#mobile-nav .nav-items li');
		for (const item of items) {
			item.addEventListener('click', this.clickMobileNav);
		}
	}

	componentWillUnmount() {
		// TODO: remove direct DOM manipulation, make this stateful
		const items = document.querySelectorAll('#mobile-nav .nav-items li');
		for (const item of items) {
			item.removeEventListener('click', this.clickMobileNav);
		}
	}

	render() {
		return (
			<div id="navbar">
				<div id="navbar-inner">
					<Link href="/">
						<a id="nav-title" className="nav-section left">
							{/* TODO: resolve next/image issue */}
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={'/images/acm_wordmark&logo.svg'} id="acm-logo" alt="ACM at UCLA Logo"></img>
							{/* TODO: use next image without breaking deploy */}
						</a>
					</Link>
					<div className="nav-section right" id="desktop-nav">
						<ul className="nav-items">
							<li><Link href="/about"><a>About</a></Link></li>
							<li><Link href="/committees"><a>Committees</a></Link></li>
							{/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
							<li><Link href="/events"><a>Events</a></Link></li>
							<li><Link href="/sponsors"><a>Sponsors</a></Link></li>
							<li><Link href="https://members.uclaacm.com"><a className="button button-transparent button-lg font-header">Member Login</a></Link>
							</li>
						</ul>
					</div>
					<div className="nav-section right" id="mobile-nav">
						<label htmlFor="menu-toggle">
							<div className="hamburger-icon">
								<div className="bar" id="top-bar" />
								<div className="bar" id="middle-bar" />
								<div className="bar" id="bottom-bar" />
							</div>
						</label>
						<input type="checkbox" id="menu-toggle" />
						<div id="hamburger-menu">
							<ul className="nav-items">
								<li><Link href="/about"><a>About</a></Link></li>
								<li><Link href="/committees"><a>Committees</a></Link></li>
								{/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
								<MobileNavItem/>
								<li><Link href="/events"><a>Events</a></Link></li>
								<li><Link href="/sponsors"><a>Sponsors</a></Link></li>
								<li><Link href="https://members.uclaacm.com"><a className="button button-transparent button-lg font-header">Member Login</a></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
