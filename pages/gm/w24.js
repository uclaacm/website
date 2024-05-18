import { NextSeo } from 'next-seo';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import Countdown from 'react-countdown';

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';

import aiLogo from '../../public/images/committees/ai_wordmark.svg';
import boardLogo from '../../public/images/committees/board_wordmark.svg';
import cyberLogo from '../../public/images/committees/cyber_wordmark.svg';
import designLogo from '../../public/images/committees/design_wordmark.svg';
import hackLogo from '../../public/images/committees/hack_wordmark.svg';
import icpcLogo from '../../public/images/committees/icpc_wordmark.svg';
import studioLogo from '../../public/images/committees/studio_wordmark.svg';
import teachlaLogo from '../../public/images/committees/teachLA_wordmark.svg';
import wLogo from '../../public/images/committees/w_wordmark.svg';
import googleSlideLogo from '../../public/images/slides.png';
import winterGMgraphic from '../../public/images/Winter_GM_2024_graphic.png';

const GM_START_TIME = new Date('2024-01-08T18:00:00-08:00');
const RSVP_LINK = 'https://forms.gle/givA6ESwKskzeoBK9';
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

function countdownRenderer({ days, hours, minutes, seconds, completed }) {
  const { dayString, hourString, minuteString, secondString } =
    calculateTimeStrings({ days, hours, minutes, seconds });

  if (completed) {
    return (
      <div className="text-center">
        <h1>ACM&apos;s Winter GM 2024 happened on the 1st!</h1>
        <div className="should-dim">
          <a
            href="https://docs.google.com/presentation/d/1fvtvkUuXqvYthfU0DZ0j3XDMzSkVoF_q9onnlWDwVZo/edit#slide=id.p"
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
            <p className="join-us">View the Winter GM slides to catch up!</p>
          </a>
        </div>
      </div>
    );
  }
  return (
    <GMCountdown
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

function GMCountdown(props) {
  return (
    <>
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
        <h1>Winter 2024 General Meeting</h1>
        <Link href={RSVP_LINK}>
          <a className="button" target="_blank" rel="noreferrer noopener">
            RSVP Now!
          </a>
        </Link>
      </div>
    </>
  );
}

function W24() {
  return (
    <Layout>
      <NextSeo
        title="Winter General Meeting | ACM at UCLA"
        description="ACM's Winter General Meeting will take place on January 8th at 6 PM PT!"
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
          alt="Winter GM 2024 Marketing Graphic. Winter GM will happen on Monday, January 8th from 6pm to 8pm in Haines 39"
        />
      </div>
      <Countdown date={GM_START_TIME} renderer={countdownRenderer} />
      <div className="content-container-tight text-center">
        <div id="info-wrapper">
          <h2>Relevant information</h2>
          <div className="flex">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8687573568445!2d-118.4437108235007!3d34.07287847314926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bd8bbb175573%3A0x46c5c13d4084a4b3!2sHaines%20Hall!5e0!3m2!1sen!2sus!4v1702237752096!5m2!1sen!2sus"
                width="450"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                title="gogole maps embed of haines 39"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.85897956824!2d-118.4441451!3d34.070418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62f97fe423993f80!2sUCLA%20Ackerman%20Union!5e0!3m2!1sen!2sin!4v1663063464157!5m2!1sen!2sin" width="450" height="400" style={{border: 0}} allowFullScreen="" loading="lazy" title="gogole maps embed of court of sciences"></iframe> */}
            </div>
            <div className="what-to-bring">
              <h3>How to get there</h3>
              <p> Winter GM will be hosted in Haines 39. </p>
              <br></br>
              <h3>What to bring</h3>
              <p>
                Encouraged: Phone to scan QR codes, excitement to learn about
                ACM!
              </p>
            </div>
          </div>
          <p>
            {' '}
            Don&apos;t hesitate to contact us at acm@ucla.edu if you any
            accessiblity concerns for Winter GM.
          </p>
        </div>

        <div id="gm-program-wrapper">
          <h2>Program</h2>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Welcome</h3>
              <p className="sub-heading">
                An introduction to ACM by our president Sujay.
              </p>
            </div>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Committee Presentations</h3>
              <p className="sub-heading">
                Learn what ACM&apos;s eight committees have planned for Winter
                quarter.
              </p>
            </div>
            <p className="gm-program-row">
              <Image src={studioLogo} alt="ACM studio" /> Henry and Ming
            </p>
            <p className="gm-program-row">
              <Image src={icpcLogo} alt="ACM icpc" /> Suhas
            </p>
            <p className="gm-program-row">
              <Image src={designLogo} alt="ACM design" /> Michael and William
            </p>
            <p className="gm-program-row">
              <Image src={cyberLogo} alt="ACM cyber" /> Benson and Salma
            </p>
            <p className="gm-program-row">
              <Image src={teachlaLogo} alt="ACM teachLA" /> Joseph and Sruthi
            </p>
            <p className="gm-program-row">
              <Image src={wLogo} alt="ACM w" /> Evy and Veronica
            </p>
            <p className="gm-program-row">
              <Image src={aiLogo} alt="ACM ai" /> Angeline and Jordan
            </p>
            <p className="gm-program-row">
              <Image src={hackLogo} alt="ACM hack" /> James and Nathan
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
              <Image src={boardLogo} alt="ACM board" />
              &nbsp;&nbsp;External: Eavan
            </p>
            <p className="gm-program-row">
              <Image src={boardLogo} alt="ACM board" />
              &nbsp;&nbsp;Internal: Advit
            </p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Initatives</h3>
              <p className="sub-heading">
                See exciting new programs that ACM is trying out
              </p>
            </div>
            <p className="gm-program-row">ACM Dev Team and Open Source: Arsh</p>
            <p className="gm-program-row">ACM Impact: Naisha and Aarohi</p>
            <p className="gm-program-row">ACM JEDI: Jafarri</p>
            <p className="gm-program-row">ACM Cloud: Satyen and Daniel</p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Tabling and Social</h3>
              <p className="sub-heading">
                Interact with ACM&apos;s officers and walk away with new
                friends!
              </p>
            </div>
            <p className="gm-program-row">All ACM officers</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default W24;
