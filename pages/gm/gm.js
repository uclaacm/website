import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';

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
import winterGMgraphic from '../../public/images/Winter_GM_2024_graphic.png';
import googleSlideLogo from '../../public/images/slides.png';

// const info = {
//   gm_start_time: '2024-01-08T18:00:00-08:00',
//   gm_end_time: '2024-01-08T20:00:00-08:00',
//   rsvp_link: 'https://forms.gle/givA6ESwKskzeoBK9',
//   quarter: 'Winter',
//   slides_link: 'https://docs.google.com/presentation/d/1fvtvkUuXqvYthfU0DZ0j3XDMzSkVoF_q9onnlWDwVZo/edit#slide=id.p',
//   location: 'Haines 39',
  // speakers: {
  //   pres: 'Sujay',
  //   ivp: 'Advit',
  //   evp: 'Eavan',
  //   committees: {
  //     studio: 'Henry and Ming',
  //     icpc: 'Suhas',
  //     design: 'Michael and William',
  //     cyber: 'Benson and Salma',
  //     teachLA: 'Joseph and Sruthi',
  //     w: 'Evy and Veronica',
  //     ai: 'Angeline and Jordan',
  //     hack: 'James and Nathan',
  //   },
  //   initiatives: [
  //     'ACM Dev Team and Open Source: Arsh',
  //     'ACM Impact: Naisha and Aarohi',
  //     'ACM JEDI: Jafarri',
  //     'ACM Cloud: Satyen and Daniel',
  //   ],
  // },
// };

const dayToName = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    default:
      return "Saturday";
  }
}

const getDateWithSuffix = (date) => {
  let suffix = "";
  switch (date % 10) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }
  return date.toString() + suffix;
}

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

