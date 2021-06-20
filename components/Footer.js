import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialMedia from './SocialMedia';

function Footer(){
	return (
		<footer id="footer">
			<div id="footer-inner">
				<div id="footer-items">
					<div className="footer-item">
						<h3>Find us on social media</h3>
						<SocialMedia type="light"/>
					</div>
					<div className="footer-item">
						<h3>Reach us at</h3>
						<a href="mailto: acm@ucla.edu" className="email"><span className="footer-text">acm@ucla.edu</span></a>
					</div>
					{/* the paddingTop is a magic number that replaces a
						previous empty <h3> tag previously used for spacing. should be replaced later.
					*/}
					<div className="footer-item" style={{paddingTop: '28px'}}>
						<Link href="http://eepurl.com/c5pE6P">
							<a className="button tight" target="_blank" rel="noreferrer noopener">
								Join our Mailing List
							</a>
						</Link>
					</div>
				</div>
				<div id="netlify-badge">
					<a href="https://www.netlify.com" target="_BLANK" rel="noopener noreferrer">
						<Image src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" width="300px" height="160px" />
					</a>
				</div>
				<div id="footer-bottom">
					<span className="footer-text">&copy; ACM at UCLA 2021.</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
