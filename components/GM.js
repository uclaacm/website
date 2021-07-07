// import React from 'react';

// import Countdown from 'react-countdown';
// import { generalInfo, boardEvents, committeeData } from '../../../config/gmData';
// import Banner from '../../Banner/Banner';

// import styles from '../styles/components/GM.module.scss';

// const { graphicRoute, welcomeSpeaker} = generalInfo;
// const { year , quarter , month , day, startTime, endTime}= generalInfo.date;
// const { youTube, discord, linktree, recording, slides  } = generalInfo.links;
// const { welcome, committees, board, social, timezone } = generalInfo.times;

// const GM_START_TIME = new Date(`${year}-${month}-${day}T${startTime}-${endTime}`);

// //used to display the long form of date
// const longDate = (GM_START_TIME.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

// export default function GM() {
// 	const calculateTimeStrings = ({days, hours, minutes, seconds}) => {
// 		let dayString = 'Day';
// 		let hourString = 'Hour';
// 		let minuteString = 'Minute';
// 		let secondString = 'Second';
// 		if(days !== 1){ dayString += 's'; }
// 		if(hours !== 1){ hourString += 's'; }
// 		if(minutes !== 1){ minuteString += 's'; }
// 		if(seconds !== 1){ secondString += 's'; }

// 		return {dayString, hourString, minuteString, secondString};
// 	};

// 	const renderCountdownOrNow = ({ days, hours, minutes, seconds, completed }) => {
// 		if (completed){ return <GMLiveProgram/>; }
// 		else {
// 			const {dayString, hourString, minuteString, secondString} =
// 				calculateTimeStrings({days, hours, minutes, seconds});

// 			return (<GM_COUNTDOWN days={days} hours={hours} minutes={minutes} seconds={seconds}
// 			dayString={dayString} hourString={hourString} minuteString={minuteString} secondString={secondString}/>);
// 		}
// 	};

// 	return (
// 		<div id={styles.gmPage}>
// 			<Banner decorative />
// 			<Countdown date={GM_START_TIME} renderer={renderCountdownOrNow} />
// 		</div>
// 	);
// }

