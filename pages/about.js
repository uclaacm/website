import Image from 'next/legacy/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Officers from '../components/OfficerCard';
import SocialMedia from '../components/SocialMedia';
import data from '../data/officeroutput.json';
import acmCommittees from '../public/images/acm_committees.png';
import boardcollage from '../public/images/boardcollage.png';
import acmHowToJoin from '../public/images/how-to-join.png';
import initiative from '../public/images/initiative.png';
import styles from '../styles/pages/About.module.scss';

function extractContent(officerContent) {
  const convertedData = officerContent.map(officer => ({
    name: officer.name,
    pronouns: officer.pronouns,
    role: (officer.committee.includes('Board') ? officer.role : officer.role + ', ' + officer.committee),
    committee: officer.committee,
    major: officer.major,
    year: officer.year,
    photo: (officer.photo != 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' ? officer.photo : '/images/officers/acmlogocopy.jpg'), // if photo is default, display ACM logo
  })).filter(officer => officer.role.includes('President'));
  return convertedData;
}

function About() {
  const filteredOfficers = extractContent(data);
  return (
    <Layout>
      <NextSeo
        title="About | ACM at UCLA"
        description="As a student chapter of the international Association for Computing Machinery, ACM at UCLA is the largest Computer Science student organization at UCLA and in Southern California. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!"
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
      <div className={styles['about-page']}>
        <Banner decorative />
        <div className={styles['content-section']}>
          <div className={`${styles.ornament} ${styles['square-ornament']}`}>
            {/* TODO: resolve next/image issue */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles['square-splash']}
              src="/images/about1.png"
              alt="ACM students at our annual CS BBQ!"
            />
            {/* TODO: use next image without breaking deploy */}
            <div className={styles['square-small']} />
            <div className={styles['square-tiny']} />
          </div>
          <div className={styles['text-section']}>
            <h1>What is ACM?</h1>
            <p>
              As a student chapter of the international&nbsp;
              <a
                href="https://www.acm.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Association for Computing Machinery,
              </a>
              &nbsp; ACM at UCLA is the largest Computer Science student
              organization at UCLA and in Southern California. We welcome
              students of all backgrounds and skill levels to join our community
              and share our love for technology!
            </p>
            <p>
              {/* eslint-disable-next-line max-len */}
              With events such as infosessions, workshops, speaker panels,
              hackathons, and competitions, we cover a variety of topics
              including artificial intelligence, virtual reality, cybersecurity,
              mobile and web development, diversity initiatives, community
              outreach, and much more. Our events are&nbsp;
              <strong>open to everyone</strong>, regardless of major or
              experience!
            </p>
          </div>
        </div>

        <div className={styles['content-section']}>
          <div
            className={`${styles.ornament} ${styles['image-ornament']} ${styles['image-ornament-right']}`}
          >
            <Image
              src={boardcollage}
              alt="images of events organised by ACM Board"
              priority={true}
            />
          </div>
          <div className={styles['text-section']}>
            <h1>What is ACM Board?</h1>
            <p>
              ACM Board is our leadership and administrative team. Internal
              Board keeps ACM running through finance, logistics, marketing,
              and community-building, while External Board connects ACM with
              companies, alumni, UCLA faculty, and other campus organizations.
              Together, they plan ACM-wide events and advocate for students with
              the CS department.
            </p>
          </div>
        </div>

        <div className={styles['content-section']}>
          <div
            className={`${styles.ornament} ${styles['image-ornament']} ${styles['image-ornament-right']}`}
          >
            <Image
              src={acmCommittees}
              alt="the logos of all ACM committees"
              priority={true}
            />
          </div>
          <div className={styles['text-section']}>
            <h1>What are ACM committees?</h1>
            <p>
              ACM is comprised of nine committees — each serving a different
              topic and mission. We strive to cover a plethora of interests and
              encourage members to explore new topics, too!
            </p>
          </div>
        </div>
        <div className={styles['content-section']}>
          <div
            className={`${styles.ornament} ${styles['image-ornament']} ${styles['image-ornament-right']}`}
          >
            <Image
              src={initiative}
              alt="the logos of ACM initiatives"
              priority={true}
            />
          </div>
          <div className={styles['text-section']}>
            <h1>What are ACM Initiatives?</h1>
            <p>
              ACM Initiatives are independent teams within Board that turn new
              ideas into long-term projects for our community. Learn more about
              our <Link href="/dev">Dev Team</Link>,{' '}
              <Link href="/jedi">JEDI</Link>,{' '}
              <Link href="/impact">Impact</Link>, and{' '}
              <Link href="/quantum">Quantum</Link> initiatives.
            </p>
          </div>
        </div>
        <div className={styles['content-section']}>
          <div
            className={`${styles.ornament} ${styles['image-ornament']} ${styles['image-ornament-right']}`}
          >
            <Image src={acmHowToJoin} alt="photos of acm events" />
          </div>
          <div className={styles['text-section']}>
            <h1>How do I get involved?</h1>
            <p>
              No matter what your background or major is, we would love to have
              you at our events and activities!
            </p>
            <p>
              Visit our <Link href="/events">event calendar</Link> to find an
              upcoming workshop, social, or speaker event.
            </p>
            <p>
              To keep up with what&rsquo;s happening, we recommend joining&nbsp;
              <a
                href="https://members.uclaacm.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                our membership portal
              </a>
              ,&nbsp;
              <a
                href="https://www.facebook.com/groups/uclaacm"
                target="_blank"
                rel="noreferrer noopener"
              >
                our Facebook group
              </a>
              , and&nbsp;
              <a
                href="http://eepurl.com/hdEvNP"
                target="_blank"
                rel="noreferrer noopener"
              >
                our weekly newsletter
              </a>
              .&nbsp; We will keep you up to date with everything ACM, and
              earning points on the portal might even earn you a prize!
            </p>
            <p>
              Here&rsquo;s our social media, where you can see what we&rsquo;re
              up to:
            </p>
            <div className={styles['social-media']}>
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className={styles['content-section']}>
          <h2>Leadership</h2>
          <p>
            Our President sets ACM&rsquo;s direction, our Internal and External
            Vice Presidents support the organization&rsquo;s operations and
            partnerships, and our committee presidents help each community
            grow.
          </p>
          <div className="grid-desktop-3">
            <Officers officers={filteredOfficers} size="compact" />
          </div>
        </div>
        <div className={styles['content-section']}>
          <div className={`${styles['text-section']} ${styles['full-width']}`}>
            <h1>Who&rsquo;s who?</h1>
            <p>
              Meet <Link href="/officers">our officers</Link> and learn who
              leads each part of ACM at UCLA.
            </p>
          </div>
        </div>
        <div className={styles['content-section']}>
          <div className={`${styles['text-section']} ${styles['full-width']}`}>
            <h1>How did ACM come to be?</h1>
            <p>
              Read <Link href="/history">our history</Link> to see how ACM at
              UCLA grew and the milestones that shaped our community.
            </p>
          </div>
        </div>
        <div className={styles['content-section']}>
          <div className={`${styles['text-section']} ${styles['full-width']}`}>
            <h1>What clubs on campus does ACM collaborate with?</h1>
            <p>
              Explore our <Link href="/friends">Friends of ACM</Link> to learn
              about organizations we have worked with. Clubs interested in
              collaborating can reach our External Vice President at{' '}
              <a href="mailto:acm@ucla.edu">acm@ucla.edu</a>.
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}

export default About;
