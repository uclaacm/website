import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';

import SpringTownhallImage from '../../public/images/spring-2022-townhall-photo.JPG';
import TestimonialsCourseChanges from '../../public/images/town-hall/testimonials-course-changes.png';
import TownHallFall2021Attending from '../../public/images/town-hall/town-hall-attending-f21.jpeg';
import F22TownHallBanner from '../../public/images/town-hall/town-hall-banner-f22.png';
import data from '../../townhall.json';

const TOWN_HALL_2021_WINTER_VIDEO = 'https://www.youtube.com/embed/Eq2xsShPMVc';

const inlineButtonListStyle = {
  display: 'inline-block',
  marginBottom: '0.5em',
};

function TownHall() {
  const embed2021WRef = useRef(null);
  const embedWidth = embed2021WRef.current ? embed2021WRef.current.offsetWidth : 500;

  let townHall = {
    title: '[Title]',
    description: '',
    alt_text: '',
    image: '',
    time: '[Time]',
    date: '[Date]',
    location: '[Location]',
    quarter: '[Quarter]',
    week: '[Week #]',
    rsvp: '',
    survey: '',
  };

  // Fetch and assign data from townhall.json
  for(let row of data) {
    switch(row.name) {
      case 'Title':
        if(row.description) { townHall.title = row.description; }
        break;
      case 'Banner':
        if(row.description) { townHall.image = row.description; }
        break;
      case 'Time':
        if(row.description) { townHall.time = row.description; }
        break;
      case 'Date':
        if(row.description) { townHall.date = row.description; }
        break;
      case 'Location':
        if(row.description) { townHall.location = row.description; }
        break;
      case 'Quarter':
        if(row.description) { townHall.quarter = row.description; }
        break;
      case 'Week':
        if(row.description) { townHall.week = row.description; }
        break;
      case 'RSVP Form':
        if(row.description) { townHall.rsvp = row.description; }
        break;
      case 'Survey Form':
        if(row.description) { townHall.survey = row.description; }
        break;
    }
  }

  // Set alt text for SEO
  townHall.alt_text = "A banner that reads '" + townHall.title + ': ask questions and be heard! ' + townHall.date + ' from ' + townHall.time + ' PT. ' + townHall.location + ". Ask Questions and get your voice heard!'";

  // Set description for SEO
  townHall.description = 'Ask questions and get your voice heard at the ' + townHall.title + '! ' + townHall.date + ' from ' + townHall.time + ' PT - we hope to see you there :)';

  return (
    <Layout>
      <NextSeo
        title={townHall.title + ' | ACM at UCLA'}
        description={townHall.description}
        openGraph={{
          images: [
            {
              url: townHall.image,
              alt: townHall.alt_text,
              width: 1920,
              height: 1005,
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <Banner decorative />
      <div className="content-container-tight">
        <div className="text-center">
          <Image
            src={townHall.image}
            alt={townHall.alt_text}
            width={1920}
            height={1005}
          />
          <h1>{townHall.title}</h1>
        </div>
        <p>
          <b>Ask questions and be heard!</b> The CS Town Hall is an
          opportunity for students to directly speak with professors and
          administrators in the CS department.
        </p>
        <p>
          The {townHall.quarter} Town Hall will take place on <b>{townHall.date}</b> (Week {townHall.week})
          at <b>{townHall.time} PT</b> in the {townHall.location}.
        </p>
              {/* eslint-disable-next-line max-len */}
              {/* <p>While the event was not recorded, you are welcome to read the survey form summaries and slides as well as the meeting notes.</p> */}
        <p>
          In past years, the Town Hall has been a huge driver of student
          feedback and improvements to curriculum; this includes:
        </p>
        <ul>
          <li>The rework of CS35L (and CS97)</li>
          <li>The start of engineering-wide ethics reform</li>
          <li>More leniency around the sci-tech and tech breadth electives</li>
          <li>Reduction of the Physics Lab Requirement from 2 classes to 1</li>
          <li>Removal of the chemistry requirement from the CS degree </li>
        </ul>
        <p>
          The town hall is jointly held by ACM at UCLA, exploretech.la, UPE at
          UCLA, and the Department of Computer Science at UCLA.
        </p>
        <ul className="list-unstyled text-center">
          <li style={inlineButtonListStyle}>
            <Link href={townHall.rsvp}>
              <a className="button" target = "_blank">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  fixedWidth
                  aria-hidden={true}
                />{' '}
                RSVP Here!
              </a>
            </Link>
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
              We use pre-event surveys to gauge students&apos; opinions on{' '}
              <b>diversity &amp; inclusion</b>, <b>academics and curriculum</b>,
              and <b>teaching practices</b>. The {townHall.quarter} Town Hall&apos;s focus is on
              your questions so we only have <b>one survey.</b> We use the
              answers to present problems to the CS department and guide the
              discussion. <b>Survey responses are anonymous!</b>
            </p>
            <p>
              We need to hear your voice! Please answer this survey before the
              event.
            </p>
            <Link href={townHall.survey}>
              <a className="button" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  fixedWidth
                  aria-hidden={true}
                />{' '}
                CS Town Hall Survey
              </a>
            </Link>
          </div>
          <div>
            <Image
              src={TestimonialsCourseChanges}
              alt="A slide from the winter 2021 town hall titled 'courses students wish to see changes in', with several different examples (CS 111, 152A, 131, 1)"
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="content-container-medium">
        <h2 className="text-center">Past Town Halls</h2>
        <div className="grid-tablet-2">
          <div>
            <h3>Fall 2022 // Wednesday, Nov 9th 2022</h3>
            <p>
              At our Fall 2022 Town Hall, we centered our attention on several important topics,
              including proposed reforms to the Computer Science curriculum, exploring research
              opportunities for undergraduates, and ongoing discussions around enabling students
              to provide anonymous feedback to faculty members.
            </p>
            <ul className="list-unstyled">
              <li style={inlineButtonListStyle}>
                <Link href="https://docs.google.com/presentation/d/14MIk1bzHHr5b11cgYX_kAz5WQa6ToKD_9nnj3_5DLco/edit?usp=sharing">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Form Summaries and Slides
                  </a>
                </Link>
              </li>{' '}
              <li style={inlineButtonListStyle}>
                <Link href="https://docs.google.com/document/d/1JTFaP27OsqA0sBhjbIC4mIzjCgqRLJyBxvOQ5FSrPCk/edit?usp=sharing">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Event Notes
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={F22TownHallBanner}
              alt="Fall 2022 Computer Science Town Hall Banner."
              width={embedWidth}
              height={(embedWidth * 315) / 560}
              layout="fixed"
            />
          </div>
        </div>
        <div className="grid-tablet-2">
          <div>
            <h3>Spring 2022 // Wednesday, May 11th 2022</h3>
            <p>
              In our Spring 2022 Town Hall, we focused on identifying effective
              teaching practices and dicussed the curriculum reform with the
              CS department while enabling more students to directly address their concerns
              with professors and the department&apos;s leadership.
            </p>
            <ul className="list-unstyled">
              <li style={inlineButtonListStyle}>
                <Link href="https://docs.google.com/presentation/d/1L9dSMVUr1TSazZu0-LqSHRSjEMMOO4GG-kZlOrkAjOM/edit?usp=sharing">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Form Summaries and Slides
                  </a>
                </Link>
              </li>{' '}
              <li style={inlineButtonListStyle}>
                <Link href="https://docs.google.com/document/d/1QADyPwSqwf4cS_O51klvqA8dAcNlOXF1zT5YThi78q4/edit?usp=sharing">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Event Notes
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={SpringTownhallImage}
              alt="A photograph from the Spring 2022 Computer Science Town Hall. Professor Eggert is introducing himself and other professors are sitting beside him."
              width={embedWidth}
              height={(embedWidth * 315) / 560}
              layout="fixed"
            />
          </div>
        </div>
        <div className="grid-tablet-2">
          <div>
            <h3>Fall 2021 // Wednesday, November 10th 2021</h3>
            <p>
              In our Fall 2021 Town Hall, we continued the conversation on
              critical issues such as inclusion and curriculum reform with the
              CS department while empowering students to share their concerns
              with professors and the department&apos;s leadership.
            </p>
            <ul className="list-unstyled">
              <li style={inlineButtonListStyle}>
                <Link href="/files/town-hall/CS Town Hall Fall 2021 Slides.pdf">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Form Summaries and Slides
                  </a>
                </Link>
              </li>{' '}
              <li style={inlineButtonListStyle}>
                <Link href="/files/town-hall/CS Town Hall Fall 2021 Notes.pdf">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Event Notes
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={TownHallFall2021Attending}
              alt="A banner that reads 'Spring 2022 Computer Science Town Hall: ask questions and be heard! Wednesday, May 11 from 6:00 - 8:00 PM PT. Mong Learning Center, Engineering VI. Ask Questions and get your voice heard!'"
              width={embedWidth}
              height={(embedWidth * 315) / 560}
              layout="fixed"
            />
          </div>
        </div>
        <div className="grid-tablet-2">
          <div>
            <h3>Winter 2021 // Wednesday, February 24th 2021</h3>
            <p>
              {/* eslint-disable-next-line max-len */}
              In our first ever fully-virtual town hall, we focused on three key
              topics: academics &amp; curriculum, academic honesty, and a new
              section devoted to diversity &amp; inclusion.
            </p>
            <ul className="list-unstyled">
              <li style={inlineButtonListStyle}>
                <Link href="/files/town-hall/CS Town Hall Winter 2021 Slides.pdf">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Form Summaries and Slides
                  </a>
                </Link>
              </li>{' '}
              <li style={inlineButtonListStyle}>
                <Link href="/files/town-hall/CS Town Hall Winter 2021 Notes.pdf">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}
                    Event Notes
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div ref={embed2021WRef}>
            <iframe
              width={embedWidth}
              height={(embedWidth * 315) / 560}
              src={TOWN_HALL_2021_WINTER_VIDEO}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TownHall;
