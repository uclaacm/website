import Link from 'next/link';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CommitteeIcon from '../components/Committees/CommitteeIcon';
import Committees from '../components/CommitteeSpread';
import ContentBanner from '../components/ContentBanner';
import Layout from '../components/Layout';
import Article from '../components/NewsArticle';
import SocialMedia from '../components/SocialMedia';

import data from '../data';

/* eslint-disable import/no-unresolved */
import news from '../data/newsoutput.json';

/* eslint-enable import/no-unresolved */

function Home() {
  const { carousel, committees } = data;

  // Reverse news since oldest news at the top of InTheNews Sheet
  const sortedNews = [...news].reverse();

  const [expanded, setExpanded] = useState(false);

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
        <ContentBanner>
          <div className="content-banner-logos-top">
            <div className="content-banner-logos">
              <CommitteeIcon committee="studio" />
              <CommitteeIcon committee="icpc" />
              <CommitteeIcon committee="design" />
            </div>
            <div className="content-banner-logos">
              <CommitteeIcon committee="cyber" />
              <CommitteeIcon committee="teachLA" />
            </div>
          </div>
          <h2 className="content-banner-title">
            Celebrating 50 years of ACM at UCLA!
          </h2>
          <div className="content-banner-logos-top">
            <div className="content-banner-logos">
              <CommitteeIcon committee="acm" />
              <CommitteeIcon committee="w" />
              <CommitteeIcon committee="ai" />
            </div>
            <div className="content-banner-logos">
              <CommitteeIcon committee="cloud" />
              <CommitteeIcon committee="hack" />
            </div>
          </div>
        </ContentBanner>
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
          <h2>Our Sponsor!</h2>
          <div className="banner-center">
            <a href="https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities">
              <img
                src="https://cdn.cookielaw.org/logos/b0a5f2cc-0b29-4907-89bf-3f6b380a03c8/0814c8dd-07ff-41eb-a1b0-ee0294137c9a/9ca69c31-5e86-432d-950c-cfa7fcaa3cc8/1280px-Qualcomm-Logo.svg.png"
                alt="Banner"
              />
            </a>
          </div>
          <div className="button-section">
            <Link href="/sponsors" className="button">Sponsor Us!</Link>
          </div>
        </div>

        <div className="content-section">
          <h2>In the News</h2>
          <div
            className={`achievements-container ${expanded ? 'expanded' : 'collapsed'}`}
          >
            {sortedNews.map((article, index) => (
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
