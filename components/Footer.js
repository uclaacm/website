import Link from 'next/link';
import React from 'react';
import committees from '../data/committees';
import styles from '../styles/components/Footer.module.scss';
import SocialMedia from './SocialMedia';

// TODO: add GM?
const footerACMLinks = [
	{ title: 'About', path: '/about' },
	{ title: 'Committees', path: '/committees' },
	{ title: 'Events', path: '/events' },
	{ title: 'Sponsors', path: '/sponsors' },
	{ title: 'Tech Gala', path: '/techgala' },
	{ title: 'Membership Portal', path: 'https://members.uclaacm.com', ext: true },
];

function FooterLinkElement({ title, path, ext }){
	return (
		<li>
			<Link href={path}>
				<a className={styles['link-footer']} target={ext ? '_blank': ''} rel={ext ? 'noopener noreferrer' : ''}>{title}</a>
			</Link>
		</li>
	);
}

function Footer(){
	return (
		<footer className={styles.footer}>
			<nav className={styles['footer-inner']} aria-labelledby="footer-navigation">
				<h2 className="sr-only" id="footer-navigation">Footer Navigation</h2>
				<div className="grid-desktop-3">
					<div>
						<h3 className={styles['footer-header']}>Find us on social media</h3>
						<SocialMedia type="light"/>
						<div className="mt-1">
							<Link href="http://eepurl.com/c5pE6P">
								<a className="button tight" target="_blank" rel="noreferrer noopener">
									Join our Mailing List
								</a>
							</Link>
						</div>
						<p className={styles['footer-header']}>Reach us at</p>
						<a className={styles['link-footer']} href="mailto: acm@ucla.edu"><span className="footer-text">acm@ucla.edu</span></a>
					</div>
					<div>
						<h3 className={styles['footer-header']}>About ACM at UCLA</h3>
						<ul className='list-unstyled'>
							{
								footerACMLinks.map((link) => <FooterLinkElement key={link.path} {...link} />)
							}
						</ul>
						{/* TODO: consider where to put impact/jedi! events & initiatives? */}
					</div>
					<div>
						<h3 className={styles['footer-header']}>Committees</h3>
						<ul className='list-unstyled'>
							{
								committees.map(({name, slug, external_link}) => {
									const path = external_link ? external_link : `/committees#${slug}`;
									return (
										<FooterLinkElement
											key={slug}
											path={path}
											title={`ACM ${name}`}
											ext={external_link}
										/>
									);
								})
							}
						</ul>
					</div>
				</div>
				<div className="mt-1">
					<a href="https://www.netlify.com" target="_BLANK" rel="noopener noreferrer">
						{/* TODO: resolve 404 with <Image /> component */}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
					</a>
				</div>
				<div>
					<span className={styles['footer-text-thin']}>&copy; ACM at UCLA 2021.</span>
				</div>
			</nav>
		</footer>
	);
}

export default Footer;
