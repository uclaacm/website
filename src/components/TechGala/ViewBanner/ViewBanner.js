import React from 'react';
import Button from '../../Button/Button'

function TGBanner(props) {
    return (
        <div className="tgbanner">
            <div className='left-section'>
                <h2 className='white'>Check Out The Projects From Winter 2021's Tech Gala!</h2>
            </div>
            <div className='right-section'>
                <a href="/techgala">
                    <Button className="tight dark" text="View Projects" styleClass="tight dark" />
			    </a>
            </div>
        </div>
    );
}

export default TGBanner;