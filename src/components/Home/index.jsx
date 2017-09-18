import React from 'react';

import Navbar from 'components/Navbar';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="banner">
					<div className="banner-content right">
						<h1>code the future.</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, orci in pellentesque congue, eros leo pellentesque diam, in rutrum sem urna nec libero.</p>
					</div>
				</div>
			</div>
		);
	}
}