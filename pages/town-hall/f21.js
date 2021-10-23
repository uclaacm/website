import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';

import TownHallBanner from '../../public/images/town-hall/town-hall-banner-f21.png';

const TOWN_HALL_2021_WINTER_VIDEO = 'https://www.youtube.com/embed/Eq2xsShPMVc';

function TownHall() {
  const embed2021WRef = useRef(null);
  // note: this does not work :( prob need useEffect + useState!
  const embedWidth = embed2021WRef.current ? embed2021WRef.current.offsetWidth : 500;
	return (
		<Layout>
			<NextSeo
				title="Computer Science Town Hall, Fall 2021 | ACM at UCLA"
				description="Town hall!"
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
			<div className="content-container-tight">
        <div className="text-center">
          <Image src={TownHallBanner} alt="temp!" />
          <h1>Fall 2021 Computer Science Town Hall</h1>
        </div>
        <hr />
      </div>
      <div className="content-container-medium">
        <h2 className="text-center">Past Town Halls</h2>
        <div className="grid-tablet-2">
          <div>
            <h3>Winter 2021</h3>
            <p>Wednesday, February 24th 2021</p>
            <ul className="list-unstyled">
              <Link href="/files/town-hall/CS Town Hall Winter 2021 Slides.pdf"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Form Summaries and Slides</a></Link>{' '}
              <Link href="/files/town-hall/CS Town Hall Winter 2021 Notes.pdf"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Event Notes</a></Link>
            </ul>
          </div>
          <div ref={embed2021WRef}>
            <iframe width={embedWidth} height={embedWidth * 315/560} src={TOWN_HALL_2021_WINTER_VIDEO} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
			</div>
		</Layout>
	);
}

export default TownHall;
