import Link from 'next/link';
import React from 'react';
import SocialMedia from './SocialMedia';

import styles from'../styles/components/Footer.module.scss';

function Footer(){
	return (
		<footer id={styles.footer}>
			<div id={styles.footerInner}>
				<div id={styles.footerItems}>
					<div className={styles.footerItem}>
						<h3>Find us on social media</h3>
						<SocialMedia type="light"/>
					</div>
					<div className={styles.footerItem}>
						<h3>Reach us at</h3>
						<a href="mailto: acm@ucla.edu" className={styles.email}><span className={styles.footerText}>acm@ucla.edu</span></a>
					</div>
					{/* the paddingTop is a magic number that replaces a
						previous empty <h3> tag previously used for spacing. should be replaced later.
					*/}
					<div className={styles.footerItem} style={{paddingTop: '28px'}}>
						<Link href="http://eepurl.com/c5pE6P">
							<a className="button tight" target="_blank" rel="noreferrer noopener">
								Join our Mailing List
							</a>
						</Link>
					</div>
				</div>
				<div id={styles.netlifyBadge}>
					<a href="https://www.netlify.com" target="_BLANK" rel="noopener noreferrer">
						{/* TODO: resolve 404 with <Image /> component */}
						<img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
					</a>
				</div>
				<div id={styles.footerBottom}>
					<span className={styles.footerText}>&copy; ACM at UCLA 2021.</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
