import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import Banner from '../components/Banner';

import styles from '../styles/pages/friends.module.scss';

function FriendCard() {

}

function Friends() {
  return(
    <Layout>
      <NextSeo
        title='Partner Organizations | ACM at UCLA'
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

      <div>Hi</div>
    </Layout>
  )
}

export default Friends;