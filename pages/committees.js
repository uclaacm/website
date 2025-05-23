import Image from 'next/legacy/image';
import { NextSeo } from 'next-seo';

import Banner from '../components/Banner';
import CommitteeSection from '../components/Committees/CommitteeSection';
import Navigation from '../components/Committees/Sidebar';
import Layout from '../components/Layout';
import data from '../data';
import acmCommittees from '../public/images/acm_committees.png';

function CommitteesBanner() {
  return (
    <div className="committee-banner-container">
      <div className="banner-main-content">
        <div className="image-wrapper">
          <Image
            src={acmCommittees}
            alt="the logos of all ACM committees"
            priority={true}
          />
        </div>
        <div className="info">
          <h1>Committees</h1>
          <p className="half-size">
            ACM comprises nine committees, each serving a unique topic and
            mission. All of our events are open to everyone. We strive to cover
            all of our members’ interests and encourage members to explore new
            topics and events, too!
          </p>
        </div>
      </div>
    </div>
  );
}

function CommitteesPage() {
  const { committees } = data;
  return (
    <Layout>
      <NextSeo
        title="Committees | ACM at UCLA"
        description="ACM comprises nine committees, each serving a unique topic and mission. Learn more about Studio, ICPC, Design, Cyber, Teach LA, W, AI, Hack and Cloud here! All of our events are open to everyone; we want to help you explore your passion!"
        openGraph={{
          images: [
            {
              url: 'https://www.uclaacm.com/images/acm_committees.png',
              width: 2506,
              height: 979,
              alt: 'The ACM at UCLA logo, surrounded by our nine committees: Studio, ICPC, Design, Cyber, Teach LA, W, AI, Cloud, and Hack.',
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <Banner decorative />
      <Navigation committees={committees} />
      <div className="committees-page-content">
        <CommitteesBanner />
        <div className="committee-sections-container">
          {committees.map((committee) => (
            <CommitteeSection key={committee.name} committee={committee} showArchiveDropdown={false} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CommitteesPage;
