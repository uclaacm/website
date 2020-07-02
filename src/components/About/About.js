import React from 'react';
import Config from '../../config';

import Banner from '../Banner/Banner';
import Officers from './Officers/Officers';

function About() {
	return (
		<div className="about-page">
			<Banner decorative />
			<div className="content-section">
				<div className="ornament square-ornament">
					<div className="square-splash" />
					<div className="square-small" />
					<div className="square-tiny" />
				</div>
				<div className="text-section">
					<h1>What is ACM?</h1>
					<p className="half-size">As a student chapter of the international <a href="https://www.acm.org" target="_blank" rel="noreferrer noopener">Association for Computing Machinery,</a> ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all different backgrounds and skill levels to join our community and share in our passion for CS!</p>
					<p className="half-size">With events such as infosessions, workshops, speaker panels, hackathons, and competitions, we cover a variety of topics including artificial intelligence, virtual reality, cybersecurity, app development, diversity initiatives, community outreach, and much more.</p>
					<p className="half-size">At ACM, we aim to develop students’ technical and professional skills while cultivating an inclusive and supportive community for everyone interested in computer science, regardless of major or experience.</p>
				</div>
			</div>
			<div className="content-section right">
				<div className="ornament image-ornament image-ornament-left">
					<img src="/images/acm_committees.svg" alt="the logos of all ACM committees" />
				</div>
				<div className="text-section">
					<h1>What are ACM committees?</h1>
					<p className="half-size">ACM comprises eight committees, each serving a unique topic and mission. All of our events are open to everyone. We strive to cover all of our members’ interests and encourage members to explore new topics and events, too!</p>
				</div>
			</div>
			<div className="content-section left">
				<div className="ornament image-ornament image-ornament-right">
					<img src="/images/how-to-join.png" alt="photos of acm events" />
				</div>
				<div className="text-section">
					<h1>How do I get involved?</h1>
					<p className="half-size">No matter what your background or major is, we welcome you to participate in all of our events and activities!</p>
					<p className="half-size">To become a member and keep up with upcoming events, you should join <a href="https://members.uclaacm.com" target="_blank" rel="noreferrer noopener">our membership portal</a>, follow <a href="https://www.facebook.com/groups/uclaacm" target="_blank" rel="noreferrer noopener">our Facebook group</a>, and sign up for <a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">our weekly newsletter</a>. Signing up will keep you up to date with everything ACM, and earning points on the portal might even earn you a prize!</p>
				</div>
			</div>
			<div className="content-section center" style={{marginBottom: '0px'}}>
				<h2>Officers</h2>
			</div>
			<Officers officers={Config.officers} /><br /><br />
		</div>
	);
}

export default About;