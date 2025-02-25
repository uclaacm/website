import { faFileAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';

import Image from 'next/legacy/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Countdown from 'react-countdown';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import gmData from '../gmData.json';
import pastData from '../past-gm.json';

import aiLogo from '../public/images/committees/ai_wordmark.svg';
import boardLogo from '../public/images/committees/board_wordmark.svg';
import cloudLogo from '../public/images/committees/cloud_wordmark.svg';
import cyberLogo from '../public/images/committees/cyber_wordmark.svg';
import designLogo from '../public/images/committees/design_wordmark.svg';
import hackLogo from '../public/images/committees/hack_wordmark.svg';
import icpcLogo from '../public/images/committees/icpc_wordmark.svg';
import studioLogo from '../public/images/committees/studio_wordmark.svg';
import teachlaLogo from '../public/images/committees/teachLA_wordmark.svg';
import wLogo from '../public/images/committees/w_wordmark.svg';
import googleSlideLogo from '../public/images/slides.png';
import winterGMgraphic from '../public/images/Winter_GM_2025_graphic.png';

const inlineButtonListStyle = {
  display: 'inline-block',
  marginBottom: '1em',
};

const dayToName = (day) => {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    default:
      return 'Saturday';
  }
};

const getDateWithSuffix = (date) => {
  let suffix = '';
  switch (date % 10) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  return date.toString() + suffix;
};

const calculateTimeStrings = ({ days, hours, minutes, seconds }) => {
  let dayString = 'Day';
  let hourString = 'Hour';
  let minuteString = 'Minute';
  let secondString = 'Second';
  if (days !== 1) {
    dayString += 's';
  }
  if (hours !== 1) {
    hourString += 's';
  }
  if (minutes !== 1) {
    minuteString += 's';
  }
  if (seconds !== 1) {
    secondString += 's';
  }

  return { dayString, hourString, minuteString, secondString };
};

const parseGMData = (jsonContent) => {
  const data = {};

  for (const row of jsonContent) {
    data[row.name] = row.description;
  }

  const startTime = new Date(data?.gm_start_time);

  return {
    gm_start_time: startTime,
    gm_end_time: new Date(data?.gm_end_time),
    rsvp_link: data?.rsvp_link,
    quarter: data?.quarter,
    slides_link: data?.slides_link,
    location: data?.location,
    day_of_week: dayToName(startTime.getDay()),
    date_with_suffix: getDateWithSuffix(startTime.getDate()),
    pres: data?.pres,
    ivp: data?.ivp,
    evp: data?.evp,
    studio: data?.studio,
    icpc: data?.icpc,
    design: data?.design,
    cyber: data?.cyber,
    teachLA: data?.teachLA,
    w: data?.w,
    ai: data?.ai,
    hack: data?.hack,
    cloud: data?.cloud,
    initiatives: data?.initiatives.split(';'),
  };
};

const GMCountdown = (props) => {
  return (<>
    <div id="countdown-wrapper">
      <div className="countdown-cards">
        <div className="square-background" />
        <div className="countdown-numbers">{props.days}</div>
        <div className="countdown-labels">{props.dayString}</div>
      </div>
      <div className="countdown-cards">
        <div className="square-background" />
        <div className="countdown-numbers">{props.hours}</div>
        <div className="countdown-labels">{props.hourString}</div>
      </div>
      <div className="countdown-cards">
        <div className="square-background" />
        <div className="countdown-numbers">{props.minutes}</div>
        <div className="countdown-labels">{props.minuteString}</div>
      </div>
      <div className="countdown-cards">
        <div className="square-background" />
        <div className="countdown-numbers">{props.seconds}</div>
        <div className="countdown-labels">{props.secondString}</div>
      </div>
    </div>
    <div className="text-center">
      <h1>
        {props.data.quarter} {props.data.gm_start_time.getFullYear()} General
        Meeting
      </h1>
      <Link
        href={props.data.rsvp_link}
        className="button"
        target="_blank"
        rel="noreferrer noopener">

        RSVP Now to get the zoom link!

      </Link>
    </div>
  </>);
};

