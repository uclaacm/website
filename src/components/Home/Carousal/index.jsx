import React from 'react';

// width of each img in px
// needs to be updated if style.scss changes
const IMAGE_WIDTH = 300;

export default class Carousal extends React.Component {
	constructor(props) {
		super(props);

		const numItems = this.props.images.length;
		const itemsA = this.props.images.slice(0, numItems / 2);
		const itemsB = this.props.images.slice(numItems / 2);

		this.timer = null;
		this.state = {
			sections: [
				{
					left: 0,
					width: IMAGE_WIDTH * numItems / 4,
					items: itemsA.map((item, i) => <div style={{backgroundImage: 'url('+item+')'}} key={i} />),
				},
				{
					left: IMAGE_WIDTH * numItems / 4,
					width: IMAGE_WIDTH * numItems / 4,
					items: itemsB.map((item, i) => <div style={{backgroundImage: 'url('+item+')'}} key={i} />),
				},
				{
					left: IMAGE_WIDTH * numItems / 2,
					width: IMAGE_WIDTH * numItems / 4,
					items: itemsA.map((item, i) => <div style={{backgroundImage: 'url('+item+')'}} key={i} />),
				},
			],
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				sections: this.state.sections.map(section => {
					section.left -= 1;
					if (section.left < -(IMAGE_WIDTH * section.items.length)) {
						section.left = IMAGE_WIDTH * itemsA.length;
					}
					return section;
				})
			});
		}, 90);
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