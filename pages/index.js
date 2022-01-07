import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Committees from '../components/CommitteeSpread';
import ContentBanner from '../components/ContentBanner';
import Layout from '../components/Layout';
import Article from '../components/NewsArticle';
import SocialMedia from '../components/SocialMedia';
import data from '../data';

function Home () {
	const { carousel, committees, news } = data;
	return (
		<Layout>
			<NextSeo
				title="Home | ACM at UCLA"
				description="ACM at UCLA is UCLA's largest tech community, focused on making tech as accessible as possible. We're split up into an array of committees and initiatives that each focus on a specific area of computer science. Everyone is welcome to join - regardless of major, prior experience, or anything else!"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/logo.png',
							width: 1200,
							height: 1200,
							alt: 'The ACM at UCLA logo',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
			<div className="home-page text-center">
				<ContentBanner
					title="Check out our Winter General Meeting!"
					ctaText="Learn More"
					ctaLink="/gm/w22"
				/>
				<Banner />
				<div className="content-section">
					<h2>The largest Computer Science community at UCLA</h2>
					<p className="subheading">ACM at UCLA is the largest computer science student organization in Southern California. We welcome students of all backgrounds, interests, and skill levels to join our community and share our love for technology. ACM is comprised of eight committees — each serving a different topic and mission. Our events are open to everyone, regardless of major or experience!</p>
					<SocialMedia />
				</div>
				<br />
				<Committees committees={committees} />
				<div className="button-section">
					<Link href="/committees"><a className="button">Learn More About Our Committees</a></Link>
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
					<div className="sign-up-section content-section">
						<div className="half-width">
							<h2>Want to stay updated on what&rsquo;s going on?</h2>
						</div>
						<div className="sign-up-right half-width">
							<Link href="http://eepurl.com/c5pE6P">
								<a className="button tight dark" target="_blank" rel="noreferrer noopener">
									Join our Mailing List
								</a>
							</Link>
						</div>
					</div>
				</div>
				<Carousel images={carousel.images} />
			</div>
		</Layout>
	);
}

export default Home;
