import React from 'react';
// import Config from '../../config';

import Banner from '../Banner/Banner';
// import Calendar from './Calendar/Calendar';

function Events() {
    return (
        <>
        <Banner decorative />
        <div className='events-container'>
            <h2>Our Events</h2>
            <p>
                We&apos;re taking the most of the summer off to rest, recharge, and prepare for a hybrid fall quarter.

                We&apos;ll see you soon!
            </p>
            <p>
                Want to know what our events look like? All of our 2020-2021 content was recorded and is available on our <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube channel!</a>
            </p>
            {/* <p>
                Our events are open to everyone, regardless of major, background, or experience! Come find us on <a href="https://www.youtube.com/c/acmucla" target="_blank" rel="noreferrer noopener">YouTube!</a>
            </p>

           <br/><br/>
           <Calendar url={Config.events.calendar_url}/>
           <br/><br/><br/> */}
        </div>
        </>
    );
}

export default Events;
