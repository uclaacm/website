import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import Countdown from 'react-countdown';

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';

const GM_START_TIME = new Date('2022-01-06T18:30-08:00');
const RSVP_LINK = 'http://links.uclaacm.com/wintergm-rsvp-22';
const SLIDES_LINK = 'https://docs.google.com/presentation/d/1XGyJdmuR78C9liEPlwqMq2PpNSaXS-PtlK15fvzQLRE/edit?usp=sharing';
const ZOOM_LINK = 'https://ucla.zoom.us/j/92139691430?pwd=d0R0WkhuajlBS3NvNUJoUXdNWE9mQT09';
const YOUTUBE_LINK = 'https://youtu.be/XVdCnEGoKKo';

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

function countdownRenderer({ days, hours, minutes, seconds, completed }) {
  const {dayString, hourString, minuteString, secondString} =
    calculateTimeStrings({days, hours, minutes, seconds});

  if (completed) {
    return (
      <div className="text-center">
        <h1>ACM&apos;s Winter GM 2022 happened on the 6th of January!</h1>
        <div className="should-dim">
          <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
            <div className="button-wrapper slides">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/youtube.png" alt="YouTube Logo" className="join-links-img" width="200px"/>
            </div>
            <p className="join-us">Watch the recording of the event!</p>
          </a>
        </div>
      </div>
    );
  }
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
    <>
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
    <div className="text-center">
      <h1>until the ACM chapter at UCLA Winter 2022 General Meeting!</h1>
      <h2>Fill out the RSVP Form:</h2>
      <Link href={RSVP_LINK}>
        <a className="button rsvp-button" target="_blank" rel="noreferrer noopener">
          RSVP Now!
        </a>
      </Link>
    </div>
    </>
  );
}

function W22() {
	return (
		<Layout>
			<NextSeo
				title="Winter General Meeting | ACM chapter at UCLA"
				description="ACM's Winter General Meeting happened on January 6th at 6:30 PM PT."
				openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/logo.png',
							width: 1200,
							height: 1200,
							alt: 'The ACM chapter at UCLA logo',
						},
					],
					site_name: 'ACM chapter at UCLA',
				}}
			/>
			<Banner decorative />
      <div className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="gm-graphic" src="/images/Winter_GM_2022_graphic.png" width="1000px" alt="Winter GM 2022 Marketing Graphic"/>
      </div>
      <Countdown date={GM_START_TIME} renderer={countdownRenderer}/>
			<div className="content-container-tight text-center">
        <div className="info-wrapper">
          <h2>Relevant Information</h2>
          <div className="event-links">
            <div className="should-dim">
              <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer">
                <div className="button-wrapper zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ZoomLogo.png" alt="Zoom logo" className="join-links-img" width="150px"/>
                </div>
                <p className="join-us">Attend the event here!</p>
              </a>
            </div>
            <div className="should-dim">
              <a href={SLIDES_LINK} target="_blank" rel="noopener noreferrer">
                <div className="button-wrapper slides">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/slides.png" alt="Google Slides logo" className="join-links-img" width="200px"/>
                </div>
                <p className="join-us">View the slides and follow along!</p>
              </a>
            </div>
            <div className="should-dim">
              <a href="https://discord.gg/eWmzKsY" target="_blank" rel="noopener noreferrer">
                <div className="button-wrapper discord">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/DiscordLogoWordmark.png" alt="Discord logo" className="join-links-img" width="200px"/>
                </div>
                <p className="join-us">Join the Discord Server!</p>
              </a>
            </div>
          </div>
        </div>
        <div id="gm-program-wrapper">
          <h2>Program</h2>
					<div className="gm-program-section">
            <div className="section-header">
              <h3>Welcome</h3>
              <p className="sub-heading">An introduction to what ACM is, from our president Matt Wang.</p>
            </div>
					</div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Committee Presentations</h3>
              <p className="sub-heading">Learn what each of ACM&apos;s eight committees has planned for Winter quarter</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/studio_wordmark.svg" alt="ACM studio"/> Christian Loanzon, Peter Sutarjo</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/icpc_wordmark.svg" alt="ACM icpc"/> Jacob Zhang</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/design_wordmark.svg" alt="ACM design"/> Crystal Huynh, Muthu Palaniappan</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/cyber_wordmark.svg" alt="ACM cyber"/> Josh Lee, Henry Chang</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/teachLA_wordmark.svg" alt="ACM teachLA"/> Sophie Schoenmeyer, Chloe Uy</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/w_wordmark.svg" alt="ACM w"/> Cindy Zhang, Lena O&apos;Grady</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/ai_wordmark.svg" alt="ACM ai"/> Justin Yi</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/hack_wordmark.svg" alt="ACM hack"/> Asha Kar, Eugene Lo</p>
					</div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Board</h3>
              <p className="sub-heading">How to get more involved with ACM beyond attending workshops and events</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/board_wordmark.svg" alt="ACM board"/>&nbsp;&nbsp;External: Tina Huang</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/board_wordmark.svg" alt="ACM board"/>&nbsp;&nbsp;Internal: Evan Zhong</p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Initatives</h3>
              <p className="sub-heading">See exciting new programs that ACM is trying out</p>
            </div>
            <p className="gm-program-row">ACM Moonshots: John Dang</p>
            <p className="gm-program-row">ACM JEDI: Helia Woo</p>
            <p className="gm-program-row">ACM Impact: Maya Raman</p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Tabling and Social (on Discord)</h3>
              <p className="sub-heading">Interact with ACM&apos;s officers and walk away with new friends!</p>
              <p className='sub-heading'> Navigate to the Winter GM category on the <a href="https://discord.gg/eWmzKsY" target="_blank" rel="noopener noreferrer"> Discord server</a></p>
            </div>
            <p className="gm-program-row">All ACM officers</p>
          </div>
        </div>
			</div>
		</Layout>
	);
}

export default W22;
