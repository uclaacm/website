import Link from 'next/link';
import React from 'react';

export default [
    {
        name: 'Board',
        class: 'board',
        image: '/images/committees/board_wordmark.svg',
        introImage: '/images/committees/studio/studio_motif_applied.png',
        infoCards: [
			{
				title: 'Board',
				image: {
					src: '',
					alt: '',
				},
				desc: '',
			}
        ],
        diamond: '/images/logo.png',
        links: [
			{
				platform: 'carrd',
				link: 'https://acmstudio.carrd.co/',
			},
			{
				platform: 'discord',
				link: 'https://discord.gg/9jDH6rN',
			},
			{
				platform: 'itch',
				link: 'https://acmstudio.itch.io/',
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acmstudio.ucla/?hl=en',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmstudio',
			},
		],
        internship: {
            whatWeDo: (
            <>
                With ACM being such a large organization, board serves to hold the club together.
                We plan club-wide events like general meeting in Fall and serve the committees
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
                    <li> Marketing handles social media platforms and communicate with committees as needed.</li>
                    <li> Moonshots handles bold, new initiatives for ACM to take on; past examples include <Link href="/impact"><a>Impact</a></Link> and <Link href="/jedi"><a>JEDI</a></Link>! </li>
                </ul>
            </> ),
            whatInternsWillDo: (
            <ul>
                <li> Operations Interns will lead important all-ACM events such as Winter GM. </li>
                <li> Internal Affairs interns will organize fun socials across committees.</li>
                <li> The Dev team interns will maintain existing ACM projects and add features. </li>
                <li> Dev Team interns will also build new ACM infrastructure and projects for the CS community</li>
                <li> The Impact interns will plan Impact events and help out with the blog</li>
                <li> JEDI interns will organize events, work on projects and conduct culture survey.</li>
                <li> External Affairs interns will plan out events like company tours and info-sessions</li>
                <li> Finance interns will draft finance requests and secure funding for events</li>
                <li> Alumni intern will organize panels and alumni social media groups.</li>
                <li> Marketing interns will advertise general ACM events and maintain our online presence.</li>
                <li> Photography interns will record memories of our events, and take headshots.</li>
                <li> Transfer Affairs Intern will coordinate events to engage the transfer community at UCLA.</li>

            </ul> ),
            card: '/images/cards/board_card.svg',
            nextSteps: 'Dev Team interns have the opportunity to become Dev Team officers in the spring. All other interns will run for a director position in the Spring or will no longer officially be a member of the board.',
        },
    },
];
