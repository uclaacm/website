import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import gmData from '../../config/gmData';

//to allow GM page to be visible on the navbar and accessible
//uncomment the above import line "import gmData from '../../config/gmData';" to get quarter from the gmData page
//uncomment the two lines saying  "/* <Link href="/gm"><li>{gmData.date.quarter} gm</li></Link> */"

function MobileNavItem() {
	return (
			<ul className="committee-mobile-nav">
					<li><Link href={'/committees#studio'}>Studio</Link></li>
					<li><Link href={'/committees#icpc'}>ICPC</Link></li>
					<li><Link href={'/committees#design'}>Design</Link></li>
					<li><Link href={'/committees#cyber'}>Cyber</Link></li>
					<li><Link href={'/committees#teachla'}>Teach LA</Link></li>
					<li><Link href={'/committees#w'}>W</Link></li>
					<li><Link href={'/committees#ai'}>AI</Link></li>
					<li><Link href={'/committees#hack'}>Hack</Link></li>
			</ul>
	);
}


export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.clickMobileNav = this.clickMobileNav.bind(this);
	}

	clickMobileNav() {
		document.getElementById('menu-toggle').checked = false;
	}

	// TODO: can we both refactor this to use useEffect, and/or remove
	// this listener entirely

	componentDidMount() {
		const items = document.querySelectorAll('#mobile-nav .nav-items li');
		for (const item of items) {
			item.addEventListener('click', this.clickMobileNav);
		}
	}

	componentWillUnmount() {
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
						<div id="nav-title" className="nav-section left">
							<Image
								id="acm-logo"
								src={process.env.PUBLIC_URL + '/images/acm_wordmark&logo.svg'}
								width="180px"
								height="60px"
								alt="ACM at UCLA logo"
							/>
						</div>
					</Link>
					<div className="nav-section right" id="desktop-nav">
						<ul className="nav-items">
							<Link href="/about"><li>About</li></Link>
							<Link href="/committees"><li>Committees</li></Link>
							{/* <Link href="/gm"><li>{gmData.date.quarter} gm</li></Link> */}
							<Link href="/events"><li>Events</li></Link>
							<Link href="/sponsors"><li>Sponsors</li></Link>
							<a href="https://members.uclaacm.com"><li className="button">Member Login</li></a>
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
								<Link href="/about"><li>About</li></Link>
								<div>
									<Link href="/committees"><li>Committees</li></Link>
									<MobileNavItem/>
								</div>
								{/* <Link href="/gm"><li>{gmData.date.quarter} gm</li></Link> */}
								<Link href="/events"><li>Events</li></Link>
								<Link href="/sponsors"><li>Sponsors</li></Link>
								<a href="https://members.uclaacm.com"><li className="button">Member Login</li></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
