import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

function MobileNavItem() {
    return (
        <ul className="committee-mobile-nav">
            <li><NavHashLink to={'/committees#studio'}>Studio</NavHashLink></li>
            <li><NavHashLink to={'/committees#icpc'}>ICPC</NavHashLink></li>
            <li><NavHashLink to={'/committees#design'}>Design</NavHashLink></li>
            <li><NavHashLink to={'/committees#cyber'}>Cyber</NavHashLink></li>
            <li><NavHashLink to={'/committees#teachla'}>Teach LA</NavHashLink></li>
            <li><NavHashLink to={'/committees#w'}>W</NavHashLink></li>
            <li><NavHashLink to={'/committees#ai'}>AI</NavHashLink></li>
            <li><NavHashLink to={'/committees#hack'}>Hack</NavHashLink></li>
        </ul>
    );
}

export default MobileNavItem;
