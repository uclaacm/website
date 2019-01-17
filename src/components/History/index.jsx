import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Banner from 'components/Banner';

export default class History extends React.Component {
	render() {
		return (
			<div className="history-page">
				<p className="subheading">ACM is a longstanding organization at UCLA. Here are some important dates in our history.</p>
					{Config.history.map(history =>
						<p> {history.date} </p>
					)}
			</div>
		);
	}
}