import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Carousal from 'components/Home/Carousal';
import Committees from 'components/Home/Committees';

export default class Home extends React.Component {
	render() {
		return (
			<div className="home-page">
				<Navbar />
				<Banner />
				<div className="content-section center">
					<h2>The largest Computer Science community at UCLA</h2>
					<p className="subheading">As the largest Computer Science student organization at UCLA and in Southern California, <b>ACM at UCLA</b> welcomes students of all backgrounds, interests, and skill levels to join our community and share in our passion for CS. ACM comprises eight committees — each serves a unique topic and mission. Regardless of major or experience, our events are open to everyone!</p>
				</div>
				<Committees committees={Config.committees} />
				<div className="button-section center">
					{ /** CHANGE THIS LINK TO ABOUT PAGE LATER */ }
					<a href="https://www.facebook.com/uclaacm" target="_BLANK"><Button text="Learn More" /></a>
				</div><br /><br />

				<div className="content-section center">
					<h2>Recent Achievements</h2>
					<div id="achievements-container">
						<div className="achievement">
							<img src="/images/icpc_natls_2020.jpg" />
							<h3>ICPC Qualifies for North America Championship</h3>
						</div>
						<div className="achievement">
							<img src="/images/2018-acm-excellence-award.png" />
							<h3>2017-2018 Student Chapter Excellence Award</h3>
						</div>
						<div className="achievement">
							<img src="/images/2017-acm-excellence-award.png" />
							<h3>2016-2017 Student Chapter Excellence Award</h3>
						</div>
						<div className="achievement">
							<img src="/images/icpc-award.jpg" />
							<h3>ICPC Places 2nd in SoCal Regionals, Qualifies for World Finals</h3>
						</div>
					</div>
				</div><br /><br /><br />

				<div className="full-width blue">
					<div id="sign-up-section" className="content-section">
						<div id="sign-up-left" className="half-width">
							<h2>Want to stay updated on what's going on?</h2>
						</div>
						<div id="sign-up-right" className="half-width">
							<a href="http://eepurl.com/c5pE6P" target="_BLANK">
								<Button text="Join our Mailing List" style="tight dark" />
							</a>
						</div>
					</div>
				</div>
				<Carousal images={Config.carousal.images} />
				<Footer />
			</div>
		);
	}
}