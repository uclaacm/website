import Image from 'next/legacy/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Banner from '../components/Banner';
import Layout from '../components/Layout';

import data from '../data';

import reslifeLogo from '../public/images/sponsors/reslife.png';
import uclaCsDeptLogo from '../public/images/sponsors/ucla_cs_dept.png';

function Sponsors() {
  const { sponsors } = data;
  return (
    (<Layout>
      <NextSeo
        title="Sponsors and Partners | ACM at UCLA"
        description="ACM at UCLA couldn't happen without our amazing sponsors, partners, and affiliates that support all of our work. Interested in parterning with us? Send as an email at acm@ucla.edu!"
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
      <Banner decorative />
      <div className="content-section text-center">
        <h1>Our Sponsors</h1>
        <p className="subheading">
          A big thank-you to the{' '}
          <a
            href="https://www.cs.ucla.edu"
            target="_blank"
            rel="noreferrer noopener"
          >
            UCLA Computer Science Department
          </a>{' '}
          for their continuous partnership with and support of ACM at UCLA.
          Shout-out to{' '}
          <a
            href="https://reslife.ucla.edu"
            target="_blank"
            rel="noreferrer noopener"
          >
            UCLA ResLife
          </a>{' '}
          for providing logistical assistance and stellar venues for our events.
        </p>
        <div className="sponsor-container">
          <div className="sponsor">
            <a
              href="https://www.cs.ucla.edu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={uclaCsDeptLogo}
                alt="UCLA CS Dept Logo"
                priority={true}
              />
            </a>
          </div>
          <div className="sponsor">
            <a
              href="https://reslife.ucla.edu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={reslifeLogo}
                alt="UCLA ResLife Logo"
                priority={true}
              />
            </a>
          </div>
        </div>
        <p className="subheading">
          A massive shoutout to our direct sponsors of ACM, who get their logo featured prominently
          on our website homepage and marketing materials.
        </p>
        <div className="banner-center">
          <a href="https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities">
            <img
              src="https://cdn.cookielaw.org/logos/b0a5f2cc-0b29-4907-89bf-3f6b380a03c8/0814c8dd-07ff-41eb-a1b0-ee0294137c9a/9ca69c31-5e86-432d-950c-cfa7fcaa3cc8/1280px-Qualcomm-Logo.svg.png"
              alt="Qualcomm Banner"
            />
          </a>
          <a href="https://www.lockheedmartin.com/en-us/careers/candidates/students-early-careers.html">
            <img
              src="https://www.lockheedmartin.com/content/dam/lockheed-martin/general/lm-logo.svg"
              alt="Lockheed Martin Banner"
            />
          </a>
          <a href="https://www.hudsonrivertrading.com/student-opportunities/">
            <img
              src="https://www.hudsonrivertrading.com/wp-content/uploads/2024/04/01-HRT-Primary-Logo-Q2-2024-1.svg"
              alt="Hudson River Trading Banner"
            />
          </a>
          <a href="https://www.janestreet.com/join-jane-street/internships/">
            <img
              src="https://www.janestreet.com/assets/logo_horizontal-16929188a56384c8e77bea91967c4553146ed7293f60a8f4f2ab6a06187881ce.svg"
              alt="Jane Street Banner"
            />
          </a>
          <a href="https://job-boards.greenhouse.io/traversal">
            <img
              src="https://s8-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/594/200/original/traversal_full_logo.png?1748636932"
              alt="Traversal Banner"
            />
          </a>
        </div>
        <h2 style={{ marginTop: '15px' }}>Interested in becoming a sponsor?</h2>
        <div style={{ marginTop: '0' }} className="button-section">
          <Link href="mailto:acm@ucla.edu" className="button">
            Contact Us at acm@ucla.edu
          </Link>
        </div>
        <p style={{ marginTop: '40px' }} className="subheading">
          Finally, a special thanks to all of our UCLA Computer Science industry
          affiliates for their support:
        </p>
        <div className="sponsor-container">
          {sponsors.map((sponsor) => (
            <a
              className="block-centered sponsor"
              href={sponsor.link}
              target="_blank"
              rel="noreferrer noopener"
              key={sponsor.name}
              style={{ display: 'inline-block', width: '200px', height: '80px', position: 'relative', padding: 0, margin: '20px', boxSizing: 'border-box' }}
            >
              <Image
                alt={sponsor.name}
                src={sponsor.image}
                layout="fill"
                objectFit="contain"
                sizes="200px"
              />
            </a>
          ))}
        </div>
      </div>
    </Layout>)
  );
}

export default Sponsors;
