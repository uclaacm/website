import Link from 'next/link';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Committees from '../components/CommitteeSpread';
import Layout from '../components/Layout';
import Article from '../components/NewsArticle';
import SocialMedia from '../components/SocialMedia';
// import ContentBanner from '../components/ContentBanner';

import data from '../data';

function Home() {
  const { carousel, committees, newsoutput } = data;

  // Reverse news since oldest news at the top of InTheNews Sheet
  const sortedNews = [...newsoutput].reverse();

  const [expanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1630);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const collapsedCount = (windowWidth > 2400 || (windowWidth < 1630 && windowWidth > 1100)) ? 4 : 3;
  const displayCount = expanded ? 10 : collapsedCount;
  return (
    (<Layout>
      <Script
        id="goatcounter-script"
        data-goatcounter="https://uclaacm.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"
      />
      <NextSeo
        title="Home | ACM at UCLA"
        description="The ACM Student Chapter at UCLA is UCLA's largest tech community, focused on making tech as accessible as possible. We're split up into an array of committees and initiatives that each focus on a specific area of computer science. Everyone is welcome to join - regardless of major, prior experience, or anything else!"
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
        {/* <a href="https://www.uclaacm.com/town-hall" style={{ textDecoration: 'none' }}>
          <ContentBanner
            title="RSVP for Fall 2024 CS Town Hall!"
            main
          />
        </a> */}
        <Banner />
        <div className="content-section">
          <h2>The largest Computer Science community at UCLA</h2>
          <p className="subheading">The ACM Student Chapter at UCLA is the largest computer science student organization in Southern California. We welcome students of all backgrounds, interests, and skill levels to join our community and share our love for technology. Our chapter is comprised of nine committees — each serving a different topic and mission. Our events are open to everyone, regardless of major or experience!</p>
          <SocialMedia />
        </div>
        <br />
        <Committees committees={committees} />
        <div className="button-section">
          <Link href="/committees" className="button">Learn More About Our Committees</Link>
        </div><br /><br />

        <div className="content-section">
          <h2>In the News</h2>
          <div className="achievements-container">
            {sortedNews.slice(0, displayCount).map((article, index) => (
              <Article key={`${article.date}-${index}`} article={article} />
            ))}
          </div>
          <div className="button-section">
            <button className="button" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Show Less News' : 'Show More News'}
            </button>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="blue">
          <div className="sign-up-section content-section">
            <div className="half-width">
              <h2>Want to stay updated on what&rsquo;s going on?</h2>
            </div>
            <div className="sign-up-right half-width">
              <Link
                href="http://eepurl.com/hdEvNP"
                className="button tight dark"
                target="_blank"
                rel="noreferrer noopener">

                Join our Mailing List

              </Link>
            </div>
          </div>
        </div>
        <Carousel images={carousel.images} aria-hidden="true" />
      </div>
    </Layout>)
  );
}

export default Home;
