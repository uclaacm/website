import React from 'react';

import Countdown from 'react-countdown';
import Banner from '../../Banner/Banner';
import { boardEvents, committeeData } from '../../../config/gmData';
import gmData from '../../../config/gmData'

const GM_START_TIME = new Date(gmData.date.year+'-'+gmData.date.month+'-'+gmData.date.day+'T'+gmData.date.startTime+'-'+gmData.date.endTime);

export default function GM() {
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

	const renderCountdownOrNow = ({ days, hours, minutes, seconds, completed }) => {
		if (completed){ return <GMLiveProgram/>; }
		else {
			const {dayString, hourString, minuteString, secondString} =
				calculateTimeStrings({days, hours, minutes, seconds});

			return (<GM_COUNTDOWN days={days} hours={hours} minutes={minutes} seconds={seconds}
			dayString={dayString} hourString={hourString} minuteString={minuteString} secondString={secondString}/>);
		}
	};

	return (
		<div id="gm-page">
			<Banner decorative />
			<Countdown date={GM_START_TIME} renderer={renderCountdownOrNow} />
		</div>
	);
}

function GMLiveProgram() {
	function renderCommitteeSpeakers() {
		return committeeData.map((committee) => {
			const {id, logo, displayName, speakers} = committee;
			return (
				<p key={id}>
					<span id={id}>
						<img src={process.env.PUBLIC_URL + logo} alt={'Logo for ' + displayName} className="committee-logos"/>
						{displayName}
					</span>
					: {speakers}
				</p>
			);
		});
	}
	function renderBoardEvents() {
		return boardEvents.map((events) => {
			const {eventName, logo, displayName, speakers} = events;
			return (
				<p>
					<span className="board">
						<img src={process.env.PUBLIC_URL + logo} alt={'Logo for ' + displayName} className="committee-logos"/>
						{eventName}
					</span>
					: {speakers}
				</p>
			);
		});
	}
	return (
		<div id="gm-now-wrapper">
			<h1 id="time-to-gm-headline-now">Thanks for attending {gmData.date.quarter} GM {gmData.date.year}!</h1>
			<div id="gm-main-content">
				<div id="join-links-wrapper">
					<div className="click-to-join">
						<div className="should-dim">
							<a href={gmData.links.slides} target="_blank" rel="noopener noreferrer">
								<div id="zoom-join-link-wrapper" className="join-links">
									<img src={process.env.PUBLIC_URL + '/images/slides.png'} alt="Google Slides logo" className="join-links-img"/>
								</div>
								<p className="join-us">View the slides we used during GM</p>
							</a>
						</div>
					</div>
					<div className="click-to-join">
						<div className="should-dim">
							<a href={gmData.links.discord} target="_blank" rel="noopener noreferrer">
								<div id="discord-join-link-wrapper" className="join-links">
									<img src={process.env.PUBLIC_URL + '/images/DiscordLogoWordmark.png'} alt="Discord logo" className="join-links-img"/>
								</div>
								<p className="join-us">Missed GM? Join us in our Discord!</p>
							</a>
						</div>
					</div>
				</div>
				<div id="video-wrapper">
					<iframe title={"ACM " + gmData.date.quarter + " GM " + gmData.date.year +" recording"} src={gmData.links.recording} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div id="gm-program-wrapper">
					<h2>Program</h2>
					<div className="row">
						<p className="timestamps"> {gmData.times.welcome + " " + gmData.times.timezone} </p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">{gmData.welcomeSpeaker}: Welcome</h3>
						</div>
					</div>
					<div className="row">
						<p className="timestamps">{gmData.times.committees + " " + gmData.times.timezone}</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">Committee Presentations</h3>
							<p className="row-description-subheading">Learn what each of ACM&rsquo;s eight committees has in store for {gmData.quarter} quarter</p>
							{renderCommitteeSpeakers()}
						</div>
					</div>
					<div className="row">
						<p className="timestamps">{gmData.times.board + " " + gmData.times.timezone}</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">ACM Board</h3>
							<p className="row-description-subheading">See what ACM wide events ACM Board has planned.</p>
							{renderBoardEvents()}
						</div>
					</div>
					<div className="row">
						<p className="timestamps">{gmData.times.social + " " + gmData.times.timezone}</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">Tabling and Social</h3>
							<p className="row-description-subheading">Join us in our official <a href={gmData.links.discord}  target="_blank" rel="noopener noreferrer" id="acm-discord-invite-cta">ACM Discord</a> for Committee tabling and socials</p>
							{/* <p>Daniel Jaffe, Evan Zhong</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function GM_COUNTDOWN(props) {
	return (
		<div id="time-to-gm-wrapper">
			<h1 id="time-to-gm-headline">{gmData.date.quarter} General Meeting {gmData.date.year} begins in</h1>
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
			<h3 id="gm-zoom-release">Zoom link, slides, and other resources will be provided on {GM_START_TIME.toLocaleString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {gmData.startTime} {gmData.times.timezone}</h3>
			<p id="posted-to-youtube">The Zoom portion of {gmData.date.quarter} General Meeting {gmData.date.year} will be recorded and posted to our <a href={gmData.links.youTube} target="_blank" rel="noopener noreferrer">YouTube channel</a>.</p>
			<p id="cant-wait">Can&rsquo;t wait to join in on the fun? Jump in right now with our <a href={gmData.links.linktree} target="_blank" rel="noopener noreferrer">Linktree</a> or hop into the official <a href={gmData.links.discord} target="_blank" rel="noopener noreferrer">Discord</a> and say hello!</p>
			<img id="gm-graphic" src={process.env.PUBLIC_URL + gmData.graphicRoute} alt={gmData.date.quarter + " General Meeting " + gmData.date.year +" graphic"} />
		</div>
	);
}
