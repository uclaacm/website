import Image from 'next/legacy/image';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Impact/Carousel';
import WorkshopCard from '../components/Impact/WorkshopCard';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';
import { InstagramEmbed } from 'react-social-media-embed';
import { pastEvents } from '../data/impact';
import data from '../offoutput.json';
import impactNewBanner from '../public/images/impact/impact-new-logo.png';
import styles from '../styles/pages/impact.module.scss';

// Dynamically import the RocketGame component with no SSR
const RocketGame = dynamic(
  () => import('../components/Games/RocketGame'),
  { ssr: false },
);

const impactBlog = 'https://medium.com/acm-at-ucla';

function Impact() {
  const [gameActive, setGameActive] = useState(false);
  const [rocketButtonHover, setRocketButtonHover] = useState(false);
  
  // Function to activate the rocket game
  const activateGame = () => {
    setGameActive(true);
  };
  
  const impactOfficers = data.filter(
    (officer) =>
      officer.role.includes('Impact') &&
      officer.committee.includes('Board, Internal'),
  );
  
  return (
    <Layout>
      <NextSeo
        title="ACM Impact | ACM at UCLA"
        description="ACM Impact's mission: Raise awareness on ethical issues in tech & create a community of impactful technologists @ UCLA!"
        openGraph={{
          images: [
            {
              url: 'https://www.uclaacm.com/images/impact/impact-new-logo.png',
              width: 2665,
              height: 1333,
              alt: 'The ACM Impact banner: a space shuttle taking off, with a moon behind it',
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <Banner decorative />
      <div className={styles.container}>
        <div className="text-center" style={{ position: 'relative' }}>
          <Image src={impactNewBanner} alt="Impact by ACM at UCLA" priority />
          
          <button
            onClick={activateGame}
            onMouseOver={() => setRocketButtonHover(true)}
            onFocus={() => setRocketButtonHover(true)}
            onMouseOut={() => setRocketButtonHover(false)}
            onBlur={() => setRocketButtonHover(false)}
            aria-label="Launch rocket game"
            title="Launch rocket game"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 10,
              borderRadius: '50%',
              opacity: rocketButtonHover ? 0.8 : 0.2,
              background: 'transparent',
              border: 'none',
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <span role="img" aria-hidden="true" style={{ fontSize: '24px' }}>🚀</span>
          </button>
        </div>

        {/* RocketGame component will render when gameActive is true */}
        <RocketGame isActive={gameActive} onClose={() => setGameActive(false)} />

        <h2 className="text-center">Technology + ethics, policy, & society.</h2>
        {/* TODO: make rainbow backing responsive */}
        {/* <h2 className={styles['text-center-holographic']}>Technology + ethics, policy, & society.</h2> */}
        <p className="text-center">
          ACM Impact is an up-and-coming initiative within ACM Board.
          <br />
          <br />
          Our mission is to promote an understanding of technology’s ethical and
          societal implications through education, advocacy, and community
          engagement.
        </p>

        <br />
        <h3 className="text-center">
          🚨 🚧 Website update in progress...come back soon! 🚧 🚨
        </h3>
        <br />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/impact_ucla/" width={3280} />
        </div>

        <h3 className="text-uppercase">Past Events</h3>
        <div className="grid-desktop-3 text-center-mobile">
          {pastEvents.map((event) => (
            <WorkshopCard {...event} key={event.title} />
          ))}
        </div>

        <h3 className="text-uppercase">Blog</h3>
        <Carousel />
        <p>
          While our blog isn&apos;t active now, anyone from UCLA can write
          for&nbsp;
          <a href={impactBlog} target="_blank" rel="noreferrer noopener">
            our blog
          </a>
          ! Check out&nbsp;
          <a
            href="https://medium.com/acm-at-ucla/how-to-write-for-acm-impact-at-ucla-9a1aa0046b85"
            target="_blank"
            rel="noreferrer noopener"
          >
            this blog post
          </a>
          &nbsp;to see how you can get involved. We look forward to reading
          your work—in the meantime, check out some of our existing posts above.
        </p>

        <h2 className="text-center">People</h2>
        <div className="grid-desktop-3 text-center-mobile">
          <Officers officers={impactOfficers} />
        </div>
      </div>
    </Layout>
  );
}

export default Impact;
