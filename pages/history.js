import { NextSeo } from 'next-seo';
import Banner from '../components/Banner';
import Timeline from '../components/History/Timeline';
import Layout from '../components/Layout';
import  historyEvents  from '../data/historyEvents.json';

// import Archive from '../components/Committees/ArchiveSidebar';
function HistoryBanner() {
  //fix description
  return (

    <div className="history-banner-container">
      <h1 className="history-title">Our History.</h1>
      <p className="history-title-blurb">
            Since our founding, UCLA ACM has grown into the largest computer science community at UCLA. Explore our
            journey and the milestones that have shaped who we are today.
      </p>
    </div>
  );
}

function HistoryPage() {
  return (
    <Layout>
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
      <Banner decorative />
      <HistoryBanner />
      <div className="timeline-container">
        <Timeline historyLog={historyEvents} />
      </div>
    </Layout>
  );
}
//made with love - larry
export default HistoryPage;
