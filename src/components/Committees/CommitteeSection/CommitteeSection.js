import React from 'react';
import SocialMedia from '../../SocialMedia/SocialMedia';
import InfoCard from '../InfoCard/InfoCard';

export default class CommitteeSection extends React.Component {
	render() {
		return (
            <div>
                <div className="intro-container">
                    <div className={`committee-header ${this.props.committee.class}`}>
                        <img src={this.props.committee.image} alt="committee logo"/>
                        <div className="info">
                            <h2><span>ACM</span> {this.props.committee.name}</h2>
                        </div>
                    </div>
                    <div className="intro-row">
                        <div className="intro-column">
                            <div className="left">
                                <h1>{this.props.committee.tagline}</h1>
                                <h2><strong>Mission:</strong> {this.props.committee.mission}</h2>
                                <div className="learn-more">
                                    <h3>Learn More ></h3>
                                    <SocialMedia />
                                </div>
                            </div>
                        </div>
                        <div className="intro-column">
                            <div className="right">
                                <img src={this.props.committee.introImage} alt=""/>
                                <p>{this.props.committee.introImageDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Events and Projects</h2>
                <div className="body-wrapper">
                    { this.props.committee.infoCards.map(card => <InfoCard image={card.image} title={card.title} desc={card.desc} />) }
                </div>
            </div>
        )
	}
}