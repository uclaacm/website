import React from 'react';

import Banner from '../../Banner/Banner'
import Countdown from 'react-countdown';

export default class Fall_GM extends React.Component {
	render() {
		const FALL_GM_2020_START_TIME = new Date('2020-10-05T18:30:00-0700'); //October 5th 2020 at 6:30 PDT 
	
		const renderHumanReadableTime = ({ days, hours, minutes, seconds, completed }) => {
			if (completed) return (
				<div id="gm-now-wrapper">
					<h1 id="time-to-gm-headline-now">Fall General Meeting 2020 is happening right now!</h1>
					<div id="gm-program-wrapper">
						<h2>Program</h2>
						<div className="row">
							<p className="timestamps">6:05 p.m. PDT</p>
							<div className="row-description-wrapper">
								<h3 className="row-description-heading">Rucha Patki: Welcome</h3>
							</div>
						</div>
						<div className="row">
							<p className="timestamps">6:08 p.m. PDT</p>
							<div className="row-description-wrapper">
								<h3 className="row-description-heading">Alumni: Why ACM?</h3>
								<p className="row-description-subheading">Hear perspectives of alumni on what their experience with ACM at UCLA meant to them</p>
								<p>Elena Escalas (class of 2020)</p>
								<p>Kevin Tan (class of 2020)</p>
							</div>
						</div>
						<div className="row">
							<p className="timestamps">6:10 p.m. PDT</p>
							<div className="row-description-wrapper">
								<h3 className="row-description-heading">Committee Presentations</h3>
								<p className="row-description-subheading">Learn more about each of ACM's eight committees: what they have to offer, and why you should join them</p>
								<p><span id="studio"><img src="/images/committees/logo-studio.svg" alt="Logo for ACM Studio" className="committee-logos"/>ACM Studio</span>: Kade Adams, Evan Charfauros</p>
								<p><span id="icpc"><img src="/images/committees/logo-icpc.svg" alt="Logo for ACM ICPC" className="committee-logos"/>ACM ICPC</span>: Nikil Selvam</p>
								<p><span id="design"><img src="/images/committees/logo-design.svg" alt="Logo for ACM Design" className="committee-logos"/>ACM Design</span>: Haki Alpay, Tomoki Fukazawa</p>
								<p><span id="cyber"><img src="/images/committees/logo-cyber.svg" alt="Logo for ACM Cyber" className="committee-logos"/>ACM Cyber</span>: Disha Zambani, Ellie Cheng</p>
								<p><span id="teach"><img src="/images/committees/logo-teachla.svg" alt="Logo for ACM TeachLA" className="committee-logos"/>ACM TeachLA</span>: Matt Wang</p>
								<p><span id="w"><img src="/images/committees/logo-w.svg" alt="Logo for ACM W" className="committee-logos"/>ACM W</span>: Julia Baylon</p>
								<p><span id="ai"><img src="/images/committees/logo-ai.svg" alt="Logo for ACM AI" className="committee-logos"/>ACM AI</span>: John Dang</p>
								<p><span id="hack"><img src="/images/committees/logo-hack.svg" alt="Logo for ACM Hack" className="committee-logos"/>ACM Hack</span>: Raji Jadhav</p>
							</div>
						</div>
						<div className="row">
							<p className="timestamps">6:35 p.m. PDT</p>
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
							<p className="timestamps">6:40 p.m. PDT</p>
							<div className="row-description-wrapper">
								<h3 className="row-description-heading">Tabling and Social</h3>
								<p className="row-description-subheading">Join us in our official ACM Discord for Committee tabling and socials</p>
								<p>Daniel Jaffe, Evan Zhong</p>
							</div>
						</div>
					</div>
				</div>
			);
	
			let dayString ="Day";
			let hourString = "Hour";
			let minuteString = "Minute";
			let secondString = "Second";
	
			if (days !== 1) dayString += 's';
			if (hours !== 1) hourString += 's';
			if (minutes !== 1) minuteString += 's';
			if (seconds !== 1) secondString += 's';
	
			return (
				<div id="time-to-gm-wrapper">
					<h1 id="time-to-gm-headline">Fall General Meeting 2020 begins in</h1>
					<div id="countdown-wrapper">
						<div className="countdown-cards">
							<div className="square-background"/>
							<div className="countdown-numbers">{days}</div>
							<div className="countdown-labels">{dayString}</div>
						</div>
						<div className="countdown-cards">
							<div className="square-background"/>
							<div className="countdown-numbers">{hours}</div>
							<div className="countdown-labels">{hourString}</div>
						</div>
						<div className="countdown-cards">
							<div className="square-background"/>
							<div className="countdown-numbers">{minutes}</div>
							<div className="countdown-labels">{minuteString}</div>
						</div>
						<div className="countdown-cards">
							<div className="square-background"/>
							<div className="countdown-numbers">{seconds}</div>
							<div className="countdown-labels">{secondString}</div>
						</div>
					</div>
					<h3 id="fall-gm-zoom-release">Zoom and (other links) will be provided on Monday, October 5th, 2020 at 6:30 p.m. PDT</h3>
					<p id="cant-wait">Can't wait to join in on the fun? Jump in right now with our <a href="https://linktr.ee/acmucla">Linktree</a> or hop into the official <a href="https://bit.ly/ACMdiscord">Discord</a> and say hello!</p>
					<img id="fall-gm-2020-graphic" src={process.env.PUBLIC_URL + "/images/Fall_GM_2020_graphic.png"} alt="Fall General Meeting 2020 graphic" />
				</div>
			);
		};
	
		return (
			<div id="fall-gm-page">
				<Banner decorative />
				<Countdown date={FALL_GM_2020_START_TIME} renderer={renderHumanReadableTime} />
			</div>
		);
	}
}
