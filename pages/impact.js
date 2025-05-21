import Image from 'next/legacy/image';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Impact/Carousel';
import WorkshopCard from '../components/Impact/WorkshopCard';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';

// eslint-disable-next-line import/no-unresolved
import { InstagramEmbed } from 'react-social-media-embed';

import { pastEvents } from '../data/impact';


import impactNewBanner from '../public/images/impact/impact-new-logo.png';

import styles from '../styles/pages/impact.module.scss';

const impactBlog = 'https://medium.com/acm-at-ucla';

function Impact() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Custom officers data defined directly in the component
  const impactOfficers = [
    {
      name: 'Youssef Mehelba',
      pronouns: 'he/him',
      role: 'Impact Officer',
      committee: 'Board, Internal',
      major: 'Computer Science',
      year: 2028,
      photo: 'https://drive.google.com/uc?export=view&id=1rGUeoSQrlFVMJFu7dqrkGnNG9lMNmJJ_',
      alt: 'Youssef',
    },
    {
      name: 'Aamani Maddukuri',
      pronouns: 'she/her',
      role: 'Impact Officer',
      committee: 'Board, Internal',
      major: 'Computer Science',
      year: 2028,
      photo: 'https://drive.google.com/uc?export=view&id=1_rOMXh6VZqpOIsrdM9vO6sVD8Cg4tC_p',
      alt: 'Aamani',
    },
    {
      name: 'Anne Do',
      pronouns: 'she/her',
      role: 'Impact Advisor',
      committee: 'Board, Internal',
      major: 'Computer Science',
      year: 2027,
      photo: 'https://drive.google.com/uc?export=view&id=10HlxEAR0uwiAAqYHSqf9H1n2jx_z6rSv',
      alt: 'Anne',
    },
  ];

  const eventsPerView = 3;

  const goToPrevEvents = () => {
    setCurrentEventIndex((prev) =>
      prev === 0 ? pastEvents.length - 1 : prev - 1,
    );
  };

  const goToNextEvents = () => {
    setCurrentEventIndex((prev) =>
      prev + 1 >= pastEvents.length ? 0 : prev + 1,
    );
  };

  const getVisibleEvents = () => {
    const events = [];
    for (let i = 0; i < eventsPerView; i++) {
      const index = (currentEventIndex + i) % pastEvents.length;
      events.push(pastEvents[index]);
    }
    return events;
  };

  const visibleEvents = getVisibleEvents();

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
        <div className="text-center" style={{ position: 'relative', paddingTop: '30px' }}>
          <div style={{ maxWidth: '80%', margin: '0 auto', padding: '10px' }}>
            <Image
              src={impactNewBanner}
              alt="Impact by ACM at UCLA"
              priority
            />
          </div>
        </div>

        <h2 className="text-center">Technology + ethics, policy, & society.</h2>
        {/* TODO: make rainbow backing responsive */}
        {/* <h2 className={styles['text-center-holographic']}>Technology + ethics, policy, & society.</h2> */}
        <p className="text-center">
          ACM Impact is the social impact initiative within ACM Board. Our mission is to promote an understanding
          of technology’s ethical and societal implications through education, advocacy, and community engagement.
        </p>
        <br/>
        <h3 className="text-uppercase">Upcoming Events And Projects</h3>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/impact_ucla/" width={3280} />
        </div>

        <h3 className="text-uppercase">Past Events and Projects</h3>
        <div className={styles['carousel-container']}>
          <button
            className={styles['carousel-button']}
            onClick={goToPrevEvents}
            aria-label="See previous events"
          >
            <span className={`${styles['arrow-icon']} ${styles['arrow-left']}`} aria-hidden="true"></span>
          </button>

          <div className={styles['workshop-cards-container']}>
            {visibleEvents.map((event) => (
              <WorkshopCard {...event} key={event.title} />
            ))}
          </div>

          <button
            className={styles['carousel-button']}
            onClick={goToNextEvents}
            aria-label="See next events"
          >
            <span className={`${styles['arrow-icon']} ${styles['arrow-right']}`} aria-hidden="true"></span>
          </button>
        </div>

        <h3 className="text-uppercase">Blog</h3>
        <Carousel />
        <p>
          While our blog isn&apos;t active now, anyone from UCLA can write
          for&nbsp;
          <a href={impactBlog} target="_blank" rel="noreferrer noopener">
            our blog
          </a>
          ! If you&rsquo;d like to have your work published by us, please email&nbsp;
          <a href={'mailto:impact@uclaacm.com'}>impact@uclaacm.com</a>. We look forward to reading
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
