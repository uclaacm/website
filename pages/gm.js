import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Countdown from 'react-countdown';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import gmData from '../gmData.json';

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
import fallGMgraphic from '../public/images/Fall_GM_2024_graphic.png';

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
  return (
    <>
      <div id='countdown-wrapper'>
        <div className='countdown-cards'>
          <div className='square-background'/>
          <div className='countdown-numbers'>{props.days}</div>
          <div className='countdown-labels'>{props.dayString}</div>
        </div>
        <div className='countdown-cards'>
          <div className='square-background'/>
          <div className='countdown-numbers'>{props.hours}</div>
          <div className='countdown-labels'>{props.hourString}</div>
        </div>
        <div className='countdown-cards'>
          <div className='square-background'/>
          <div className='countdown-numbers'>{props.minutes}</div>
          <div className='countdown-labels'>{props.minuteString}</div>
        </div>
        <div className='countdown-cards'>
          <div className='square-background'/>
          <div className='countdown-numbers'>{props.seconds}</div>
          <div className='countdown-labels'>{props.secondString}</div>
        </div>
      </div>
      <div className='text-center'>
        <h1>{props.data.quarter} {props.data.gm_start_time.getFullYear()} General Meeting</h1>
        <Link href={props.data.rsvp_link}>
          <a className='button' target='_blank' rel='noreferrer noopener'>
            RSVP Now!
          </a>
        </Link>
      </div>
    </>
  );
};

function gm() {
  const data = parseGMData(gmData);
  function countdownRenderer({ days, hours, minutes, seconds, completed }) {
    const {dayString, hourString, minuteString, secondString} =
      calculateTimeStrings({days, hours, minutes, seconds});
    if (completed) {
      return (
        <div className='text-center'>
          <h1>
            ACM&apos;s {data.quarter} GM {data.gm_start_time.getFullYear()} happened on the {data.date_with_suffix}!
          </h1>
          <div className='should-dim'>
            <a href={data.slides_link} target='_blank' rel='noopener noreferrer'>
              <div className='button-wrapper'>
                <Image
                  src = {googleSlideLogo}
                  alt='Google Slides logo'
                  className='join-links-img'
                />
              </div>
              <p className='join-us'>View the {data.quarter} GM slides to catch up!</p>
            </a>
          </div>
        </div>
      );
    }
    return <GMCountdown
      data={data}
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      dayString={dayString}
      hourString={hourString}
      minuteString={minuteString}
      secondString={secondString}
    />;
  }
	return (
		<Layout>
			<NextSeo
				title={`${data.quarter} General Meeting | ACM at UCLA`}
				description={
          `ACM's ${data.quarter} General Meeting will take place on ${data.gm_start_time.getMonth()} ${data.date_with_suffix} at ${data.gm_start_time.getHours()}:${data.gm_start_time.getMinutes()} PT!`}
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
      <div className='text-center'>
        <Image
          src = {fallGMgraphic}
          className='gm-graphic'
          alt={`${data.quarter} GM ${data.gm_start_time.getFullYear()} Marketing Graphic. ${data.quarter} GM will happen on ${data.day_of_week}, ${data.gm_start_time.getMonth()} ${data.date_with_suffix} from ${data.gm_start_time.getHours()}:${data.gm_start_time.getMinutes()} to ${data.gm_end_time.getHours()}:${data.gm_end_time.getMinutes()} in ${data.location}`}
        />
      </div>
      <Countdown date={data.gm_start_time} renderer={countdownRenderer}/>
			<div className='content-container-tight text-center'>
        <div id='info-wrapper'>
          <h2>Relevant information</h2>
          <div className='flex'>
            <div>
              <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.85897956824!2d-118.4441451!3d34.070418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62f97fe423993f80!2sUCLA%20Ackerman%20Union!5e0!3m2!1sen!2sin!4v1663063464157!5m2!1sen!2sin' width='450' height='400' style={{border: 0}} allowfullscreen='' loading='lazy' title='google maps embed of ackerman grand ballroom' referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
            <div className='what-to-bring'>
              <h3>How to get there</h3>
              <p> {data.quarter} GM will be hosted in {data.location}. </p>
              <br></br>
              <h3>What to bring</h3>
              <p>Encouraged: Phone to scan QR codes, excitement to learn about ACM!</p>
            </div>
          </div>
          <p>
            Don&apos;t hesitate to contact us at acm@ucla.edu if you have any accessibility concerns for {data.quarter} GM.
          </p>

        </div>

        <div id='gm-program-wrapper'>
          <h2>Program</h2>
					<div className='gm-program-section'>
            <div className='section-header'>
              <h3>Welcome</h3>
              <p className='sub-heading'>An introduction to ACM by our president {data.pres}.</p>
            </div>
					</div>
          <div className='gm-program-section'>
            <div className='section-header'>
              <h3>Committee Presentations</h3>
              <p className='sub-heading'>Learn what ACM&apos;s nine committees have planned for {data.quarter} quarter.</p>
            </div>
            <p className='gm-program-row'><Image src= {studioLogo} alt='ACM studio'/> {data.studio}</p>
            <p className='gm-program-row'><Image src= {icpcLogo} alt='ACM icpc'/> {data.icpc}</p>
            <p className='gm-program-row'><Image src= {designLogo}  alt='ACM design'/> {data.design}</p>
            <p className='gm-program-row'><Image src= {cyberLogo}  alt='ACM cyber'/> {data.cyber}</p>
            <p className='gm-program-row'><Image src= {teachlaLogo}  alt='ACM teachLA'/> {data.teachLA}</p>
            <p className='gm-program-row'><Image src= {wLogo}  alt='ACM w'/> {data.w}</p>
            <p className='gm-program-row'><Image src= {aiLogo}  alt='ACM ai'/> {data.ai}</p>
            <p className='gm-program-row'><Image src= {cloudLogo}  alt='ACM cloud'/> &nbsp;{data.cloud}</p>
            <p className='gm-program-row'><Image src= {hackLogo}  alt='ACM hack'/> {data.hack}</p>
					</div>
          <div className='gm-program-section'>
            <div className='section-header'>
              <h3>ACM Board</h3>
              <p className='sub-heading'>How to get more involved with ACM beyond attending workshops and events</p>
            </div>
            <p className='gm-program-row'><Image src= {boardLogo} alt='ACM board'/>&nbsp;&nbsp;External: {data.evp}</p>
            <p className='gm-program-row'><Image src= {boardLogo} alt='ACM board'/>&nbsp;&nbsp;Internal: {data.ivp}</p>
          </div>
          <div className='gm-program-section'>
            <div className='section-header'>
              <h3>ACM Initatives</h3>
              <p className='sub-heading'>See exciting new programs that ACM is trying out</p>
            </div>
            {data.initiatives.map(item => <p key={item.id} className='gm-program-row'>{item}</p>)}
          </div>
          <div className='gm-program-section'>
            <div className='section-header'>
              <h3>Tabling and Social</h3>
              <p className='sub-heading'>Interact with ACM&apos;s officers and walk away with new friends!</p>
            </div>
            <p className='gm-program-row'>All ACM officers</p>
          </div>
        </div>
			</div>
		</Layout>
	);
}

export default gm;
