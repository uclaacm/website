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
            name: 'Jane Doe',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: '.',
            committee: 'Cyber',
            year: '2018',
        },
        {
            name: 'Joe Bruin',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: '.',
            committee: 'Studio',
            year: '2019',
        },
        {
            name: 'Josie Bruin',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: '.',
            committee: 'Hack',
            year: '2020',
        },
        {
            name: 'Jane Doe',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: '.',
            committee: 'AI',
            year: '2018',
        },
        {
            name: 'Joe Bruin',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: '.',
            committee: 'Board',
            year: '2019',
        },
        {
            name: 'Josie Bruin',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: '.',
            committee: 'Hack',
            year: '2020',
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
