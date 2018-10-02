import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Officers from 'components/About/Officers';

export default class About extends React.Component {
	render() {
		return (
			<div className="about-page">
				<Navbar />
				<Banner decorative />
				<div className="content-section">
					<div className="ornament square-ornament">
						<div className="square-splash" />
						<div className="square-small" />
						<div className="square-tiny" />
					</div>
					<div className="text-section">
						<h1>What is ACM?</h1>
						<p className="half-size">ACM is the largest computer science student organization at UCLA. We welcome students of all different backgrounds and skill levels to join our community and share in our passion for CS!</p>
						<p className="half-size">From infosessions to workshops to hackathons and competitions, our events cover a variety of topics including artificial intelligence, virtual reality, security, beginner workshops, diversity initiatives, community outreach, and more.</p>
						<p className="half-size">At UCLA ACM, we aim to develop students' technical and professional skills while cultivating an inclusive and supportive community for all those interested in computer science.</p>
					</div>
				</div>
				<div className="content-section right">
					<div className="ornament image-ornament image-ornament-left">
						<img src="/images/committee-diagram.svg" />
					</div>
					<div className="text-section">
						<h1>What are ACM committees?</h1>
						<p className="half-size">ACM is split into six committees, each serving a different topic and mission. Some of our events may be categorized as a part of a specific committee, but being a member of a committee is the same as being a member of ACM. Our events are open to everyone. We strive to cover all of our members' interests and encourage members to explore new topics and events as well!</p>
					</div>
				</div>
				<div className="content-section left">
					<div className="ornament image-ornament image-ornament-right">
						<img src="/images/how-to-join.png" />
					</div>
					<div className="text-section">
						<h1>How do I get involved?</h1>
						<p className="half-size">ACM holds various events throughout the year. No matter what background or major you come from, you're welcome to participate in all of our activities. At our general meeting on Monday, October 6th, we'll be covering how you can join as an official member, what topics our committees cover, and what we have planned for the upcoming year. To become a member, you should join <a href="https://members.uclaacm.com">the membership portal</a>. You can see events, get attendance points, and see a community-wide leaderboard. There might even be prizes!</p>
					</div>
				</div>
				<div className="content-section center" style={{marginBottom: '0px'}}>
					<h2>Officers</h2>
				</div>
				<Officers officers={Config.officers} /><br /><br />
				<Footer />
			</div>
		);
	}
}