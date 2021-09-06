import Link from 'next/link';
import React from 'react';

function TGBanner() {
    return (
        <div className="full-width blue">
            <div className="sign-up-section banner-section">
                <div id="banner-left" className="half-width">
                    <h2 style={{fontSize: '1.6em'}}>Check out the projects from Tech Gala Winter &apos;21!</h2>
                </div>
                <div id="banner-right" className="half-width">
                    <Link href="/techgala">
                        <a className="button tight dark">
                            View Projects
                        </a>
                    </Link>
                </div>
			</div>
		</div>
    );
}

export default TGBanner;
