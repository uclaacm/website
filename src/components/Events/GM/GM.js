import React from 'react';

import Countdown from 'react-countdown';
import Banner from '../../Banner/Banner';

const GM_START_TIME = new Date('2021-01-07T18:30:00-08:00'); //January 7th 2021 at 6:30 PST

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
			const {dayString, hourString, minuteString, secondString} = calculateTimeStrings({days, hours, minutes, seconds});

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
		const committeeData = [
			{
				id: 'studio',
				displayName: 'ACM Studio',
				speakers: 'Kade Adams, Evan Charfauros',
				logo: '/images/diamonds/studio_diamond.svg',
			},
			{
				id: 'icpc',
				displayName: 'ACM ICPC',
				speakers: 'Nikil Selvam',
				logo: '/images/diamonds/icpc_diamond.svg',
			},
			{
				id: 'design',
				displayName: 'ACM Design',
				speakers: 'Haki Alpay, Tomoki Fukazawa',
				logo: '/images/diamonds/design_diamond.svg',
			},
			{
				id: 'cyber',
				displayName: 'ACM Cyber',
				speakers: 'Disha Zambani, Ellie Cheng',
				logo: '/images/diamonds/cyber_diamond.svg',
			},
			{
				id: 'teach',
				displayName: 'ACM Teach LA',
				speakers: 'Matt Wang',
				logo: '/images/diamonds/teachla_diamond.svg',
			},
			{
				id: 'w',
				displayName: 'ACM W',
				speakers: 'Julia Baylon',
				logo: '/images/diamonds/w_diamond.svg',
			},
			{
				id: 'ai',
				displayName: 'ACM AI',
				speakers: 'John Dang',
				logo: '/images/diamonds/ai_diamond.svg',
			},
			{
				id: 'hack',
				displayName: 'ACM Hack',
				speakers: 'Raji Jadhav',
				logo: '/images/diamonds/hack_diamond.svg',
			},
		];
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
	return (
		<div id="gm-now-wrapper">
			<h1 id="time-to-gm-headline-now">Thanks for attending Winter GM 2021!</h1>
			<div id="gm-main-content">
				<div id="join-links-wrapper">
					<div className="click-to-join">
						<div className="should-dim">
							<a href="https://docs.google.com/presentation/d/1eF2d6VmHo1Pq-2MfXg0ezLSnnPz2bUWXHdyVjYb7WDE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
								<div id="zoom-join-link-wrapper" className="join-links">
									<img src={process.env.PUBLIC_URL + '/images/slides.png'} alt="Google Slides logo" className="join-links-img"/>
								</div>
								<p className="join-us">View the slides we used during GM</p>
							</a>
						</div>
					</div>
					<div className="click-to-join">
						<div className="should-dim">
							<a href="https://bit.ly/ACMdiscord" target="_blank" rel="noopener noreferrer">
								<div id="discord-join-link-wrapper" className="join-links">
									<img src={process.env.PUBLIC_URL + '/images/DiscordLogoWordmark.png'} alt="Discord logo" className="join-links-img"/>
								</div>
								<p className="join-us">Missed GM? Join us in our Discord!</p>
							</a>
						</div>
					</div>
				</div>
				<div id="video-wrapper">
					<iframe title="ACM Winter GM 2021 recording" src="https://www.youtube.com/embed/cleSPlz2U1Q" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div id="gm-program-wrapper">
					<h2>Program</h2>
					<div className="row">
						<p className="timestamps">6:35 p.m. PST</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">Rucha Patki: Welcome</h3>
						</div>
					</div>
					<div className="row">
						<p className="timestamps">6:40 p.m. PST</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">Committee Presentations</h3>
							<p className="row-description-subheading">Learn what each of ACM&rsquo;s eight committees has in store for winter quarter</p>
							{renderCommitteeSpeakers()}
						</div>
					</div>
					<div className="row">
						<p className="timestamps">7:05 p.m. PST</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">ACM Board</h3>
							<p className="row-description-subheading">See what ACM wide event ACM Board has planned.</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>CS Town Hall</span>: Katherine Chong</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>Moonshots</span>: Sharvani Jha</p>
							<p><span className="board"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo for ACM" className="committee-logos"/>Tech Gala</span>: Daniel Jaffe, Evan Zhong</p>
						</div>
					</div>
					<div className="row">
						<p className="timestamps">7:10 p.m. PST</p>
						<div className="row-description-wrapper">
							<h3 className="row-description-heading">Tabling and Social</h3>
							<p className="row-description-subheading">Join us in our official <a href="https://bit.ly/ACMdiscord"  target="_blank" rel="noopener noreferrer" id="acm-discord-invite-cta">ACM Discord</a> for Committee tabling and socials</p>
							<p>Daniel Jaffe, Evan Zhong</p>
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
			<h1 id="time-to-gm-headline">Winter General Meeting 2021 begins in</h1>
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
			<h3 id="gm-zoom-release">Zoom link, slides, and other resources will be provided on Thursday, January 7th, 2021 at 6:30 p.m. PST</h3>
			<p id="posted-to-youtube">The Zoom portion of Winter General Meeting 2021 will be recorded and posted to our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noopener noreferrer">YouTube channel</a>.</p>
			<p id="cant-wait">Can&rsquo;t wait to join in on the fun? Jump in right now with our <a href="https://linktr.ee/acmucla" target="_blank" rel="noopener noreferrer">Linktree</a> or hop into the official <a href="https://bit.ly/ACMdiscord" target="_blank" rel="noopener noreferrer">Discord</a> and say hello!</p>
			<img id="gm-graphic" src={process.env.PUBLIC_URL + '/images/Winter_GM_2021_graphic.png'} alt="Winter General Meeting 2021 graphic" />
		</div>
	);
}
