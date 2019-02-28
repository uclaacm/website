import React from 'react';
import FlagshipEvent from './flagshipevent';

export default class FlagshipEvents extends React.Component {
	render() {
		return (
			<div className="season-events">
				<h3>{ this.props.events.season }</h3> 
				{this.props.events.events.map(event => 
					<FlagshipEvent key={event.name} event={event} />
				)}
			</div>
		);
	}
}