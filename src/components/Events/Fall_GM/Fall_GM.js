import React from 'react';

import Banner from '../../Banner/Banner'
import Countdown from 'react-countdown';

function Fall_GM (props) {
	const FALL_GM_2020_START_TIME = new Date('2020-10-05T18:30:00-0700'); //October 5th 2020 at 6:30 PDT 

	const renderHumanReadableTime = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) return <h1 id="time-to-gm-headline-now">Fall General Meeting 2020 is happening now!</h1>;

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
						<div className="countdown-numbers">{days}</div>
						<div className="countdown-labels">{dayString}</div>
					</div>
					<div className="countdown-cards">
						<div className="countdown-numbers">{hours}</div>
						<div className="countdown-labels">{hourString}</div>
					</div>
					<div className="countdown-cards">
						<div className="countdown-numbers">{minutes}</div>
						<div className="countdown-labels">{minuteString}</div>
					</div>
					<div className="countdown-cards">
						<div className="countdown-numbers">{seconds}</div>
						<div className="countdown-labels">{secondString}</div>
					</div>
				</div>
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

export default Fall_GM;