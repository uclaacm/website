import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Button from 'components/Button';

Number.prototype.map = function(fn) {
	const res = [];
	for (let i = 0; i < this.valueOf(); i++)
		res.push(fn(i, res));
	return res;
};

const generateRows = (n, m, classPattern=['']) => {
	return n.map(i =>
		<div className="square-col" key={i}>
			{m.map(j => {
				const classNames = ['square'];
				const name = classPattern[j % classPattern.length];
				if (name !== "") {
					classNames.push(classPattern[j % classPattern.length]);
				} else {
					const r = Math.random();
					if (r < 0.08)
						classNames.push('white');
					else if (r < 0.40)
						classNames.push('light');
				}
				return <div className={classNames.join(" ")} key={j} />
			})}
		</div>
	);
}

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.timer = null;
		this.color = 0;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			const committees = ['acm', 'hack', 'studio', 'icpc', 'netsec', 'w', 'ai'];
			const el = document.querySelector('.banner');
			el.classList.remove(committees[this.color]);
			this.color = (this.color + 1) % committees.length;
			el.classList.add(committees[this.color]);
			this.forceUpdate();
		}, 3000)
	}

	componentWillUnmount() {
		clearInterval(timer);
		timer = null;
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="banner">
					<div className="square-col-container">
						{ generateRows(20, 7) }
						{ generateRows(1, 7, ['','','white','white','','','']) }
						{ generateRows(5, 7, ['','','white','white','white','','']) }
						{ generateRows(1, 7, ['','','','white','white','','']) }
						{ generateRows(20, 7) }
					</div>
					<div className="title">
						<h1>code the future.</h1>
					</div>
				</div>
				<h1>The largest Computer Science community at UCLA</h1>
				<div className="committees">
					{ Config.committees.map(committee =>
						<div key={committee.name} className={`committee ${committee.class}`}>
							<img src={committee.image} />
							<div className="info">
								<h2><span>ACM</span> {committee.name}</h2>
								<p>{committee.tagline}</p>
							</div>
						</div>
					)}
				</div>
				<div className="button-section">
					<Button text="Learn More" />
				</div>
			</div>
		);
	}
}