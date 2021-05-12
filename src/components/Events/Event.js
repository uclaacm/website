import React from 'react';
import Config from '../../config';

import Banner from '../Banner/Banner';
import Calendar from './Calendar/Calendar';

export default class Events extends React.Component {
    render() {
        return (
            <div className='events-container'>
               <Banner decorative />
               <h2>Our Events</h2>
               <p>Our events are open to everyone, regardless of major, background, or experience! Come find us on <a href={Config.events.youtube_url} target="_blank" rel="noreferrer noopener"><div className="events-sm" id="youtube"/></a> </p>

               <br/><br/>
               <Calendar url={Config.events.calendar_url}/>
               <br/><br/><br/>
            </div>
        );
    }
}
