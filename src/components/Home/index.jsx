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
					<p className="subheading">ACM is the largest computer science student organization at UCLA. We welcome students of all different backgrounds, interests, and skill levels to join our community and share in our passion for CS. ACM is split into six committees &mdash; each serving a different topic and mission. Although some events "belong" to a committee, being a member of a committee is the same as being a member of ACM overall. Our events are open to everyone.</p>
				</div>
				<Committees committees={Config.committees} />
				<div className="button-section">
					<Button text="Learn More" />
				</div><br />
				<Carousal images={Config.carousal.images} />
				<Footer />
			</div>
		);
	}
}