import React from 'react';

import Banner from '../../Banner/Banner'
import Countdown from 'react-countdown';

export default class Fall_GM extends React.Component {
	render() {
		const FALL_GM_2020_START_TIME = new Date('2020-10-05T18:30:00-0700'); //October 5th 2020 at 6:30 PDT 
	
		const renderHumanReadableTime = ({ days, hours, minutes, seconds, completed }) => {
			if (completed) return <h1 id="time-to-gm-headline-now">Fall General Meeting 2020 is happening right now!</h1>; //EVAN TODO: add the rest of the program and links to zoom / slack here
	
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
					<h3>Zoom and (other links) will be provided on Monday, October 5th, 2020 at 6:30 p.m. PDT</h3>
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
