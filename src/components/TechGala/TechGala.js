import React from 'react';
import Config from '../../config';
import Banner from '../Banner/Banner';
import TechGalaBanner from './TechGalaBanner/TechGalaBanner'
import Projects from './Projects/Projects'

function TechGala(props) {
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
