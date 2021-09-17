import { NextSeo } from 'next-seo';
import React from 'react';

import GM from '../../components/GM';
import Layout from '../../components/Layout';

export default function W21 () {
  return (
    <Layout>
			<NextSeo
				title="Winter '21 General Meeting | ACM at UCLA"
				description="A recap page for the Winter 2021 ACM General Meeting."
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
      <GM />
  </Layout>
  );
}
