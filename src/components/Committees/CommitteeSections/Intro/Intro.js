import React from 'react';

export default class Intro extends React.Component {
    render() {
        return (
            <div className="intro-row">
                <div className="show-mobile">
                    <img src={this.props.committee.introImage} alt=""/>
                    <p>{this.props.committee.introImageDesc}</p>
                </div>
                <div className="left-col">
                    <h2>{this.props.committee.tagline}</h2>
                    <p><strong>Mission:</strong> {this.props.committee.mission}</p>
                    <div className="learn-more">
                        <h3>Learn More</h3>
                        { this.props.committee.links.map(link => <a href={link.link} target="_blank" rel="noreferrer noopener" key={link.platform}><div className={'icon ' + this.props.committee.class} id={link.platform} /></a>) }
                    </div>
                </div>
                <div className="right-col">
                    <img src={this.props.committee.introImage} alt=""/>
                    <p>{this.props.committee.introImageDesc}</p>
                </div>
            </div>
        );
    }
}