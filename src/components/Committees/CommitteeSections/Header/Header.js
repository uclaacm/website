import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className={`committee-header ${this.props.committee.class}`}>
                <img src={this.props.committee.image} alt="committee logo"/>
                <div className="info">
                    <h1><span>ACM</span> {this.props.committee.name}</h1>
                </div>
            </div>
        );
    }
}