import React from 'react';

export default [
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
                <li> Operations Interns will work on and lead important all-ACM events such as Winter GM,
                    Faculty Fireside, and Implicit Bias / Imposter Syndrome workshops throughout the year. </li>
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
];
