import React from 'react';

export default class CommitteesBanner extends React.Component {
	render() {
		return (
			<div className="committee-banner-container">
				<div className="banner-main-content">
					<div className="banner-left-col">
						<img src={process.env.PUBLIC_URL + "/images/acm_committees.svg"} alt="the logos of all ACM committees" />
					</div>
					<div className="banner-right-col">
						<div className="info">
							<h1>Committees</h1>
							<p className="half-size">ACM comprises eight committees, each serving a unique topic and mission. All of our events are open to everyone. We strive to cover all of our members’ interests and encourage members to explore new topics and events, too!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}