// function GMLiveProgram() {
// 	function renderCommitteeSpeakers() {
// 		return committeeData.map((committee) => {
// 			const {id, logo, displayName, speakers} = committee;
// 			return (
// 				<p key={id}>
// 					<span id={styles.id}>
// 						<img src={logo} alt={'Logo for ' + displayName} className={styles.committeeLogos}/>
// 						{displayName}
// 					</span>
// 					: {speakers}
// 				</p>
// 			);
// 		});
// 	}
// 	function renderBoardEvents() {
// 		return boardEvents.map((events) => {
// 			const {eventName, logo, displayName, speakers} = events;
// 			return (
// 				<p key={eventName}>
// 					<span className={styles.board}>
// 						<img src={logo} alt={'Logo for ' + displayName} className={styles.committeeLogos}/>
// 						{eventName}
// 					</span>
// 					: {speakers}
// 				</p>
// 			);
// 		});
// 	}
// 	return (
// 		<div id={styles.gmNowWrapper}>
// 			<h1 id={styles.timeToGmHeadlineNow}>Thanks for attending {quarter} GM {year}!</h1>
// 			<div id={styles.gmMainContent}>
// 				<div id={styles.joinLinksWrapper}>
// 					<div className={styles.clickToJoin}>
// 						<div className={styles.shouldDim}>
// 							<a href={slides} target="_blank" rel="noopener noreferrer">
// 								<div id={styles.zoomJoinLinkWrapper} className={styles.joinLinks}>
// 									<img src={'/images/slides.png'} alt="Google Slides logo" className={styles.joinLinksImg}/>
// 								</div>
// 								<p className={styles.joinUs}>View the slides we used during GM</p>
// 							</a>
// 						</div>
// 					</div>
// 					<div className={styles.clickToJoin}>
// 						<div className={styles.shouldDim}>
// 							<a href={discord} target="_blank" rel="noopener noreferrer">
// 								<div id={styles.discordJoinLinkWrapper} className={styles.joinLinks}>
// 									<img src={'/images/DiscordLogoWordmark.png'} alt="Discord logo" className={styles.joinLinksImg}/>
// 								</div>
// 								<p className={styles.joinUs}>Missed GM? Join us in our Discord!</p>
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 				<div id={styles.videoWrapper}>
// 					<iframe title={`ACM ${quarter} GM ${year} recording`} src={recording} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
// 				</div>
// 				<div id={styles.gmProgramWrapper}>
// 					<h2>Program</h2>
// 					<div className={styles.row}>
// 						<p className={styles.timestamps}> {welcome + ' ' + timezone} </p>
// 						<div className={styles.rowDescriptionWrapper}>
// 							<h3 className={styles.rowDescriptionHeading}>{welcomeSpeaker}: Welcome</h3>
// 						</div>
// 					</div>
// 					<div className={styles.row}>
// 						<p className={styles.timestamps}>{committees + ' ' + timezone}</p>
// 						<div className={styles.rowDescriptionWrapper}>
// 							<h3 className={styles.rowDescriptionHeading}>Committee Presentations</h3>
// 							<p className={styles.rowDescriptionSubheading}>Learn what each of ACM&rsquo;s eight committees has in store for {quarter} quarter</p>
// 							{renderCommitteeSpeakers()}
// 						</div>
// 					</div>
// 					<div className={styles.row}>
// 						<p className={styles.timestamps}>{board + ' ' + timezone}</p>
// 						<div className={styles.rowDescriptionWrapper}>
// 							<h3 className={styles.rowDescriptionHeading}>ACM Board</h3>
// 							<p className={styles.rowDescriptionSubheading}>See what ACM wide events ACM Board has planned.</p>
// 							{renderBoardEvents()}
// 						</div>
// 					</div>
// 					<div className={styles.row}>
// 						<p className={styles.timestamps}>{social + ' ' + timezone}</p>
// 						<div className={styles.rowDescriptionWrapper}>
// 							<h3 className={styles.rowDescriptionHeading}>Tabling and Social</h3>
// 							<p className={styles.rowDescriptionSubheading}>Join us in our official <a href={discord}  target="_blank" rel="noopener noreferrer" id={styles.acmDiscordInviteCta}>ACM Discord</a> for Committee tabling and socials</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// function GM_COUNTDOWN(props) {
// 	return (
// 		<div id={styles.timeToGmWrapper}>
// 			<h1 id={styles.timeToGmHeadline}>{quarter} General Meeting {year} begins in</h1>
// 			<div id={styles.countdownWrapper}>
// 				<div className={styles.countdownCards}>
// 					<div className={styles.squareBackground}/>
// 					<div className={styles.countdownNumbers}>{props.days}</div>
// 					<div className={styles.countdownLabels}>{props.dayString}</div>
// 				</div>
// 				<div className={styles.countdownCards}>
// 					<div className={styles.squareBackground}/>
// 					<div className={styles.countdownNumbers}>{props.hours}</div>
// 					<div className={styles.countdownLabels}>{props.hourString}</div>
// 				</div>
// 				<div className={styles.countdownCards}>
// 					<div className={styles.squareBackground}/>
// 					<div className={styles.countdownNumbers}>{props.minutes}</div>
// 					<div className={styles.countdownLabels}>{props.minuteString}</div>
// 				</div>
// 				<div className={styles.countdownCards}>
// 					<div className={styles.squareBackground}/>
// 					<div className={styles.countdownNumbers}>{props.seconds}</div>
// 					<div className={styles.countdownLabels}>{props.secondString}</div>
// 				</div>
// 			</div>
// 			<h3 id={styles.gmZoomRelease}>Zoom link, slides, and other resources will be provided on {longDate} at {startTime} {timezone}</h3>
// 			<p id={styles.postedToYoutube}>The Zoom portion of {quarter} General Meeting {year} will be recorded and posted to our <a href={youTube} target="_blank" rel="noopener noreferrer">YouTube channel</a>.</p>
// 			<p id={styles.cantWait}>Can&rsquo;t wait to join in on the fun? Jump in right now with our <a href={linktree} target="_blank" rel="noopener noreferrer">Linktree</a> or hop into the official <a href={discord} target="_blank" rel="noopener noreferrer">Discord</a> and say hello!</p>
// 			<img id={styles.gmGraphic} src={graphicRoute} alt={quarter + ' General Meeting ' + year +' graphic'} />
// 		</div>
// 	);
// }
