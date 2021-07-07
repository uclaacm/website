import Link from 'next/link';
import React from 'react';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Committees from '../components/CommitteeSpread';
import Layout from '../components/Layout';
import Article from '../components/NewsArticle';
import SocialMedia from '../components/SocialMedia';
import TGBanner from '../components/TechGala/ViewBanner';
import data from '../data';

import styles from '../styles/pages/Index.module.scss';

function Home () {
	const { carousel, committees, news } = data;
	return (
		<Layout>
			<div className={styles.textCenter}>
				<TGBanner />
				<Banner />
				<div className={styles.contentSection}>
					<h2>The largest Computer Science community at UCLA</h2>
					<p className={styles.subheading}>
						ACM at UCLA is the largest computer science student organization in Southern California.
						We welcome students of all backgrounds, interests, and skill levels to join our community
						and share our love for technology. ACM is comprised of eight committees — each serving a
						different topic and mission. Our events are open to everyone, regardless of major or experience!
					</p>
					<SocialMedia />
				</div>
				<br />
				<Committees committees={committees} />
				<div className={styles.buttonSection}>
					<Link href="/committees"><a className="button">Learn More About Our Committees</a></Link>
				</div><br /><br />

				<div className={styles.contentSection}>
					<h2>In the News</h2>
					<div className={styles.achievementsContainer}>
						{news.map(
							article => <Article key={article.date} article={article} />,
						)}
					</div>
				</div>

				<br /><br /><br />

				<div className={styles.blue}>
					<div id={styles.signUpSection} className={styles.contentSection}>
						<div id={styles.signUpLeft} className={styles.halfWidth}>
							<h2>Want to stay updated on what&rsquo;s going on?</h2>
						</div>
						<div id={styles.signUpRight} className={styles.halfWidth}>
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
