import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import data from '../data';

function InternshipPage(){
    const { committees } = data;
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
            {/* <div className="content-section">
                <h2>What do we do?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Felis imperdiet proin fermentum leo. Donec et odio pellentesque diam. Id semper risus in hendrerit gravida.
                </p>
                <h2>Time Commitment</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Felis imperdiet proin fermentum leo. Donec et odio pellentesque diam. Id semper risus in hendrerit gravida.
                </p>
            </div> */}

        </Layout>
    );
}

export default InternshipPage;
