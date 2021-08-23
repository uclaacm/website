import React from 'react';

function InternshipTimeline(props) {
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;

	return (
		<div className="timeline">
			<div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{items.map((item, i) => (
					<div key={i} className={'timeline-item' + (item.active ? ' active' : '')}>
						<div className="timeline-content">
                            {item.date} <br/>
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default InternshipTimeline;
