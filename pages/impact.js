import Image from 'next/legacy/image';
import { NextSeo } from 'next-seo';

import Banner from '../components/Banner';
import Carousel from '../components/Impact/Carousel';
import WorkshopCard from '../components/Impact/WorkshopCard';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';

import { pastEvents } from '../data/impact';
import data from '../data/offoutput.json';

import impactMotifBanner from '../public/images/impact/impact-motif.png';
import impactathon from '../public/images/impact/impactathon.JPEG';

import styles from '../styles/pages/impact.module.scss';

const impactBlog = 'https://medium.com/acm-at-ucla';

function Impact() {
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
              url: 'https://www.uclaacm.com/images/impact/impact-motif.png',
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
        <div className="text-center">
          <Image src={impactMotifBanner} alt="Impact by ACM at UCLA" priority />
        </div>

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

        {/* <h2 className="text-center">Our Initiatives</h2> */}
        <h3 className="text-uppercase">Upcoming Events</h3>
        <WorkshopCard
          title={'ACM Impact x Blueprint Impactathon'}
          quarter={'Spring 2024'}
          description={
            'This spring, ACM Impact and Blueprint are hosting UCLA’s first IMPACTATHON! The goal of this hackathon is to partner groups of students with nonprofits in order to aid them in building any technical solutions that the organization requires. Students will get to work directly with nonprofit leaders and work to come up with a product that fits their needs best. The hackathon will be taking place in the first week of spring quarter, from April 12th to 14th. Please fill out the registration form linked here: http://tinyurl.com/impactathon-registration-form!  Prizes and nonprofit organizations announcements soon to come!'
          }
          img={impactathon}
          alt={
            'The ACM Impact banner: a space shuttle taking off, with a moon behind it'
          }
          desktopHorizontal
        />
        {/* <h3 className="text-uppercase">Workshops</h3>
        <WorkshopCard
          title={'Careers Workshop Series'}
          quarter={'Fall 2021'}
          description={
            'Wondering how to harness your tech powers for good? Come out to learn about careers in social impact tech, tech in the nonprofit space, civic tech, environmental tech, and more!'
          }
          img={impactMotifBanner}
          alt={
            'The ACM Impact banner: a space shuttle taking off, with a moon behind it'
          }
          desktopHorizontal
        /> */}

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
          &nbsp; to see how you can get involved. We look forward to reading
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
