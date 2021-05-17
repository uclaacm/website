import React from 'react';

function MobileNavItem() {
    return (
        <div className="committee-mobile-nav">
                <a href={"/committees" + `#studio`}>Studio</a>
                <a href={"/committees" + `#icpc`}> ICPC</a>
                <a href={"/committees" + `#design`}> Design</a>
                <a href={"/committees" + `#cyber`}> Cyber</a>
                <a href={"/committees" + `#teachla`}> Teach LA</a>
                <a href={"/committees" + `#w`}> W</a>
                <a href={"/committees" + `#ai`}> AI</a>
                <a href={"/committees" + `#hack`}> Hack</a>
        </div>
    )
}

export default MobileNavItem;