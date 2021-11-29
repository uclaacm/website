import React from 'react';
import Countdown from 'react-countdown';

export default function CountdownElement(props) {
    const chooseWhatToRender = ({ completed }) => {
        if (completed) {
            return <>{props.children}</>;
        }
        else {
            return <>{props.fallback}</>;
        }
    };

    return (
        <Countdown date={props.switchTime} renderer={chooseWhatToRender} />
	);
}
