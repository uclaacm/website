import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

function MobileNavItem() {
    return (
        <div className="committee-mobile-nav">
            <ul>
            <NavHashLink to={'/committees#studio'}><li>Studio</li></NavHashLink>
            <NavHashLink to={'/committees#icpc'}><li>ICPC</li></NavHashLink>
            <NavHashLink to={'/committees#design'}><li>Design</li></NavHashLink>
            <NavHashLink to={'/committees#cyber'}><li>Cyber</li></NavHashLink>
            <NavHashLink to={'/committees#teachla'}><li>Teach LA</li></NavHashLink>
            <NavHashLink to={'/committees#w'}><li>W</li></NavHashLink>
            <NavHashLink to={'/committees#ai'}><li>AI</li></NavHashLink>
            <NavHashLink to={'/committees#hack'}><li>Hack</li></NavHashLink>
            </ul>
            {/*<a href={"/committees" + `#studio`}>Studio</a>
            <a href={"/committees" + `#icpc`}> ICPC</a>
            <a href={"/committees" + `#design`}> Design</a>
            <a href={"/committees" + `#cyber`}> Cyber</a>
            <a href={"/committees" + `#teachla`}> Teach LA</a>
            <a href={"/committees" + `#w`}> W</a>
            <a href={"/committees" + `#ai`}> AI</a>
            <a href={"/committees" + `#hack`}> Hack</a>*/}
        </div>
    );
}

export default MobileNavItem;
