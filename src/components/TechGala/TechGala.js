import React from 'react';
import Config from '../../config';
import Banner from '../Banner/Banner';
import Projects from './Projects/Projects';
import TechGalaBanner from './TechGalaBanner/TechGalaBanner';

function TechGala() {
	return (
        <div className='content'>
            <Banner decorative/>
            <div className="page-content">
                <TechGalaBanner />
                <Projects projects={Config.tgprojects}/>
            </div>
        </div>
	);
}

export default TechGala;
