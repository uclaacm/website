import { faExternalLinkAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';
import React from 'react';

import Layout from '../components/Layout';

function COVID() {
  return (
    <Layout>
			<NextSeo
				title="COVID Policies | ACM at UCLA"
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
      <div className='content-container-tight'>
        <h1>ACM at UCLA COVID Policies Fall 2021</h1>
        <p>
          Our plan is approved by <a href="https://sole.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA SOLE</a> and is a superset of <a href="https://covid-19.ucla.edu/ucla-return-to-campus/" target="_blank" rel="noopener noreferrer">UCLA&apos;s return to campus</a> and <a href="http://ph.lacounty.gov/acd/ncorona2019/EducationToolkit/IHE/" target="_blank" rel="noopener noreferrer">LA County Guidelines</a>.
        </p>
        <p>
          Last major update: <b>Wednesday, September 15th 2021</b>.
        </p>
        <div className="button-section">
          <a className="button" href="https://docs.google.com/document/d/1zWBY73g0LkqM6qSa1eIhJ5bvt_sGaaKfQqqmqlOSo-U" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth aria-hidden={true} /> Link to Google Doc
          </a>{' '}
          <a className="button" href="/files/acm-covid-policies-f21-last-updated-09-15-21.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} fixedWidth aria-hidden={true} /> Link to PDF
          </a>
        </div>
        <br />
        <iframe
          title="ACM COVID Policies Fall 2021"
          src="https://docs.google.com/document/d/e/2PACX-1vQNKdSdvbpaZNkXz7Fnm_ObaCBqfAFujWGgoRHIrWY3jjsQbL5NlB61wT3_rcbSMyG8RpZHauWvcgkX/pub?embedded=true"
          style={{
            height: '100vh',
            width: '100%',
          }}
        >
        </iframe>
      </div>
    </Layout>
  );
}

export default COVID;
