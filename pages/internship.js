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

const { committees, internship } = data;
committees.unshift(
    {
        name: 'Board',
        class: 'board',
        image: '/images/committees/board_wordmark.svg',
        diamond: '/images/logo.png',
        internship: {
            whatWeDo: (
            <>
                With ACM being such a large organization, board serves to hold the club together.
                We plan club-wide events like ACM’s general meeting in Fall and serve the committees
                by taking care of club-wide logistics
                <ul>
                    <li> Operations creates ACM-wide events and upkeeps ACM resources</li>
                    <li> Dev Team upholds projects taken over the course of the year by ACM</li>
                    <li> Impact focuses on spreading awareness  to the ACM community about the social
                        impact of Technology/Computer Science</li>
                    <li> External Affairs creates events between company affiliates and the general ACM community</li>
                    <li> Finance handles finances within ACM at UCLA</li>
                    <li> Internal Affairs maintains the culture of ACM by hosting events for all officers </li>
                </ul>
            </> ),
            whatInternsWillDo: (
            <ul>
                <li> The Operations interns will TODO GET INFO AND ADD</li>
                <li> The Dev team interns will train and maintain existing ACM projects
                    (website, discord bot, membership portal), adding features and dealing with issues</li>
                <li> The Impact interns will plan Impact events and help out with the blog</li>
                <li> The External Affairs interns will work with companies and plan out events
                    such as panels, company tours, and info-sessions</li>
                <li> The Finance interns will help draft various finance requests to send to the CS department
                    and work with committees to secure funding for events</li>
                <li> The Internal Affairs interns will organize fun socials to bring officers across different
                     committees together, collaborate with other committees and help create the weekly newsletters</li>
            </ul> ),
            card: '/images/cards/board_card.svg',
            nextSteps: 'Dev Team interns automatically become Dev Team officers in the spring. All other Interns will run for a director position in the Spring or will no longer officially be a member of the board.',
        },
    },
);

function InternshipPage(){
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
                <h2>Applications</h2>
                <InternshipTimeline items={items}/>
                <div className="grid-tablet-2">
                    <div>
                        {items.map((item, i) => (
                        <div key={i} className='application-item'>
                            {item.date} &nbsp;
                            {item.name}
                            <p className='application-item-info'>{item.info}</p>
                        </div>
                        ))}
                        -- more dates will be added throughout the quarter --
                    </div>
                    <div className='application-info-card'>
                        <h3>Internship Applications Reopen Fall 2021</h3>
                        <div className='application-button'>
                            {/* TODO: add link to internship application */}
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
                <h2>Next steps</h2>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                >
                    {committees.map(committee =>
                        <NextSteps
                            image={committee.internship.card}
                            name={committee.name}
                            key={committee.name}
                            info={committee.internship.nextSteps}
                        />,
                    )}
                </Carousel>
            </div>
            <div className="content-section text-center">
                <h2>Past Intern Testimonials</h2>
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
                                <p className='text-right'>- {testimonial.name}, {testimonial.committee} intern, {testimonial.year}</p>
                            </div>
                    ))}
                </div>
            </div>
            <div className="content-section text-center">
                <h2>FAQ</h2>
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
