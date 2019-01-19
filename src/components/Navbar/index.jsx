import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.clickMobileNav = this.clickMobileNav.bind(this);
	}

	clickMobileNav() {
		document.getElementById('menu-toggle').checked = false;
	}

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
					<NavLink to="/">
						<div id="nav-title" className="nav-section left">
							<img src="/images/logo-acm.png" id="acm-logo"></img>
							<div id="acm-title">UCLA <b>ACM</b></div>
						</div>
					</NavLink>
					<div className="nav-section right" id="desktop-nav">
						<ul className="nav-items">
							<NavLink to="/about"><li>About</li></NavLink>
							{ /* <NavLink to="/events"><li>Events</li></NavLink> */ }
							<NavLink to="/sponsors"><li>Sponsors</li></NavLink>
							<NavLink to="/media"><li>Media</li></NavLink>
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
								<NavLink to="/about"><li>About</li></NavLink>
								<NavLink to="/events"><li>Events</li></NavLink>
								{ /* <NavLink to="/events"><li>Events</li></NavLink> */ }
								<a href="https://members.uclaacm.com"><li className="button">Member Login</li></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}