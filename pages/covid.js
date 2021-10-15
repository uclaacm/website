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
				description="A detailed discussion of ACM's commitment to a safe return to campus!"
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
          Last major update: <b>Friday, October 15th 2021</b>.
          <div>
            <p className='mb-0'>Version history</p>
            <ul className='mt-0'>
              <li><b>Friday, October 15th 2021</b>: updated to comply with <a href="https://ucla.app.box.com/s/ldwgbdtwohcwbmbrk2gzdmb478od5566" target="_blank" rel="noopener noreferrer">UCLA Indoor/Outdoor Organized Event Temporary Protocol</a></li>
              <li><b>Wednesday, September 15th 2021</b>: introduced COVID policy document</li>
            </ul>
          </div>
        </p>
        <div className="button-section">
          <a className="button" href="https://docs.google.com/document/d/1zWBY73g0LkqM6qSa1eIhJ5bvt_sGaaKfQqqmqlOSo-U" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth aria-hidden={true} /> Link to Google Doc
          </a>{' '}
          <a className="button" href="/files/acm-covid-policies-f21-last-updated-10-15-21.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} fixedWidth aria-hidden={true} /> Link to PDF
          </a>
        </div>
        <br />
        <iframe
          title="ACM COVID Policies Fall 2021"
          src="https://docs.google.com/document/d/e/2PACX-1vQNKdSdvbpaZNkXz7Fnm_ObaCBqfAFujWGgoRHIrWY3jjsQbL5NlB61wT3_rcbSMyG8RpZHauWvcgkX/pub?embedded=true"
          style={{
            border: '1px black solid',
            height: '100vh',
            marginBottom: '2rem',
            width: '100%',
          }}
        >
        </iframe>
      </div>
    </Layout>
  );
}

export default COVID;
