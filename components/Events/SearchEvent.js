import React from 'react';
import { navigate } from 'react-big-calendar/lib/utils/constants';

export default class Search extends React.Component {
  render() {
    return <div>TEST</div>;
  }
  static title()  {
    return 'First Date-Last Date';
  }
  static navigate(date, action)  {
      switch (action) {
        case navigate.PREVIOUS:
          break;
        case navigate.NEXT:
          break;
        default:
          break;
      }
  }
}

