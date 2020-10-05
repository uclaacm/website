import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className={`committee-header ${this.props.committee.class}`}>
                <img src={this.props.committee.image} alt="committee logo"/>
            </div>
        );
    }
}