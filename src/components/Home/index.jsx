import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Home/Banner';
import Committees from 'components/Home/Committees';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Banner />
				<h1>The largest Computer Science community at UCLA</h1>
				<div className="content-section center">
					<p>ACM is the largest computer science student organization at UCLA. We welcome students of all different backgrounds, interests, and skill levels to join our community and share in our passion for CS. ACM is split into six committees &mdash; each serving a different topic and mission. Although some events "belong" to a committee, being a member of a committee is the same as being a member of ACM overall. Our events are open to everyone.</p>
				</div>
				<Committees committees={Config.committees} />
				<div className="button-section">
					<Button text="Learn More" />
				</div>
				<Footer />
			</div>
		);
	}
}