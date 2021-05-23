import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

function MobileNavItem() {
    return (
        <div className="committee-mobile-nav">
            <NavHashLink to={"/committees#studio"}>Studio</NavHashLink>
            <NavHashLink to={"/committees#icpc"}>ICPC</NavHashLink>
            <NavHashLink to={"/committees#design"}>Design</NavHashLink>
            <NavHashLink to={"/committees#cyber"}>Cyber</NavHashLink>
            <NavHashLink to={"/committees#teachla"}>Teach LA</NavHashLink>
            <NavHashLink to={"/committees#w"}>W</NavHashLink>
            <NavHashLink to={"/committees#ai"}>AI</NavHashLink>
            <NavHashLink to={"/committees#hack"}>Hack</NavHashLink>
            {/*<a href={"/committees" + `#studio`}>Studio</a>
            <a href={"/committees" + `#icpc`}> ICPC</a>
            <a href={"/committees" + `#design`}> Design</a>
            <a href={"/committees" + `#cyber`}> Cyber</a>
            <a href={"/committees" + `#teachla`}> Teach LA</a>
            <a href={"/committees" + `#w`}> W</a>
            <a href={"/committees" + `#ai`}> AI</a>
            <a href={"/committees" + `#hack`}> Hack</a>*/}
        </div>
    )
}

export default MobileNavItem;