import Image from 'next/image';
import React from 'react';

function TechGalaBanner() {
	return (
        <div>
            <Image src={'/images/techgala/techgala-banner-dark.jpg'} alt="2021 tech gala banner" />
            <div style={{ marginTop: '30px' }}>
                <h1>Tech Gala</h1>
                <p>Here are the wonderful projects showcased at our Winter 2021 Tech Gala from students of UCLA!</p>
            </div>
        </div>
	);
}

export default TechGalaBanner;
