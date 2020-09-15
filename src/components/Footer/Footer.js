import React from 'react';
import Button from '../Button/Button';

function Footer(){
	return (
		<div id="footer">
			<div id="footer-inner">
				<div id="footer-items">
					<div className="footer-item">
						<h3>Find us on social media</h3>
						<a href="https://www.facebook.com/uclaacm" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="facebook" /></a>
						<a href="https://www.github.com/uclaacm" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="github" /></a>
						<a href="https://www.instagram.com/acm.ucla/" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="instagram" /></a>
						<a href="https://discord.gg/4bcwv7t" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="discord" /></a>
						<a href="https://www.youtube.com/channel/UCwTqwgA4thysNbB2kNYsCIw" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="youtube" style={{width: 35 + 'px'}} /></a>
						<a href="https://medium.com/techatucla" target="_blank" rel="noreferrer noopener"><div className="sm-icon" id="medium" /></a>						
					</div>
					<div className="footer-item">
						<h3>Reach us at</h3>
						<a href="mailto: acm@ucla.edu" className="email"><span>acm@ucla.edu</span></a>
					</div>
					{/* the paddingTop is a magic number that replaces a previous empty <h3> tag previously used for spacing. should be replaced later. */}
					<div className="footer-item" style={{paddingTop: "28px"}}>
						<a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">
							<Button text="Join our Mailing List" styleClass="tight" />
						</a>
					</div>
				</div>
				<div id="footer-bottom">
					<span>&copy; ACM at UCLA 2020.</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;