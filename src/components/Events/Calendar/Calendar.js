import React from 'react';

function Calendar(props) {
    return (
        <div className="calendar-container">
            <iframe src={props.url}
                className="calendar-main"
                frameBorder="0"
                scrolling="0"
                title="calendar"
                />
        </div>
    );
}

export default Calendar;
