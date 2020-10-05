import React from 'react';

import Banner from '../../Banner/Banner'
// import Countdown from 'react-countdown';

// const FALL_GM_2020_START_TIME = new Date('2020-10-05T18:30:00-0700'); //October 5th 2020 at 6:30 PDT

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

	// const renderCountdownOrNow = ({ days, hours, minutes, seconds, completed }) => {
	// 	if (completed){ return <GMLiveProgram/> }
	// 	else {
	// 		const {dayString, hourString, minuteString, secondString} = calculateTimeStrings({days, hours, minutes, seconds});

	// 		return (<GM_COUNTDOWN days={days} hours={hours} minutes={minutes} seconds={seconds}
	// 		dayString={dayString} hourString={hourString} minuteString={minuteString} secondString={secondString}/>);
	// 	}
	// };
	
	return (
		<div id="fall-gm-page">
			<Banner decorative />
			<GMLiveProgram/>
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
				logo: "/images/diamonds/studio_diamond.svg",
			},
			{
				id: "icpc",
				displayName: "ACM ICPC",
				speakers: "Nikil Selvam",
				logo: "/images/diamonds/icpc_diamond.svg",
			},
			{
				id: "design",
				displayName: "ACM Design",
				speakers: "Haki Alpay, Tomoki Fukazawa",
				logo: "/images/diamonds/design_diamond.svg",
			},
			{
				id: "cyber",
				displayName: "ACM Cyber",
				speakers: "Disha Zambani, Ellie Cheng",
				logo: "/images/diamonds/cyber_diamond.svg",
			},
			{
				id: "teach",
				displayName: "ACM Teach LA",
				speakers: "Matt Wang",
				logo: "/images/diamonds/teachla_diamond.svg",
			},
			{
				id: "w",
				displayName: "ACM W",
				speakers: "Julia Baylon",
				logo: "/images/diamonds/w_diamond.svg",
			},
			{
				id: "ai",
				displayName: "ACM AI",
				speakers: "John Dang",
				logo: "/images/diamonds/ai_diamond.svg",
			},
			{
				id: "hack",
				displayName: "ACM Hack",
				speakers: "Raji Jadhav",
				logo: "/images/diamonds/hack_diamond.svg",
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
						<div className="should-dim">
							<a href="https://ucla.zoom.us/j/94679465455" target="_blank" rel="noopener noreferrer">
								<div id="zoom-join-link-wrapper" className="join-links">
									<img src={process.env.PUBLIC_URL + "/images/ZoomLogo.png"} alt="Zoom logo" className="join-links-img"/>
								</div>
								<p className="join-us">Join us from 6:30 to 7:10 p.m. PDT in Zoom</p>
							</a>
						</div>
						<p className="join-us-descriptor">Follow along during the presentation with <a href="https://docs.google.com/presentation/d/1sg6aZef8vKw11WAlOihZJr0rW_t8BEoZ1ffJMFLvNtc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">our slides</a></p>
					</div>
					<div className="click-to-join">
						<div className="should-dim">
							<a href="https://bit.ly/ACMdiscord" target="_blank" rel="noopener noreferrer">
								<div id="discord-join-link-wrapper" className="join-links">
									<img src={process.env.PUBLIC_URL + "/images/DiscordLogoWordmark.png"} alt="Discord logo" className="join-links-img"/>
								</div>
								<p className="join-us">Join us from 7:10 p.m. PDT onwards in Discord</p>
							</a>
						</div>
						<p className="join-us-descriptor">Chat with officers and learn what makes ACM special</p>
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
							<p className="row-description-subheading">How to become even more involved with ACM beyond attending workshops and events</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>External</span>: Katherine Chong</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>Internal</span>: William Chern</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>Dev Team</span>: Austin Keil, Nhi Van</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>Moonshots</span>: Sharvani Jha, Megha Ilango</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>Internship Program</span>: Gloria Yang, Sahen Rai</p>
						</div>
					</div>
					<div className="row">
						<p className="timestamps">7:10 p.m. PDT</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">Tabling and Social</h3>
							<p className="row-description-subheading">Join us in our official <a href="https://bit.ly/ACMdiscord"  target="_blank" rel="noopener noreferrer" id="acm-discord-invite-cta">ACM Discord</a> for Committee tabling and socials</p>
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
			<h3 id="fall-gm-zoom-release">Zoom link, slides, and other resources will be provided on Monday, October 5th, 2020 at 6:30 p.m. PDT</h3>
			<p id="posted-to-youtube">The Zoom portion of Fall General Meeting 2020 will be recorded and posted to our <a href="https://www.youtube.com/channel/UCwTqwgA4thysNbB2kNYsCIw">youtube channel</a></p>
			<p id="cant-wait">Can't wait to join in on the fun? Jump in right now with our <a href="https://linktr.ee/acmucla">Linktree</a> or hop into the official <a href="https://bit.ly/ACMdiscord">Discord</a> and say hello!</p>
			<img id="fall-gm-2020-graphic" src={process.env.PUBLIC_URL + "/images/Fall_GM_2020_graphic.png"} alt="Fall General Meeting 2020 graphic" />
		</div>
	);
}
