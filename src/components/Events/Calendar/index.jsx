import React from 'react';

export default class Calendar extends React.Component {
    render() {
        return (
            <div className="calendar-container">
                <iframe src={this.props.url} 
                    className="calendar-main"
                    frameBorder="0"
                    scrolling="0"
                    />
            </div>
        )
    }
}