import React from 'react';
import AboutSplashImage from '../../assets/about1.png';
import Config from '../../config';

import Banner from '../Banner/Banner';
import SocialMedia from '../SocialMedia/SocialMedia';
import Officers from './Officers/Officers';

function About() {
	return (
		<div className="about-page">
			<Banner decorative />
			<div className="content-section">
				<div className="ornament square-ornament">
					<img className="square-splash" src={AboutSplashImage} alt="a picture of acm students at our annual CS BBQ!" />
					<div className="square-small" />
					<div className="square-tiny" />
				</div>
				<div className="text-section">
					<h1>What is ACM?</h1>
					<p className="half-size">As a student chapter of the international <a href="https://www.acm.org" target="_blank" rel="noreferrer noopener">Association for Computing Machinery,</a> ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!</p>
					<p className="half-size">With events such as infosessions, workshops, speaker panels, hackathons, and competitions, we cover a variety of topics including artificial intelligence, virtual reality, cybersecurity, mobile and web development, diversity initiatives, community outreach, and much more. Our events are <strong>open to everyone</strong>, regardless of major or experience!</p>
				</div>
			</div>
			<div className="content-section right">
				<div className="ornament image-ornament image-ornament-left">
					<img src={process.env.PUBLIC_URL + '/images/acm_committees.png'} alt="the logos of all ACM committees" />
				</div>
				<div className="text-section">
					<h1>What are ACM committees?</h1>
					<p className="half-size">ACM is comprised of eight committees — each serving a different topic and mission. We strive to cover a plethora of interests and encourage members to explore new topics, too!</p>
				</div>
			</div>
			<div className="content-section left">
				<div className="ornament image-ornament image-ornament-right">
					<img src={process.env.PUBLIC_URL + '/images/how-to-join.png'} alt="photos of acm events" />
				</div>
				<div className="text-section">
					<h1>How do I get involved?</h1>
					<p className="half-size">No matter what your background or major is, we would love to have you at our events and activities!</p>
					<p className="half-size">To keep up with what&rsquo;s happening, we recommend joining <a href="https://members.uclaacm.com" target="_blank" rel="noreferrer noopener">our membership portal</a>, <a href="https://www.facebook.com/groups/uclaacm" target="_blank" rel="noreferrer noopener">our Facebook group</a>, and <a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">our weekly newsletter</a>. We will keep you up to date with everything ACM, and earning points on the portal might even earn you a prize!</p>
					<p>Here&rsquo;s our social media, where you can see what we&rsquo;re up to:</p>
					<div style={{display: 'flex', justifyContent: 'center'}} >
						<SocialMedia/>
					</div>
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