function gm() {

  const pastGMs = [...pastData].reverse();
  const data = parseGMData(gmData);
  function countdownRenderer({ days, hours, minutes, seconds, completed }) {
    const { dayString, hourString, minuteString, secondString } =
      calculateTimeStrings({ days, hours, minutes, seconds });
    if (completed) {
      return (
        <div className="text-center">
          <h1>
            ACM&apos;s {data.quarter} GM {data.gm_start_time.getFullYear()}{' '}
            happened on the {data.date_with_suffix}!
          </h1>
          <div className="should-dim">
            <a
              href={data.slides_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-wrapper">
                <Image
                  src={googleSlideLogo}
                  alt="Google Slides logo"
                  className="join-links-img"
                />
              </div>
              <p className="join-us">
                View the {data.quarter} GM slides to catch up!
              </p>
            </a>
          </div>
        </div>
      );
    }
    return (
      <GMCountdown
        data={data}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        dayString={dayString}
        hourString={hourString}
        minuteString={minuteString}
        secondString={secondString}
      />
    );
  }
  return (
    <Layout>
      <NextSeo
        title={`${data.quarter} General Meeting | ACM at UCLA`}
        description={`ACM's ${data.quarter} General Meeting will take place on ${data.gm_start_time.getMonth()} ${data.date_with_suffix} at ${data.gm_start_time.getHours()}:${data.gm_start_time.getMinutes()} PT!`}
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
      <div className="text-center">
        <Image
          src={winterGMgraphic}
          className="gm-graphic"
          alt={`${data.quarter} GM ${data.gm_start_time.getFullYear()} Marketing Graphic. ${data.quarter} GM will happen on ${data.day_of_week}, ${data.gm_start_time.getMonth()} ${data.date_with_suffix} from ${data.gm_start_time.getHours()}:${data.gm_start_time.getMinutes()} to ${data.gm_end_time.getHours()}:${data.gm_end_time.getMinutes()} in ${data.location}`}
        />
      </div>
      <Countdown date={data.gm_start_time} renderer={countdownRenderer} />
      <div className="content-container-tight text-center">
        <div id="info-wrapper">
          <h2>Relevant information</h2>
          <div className="flex rel-info">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.9116979881577!2d-118.4451879!3d34.0689216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0204c546b1%3A0xd5a64f1b8e6a9db8!2sUniversity%20of%20California%2C%20Los%20Angeles!5e0!3m2!1sen!2sus!4v1696835312938!5m2!1sen!2sus"
                className="map-frame"
                allowFullScreen=""
                loading="lazy"
                title="google maps embed of ucla"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="what-to-bring">
              <h3>How to get there</h3>
              <p>
                {' '}
                {data.quarter} GM will be hosted {data.location}.{' '}
              </p>
              <br></br>
              <h3>What to bring</h3>
              <p>
                Encouraged: Phone to scan QR codes, excitement to learn about
                ACM!
              </p>
            </div>
          </div>
          <p>
            Don&apos;t hesitate to contact us at acm@ucla.edu if you have any
            accessibility concerns for {data.quarter} GM.
          </p>
        </div>

        <div id="gm-program-wrapper">
          <h2>Program</h2>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Welcome</h3>
              <p className="sub-heading">
                An introduction to ACM by our president {data.pres}.
              </p>
            </div>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Committee Presentations</h3>
              <p className="sub-heading">
                Learn what ACM&apos;s nine committees have planned for{' '}
                {data.quarter} quarter.
              </p>
            </div>
            <p className="gm-program-row">
              <Image src={studioLogo} alt="ACM studio" width={214} height={45} /> {data.studio}
            </p>
            <p className="gm-program-row">
              <Image src={icpcLogo} alt="ACM icpc" width={187} height={45} /> {data.icpc}
            </p>
            <p className="gm-program-row">
              <Image src={designLogo} alt="ACM design" width={218} height={45} /> {data.design}
            </p>
            <p className="gm-program-row">
              <Image src={cyberLogo} alt="ACM cyber" width={208} height={45} /> {data.cyber}
            </p>
            <p className="gm-program-row">
              <Image src={teachlaLogo} alt="ACM teachLA" width={251} height={45} /> {data.teachLA}
            </p>
            <p className="gm-program-row">
              <Image src={wLogo} alt="ACM w" width={151} height={45} /> {data.w}
            </p>
            <p className="gm-program-row">
              <Image src={aiLogo} alt="ACM ai" width={154} height={45} /> {data.ai}
            </p>
            <p className="gm-program-row">
              <Image src={cloudLogo} alt="ACM cloud" width={206} height={45} /> &nbsp;
              {data.cloud}
            </p>
            <p className="gm-program-row">
              <Image src={hackLogo} alt="ACM hack" width={194} height={45} /> {data.hack}
            </p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Board</h3>
              <p className="sub-heading">
                How to get more involved with ACM beyond attending workshops and
                events
              </p>
            </div>
            <p className="gm-program-row">
              <Image src={boardLogo} alt="ACM board" width={194} height={45} />
              &nbsp;&nbsp;External: {data.evp}
            </p>
            <p className="gm-program-row">
              <Image src={boardLogo} alt="ACM board" width={194} height={45} />
              &nbsp;&nbsp;Internal: {data.ivp}
            </p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Initatives</h3>
              <p className="sub-heading">
                See exciting new programs that ACM is trying out
              </p>
            </div>
            {data.initiatives.map((item) => (
              <p key={item.id} className="gm-program-row">
                {item}
              </p>
            ))}
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Tabling and Social</h3>
              <p className="sub-heading">
                Interact with ACM&apos;s officers and walk away with new
                friends!
              </p>
            </div>
            <div className='gm-program-row'>All ACM officers</div>
          </div>
        </div>
			</div>
      {/* Past GMs */}
      <div className="content-container-medium">
        <hr></hr>
        <h2 className="text-center">Past General Meetings</h2>
        {pastGMs.map((pastGM, index) => (
          <div className="grid-tablet-2" key={index}>
            <div>
              <h3>{pastGM.title + ' // ' + pastGM.date}</h3>
              <p>{pastGM.description}</p>
              <ul className="list-unstyled">
                <li style={inlineButtonListStyle}>
                  <Link href={pastGM.slides}>
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
                      Event Slides
                    </a>
                  </Link>
                </li>{' '}
                <li style={inlineButtonListStyle}>
                  {pastGM.notes && pastGM.notes.trim() !== '' && (
                    <Link href={pastGM.notes}>
                      <a
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faVideo}
                          fixedWidth
                          aria-hidden={true}
                        />{' '}
                        Event Recording
                      </a>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pastGM.banner}
                alt={pastGM.alt_text}
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>
		</Layout>
	);
}

export default gm;
