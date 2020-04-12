import React from 'react';
import Config from 'config';

import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import Calendar from 'components/Events/Calendar';

export default class Events extends React.Component {
    render() {
        return (
            <div className='events-container'>
               <Navbar/>
               <Banner decorative />
               <h2>Our Events</h2>
               <p>Our events are open to everyone, regardless of major, background, or experience!</p>
               <b><p>Due to COVID-19, all ACM events during Spring 2020 will be online. Find us on YouTube <a href={Config.events.youtube_url}>here</a>!</p></b>
               <Calendar url={Config.events.calendar_url}/>
            </div>
        )
    }
}