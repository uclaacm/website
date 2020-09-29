import React from 'react';

import Banner from '../../Banner/Banner'
import Countdown from 'react-countdown';

const FALL_GM_2020_START_TIME = new Date('2020-10-05T18:30:00-0700'); //October 5th 2020 at 6:30 PDT

export default function FallGM() {
	const calculateTimeStrings = ({days, hours, minutes, seconds}) => {
		let dayString = "Day";
		let hourString = "Hour";
		let minuteString = "Minute";
		let secondString = "Second";
		if(days !== 1){ dayString += "s" }
		if(hours !== 1){ hourString += "s" }
		if(minutes !== 1){ minuteString += "s" }
		if(seconds !== 1){ secondString += "s" }

		return {dayString, hourString, minuteString, secondString};
	}

	const renderCountdownOrNow = ({ days, hours, minutes, seconds, completed }) => {
		if (completed){ return <GMLiveProgram/> }
		else {
			const {dayString, hourString, minuteString, secondString} = calculateTimeStrings({days, hours, minutes, seconds});

			return (<GM_COUNTDOWN days={days} hours={hours} minutes={minutes} seconds={seconds}
			dayString={dayString} hourString={hourString} minuteString={minuteString} secondString={secondString}/>);
		}
	};
	
	return (
		<div id="fall-gm-page">
			<Banner decorative />
			<Countdown date={FALL_GM_2020_START_TIME} renderer={renderCountdownOrNow} />
		</div>
	);
}

function GMLiveProgram() {
	function renderCommitteeSpeakers() {
		const committeeData = [
			{
				id: "studio",
				displayName: "ACM Studio",
				speakers: "Kade Adams, Evan Charfauros",
				logo: "/images/committees/logo-studio.svg",
			},
			{
				id: "icpc",
				displayName: "ACM ICPC",
				speakers: "Nikil Selvam",
				logo: "/images/committees/logo-icpc.svg",
			},
			{
				id: "design",
				displayName: "ACM Design",
				speakers: "Haki Alpay, Tomoki Fukazawa",
				logo: "/images/committees/logo-design.svg",
			},
			{
				id: "cyber",
				displayName: "ACM Cyber",
				speakers: "Disha Zambani, Ellie Cheng",
				logo: "/images/committees/logo-cyber.svg",
			},
			{
				id: "teach",
				displayName: "ACM Teach LA",
				speakers: "Matt Wang",
				logo: "/images/committees/logo-teachla.svg",
			},
			{
				id: "w",
				displayName: "ACM W",
				speakers: "Julia Baylon",
				logo: "/images/committees/logo-w.svg",
			},
			{
				id: "ai",
				displayName: "ACM AI",
				speakers: "John Dang",
				logo: "/images/committees/logo-ai.svg",
			},
			{
				id: "hack",
				displayName: "ACM Hack",
				speakers: "Raji Jadhav",
				logo: "/images/committees/logo-hack.svg",
			},
		]
		return committeeData.map((committee) => {
			const {id, logo, displayName, speakers} = committee;
			return (
				<p>
					<span id={id}>
						<img src={process.env.PUBLIC_URL + logo} alt={"Logo for " + displayName} className="committee-logos"/>
						{displayName}
					</span>
					: {speakers}
				</p>
			);
		})
	}
	return (
		<div id="gm-now-wrapper">
			<h1 id="time-to-gm-headline-now">Fall General Meeting 2020 is happening right now!</h1>
			<div id="gm-main-content">
				<div id="join-links-wrapper">
					<div className="click-to-join">
						<a href="http://example.com/" target="_blank" rel="noopener noreferrer">
							<div id="zoom-join-link-wrapper" className="join-links">
								<img src={process.env.PUBLIC_URL + "/images/ZoomLogo.png"} alt="Zoom logo" className="join-links-img"/>
							</div>
						</a>
						<p className="join-us">Join us from 6:30 to 7:10 p.m. PDT in Zoom</p>
					</div>
					<div className="click-to-join">
						<a href="https://bit.ly/ACMdiscord" target="_blank" rel="noopener noreferrer">
							<div id="discord-join-link-wrapper" className="join-links">
								<img src={process.env.PUBLIC_URL + "/images/DiscordLogoWordmark.png"} alt="Discord logo" className="join-links-img"/>
							</div>
						</a>
						<p className="join-us">Join us from 7:10 p.m. PDT onwards in Discord</p>
					</div>
				</div>
				<div id="gm-program-wrapper">
				<h2>Program</h2>
				<div className="row">
					<p className="timestamps">6:35 p.m. PDT</p>
					<div className="row-description-wrapper">
						<h3 className="row-description-heading">Rucha Patki: Welcome</h3>
					</div>
				</div>
				<div className="row">
					<p className="timestamps">6:38 p.m. PDT</p>
					<div className="row-description-wrapper">
						<h3 className="row-description-heading">Alumni: Why ACM?</h3>
						<p className="row-description-subheading">Hear perspectives of alumni on what their experience with ACM at UCLA meant to them</p>
						<p>Elena Escalas (class of 2020)</p>
						<p>Kevin Tan (class of 2020)</p>
					</div>
				</div>
				<div className="row">
					<p className="timestamps">6:40 p.m. PDT</p>
					<div className="row-description-wrapper">
						<h3 className="row-description-heading">Committee Presentations</h3>
						<p className="row-description-subheading">Learn more about each of ACM's eight committees: what they have to offer, and why you should join them</p>
						{renderCommitteeSpeakers()}
					</div>
				</div>
				<div className="row">
					<p className="timestamps">7:05 p.m. PDT</p>
					<div className="row-description-wrapper">
						<h3 className="row-description-heading">Lightning Round: Joining ACM / ACM Board</h3>
						<p className="row-description-subheading">How to become even more invovled with ACM beyond attending workshops and events</p>
						<p>Internal: William Chern</p>
						<p>ACM Dev Team: Austin Keil, Nhi Van</p>
						<p>ACM Internship Program: Gloria Yang, Sahen Rai</p>
						<p>External: Katherine Chong</p>
					</div>
				</div>
				<div className="row">
					<p className="timestamps">7:10 p.m. PDT</p>
					<div className="row-description-wrapper">
						<h3 className="row-description-heading">Tabling and Social</h3>
						<p className="row-description-subheading">Join us in our official ACM Discord for Committee tabling and socials</p>
						<p>Daniel Jaffe, Evan Zhong</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}

function GM_COUNTDOWN(props) {
	return (
		<div id="time-to-gm-wrapper">
			<h1 id="time-to-gm-headline">Fall General Meeting 2020 begins in</h1>
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
			<h3 id="fall-gm-zoom-release">Zoom and (other links) will be provided on Monday, October 5th, 2020 at 6:30 p.m. PDT</h3>
			<p id="cant-wait">Can't wait to join in on the fun? Jump in right now with our <a href="https://linktr.ee/acmucla">Linktree</a> or hop into the official <a href="https://bit.ly/ACMdiscord">Discord</a> and say hello!</p>
			<img id="fall-gm-2020-graphic" src={process.env.PUBLIC_URL + "/images/Fall_GM_2020_graphic.png"} alt="Fall General Meeting 2020 graphic" />
		</div>
	);
}
