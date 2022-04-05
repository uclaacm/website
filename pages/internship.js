import { NextSeo } from 'next-seo';
import Link from 'next/link';

import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Banner from '../components/Banner';
import CommitteeInternshipInfo from '../components/Internship/CommitteeInternshipInfo';
import InternshipTimeline from '../components/Internship/InternshipTimeline';
import NextSteps from '../components/Internship/NextSteps';
import Layout from '../components/Layout';


import data from '../data';

import styles from '../styles/pages/Internship.module.scss';

const { committees, internship, board } = data;

const internshipInfo = board.concat(committees);
const { items, testimonials, QA } = internship;

function InternshipPage(){
    return(
        <Layout>
            <NextSeo
				title="Internship | ACM at UCLA"
				description="ACM's internship program facilitates the transition of UCLA students to ACM officers. Interns learn about the committee you are interning for and ACM in general."
                openGraph={{
					images: [
						{
							url: 'https://www.uclaacm.com/images/logo.png',
							width: 1200,
							height: 1200,
							alt: 'The ACM at UCLA logo',
						},
					],
					site_name: 'ACM at UCLA',
				}}
            />
            <Banner decorative />
            <div className={'content-section text-center'}>
                <h1>The Internship Program</h1>
                {/* eslint-disable-next-line max-len */}
                <h2>The internship program is currently closed until Fall 2022, but some ACM committees are currently recruiting officers!</h2>
                <p className={styles['internship-intro']}>The ACM Internship program is a program that facilitates the transition of UCLA students to ACM officers. Interns learn about the ACM committee they are interning for and ACM in general before becoming an official ACM officer.</p>
                <p className={styles['internship-intro']}>Click on the different ACM subcommittee icons in order to learn more about what interns in each committee do and scroll down to find more information on how you can apply to the Internship Program.</p>
            </div>
            <CommitteeInternshipInfo
                committees={internshipInfo}
            />
            <div className={'content-section text-center'}>
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
                    </section>
                    <aside className={styles['application-info-card']}>
                        <h3>ACM is recruiting officers for Spring 2022!</h3>
                        <div className={styles['application-button']}>
                            <Link href="https://tinyurl.com/acmspringofficer">
                                <a className={'button'} target="_blank" rel="noreferrer noopener">
                                    Apply Now
                                </a>
                            </Link>
                        </div>
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
                <Accordion
                    className={styles.faq}
                    allowMultipleExpanded={true}
                    allowZeroExpanded={true}
                    >
                    {QA.map((QandA,i) => (
                        <AccordionItem key={i} className={styles['faq-item']}>
                            <AccordionItemHeading>
                                <AccordionItemButton className={styles['faq-question']}>
                                    {QandA.title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={styles['faq-content']}>
                                <p>
                                {QandA.content}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Layout>
    );
}

export default InternshipPage;
