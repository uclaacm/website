// import Link from 'next/link';
// uncomment when button is added

import React from 'react';

import Faq from 'react-faq-component';

import Banner from '../components/Banner';
import CommitteeInternshipInfo from '../components/Internship/CommitteeInternshipInfo';
import InternshipTimeline from '../components/Internship/InternshipTimeline';
import NextSteps from '../components/Internship/NextSteps';
import Layout from '../components/Layout';

import data from '../data';

import styles from '../styles/pages/Internship.module.scss';

const { committees, internship, board } = data;

const internshipInfo = board.concat(committees);
const { items, testimonials, QA, FAQStyles } = internship;

function InternshipPage(){
    return(
        <Layout>
            <Banner decorative />
            <div className={'content-section text-center'}>
                <h1>The Internship Program</h1>
                <p className={styles['internship-intro']}>The ACM Internship program is a program that facilitates the transition of UCLA students to ACM officers. Interns learn about the ACM committee they are interning for and ACM in general before becoming an official ACM officer.</p>
                <p className={styles['internship-intro']}>Click on the different ACM subcommittee icons in order to learn more about what interns in each committee do and scroll down to find more information on how you can apply to the Internship Program.</p>
            </div>
            <CommitteeInternshipInfo
                committees={internshipInfo}
            />
            <div style={{position: 'relative', top: '350px', zIndex: '1', transform: 'rotate(-40deg)', textAlign: 'center', fontWeight: 'bold', fontSize: '24pt'}}>Updated timeline coming soon!</div>
            <div className={'content-section text-center'} style={{filter: 'blur(4px)'}}>
                <h2>Applications</h2>
                <InternshipTimeline items={items}/>
                <div className={'grid-tablet-2'}>
                    <section>
                        {items.map((item, i) => (
                        <div key={i} className={styles['application-item']}>
                            {item.date} &nbsp;
                            {item.name}
                            <p className={styles['application-item-info']}>{item.info}</p>
                        </div>
                        ))}
                        -- more dates will be added throughout the quarter --
                    </section>
                    <aside className={styles['application-info-card']}>
                        <h3>Internship Applications Reopen Fall 2021</h3>
                        {/*
                            HIDE BUTTON TO APPLY TILL APPLICATIONS OPEN
                            once apps open, change above text to say "internship aplications are now open"
                        */}
                        {/* <div className={styles['application-button']}>
                            <Link href="">
                                <a className={'button'} target="_blank" rel="noreferrer noopener">
                                    Apply Now
                                </a>
                            </Link>
                        </div> */}
                    </aside>
                </div>
            </div>
            <div className={'content-section text-center'}>
                <h2>Intern to Officer Transition</h2>
                <p> Learn more about each committee&apos;s transition process! </p>
                <div className={styles['next-steps-grid']} role='tablist' aria-label="Intern to officer transition cards for each committee">
                    {internshipInfo.map(committee =>
                        <NextSteps
                            image={committee.image}
                            name={committee.name}
                            key={committee.name}
                            info={committee.internship.nextSteps}
                        />,
                    )}
                </div>
            </div>
            <div className={'content-section text-center'}>
                <h2>Hear from past interns!</h2>
                <div className={styles['testimonial-section']}>
                    {testimonials.map((testimonial, i) => (
                            <div key={i} className={styles['testimonial-item']}>
                                <p className={'text-left'}>{testimonial.quote}</p>
                                <p className={'text-right'}>- {testimonial.name} <br/> {testimonial.committee} intern, {testimonial.year}</p>
                            </div>
                    ))}
                </div>
            </div>
            <div className={'content-section'}>
                <h2 className={'text-center'}>FAQ</h2>
                <div className={styles.faq}>
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