function gm() {
  const currentDate = new Date();
  const defaultCsvData = {
    gm_start_time: currentDate,
    gm_end_time: currentDate,
    rsvp_link: '',
    quarter: '',
    slides_link: '',
    location: '',
    day_of_week: '',
    date_with_suffix: '',
    pres: '',
    ivp: '',
    evp: '',
    studio: '',
    icpc: '',
    design: '',
    cyber: '',
    teachLA: '',
    w: '',
    ai: '',
    hack: '',
    initiatives: []
  }
  const [csvData, setCsvData] = useState(defaultCsvData);
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcUc33avRol1AKNs-QqIXe4Po16OeyuvyZ-eaNDx9Ryo7GGl1xreKfV-cAY2588dLb4ZGtwd8y8slp/pub?output=csv';
  
  useEffect(() => {
    fetchCSVData();    // Fetch the CSV data when the component mounts
  }, []); // The empty array ensures that this effect runs only once, like componentDidMount

  const fetchCSVData = () => {
    axios.get(CSV_URL)    // Use Axios to fetch the CSV data
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
        setCsvData({...csvData, parsedCsvData});        // Set the fetched data in the component's state
        console.log(parsedCsvData);
      })
      .catch((error) => {
        console.error('Error fetching CSV data:', error);
      });
  }

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
    const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
    const data = [];        // Initialize an array to store the parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }

    const startTime = new Date(data?.gm_start_time);
    const endTime = new Date(data?.gm_end_time);
    const initiatives = data?.initiatives.split(';');

    return {
      gm_start_time: startTime,
      gm_end_time: endTime,
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
      initiatives: initiatives
    }
  }

  function countdownRenderer({ days, hours, minutes, seconds, completed }) {
    const {dayString, hourString, minuteString, secondString} =
      calculateTimeStrings({days, hours, minutes, seconds});
  
    if (completed) {
      return (
        <div className="text-center">
          <h1>ACM&apos;s {csvData.quarter} GM {csvData.gm_start_time.getFullYear()} happened on the {csvData.date_with_suffix}!</h1>
          <div className="should-dim">
            <a href={csvData.slides_link} target="_blank" rel="noopener noreferrer">
              <div className="button-wrapper">
                <Image
                  src = {googleSlideLogo}
                  alt="Google Slides logo"
                  className="join-links-img"
                />
              </div>
              <p className="join-us">View the {csvData.quarter} GM slides to catch up!</p>
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
        <h1>{csvData.quarter} {csvData.gm_start_time.getFullYear()} General Meeting</h1>
        <Link href={csvData.rsvp_link}>
          <a className="button" target="_blank" rel="noreferrer noopener">
            RSVP Now!
          </a>
        </Link>
      </div>
      </>
    );
  }

	return (
		<Layout>
			<NextSeo
				title={`${csvData.quarter} General Meeting | ACM at UCLA`}
				description={
          `ACM's ${csvData.quarter} General Meeting will take place on ${csvData.gm_start_time.getMonth()} ${csvData.date_with_suffix} at ${csvData.gm_start_time.getHours()}:${csvData.gm_start_time.getMinutes()} PT!`}
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
          src = {winterGMgraphic}
          className="gm-graphic"
          alt={`${csvData.quarter} GM ${csvData.gm_start_time.getFullYear()} Marketing Graphic. ${csvData.quarter} GM will happen on ${csvData.day_of_week}, ${csvData.gm_start_time.getMonth()} ${csvData.date_with_suffix} from ${csvData.gm_start_time.getHours()}:${csvData.gm_start_time.getMinutes()} to ${csvData.gm_end_time.getHours()}:${csvData.gm_end_time.getMinutes()} in ${csvData.location}`}
        />
      </div>
      <Countdown date={csvData.gm_start_time} renderer={countdownRenderer}/>
			<div className="content-container-tight text-center">
        <div id="info-wrapper">
          <h2>Relevant information</h2>
          <div className="flex">
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8687573568445!2d-118.4437108235007!3d34.07287847314926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bd8bbb175573%3A0x46c5c13d4084a4b3!2sHaines%20Hall!5e0!3m2!1sen!2sus!4v1702237752096!5m2!1sen!2sus" width="450" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" title="gogole maps embed of haines 39" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.85897956824!2d-118.4441451!3d34.070418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62f97fe423993f80!2sUCLA%20Ackerman%20Union!5e0!3m2!1sen!2sin!4v1663063464157!5m2!1sen!2sin" width="450" height="400" style={{border: 0}} allowFullScreen="" loading="lazy" title="gogole maps embed of court of sciences"></iframe> */}
            </div>
            <div className="what-to-bring">
              <h3>How to get there</h3>
              <p> {csvData.quarter} GM will be hosted in {csvData.location}. </p>
              <br></br>
              <h3>What to bring</h3>
              <p>Encouraged: Phone to scan QR codes, excitement to learn about ACM!</p>
            </div>
          </div>
          <p> Don&apos;t hesitate to contact us at acm@ucla.edu if you any accessiblity concerns for {csvData.quarter} GM.</p>

        </div>

        <div id="gm-program-wrapper">
          <h2>Program</h2>
					<div className="gm-program-section">
            <div className="section-header">
              <h3>Welcome</h3>
              <p className="sub-heading">An introduction to ACM by our president {csvData.pres}.</p>
            </div>
					</div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Committee Presentations</h3>
              <p className="sub-heading">Learn what ACM&apos;s eight committees have planned for {csvData.quarter} quarter.</p>
            </div>
            <p className="gm-program-row"><Image src= {studioLogo} alt="ACM studio"/> {csvData.studio}</p>
            <p className="gm-program-row"><Image src= {icpcLogo} alt="ACM icpc"/> {csvData.icpc}</p>
            <p className="gm-program-row"><Image src= {designLogo}  alt="ACM design"/> {csvData.design}</p>
            <p className="gm-program-row"><Image src= {cyberLogo}  alt="ACM cyber"/> {csvData.cyber}</p>
            <p className="gm-program-row"><Image src= {teachlaLogo}  alt="ACM teachLA"/> {csvData.teachLA}</p>
            <p className="gm-program-row"><Image src= {wLogo}  alt="ACM w"/> {csvData.w}</p>
            <p className="gm-program-row"><Image src= {aiLogo}  alt="ACM ai"/> {csvData.ai}</p>
            <p className="gm-program-row"><Image src= {hackLogo}  alt="ACM hack"/> {csvData.hack}</p>
					</div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Board</h3>
              <p className="sub-heading">How to get more involved with ACM beyond attending workshops and events</p>
            </div>
            <p className="gm-program-row"><Image src= {boardLogo} alt="ACM board"/>&nbsp;&nbsp;External: {csvData.evp}</p>
            <p className="gm-program-row"><Image src= {boardLogo} alt="ACM board"/>&nbsp;&nbsp;Internal: {csvData.ivp}</p>
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>ACM Initatives</h3>
              <p className="sub-heading">See exciting new programs that ACM is trying out</p>
            </div>
            {csvData.initiatives.map(item => <p className="gm-program-row">{item}</p>)}
          </div>
          <div className="gm-program-section">
            <div className="section-header">
              <h3>Tabling and Social</h3>
              <p className="sub-heading">Interact with ACM&apos;s officers and walk away with new friends!</p>
            </div>
            <p className="gm-program-row">All ACM officers</p>
          </div>
        </div>
			</div>
		</Layout>
	);
}

export default gm;
