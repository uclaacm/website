import Link from 'next/link';
import React from 'react';

import Banner from '../components/Banner';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Committees from '../components/CommitteeSpread';
import Layout from '../components/Layout';
import Article from '../components/NewsArticle';
import SocialMedia from '../components/SocialMedia';
import TGBanner from '../components/TechGala/ViewBanner';
import data from '../data';

function Home () {
	const { carousel, committees, news } = data;
	return (
		<Layout>
			<div className="home-page text-center">
				<TGBanner />
				<Banner />
				<div className="content-section">
					<h2>The largest Computer Science community at UCLA</h2>
					<p className="subheading">ACM at UCLA is the largest computer science student organization in Southern California. We welcome students of all backgrounds, interests, and skill levels to join our community and share our love for technology. ACM is comprised of eight committees — each serving a different topic and mission. Our events are open to everyone, regardless of major or experience!</p>
					<SocialMedia />
				</div>
				<br />
				<Committees committees={committees} />
				<div className="button-section">
					{ /** CHANGE THIS LINK TO ABOUT PAGE LATER */ }
					<Link href="/committees"><Button text="Learn More About Our Committees" /></Link>
				</div><br /><br />

				<div className="content-section">
					<h2>In the News</h2>
					<div className="achievements-container">
						{news.map(
							article => <Article key={article.date} article={article} />,
						)}
					</div>
				</div>

				<br /><br /><br />

				<div className="blue">
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
				<Carousel images={carousel.images} />
			</div>
		</Layout>
	);
}

export default Home;
