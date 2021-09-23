import Link from 'next/link';
import React from 'react';

function ContentBanner({ title, ctaText, ctaLink }) {
    return (
        <div className="full-width blue">
            <div className="sign-up-section banner-section">
                <div id="banner-left" className="half-width">
                    <h2 style={{fontSize: '1.6em'}}>{title}</h2>
                </div>
                <div id="banner-right" className="half-width">
                    <Link href={ctaLink}>
                        <a className="button tight dark">
                            {ctaText}
                        </a>
                    </Link>
                </div>
			</div>
		</div>
    );
}

export default ContentBanner;
