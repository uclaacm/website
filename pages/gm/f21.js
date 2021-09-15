import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import Countdown from 'react-countdown';

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';

const GM_START_TIME = new Date('2021-09-27T18:00-20:00');
const RSVP_LINK = 'https://forms.gle/qst46ReHAvGV88hr7';

const calculateTimeStrings = ({days, hours, minutes, seconds}) => {
  let dayString = 'Day';
  let hourString = 'Hour';
  let minuteString = 'Minute';
  let secondString = 'Second';
  if(days !== 1){ dayString += 's'; }
  if(hours !== 1){ hourString += 's'; }
  if(minutes !== 1){ minuteString += 's'; }
  if(seconds !== 1){ secondString += 's'; }

  return {dayString, hourString, minuteString, secondString};
};

function countdownRenderer({ days, hours, minutes, seconds }) {
  const {dayString, hourString, minuteString, secondString} =
    calculateTimeStrings({days, hours, minutes, seconds});

  return <GMCountdown
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

function GMCountdown(props) {
  return (
    <div id="countdown-wrapper">
      <div className="countdown-cards">
        <div className="square-background"/>
        <div className="countdown-numbers">{props.days}</div>
        <div className="countdown-labels">{props.dayString}</div>
      </div>
      <div className="countdown-cards">
        <div className="square-background"/>
        <div className="countdown-numbers">{props.hours}</div>
        <div className="countdown-labels">{props.hourString}</div>
      </div>
      <div className="countdown-cards">
        <div className="square-background"/>
        <div className="countdown-numbers">{props.minutes}</div>
        <div className="countdown-labels">{props.minuteString}</div>
      </div>
      <div className="countdown-cards">
        <div className="square-background"/>
        <div className="countdown-numbers">{props.seconds}</div>
        <div className="countdown-labels">{props.secondString}</div>
      </div>
    </div>
  );
}

function F21() {
	return (
		<Layout>
			<NextSeo
				title="Fall General Meeting | ACM at UCLA"
				description="ACM's Fall General Meeting is coming soon, on September 27th at 6 PM PT. Keep your eyes peeled, your hand on your mouse, and your fingers on sdf."
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
			<div className="content-container-tight text-center">
				<h1>Fall &apos;21 General Meeting</h1>
        <Link href={RSVP_LINK}>
          <a className="button" target="_blank" rel="noreferrer noopener">
            RSVP Now!
          </a>
        </Link>
        <p>Check back later for more information on COVID safety, location, and the agenda!!</p>
			</div>
      <Countdown date={GM_START_TIME} renderer={countdownRenderer} />
		</Layout>
	);
}

export default F21;
