import Link from 'next/link';
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
                    <li> Internal Affairs maintains the culture of ACM by hosting events for all officers </li>
                    <li> Dev Team upholds projects taken over the course of the year by ACM</li>
                    <li> Impact focuses on spreading awareness  to the ACM community about the social
                        impact of Technology/Computer Science</li>
                    <li> External Affairs creates events between company affiliates and the general ACM community</li>
                    <li> Finance handles finances within ACM at UCLA</li>
                    <li> Alumni is responsible for creating alumni events and managing the alumni network to improve
                        our current relations with past ACM at UCLA officers.</li>
                    <li> Marketing handles ACM’s social media platforms and communicate with committees as needed.</li>
                    <li> Moonshots handles bold, new initiatives for ACM to take on; past examples include <Link href="/impact"><a>Impact</a></Link> and <Link href="/jedi"><a>JEDI</a></Link>! </li>
                </ul>
            </> ),
            whatInternsWillDo: (
            <ul>
                <li> Operations Interns will work on and lead important all-ACM events such as Winter GM,
                    Faculty Fireside, and Implicit Bias / Imposter Syndrome workshops throughout the year. </li>
                <li> The Internal Affairs interns will organize fun socials to bring officers across different
                     committees together, collaborate with other committees and help create the weekly newsletters</li>
                <li> The Dev team interns will train and maintain existing ACM projects
                    (website, discord bot, membership portal), adding features and dealing with issues</li>
                <li> The Impact interns will plan Impact events and help out with the blog</li>
                <li> JEDI interns will work with the JEDI director to organize events, collaborate with the dev team to work on projects like the Anti-Resume, and conduct the ACM culture survey.</li>
                <li> The External Affairs interns will work with companies and plan out events
                    such as panels, company tours, and info-sessions</li>
                <li> The Finance interns will help draft various finance requests to send to the CS department
                    and work with committees to secure funding for events</li>
                <li> The Alumni intern will work with alumni to organize panels and other events. Assist with a
                    quarterly alumni newsletter and alumni social media groups.</li>
                <li> The Marketing interns will work with the marketing team to advertise general ACM events, maintain
                    ACM’s online presence, and develop strategies for marketing and publicity. Assist with ACM’s social
                    media and weekly newsletter.</li>
                <li> Photography interns will work with the marketing team to take pictures, record memories of ACM’s events, and take headshots for ACM officers and interns.</li>
                <li> Transfer Affairs Intern Coordinates events focused on engaging the transfer community and help connect transfer students to resources within the CS community at UCLA.</li>

            </ul> ),
            card: '/images/cards/board_card.svg',
            nextSteps: 'Dev Team interns have the opportunity to become Dev Team officers in the spring. All other Interns will run for a director position in the Spring or will no longer officially be a member of the board.',
        },
    },
];
