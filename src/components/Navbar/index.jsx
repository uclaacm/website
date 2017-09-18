import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends React.Component {
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
					<div className="nav-section right">
						<ul id="nav-items">
							<NavLink to="/about"><li>About</li></NavLink>
							<NavLink to="/events"><li>Events</li></NavLink>
							<NavLink to="/projects"><li>Projects</li></NavLink>
							<NavLink to="/members"><li>Members</li></NavLink>
							<NavLink to="/sponsors"><li>Sponsors</li></NavLink>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}