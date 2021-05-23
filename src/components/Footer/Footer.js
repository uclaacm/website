import React from 'react';
import Button from '../Button/Button';
import SocialMedia from '../SocialMedia/SocialMedia';

function Footer(){
	return (
		<div id="footer">
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
						<a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">
							<Button text="Join our Mailing List" styleClass="tight" />
						</a>
					</div>
				</div>
				<div id="netlify-badge">
					<a href="https://www.netlify.com" target="_BLANK" rel="noopener noreferrer">
						<img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
					</a>
				</div>
				<div id="footer-bottom">
					<span className="footer-text">&copy; ACM at UCLA 2021.</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
