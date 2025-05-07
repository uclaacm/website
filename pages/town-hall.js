import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/legacy/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Banner from '../components/Banner';
import Layout from '../components/Layout';

import pastData from '../data/past-townhall.json';
import TestimonialsCourseChanges from '../public/images/town-hall/testimonials-course-changes.png';
import data from '../data/townhall.json';

// NOT FETCHED FROM GOOGLE SHEETS (STATIC DATA)
const TOWN_HALL_2021_WINTER_VIDEO = 'https://www.youtube.com/embed/Eq2xsShPMVc';

const inlineButtonListStyle = {
  display: 'inline-block',
  marginBottom: '1em',
};

const TBD = {
  fontSize: '2em',
  fontWeight: 'bold',
  textAlign: 'center',
};

const video_wrapper = {
  position: 'relative',
  width: '100%',
  height: '0',
  overflow: 'hidden',
  paddingTop: '56.25%',
  marginBottom: '2rem',
};

const video = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

function TownHall() {
  let townHall = {
    status: true,
    status_text: '',
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

  // Reverse pastData from past-townhall.json
  const pastTownHalls = [...pastData].reverse();

  // Fetch and assign data from townhall.json
  for (let row of data) {
    switch (row.name) {
      case 'Event Status':
        // Set event status to true or false
        row.description == 'TBD' || row.description == 'Canceled'
          ? (townHall.status = false)
          : (townHall.status = true);
        townHall.status_text = row.description;
        break;
      case 'Title':
        if (row.description) {
          townHall.title = row.description;
        }
        break;
      case 'Banner':
        if (row.description) {
          townHall.image = row.description;
        }
        break;
      case 'Time':
        if (row.description) {
          townHall.time = row.description;
        }
        break;
      case 'Date':
        if (row.description) {
          townHall.date = row.description;
        }
        break;
      case 'Location':
        if (row.description) {
          townHall.location = row.description;
        }
        break;
      case 'Quarter':
        if (row.description) {
          townHall.quarter = row.description;
        }
        break;
      case 'Week':
        if (row.description) {
          townHall.week = row.description;
        }
        break;
      case 'RSVP Form':
        if (row.description) {
          townHall.rsvp = row.description;
        }
        break;
      case 'Survey Form':
        if (row.description) {
          townHall.survey = row.description;
        }
        break;
    }
  }

  // Set alt text for SEO
  townHall.alt_text =
    "A banner that reads '" +
    townHall.title +
    ': ask questions and be heard! ' +
    townHall.date +
    ' from ' +
    townHall.time +
    ' PT. ' +
    townHall.location +
    ". Ask Questions and get your voice heard!'";

  // Set description for SEO
  townHall.description =
    'Ask questions and get your voice heard at the ' +
    townHall.title +
    '! ' +
    townHall.date +
    ' from ' +
    townHall.time +
    ' PT - we hope to see you there :)';

  return (
    (<Layout>
      <NextSeo
        title={townHall.title + ' | ACM at UCLA'}
        description={townHall.description}
        openGraph={
          townHall.status && townHall.image
            ? {
              images: [
                {
                  url: townHall.image,
                  alt: townHall.alt_text,
                  width: 1920,
                  height: 1005,
                },
              ],
              site_name: 'ACM at UCLA',
            }
            : {}
        }
      />
      {/* Most Recent Town Hall*/}
      <Banner decorative />
      <div className="content-container-tight">
        <div className="text-center">
          {townHall.status && townHall.image ? (
            <Image
              src={townHall.image}
              alt={townHall.alt_text}
              width={1920}
              height={1005}
              priority={true}
            />
          ) : (
            <></>
          )}
          <h1>{townHall.title}</h1>
        </div>
        <p>
          <b>Ask questions and be heard!</b> The CS Town Hall is an opportunity
          for students to directly speak with professors and administrators in
          the CS department.
        </p>

        {townHall.status ? (
          <p>
            The {townHall.quarter} Town Hall took place on{' '}
            <b>{townHall.date}</b> (Week {townHall.week}) at{' '}
            <b>{townHall.time} PT</b> in the {townHall.location}.
          </p>
        ) : (
          <p style={TBD}>{townHall.status_text}</p>
        )}

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
            {townHall.rsvp ? (
              <Link href={townHall.rsvp} className="button" target="_blank">

                <FontAwesomeIcon
                  icon={faFileAlt}
                  fixedWidth
                  aria-hidden={true}
                />{' '}RSVP Here!

              </Link>
            ) : (
              <div>
                <a className="button" target="_blank">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    fixedWidth
                    aria-hidden={true}
                  />{' '}
                  RSVP Coming Soon!
                </a>
              </div>
            )}
          </li>
        </ul>
        <hr />
      </div>
      {/* Surveys */}
      <div className="content-container-medium">
        <div className="grid-tablet-2">
          <div>
            <h2 id="surveys">Surveys</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              We use pre-event surveys to gauge students&apos; opinions on{' '}
              <b>diversity &amp; inclusion</b>, <b>academics and curriculum</b>,
              and <b>teaching practices</b>. The {townHall.quarter} Town
              Hall&apos;s focus is on your questions so we only have{' '}
              <b>one survey.</b> We use the answers to present problems to the
              CS department and guide the discussion.{' '}
              <b>Survey responses are anonymous!</b>
            </p>
            <p>
              We need to hear your voice! Please answer this survey before the
              event.
            </p>
            <li style={inlineButtonListStyle}>
              {townHall.survey ? (
                <Link
                  href={townHall.survey}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer">

                  <FontAwesomeIcon
                    icon={faFileAlt}
                    fixedWidth
                    aria-hidden={true}
                  />{' '}CS Town Hall Survey

                </Link>
              ) : (
                <div>
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
                    Stay Tuned for the Survey!
                  </a>
                </div>
              )}
            </li>
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
      {/* Past Town Halls */}
      <div className="content-container-medium">
        <h2 className="text-center">Past Town Halls</h2>
        {pastTownHalls.map((pastTownHall, index) => (
          <div className="grid-tablet-2" key={index}>
            <div>
              <h3>{pastTownHall.title + ' // ' + pastTownHall.date}</h3>
              <p>{pastTownHall.description}</p>
              <ul className="list-unstyled">
                {pastTownHall.slides && (
                  <li style={inlineButtonListStyle}>
                    <Link
                      href={pastTownHall.slides}
                      className="button"
                      target="_blank"
                      rel="noopener noreferrer">

                      <FontAwesomeIcon
                        icon={faFileAlt}
                        fixedWidth
                        aria-hidden={true}
                      />{' '}Form Summaries and Slides

                    </Link>
                  </li>
                )}{' '}
                <li style={inlineButtonListStyle}>
                  <Link
                    href={pastTownHall.notes}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer">

                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      aria-hidden={true}
                    />{' '}Event Notes

                  </Link>
                </li>{' '}
                {pastTownHall.results && (
                  <li style={inlineButtonListStyle}>
                    <Link
                      href={pastTownHall.results}
                      className="button"
                      target="_blank"
                      rel="noopener noreferrer">

                      <FontAwesomeIcon
                        icon={faFileAlt}
                        fixedWidth
                        aria-hidden={true}
                      />{' '}Survey Results

                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pastTownHall.banner}
                alt={pastTownHall.alt_text}
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        ))}
        {/* Winter 2021 Town Hall (Static) */}
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
                <Link
                  href="/files/town-hall/CS Town Hall Winter 2021 Slides.pdf"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer">

                  <FontAwesomeIcon
                    icon={faFileAlt}
                    fixedWidth
                    aria-hidden={true}
                  />{' '}Form Summaries and Slides
                </Link>
              </li>{' '}
              <li style={inlineButtonListStyle}>
                <Link
                  href="/files/town-hall/CS Town Hall Winter 2021 Notes.pdf"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer">

                  <FontAwesomeIcon
                    icon={faFileAlt}
                    fixedWidth
                    aria-hidden={true}
                  />{' '}Event Notes
                </Link>
              </li>
            </ul>
          </div>
          <div style={video_wrapper}>
            <iframe
              style={video}
              width={600}
              height={338}
              src={TOWN_HALL_2021_WINTER_VIDEO}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>)
  );
}

export default TownHall;
