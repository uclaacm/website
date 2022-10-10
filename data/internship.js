/* eslint-disable max-len */

import React from 'react';
import styles from '../styles/pages/Internship.module.scss';

export default {
    items: [
        {
            date: '9/27',
            name: 'Fall General Meeting',
            info: 'Come learn about the different ACM committees!',
            active: true,
        },
        {
            date: '10/10',
            name: 'Application Form is Open',
            info: 'Fill out the application form for up to 3 committees that you would like to intern for',
            active: true,
        },
        {
            date: '10/19',
            name: 'Applications Due',
            info: 'Submit your application by 11:59 pm',
            active: true,
        },
        {
            date: '10/20-11/12',
            name: 'Interviews',
            info: 'A handful of applicants will be chosen for an interview with the committee(s) you applied to',
            active: true,
        },
        {
            date: '11/14',
            name: 'Decisions Released',
            info: 'Hear back via Email what committee(s) accepted you (if you are accepted by two, decide which one you would like to intern for)',
            active: true,
        },
        {
            date: '11/18',
            name: 'Official ACM Onboarding',
            info: 'Learn what you need to know as an ACM Intern',
            active: true,
        },
    ],
    testimonials: [
        {
            name: 'Maya Raman',
            quote: <>
                <h3 className={styles['testimonial-question']}>What is your favorite memory from being an intern?</h3>
                <span>Accidentally breaking tables at the intern retreat</span>
                <h3 className={styles['testimonial-question']}>How much CS experience did you have before you became an intern?</h3>
                <span>Not much - I took AP CS in high school and didn’t learn a ton, and when I applied to be an intern I was taking CS 31.</span>
                <h3 className={styles['testimonial-question']}>Are you still an officer in ACM? If so, in what Committee?</h3>
                <span>Yes! I’m the director of ACM Impact!</span>
                <h3 className={styles['testimonial-question']}>What advice would you give to prospective interns?</h3>
                <span>Try to maximize the amount of rejections you get - try everything!</span>
            </>,
            committee: 'AI',
            year: '2019-2020',
        },
        {
            name: 'Archisha Datta',
            quote: <>
                <h3 className={styles['testimonial-question']}>What is your favorite memory from being an intern?</h3>
                <span>My favorite memory is the first meeting we had for the learning lab I was working on. At the time, it seemed really scary to be thrown into a project with not a lot of experience, but looking back on it I’m proud of how much I learned since then.</span>
                <h3 className={styles['testimonial-question']}>How much CS experience did you have before you became an intern?</h3>
                <span>I only knew basic programming (CS31) level when I became an intern.</span>
                <h3 className={styles['testimonial-question']}>Are you still an officer in ACM? If so, in what Committee?</h3>
                <span>Yes, I’m the design director for TeachLA and I’m also getting involved in Design starting fall!</span>
                <h3 className={styles['testimonial-question']}>What advice would you give to prospective interns?</h3>
                <span>If you’re on the fence about applying because you think you don’t have enough experience or you don’t feel like you belong in CS culture, I would give it a shot anyways! You might surprise yourself.</span>
            </>,
            committee: 'Teach LA',
            year: '2020-2021',
        },
    ],
    QA: [
        {
            title: 'What is the Internship Program?',
            content: 'The ACM Internship program is a program that facilitates the transition of UCLA students to ACM officers. Interns learn about the ACM committee they are interning for and ACM in general before becoming an official ACM officer. Although ACM Interns are not paid, they gain valuable experience organizing events, teaching programming classes, designing event banners, and more.',
        },
        {
            title: 'What experience do you need to be an intern for ACM?',
            content: 'None! We are looking for students that are passionate about computer science and are willing to learn. Although a couple intern positions may state a preference for those with experience, no experience is required for any intern position.',
        },
        {
            title: 'How many committees can I apply for?',
            content: 'You can apply to be an intern for up to 2 committees, but you may only be an intern for one of those committees.',
        },
        {
            title: 'When we apply to be an intern for a committee, do we apply to a specific intern position or just the committee as a whole?',
            content: 'It depends on the committee. The application for each committee will ask what intern position you are interested in if they want their prospective interns to apply to specific positions. Other committees will allow prospective interns to just apply to the committee as a whole.',
        },
        {
            title: 'How can I get involved in ACM if I am not an intern?',
            content: 'If you are not an intern, there are plenty of ways to get involved in ACM. You can always attend workshops that different committees are hosting. Subscribe to our newsletter if you would like weekly updates on when workshops are. Some committees, like Teach LA, allow students to be officers/contributing members without participating in the ACM Internship Program.',
        },
        {
            title: 'I have more questions, how can I get them answered?',
            content: <>If you have any questions about the application process or the Internship program in general email <a href="mailto:veronicasalas@g.ucla.edu">Veronica Salas (veronicasalas@g.ucla.edu)</a>, the Internship Affairs Director or <a href= "mailto:anmolgupta23@g.ucla.edu" > Anmol Gupta (anmolgupta23@g.ucla.edu)</a>, the Internship Trainning Director.</>,
        },
    ],
};
