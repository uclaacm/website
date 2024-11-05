import React from 'react';
import Countdown from 'react-countdown';

export default function CountdownElement(props) {
  // Input two props, switchTime and fallback
  // To prevent timezone issues switchTime is a JS timestamp, to create a timestamp can use "+ new Date(...)"
  // fallback is rendered if the time passes switchTime

  const chooseWhatToRender = ({ completed }) => {
    if (completed) {
      return <>{props.children}</>;
    } else {
      return <>{props.fallback}</>;
    }
  };

  return (
    <Countdown
      date={new Date(props.switchTime)}
      renderer={chooseWhatToRender}
    />
  );
}
