import React from 'react';

export default {
    items: [
        {
            date: '00/00',
            name: 'apps open',
            info: 'information about the event',
            active: true,
        },
        {
            date: '00/00',
            name: 'apps due',
            info: 'information about the event',
            active: false,
        },
        {
            date: '00/00',
            name: 'interviews',
            info: 'information about the event',
            active: false,
        },
        {
            date: '00/00',
            name: 'hear back',
            info: 'information about the event',
            active: false,
        },
        {
            date: '00/00',
            name: 'onboarding',
            info: 'information about the event',
            active: false,
        },
    ],
    testimonials: [
        {
            name: 'Maya Raman',
            quote: <>
                <b>What is your favorite memory from being an intern?</b><br/>
                Accidentally breaking tables at the intern retreat
                <br/><br/><b>How much CS experience did you have before you became an intern?</b><br/>
                Not much - I took AP CS in high school and didn’t learn a ton,
                and when I applied to be an intern I was taking CS 31.
                <br/><br/><b>Are you still an officer in ACM? If so, in what Committee?</b><br/>
                Yes! I’m the director of ACM Impact!
                <br/><br/><b>What advice would you give to prospective interns?</b><br/>
                Try to maximize the amount of rejections you get - try everything!
            </>,
            image: '.',
            committee: 'AI',
            year: '2019-2020',
        },
        {
            name: 'Archisha Datta',
            quote: <>
                <b>What is your favorite memory from being an intern?</b><br/>
                My favorite memory is the first meeting we had for the learning lab I was working on.
                At the time, it seemed really scary to be thrown into a project with not a lot of experience,
                but looking back on it I’m proud of how much I learned since then.
                <br/><br/><b>How much CS experience did you have before you became an intern?</b><br/>
                I only knew basic programming (CS31) level when I became an intern.
                <br/><br/><b>Are you still an officer in ACM? If so, in what Committee?</b><br/>
                Yes, I’m the design director for TeachLA and I’m also getting involved in Design starting fall!
                <br/><br/><b>What advice would you give to prospective interns?</b><br/>
                If you’re on the fence about applying because you think you don’t have enough experience or
                you don’t feel like you belong in CS culture, I would give it a shot anyways!
                You might surprise yourself.
            </>,
            image: '.',
            committee: 'Teach LA',
            year: '2020-2021',
        },
    ],
    QA: {
        rows: [
            {
                title: 'What is the Internship Program?',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: 'What experience do you need to be an intern for ACM?',
                content: `None! We are looking for students that are passionate about computer science and are willing to learn. 
                Although a couple intern positions may state a preference for those with experience, 
                no experience is required for any Intern position.`,
            },
            {
                title: 'How many committees can I apply for?',
                content: 'You can apply to be an intern for up to 3 committees, but you may only be an intern for one of those committees.',
            },
            {
                title: 'When we apply to be an intern for a committee, do we apply to a specific intern position or just the committee as a whole?',
                content: `It depends on the committee. The application for each committee will ask what intern position you are interested in 
                if they want their prospective interns to apply to specific positions. But some committees will allow prospective interns to 
                just apply to the committee as a whole. `,
            },
            {
                title: 'How can I get involved in ACM if I am not an intern?',
                content: `If you are not an intern, there are plenty of ways to get involved in ACM. You can always attend workshops that different 
                committees are hosting. Subscribe to our Newsletter if you would like weekly updates on when workshops are. Some committees, like 
                Teach LA, allow students to be officers/contributing members without participating in the ACM Internship Program. `,
            },
            {
                title: 'I have more questions, how can I get them answered?',
                content: `If you have any questions about the application process or the Internship program in general email Ava Asmani, 
                the Internship Director[ava24@g.ucla.edu]. If you have any questions that are specific to committees, there will be an 
                Internship Program ACM Committee Info Session/QandA sometime in week 3 or 4 of the Fall Quarter.`,
            },
        ],
    },
    FAQStyles: {
        arrowColor: '#1E6CFF', // acm-cobalt hex value
        rowContentPaddingTop: '15px',
        rowContentPaddingBottom: '15px',
    },
    responsive: {
        // uses recommended defaults for carousel from "Common Usage" on https://www.npmjs.com/package/react-multi-carousel
        desktop:
        {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet:
        {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile:
        {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    },
};
