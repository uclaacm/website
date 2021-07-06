import React from 'react';
import { Chrono } from 'react-chrono';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import data from '../data';


function InternshipPage(){
    const { committees } = data;
    const items = [
        {title: '00/00 Apps open'},
        {title: '00/00 Apps due'},
        {title: '00/00 Interviews'},
        {title: '00/00 Hear back'},
        {title: '00/00 Onboarding'},
    ];
    return(
        <Layout>
            <Banner decorative />
            <div className="content-section text-center">
                <h1>Internships</h1>
                What do you do as an intern? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin
                nibh sit amet commodo nulla. Amet facilisis magna etiam tempor.
            </div>
            <div className="logos-line">
                {committees.map(committee =>
                    <div className="logo-diamond" key={committee.name}>
                        <img src={committee.diamond} alt={`${committee.name}'s logo`} />
                    </div>,
                )}
                <div className="logo-diamond">
                    <img src={'/images/logo.png'} id="acm-logo" alt="ACM at UCLA Logo"></img>
                </div>
            </div>
            <div className="committee-internship-info">
            <img src="" alt="committee logo"/>
                    <h3>What do we do?</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae.
                    </p>
                    <h3>Time Commitment</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae.
                    </p>
                    <h3>Post Internship</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae.
                    </p>
            </div>
            <div className="content-section text-center">
                <h1>Applications</h1>
                <div style={{ width: '100%', height: '400px' }}>
                    <Chrono
                        items={items}
                        hideControls
                        itemWidth={150}
                        theme={{primary: '#1E6CFF', secondary: '#181818'}}
                        />
                </div>
            </div>
            <div className="content-section text-center">
                <h1>Next steps</h1>
            </div>
            <div className="content-section text-center">
                <h1>Past Intern Testimonials</h1>
            </div>
            <div className="content-section text-center">
                <h1>FAQ</h1>
            </div>


        </Layout>
    );
}

export default InternshipPage;
