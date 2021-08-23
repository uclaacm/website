import Link from 'next/link';
import React from 'react';

import Faq from 'react-faq-component';
import Carousel from 'react-multi-carousel';

import Banner from '../components/Banner';
import CommitteeInternshipInfo from '../components/Internship/CommitteeInternshipInfo';
import InternshipTimeline from '../components/Internship/InternshipTimeline';
import NextSteps from '../components/Internship/NextSteps';
import Layout from '../components/Layout';

import data from '../data';
import 'react-multi-carousel/lib/styles.css';

function InternshipPage(){
    const { committees, internship } = data;
    const { items, testimonials, QA, FAQStyles, responsive } = internship;
    return(
        <Layout>
            <Banner decorative />
            <div className="content-section text-center">
                <h1>Internships</h1>
                What do you do as an intern? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin
                nibh sit amet commodo nulla. Amet facilisis magna etiam tempor.
            </div>
            <CommitteeInternshipInfo
                committees={committees}
            />
            <div className="content-section text-center">
                <h1>Applications</h1>
                <InternshipTimeline items={items}/>
                <div className="application-information">
                    <div>
                        {items.map((item, i) => (
                        <div key={i} className='application-item'>
                            {item.date} &nbsp;
                            {item.name}
                            <p>{item.info}</p>
                        </div>
                        ))}
                        -- more dates will be added throughout the quarter --
                    </div>
                    <div className='application-info-card'>
                        <h3>Internship Applications Reopen Fall 2021</h3>
                        <div className='application-button'>
                            <Link href="">
                                <a className="button" target="_blank" rel="noreferrer noopener">
                                    Apply Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section text-center">
                <h1>Next steps</h1>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                >
                    <NextSteps
                        image={'/images/cards/board_card.svg'}
                        name={'ACM AT UCLA'}
                        key={'ACM AT UCLA'}
                    />
                    {committees.map(committee =>
                        <NextSteps
                            image={committee.card}
                            name={committee.name}
                            key={committee.name}
                        />,
                    )}
                </Carousel>
            </div>
            <div className="content-section text-center">
                <h1>Past Intern Testimonials</h1>
                <div className="testimonial-section">
                    {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial-item">
                                {/* <Image
                                    src = {testimonial.image}
                                    alt = {`${testimonial.name}'s image`}
                                    width = "60px"
                                    height = "60px"
                                /> */}
                                <p>{testimonial.quote}</p>
                                <p className='testimonial-giver'>- {testimonial.name}, {testimonial.committee} intern, {testimonial.year}</p>
                            </div>
                    ))}
                </div>
            </div>
            <div className="content-section text-center">
                <h1>FAQ</h1>
                <div className="faq">
                    <Faq
                    data={QA}
                    styles={FAQStyles}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default InternshipPage;
