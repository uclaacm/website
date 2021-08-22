import Link from 'next/link';
import React from 'react';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuActive: '',
		};
        this.menuActivate = this.menuActivate.bind(this);
        this.menuAccessible = this.menuAccessible.bind(this);
	}

    // switches mobile menu state
    menuActivate() {
        this.setState({menuActive: this.state.menuActive ? '' : 'active'});
        console.log(this.state.menuActive);
    }

    // allows accessible access to mobile menu
    menuAccessible(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            this.setState({menuActive: this.state.menuActive ? '' : 'active'});
        }
    }

    componentDidMount() {
        const hamburger = document.querySelector('#hamburger');
        const navItems = document.querySelector('.nav-items');
        const listItems = navItems.querySelectorAll(':scope > li');

        hamburger.addEventListener('click', this.menuActivate);
        hamburger.addEventListener('keyup', this.menuAccessible);
        // closes menu on link click
        listItems.forEach((item) => {
          item.addEventListener('click', this.menuActivate);
          item.addEventListener('keyup', this.menuAccessible);
        });
    }

    componentWillUnmount() {
        const hamburger = document.querySelector('#hamburger');
        const navItems = document.querySelector('.nav-items');
        const listItems = navItems.querySelectorAll(':scope > li');

        hamburger.removeEventListener('click', this.menuActivate);
        hamburger.removeEventListener('keyup', this.menuAccessible);
        listItems.forEach((item) => {
          item.removeEventListener('click', this.menuActivate);
          item.removeEventListener('keyup', this.menuAccessible);
        });
    }

    render() {
        const { menuActive } = this.state;
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
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/committees"><a>Committees</a></Link></li>
                            {/* <li><Link href="/gm"><a>{gmData.date.quarter} GM</a></Link></li> */}
                            <li id="committee-mobile-nav-item">
                                <ul className="committee-mobile-nav" role="presentation">
                                    <li><Link href={'/committees#studio'}><a>Studio</a></Link></li>
                                    <li><Link href={'/committees#icpc'}><a>ICPC</a></Link></li>
                                    <li><Link href={'/committees#design'}><a>Design</a></Link></li>
                                    <li><Link href={'/committees#cyber'}><a>Cyber</a></Link></li>
                                    <li><Link href={'/committees#teachla'}><a>Teach LA</a></Link></li>
                                    <li><Link href={'/committees#w'}><a>W</a></Link></li>
                                    <li><Link href={'/committees#ai'}><a>AI</a></Link></li>
                                    <li><Link href={'/committees#hack'}><a>Hack</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href="/events"><a>Events</a></Link></li>
                            <li><Link href="/sponsors"><a>Sponsors</a></Link></li>
                            <li><Link href="https://members.uclaacm.com"><a className="button button-transparent button-lg font-header">Member Login</a></Link>
                            </li>
                        </ul>
                        </section>
                    </section>
                </section>
            </nav>
        );
    }
}
