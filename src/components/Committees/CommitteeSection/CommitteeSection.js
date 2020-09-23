import React from 'react';
import SocialMedia from '../../SocialMedia/SocialMedia';

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
                            <h1>{this.props.committee.tagline}</h1>
                            <h2><strong>Mission:</strong> {this.props.committee.mission}</h2>
                            <div className="learn-more">
                                <h3>Learn More:</h3>
                                <SocialMedia />
                            </div>
                        </div>
                        <div className="intro-column">
                            <img src={this.props.committee.introImage} alt=""/>
                            <p>{this.props.committee.introImageDesc}</p>
                        </div>
                    </div>
                </div>
                <div className="body-wrapper">

                </div>
            </div>
        )
	}
}