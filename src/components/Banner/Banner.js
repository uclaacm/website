import React from 'react';

// this can get refactored into something better
const mapUpToSum = (num, fn) => {
	const res = [];
	for (let i = 0; i < num; i++)
		res.push(fn(i, res));
	return res;
};

const generateCols = (n, m, classPattern=['']) => {
	return mapUpToSum(n,(i =>
		<div className="square-col" key={i}>
			{mapUpToSum(m,(j => {
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
			}))}
		</div>
	));
}

export default class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.timer = null;
		this.color = 0;
	}

	componentDidMount() {
		const committees = ['acm'];
		if (!this.props.decorative)
			committees.push('hack', 'studio', 'icpc', 'design', 'cyber', 'teachla', 'w', 'ai');
		const el = document.querySelector('.banner');
		this.timer = setInterval(() => {
			el.classList.remove(committees[this.color]);
			this.color = (this.color + 1) % committees.length;
			el.classList.add(committees[this.color]);
			this.forceUpdate();
		}, 4000)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = null;
	}

	render() {
		const decorative = this.props.decorative || false;

		const sideCols = this.props.sideCols || (decorative ? 12 : 7);
		const height = this.props.height || (decorative ? 2 : 7);
		const width = this.props.width || 5;
		return (
			<div className={`banner ${ decorative ? 'decorative' : '' }`}>
				<div className="square-col-container">
					{ (!decorative) && generateCols(1, height, ['','','','','white','white','white']) }
					{ (!decorative) && generateCols(1, height, ['','','','','','white','white']) }
					{ generateCols(1, height, ['','','','','','','white']) }
					{ generateCols(sideCols, height) }
					{ (!decorative) && generateCols(1, height, ['','','white','white','','','']) }
					{ (!decorative) && generateCols(width, height, ['','','white','white','white','','']) }
					{ (!decorative) && generateCols(1, height, ['','','','white','white','','']) }
					{ generateCols(sideCols, height) }
					{ generateCols(1, height, ['white','','','','','','']) }
					{ (!decorative) && generateCols(1, height, ['white','white','','','','','']) }
					{ (!decorative) && generateCols(1, height, ['white','white','white','','','','']) }
				</div>
				{ (!decorative) &&
					<div className="title">
						<h1>code the future.</h1>
					</div>
				}
			</div>
		);
	}
}