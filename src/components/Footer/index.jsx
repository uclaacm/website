import React from 'react';
import Button from 'components/Button';

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
							<a href="https://medium.com/techatucla" target="_BLANK"><div className="sm-icon" id="medium" /></a>
							<a href="https://twitter.com/uclaacm" target="_BLANK"><div className="sm-icon" id="twitter" /></a>
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
						<span>&copy; UCLA ACM 2017</span>
					</div>
				</div>
			</div>
		);
	}
}