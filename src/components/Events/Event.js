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
               <p>Our events are open to everyone, regardless of major, background, or experience!</p>
               <b><p>Due to COVID-19, all ACM events during Spring 2020 will be online. Find us on YouTube <a href={Config.events.youtube_url}>here</a>!</p></b>
               <br/><br/>
               <Calendar url={Config.events.calendar_url}/>
               <br/><br/><br/>
            </div>
        )
    }
}