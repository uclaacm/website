import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<div id="footer-inner">
					<div id="footer-items">
						<div className="footer-item">
							<h3>Find us on social media</h3>
							<div className="sm-icon" id="twitter" />
							<div className="sm-icon" id="facebook" />
							<div className="sm-icon" id="medium" />
							<div className="sm-icon" id="medium" />
							<div className="sm-icon" id="medium" />
						</div>
						<div className="footer-item">
							<h3>Reach us at</h3>
							<span>acm@ucla.edu</span>
						</div>
						<div className="footer-item">
							<h3>Join our mailing list</h3>
							<form>
								<input type="text" />
							</form>
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