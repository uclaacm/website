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

function countdownRenderer({ days, hours, minutes, seconds, completed }) {
  const {dayString, hourString, minuteString, secondString} =
    calculateTimeStrings({days, hours, minutes, seconds});

  if (completed) {
    return (
      <div className="text-center">
        <h1>Fall GM 2021 is happening right now in the Court of Sciences!</h1>

        <div className="should-dim">
          <a href="https://docs.google.com/presentation/d/1oBwDsSow-ekrCgAmoYUFD3oGVjnZ2glt3qnpB1Yy-y0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="button-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/slides.png" alt="Google Slides logo" className="join-links-img" width="300px"/>
            </div>
            <p className="join-us">View the slides as they're being presented live</p>
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
      <h1>Fall 2021 General Meeting</h1>
      <Link href={RSVP_LINK}>
        <a className="button" target="_blank" rel="noreferrer noopener">
          RSVP Now!
        </a>
      </Link>
    </div>
    </>
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
      <div className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="gm-graphic" src="/images/Fall_GM_2021_graphic.png" width="1000px" alt="Fall GM 2021 Marketing Graphic"/>
      </div>
      <Countdown date={GM_START_TIME} renderer={countdownRenderer}/>
			<div className="content-container-tight text-center">
        <div id="info-wrapper">
          <h2>Relevant information</h2>
          <div className="flex">
            <div>
              <h3>How to get there</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Fall_GM_2021_temp_map.png" alt="temporary FPO image of google maps" width="400px"/>
            </div>
            <div className="what-to-bring">
              <h3>What to bring</h3>
              <p>Required: Face Mask, Bruincard</p>
              <span>(learn more about how ACM is <Link href={'/covid'}><a target="_blank" rel="noreferrer noopener">committed to running COVID safe events</a></Link> in our return to campus)</span>
              <p>Encouraged: Laptop or Phone to view slides, excitement to learn about ACM!</p>
            </div>
          </div>
        </div>

        <div id="gm-program-wrapper">
          <h2>Program</h2>
					<div className="gm-program-section">
            <div className="section-header">
              <h3>Welcome</h3>
              <h4>[COPY CHECK] Welcome from president, Matt Wang</h4>
            </div>
					</div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Committee Presentations</h3>
              <h4>[COPY CHECK] Learn what each of ACM&rsquo;s eight committees has in store for Fall quarter</h4>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/studio_wordmark.svg"/> Christian Loanzon, Peter Sutarjo</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/icpc_wordmark.svg"/> Jacob Zhang</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/design_wordmark.svg"/> Crystal Huynh, Muthu Palaniappan</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/cyber_wordmark.svg"/> Josh Lee, Henry Chang</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/teachLA_wordmark.svg"/> Sophie Schoenmeyer, Chloe Uy</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/w_wordmark.svg"/> Cindy Zhang, Lena O'Grady</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/ai_wordmark.svg"/> Justin Yi</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/hack_wordmark.svg"/> Asha Kar, Eugene Lo</p>
					</div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Board</h3>
              <h4>[COPY CHECK] How to become even more involved with ACM beyond attending workshops and events</h4>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/board_wordmark.svg"/>&nbsp;&nbsp;External: Tina Huang</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <p className="gm-program-row"><img src="/images/committees/board_wordmark.svg"/>&nbsp;&nbsp;Internal: Evan Zhong</p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Initatives</h3>
              <h4>[COPY CHECK] See the exciting new things ACM is trying out</h4>
            </div>
            <p className="gm-program-row">ACM Impact: Maya Raman</p>
            <p className="gm-program-row">ACM JEDI: Helia Woo</p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Tabling and Social</h3>
              <h4>[COPY CHECK] Come interact with real people</h4>
            </div>
            <p className="gm-program-row">Christina Tong, Rish Jain</p>
          </div>
        </div>
			</div>
		</Layout>
	);
}

export default F21;
