import React from 'react';
import Button from '../../Button/Button'

function TGBanner() {
    return (
        <div className="full-width blue">
            <div id="sign-up-section" className="banner-section">
                <div id="banner-left" className="half-width">
                    <h2>Check out the projects from Tech Gala Winter &apos;21!</h2>
                </div>
                <div id="banner-right" className="half-width">
                    <a href="/techgala">
                        <Button className="tight dark" text="View Projects" styleClass="tight dark" />
                    </a>
                </div>
			</div>
		</div>
    );
}

export default TGBanner;