import React from 'react';

// width of each img in px
// needs to be updated if style.scss changes
const IMAGE_WIDTH = 360;

export default class Carousal extends React.Component {
	constructor(props) {
		super(props);

		const numItems = this.props.images.length;
		const sections = [];

		for (let i = 0; i < numItems; i += 4) {
			sections.push({
				left: (i / 4) * (IMAGE_WIDTH * 2),
				width: (IMAGE_WIDTH * 2),
				items: this.props.images.slice(i, i + 4).map((item, i) => <a href={item} target="_BLANK" key={i}><div style={{backgroundImage: 'url('+item+')'}} /></a>),
			});
		}

		this.timer = null;
		this.state = {
			sections,
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				sections: this.state.sections.map(section => {
					section.left -= 1;
					if (section.left < -(IMAGE_WIDTH * section.items.length)) {
						section.left = ((this.props.images.length - 1) / 4) * (IMAGE_WIDTH * 2);
					}
					return section;
				})
			});
		}, 90);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = null;
	}

	render() {
		return (
			<div id="carousal">
				<div id="carousal-inner">
					{this.state.sections.map((section, i) =>
						<div className="carousal-sect" style={{ left: section.left + 'px', width: section.width + 'px' }} key={i}>
							{ section.items }
						</div>
					)}
				</div>
			</div>
		);
	}
}