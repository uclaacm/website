import React from 'react';

import Config from '../../config';

import Button from '../Button/Button';
import SocialMedia from '../SocialMedia/SocialMedia';
import Banner from '../Banner/Banner';
import Carousel from './Carousel/Carousel';
import Committees from './Committees/Committees';
import News from './News/News'
import TGBanner from '../TechGala/ViewBanner/ViewBanner'

function Home () {
	return (
		<div className="home-page">
			<TGBanner />
			<Banner />
			<div className="content-section center">
				<h2>The largest Computer Science community at UCLA</h2>
				<p className="subheading">ACM at UCLA is the largest computer science student organization in Southern California. We welcome students of all backgrounds, interests, and skill levels to join our community and share our love for technology. ACM is comprised of eight committees — each serving a different topic and mission. Our events are open to everyone, regardless of major or experience!</p>
				<SocialMedia />
			</div>
			<br />
			<Committees committees={Config.committees} />
			<div className="button-section center">
				{ /** CHANGE THIS LINK TO ABOUT PAGE LATER */ }
				<a href="/committees"><Button text="Learn More About Our Committees" /></a>
			</div><br /><br />

			<div className="content-section center">
				<h2>In the News</h2>
				<News news={Config.news} />
			</div>

			<br /><br /><br />

			<div className="full-width blue">
				<div id="sign-up-section" className="content-section">
					<div id="sign-up-left" className="half-width">
						<h2>Want to stay updated on what&rsquo;s going on?</h2>
					</div>
					<div id="sign-up-right" className="half-width">
						<a href="http://eepurl.com/c5pE6P" target="_blank" rel="noreferrer noopener">
							<Button className="tight dark" text="Join our Mailing List" styleClass="tight dark" />
						</a>
					</div>
				</div>
			</div>
			<Carousel images={Config.carousel.images} />
		</div>
	);
}

export default Home;
