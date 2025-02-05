import {
  faExternalLinkAlt,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
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
      <div className="content-container-tight">
        <h1>ACM at UCLA COVID Policies Spring 2022</h1>
        <p>
          Our plan is approved by{' '}
          <a
            href="https://sole.ucla.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCLA SOLE
          </a>{' '}
          and is a superset of{' '}
          <a
            href="https://covid-19.ucla.edu/ucla-covid-protocols/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCLA&apos;s COVID-19 protocols
          </a>{' '}
          and{' '}
          <a
            href="http://ph.lacounty.gov/acd/ncorona2019/EducationToolkit/IHE/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LA County Guidelines
          </a>
          .
        </p>
        <p>
          Last major update: <b>Monday, April 11th, 2022</b>.
          <div>
            <p className="mb-0">Version history</p>
            <ul className="mt-0">
              <li>
                <b>Monday, April 11th, 2022</b>: Updated based on{' '}
                <a
                  href="https://covid-19.ucla.edu/update-on-covid-19-protocols-for-spring-quarter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCLA&apos;s Updates on COVID-19 Protocols for Spring Quarter
                </a>
              </li>
              <li>
                <b>Sunday, March 27th, 2022</b>: updated to reflect{' '}
                <a
                  href="https://covid-19.ucla.edu/ucla-covid-protocols/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  UCLAs&apos; COVID-19 protocol updates for spring quarter
                </a>
              </li>
              <li>
                <b>Monday, January 17th 2022</b>: updated to reflect{' '}
                <a
                  href="https://covid-19.ucla.edu/updated-masking-isolation-and-quarantine-protocols-for-ucla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Updated masking, isolation and quarantine protocols for UCLA
                </a>
              </li>
              <li>
                <b>Friday, January 7th 2022</b>: updated to reflect{' '}
                <a
                  href="https://covid-19.ucla.edu/remote-instruction-extended-through-january-28/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCLA Remote instruction extended through January 28
                </a>
              </li>
              <li>
                <b>Monday, December 27th 2021</b>: updated to reflect{' '}
                <a
                  href="https://covid-19.ucla.edu/remote-start-to-winter-quarter-instruction-and-covid-19-booster-requirement/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCLA&apos;s Remote Start to Winter Quarter
                </a>
              </li>
              <li>
                <b>Friday, October 15th 2021</b>: updated to comply with{' '}
                <a
                  href="https://ucla.app.box.com/s/ldwgbdtwohcwbmbrk2gzdmb478od5566"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCLA Indoor/Outdoor Organized Event Temporary Protocol
                </a>
              </li>
              <li>
                <b>Wednesday, September 15th 2021</b>: introduced COVID policy
                document
              </li>
            </ul>
          </div>
        </p>
        <div className="button-section">
          <a
            className="button"
            href="https://docs.google.com/document/d/1IcBZ4yj4kJ14Gg0PVw3xbg-QqRYUQGUlHm8vVskgQOQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              aria-hidden={true}
            />{' '}
            Link to Google Doc
          </a>{' '}
          <a
            className="button"
            href="/files/acm-covid-policies-s22-last-updated-04-11-22.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} fixedWidth aria-hidden={true} />{' '}
            Link to PDF
          </a>
        </div>
        <br />
        <iframe
          title="ACM COVID Policies Spring 2022"
          src="https://docs.google.com/document/d/e/2PACX-1vQIXLd4Omqv2XaDflpIlbmyfYyXC0GhE64XbS1kakNOHf-9PauJnIBTiNFz_rEQteixMecfN8fKld5v/pub?embedded=true"
          style={{
            border: '1px black solid',
            height: '100vh',
            marginBottom: '2rem',
            width: '100%',
          }}
        ></iframe>
      </div>
    </Layout>
  );
}

export default COVID;
