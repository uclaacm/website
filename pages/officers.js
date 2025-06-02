import Image from 'next/legacy/image';
import { NextSeo } from 'next-seo';
import { useCallback, useState } from 'react';

import Banner from '../components/Banner';
import Navigation from '../components/Committees/Sidebar';
import Layout from '../components/Layout';
import CommitteeSectionOfficers from '../components/Officers/CommitteeSectionOfficers';
// import Archive from '../components/Committees/ArchiveSidebar';

import data from '../data';
/* eslint-disable import/no-unresolved */
import alumYears from '../data/alumyears.json';
/* eslint-enable import/no-unresolved */

import teamPhoto from '../public/images/officers/internal_compressed.jpg';

function OfficersBanner() {
  //fix description
  return (
    <div className="committee-banner-container">
      <div className="banner-main-content">
        <div className="image-wrapper">
          <Image
            className="bannerpic"
            src={teamPhoto}
            alt="Group Photo of ACM Officers at the annual banquet"
            priority={true}
          />
        </div>
        <div className="info">
          <h1>Our Team</h1>
          <p className="half-size">
            ACM officers make the amazing events and projects that we do
            possible. This page recognizes our entire team across the entire
            board and all nine committees. Don&apos;t hesitate to get in touch
            with any of them!
          </p>
        </div>
      </div>
    </div>
  );
}

function OfficersPage() {
  const { committees, board } = data;
  const committeeInfo = board.concat(committees);

  const [selectedYear, setSelectedYear] = useState(alumYears[0]);
  const [visibleCommittees, setVisibleCommittees] = useState(committeeInfo);

  // Purpose of this function is to update visibleCommittees so that the
  // sidebar committees can be updated based on whether a committee has
  // officers for that year.
  const updateCommitteeVisibility = useCallback((committee, isVisible) => {
    setVisibleCommittees((prev) => {
      const exists = prev.find((c) => c.name === committee.name);
      if (isVisible && !exists) {
        // Find the correct index from the full list.
        const originalIndex = committeeInfo.findIndex(c => c.name === committee.name);
        // Insert at original index.
        const newList = [...prev];
        newList.splice(originalIndex, 0, committee);
        return newList;
      } else if (!isVisible && exists) {
        return prev.filter((c) => c.name !== committee.name);
      }
      return prev;
    });
  }, []);

  return (
    <Layout>
      <NextSeo
        title="Our Team | ACM at UCLA"
        description="ACM officers make the amazing events and projects that we do possible. This page recognizes our entire team across the entire board and all nine committees. Don't hesitate to get in touch with any of them!"
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
      <div className="officers-page-container">
        <Navigation
          committees={visibleCommittees}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          showArchiveDropdown={true}
        />

        {/* <Archive committees={committees} /> */}
        <div className="officers-page-content">
          <OfficersBanner />
          <div className="officers-sections-container">
            {committeeInfo.map((committee) => (
              <CommitteeSectionOfficers
                key={`${committee.name}-${selectedYear}`}
                committee={committee}
                selectedYear={selectedYear}
                updateCommitteeVisibility={updateCommitteeVisibility}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
//made with love - larry
export default OfficersPage;
