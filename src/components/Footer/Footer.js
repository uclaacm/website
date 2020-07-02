import React from 'react';
import Button from '../Button/Button';

export default class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<div id="footer-inner">
					<div id="footer-items">
						<div className="footer-item">
							<h3>Find us on social media</h3>
							<a href="https://www.facebook.com/uclaacm" target="_BLANK"><div className="sm-icon" id="facebook" /></a>
							<a href="https://www.github.com/uclaacm" target="_BLANK"><div className="sm-icon" id="github" /></a>
							<a href="https://www.instagram.com/acm.ucla/" target="_BLANK"><div className="sm-icon" id="instagram" /></a>
							<a href="https://discord.gg/4bcwv7t" target="_BLANK"><div className="sm-icon" id="discord" /></a>
							<a href="https://medium.com/techatucla" target="_BLANK"><div className="sm-icon" id="medium" /></a>
						</div>
						<div className="footer-item">
							<h3>Reach us at</h3>
							<span>acm@ucla.edu</span>
						</div>
						<div className="footer-item">
							<h3></h3>
							<a href="http://eepurl.com/c5pE6P" target="_BLANK">
								<Button text="Join our Mailing List" style="tight fade-light" />
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
}