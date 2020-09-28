import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import Intro from './Intro/Intro';
import Header from './Header/Header'

export default class CommitteeSection extends React.Component {
	render() {
		return (
            <div>
                <Header committee={this.props.committee}/>
                <Intro committee={this.props.committee}/>
                <h1>Events and Projects</h1>
                <div className="body-wrapper">
                    { this.props.committee.infoCards.map(card => <InfoCard image={card.image} title={card.title} desc={card.desc} />) }
                </div>
            </div>
        )
	}
}