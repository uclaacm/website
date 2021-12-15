import { faCalendarCheck, faFileAlt, faQuestion, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import Banner from '../../components/Banner';
import CountdownElement from '../../components/CountdownElement';
import Layout from '../../components/Layout';

import TestimonialsCourseChanges from '../../public/images/town-hall/testimonials-course-changes.png';
import TownHallBanner from '../../public/images/town-hall/town-hall-banner-f21.png';

const TOWN_HALL_2021_WINTER_VIDEO = 'https://www.youtube.com/embed/Eq2xsShPMVc';

const inlineButtonListStyle = {
  display: 'inline-block',
  marginBottom: '0.5em',
};

const TEST_START_TIMESTAMP = + new Date('2021-11-29T21:07:00-08:00');

function TownHall() {
  const embed2021WRef = useRef(null);
  // note: this does not work :( prob need useEffect + useState!
  const embedWidth = embed2021WRef.current ? embed2021WRef.current.offsetWidth : 500;
	return (
    <CountdownElement switchTime={TEST_START_TIMESTAMP} fallback={<span>come back soon :)</span>}>
		<Layout>
			<NextSeo
				title="Fall 2021 Computer Science Town Hall | ACM at UCLA"
				description="Ask questions and get your voice heard at the Fall 2021 Computer Science Town Hall! Wednesday, November 10th from 6:30 - 8:30 PM PT - we hope to see you there :)"
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/town-hall/town-hall-banner-f21.png',
							width: 1920,
							height: 1005,
							alt: 'A banner that reads "Fall 2021 Computer Science Town Hall: ask questions and get your voice heard! Wednesday, November 10 from 6:30 - 8:30 PM PT. Held at the Mong Auditorium and Online; visit uclaacm.com/town-hall for more information. Co-hosted by ACM at UCLA, UPE at UCLA, exploretech.la, and the UCLA Computer Science Department."',
						},
					],
					site_name: 'ACM at UCLA',
				}}
			/>
			<Banner decorative />
			<div className="content-container-tight">
        <div className="text-center">
          <Image src={TownHallBanner} alt="A banner that reads 'Fall 2021 Computer Science Town Hall: ask questions and get your voice heard! Wednesday, November 10 from 6:30 - 8:30 PM PT. Held at the Mong Auditorium and Online; visit uclaacm.com/town-hall for more information. Co-hosted by ACM at UCLA, UPE at UCLA, exploretech.la, and the UCLA Computer Science Department.'" />
          <h1>Fall 2021 Computer Science Town Hall</h1>
        </div>
        <p>
          {/* eslint-disable-next-line max-len */}
          <b>Ask questions and get your voice heard!</b> The CS Town Hall is an opportunity for students to directly speak with professors and administrators in the CS department.
        </p>
        <p>
          {/* eslint-disable-next-line max-len */}
          The upcoming Town Hall occurs on <b>Wednesday, November 10th</b> (Week 7) at <b>6:30 - 8:30 PM PT</b>. The event will be hybrid: an in-person offering will be in the Mong Auditorium (in Engineering VI), while a livestreamed option with an online Q&amp;A will also be available. To attend, <Link href="https://bit.ly/CSTownHallFall2021RSVP" target="_blank" rel="noopener noreferrer"><a>please RSVP!</a></Link>
        </p>
        <p>
          {/* eslint-disable-next-line max-len */}
          In past years, the Town Hall has been a huge driver of student feedback and improvements to curriculum; this includes:
        </p>
        <ul>
          <li>The rework of CS35L (and CS97)</li>
          <li>The start of engineering-wide ethics reform</li>
          <li>More leniency around the sci-tech and tech breadth electives</li>
        </ul>
        <p>
          {/* eslint-disable-next-line max-len */}
          The town hall is jointly held by ACM at UCLA, exploretech.la, UPE at UCLA, and the Department of Computer Science at UCLA.
        </p>
        <ul className="list-unstyled text-center">
          <li style={inlineButtonListStyle}>
            <Link href="https://bit.ly/CSTownHallFall2021RSVP"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendarCheck} fixedWidth aria-hidden={true} /> RSVP now!</a></Link>
          </li>
          {' '}
          <li style={inlineButtonListStyle}>
            <Link href="#surveys"><a className="button"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Answer Survey Questions!</a></Link>
          </li>
          {' '}
          <li style={inlineButtonListStyle}>
            <Link href="https://app.sli.do/event/jcaoo1z7"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faQuestion} fixedWidth aria-hidden={true} /> Ask questions in advance!</a></Link>
          </li>
          {' '}
          <li style={inlineButtonListStyle}>
            <Link href="https://docs.google.com/presentation/d/1IDtHk52HApxHTigT9aAXf0-fZNeYUQ9F9MYfHBybBNs/edit?usp=sharing"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFilePowerpoint} fixedWidth aria-hidden={true} /> Event Slides</a></Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className="content-container-medium">
        <div className="grid-tablet-2">
          <div>
            <h2 id="surveys">Surveys</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              We use pre-event surveys to gauge students&apos; opinions on <b>diversity &amp; inclusion</b>, <b>academics and curriculum</b>, and <b>academic honesty</b>. We use the answers to present problems to the CS department, and guide discussion. <b>Survey responses are anonymous!</b>
            </p>
            <p>
              We need to hear your voice! Please answer these surveys before the event.
            </p>
            <ul className="list-unstyled">
              <li style={inlineButtonListStyle}>
                <Link href="https://bit.ly/CSTownHallFall2021Curriculum"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Academics and Curriculum</a></Link>
              </li>
              {' '}
              <li style={inlineButtonListStyle}>
                <Link href="https://bit.ly/CSTownHallFall2021Diversity"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Diversity and Inclusion</a></Link>
              </li>
              {' '}
              <li style={inlineButtonListStyle}>
                <Link href="https://bit.ly/CSTownHallFall2021Honesty"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Academic Honesty</a></Link>
              </li>
            </ul>
          </div>
          <div>
            <Image src={TestimonialsCourseChanges} alt="A slide from the winter 2021 town hall titled 'courses studnets wish to see changes in', with several different examples (CS 111, 152A, 131, 1)" />
          </div>
        </div>
        <hr />
      </div>
      <div className="content-container-medium">
        <h2 className="text-center">Past Town Halls</h2>
        <div className="grid-tablet-2">
          <div>
            <h3>Winter 2021 // Wednesday, February 24th 2021</h3>
            <p>
              {/* eslint-disable-next-line max-len */}
              In our first ever fully-virtual town hall, we focused on three key topics: academics &amp; curriculum, academic honesty, and a new section devoted to diversity &amp; inclusion.
            </p>
            <ul className="list-unstyled">
              <li style={inlineButtonListStyle}>
                <Link href="/files/town-hall/CS Town Hall Winter 2021 Slides.pdf"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Form Summaries and Slides</a></Link>
              </li>
              {' '}
              <li style={inlineButtonListStyle}>
                <Link href="/files/town-hall/CS Town Hall Winter 2021 Notes.pdf"><a className="button" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} fixedWidth aria-hidden={true} /> Event Notes</a></Link>
              </li>
            </ul>
          </div>
          <div ref={embed2021WRef}>
            <iframe width={embedWidth} height={embedWidth * 315/560} src={TOWN_HALL_2021_WINTER_VIDEO} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
			</div>
		</Layout>
    </CountdownElement>
	);
}

export default TownHall;
