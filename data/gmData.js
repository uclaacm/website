// hold general information about the GM such as the date of the event, the graphic for the GM, times and links.
const generalInfo =
    {
        //date of GM
        date: {
            year: '2021',
            quarter: 'Quarter',

            //enter two digit month or day
            //make sure you enter two digits or the date will not work!!
            month: '01',
            day: '07',

            //enter in 24 hour time
            startTime: '18:30',
            endTime: '20:00',
        },

        //route for GM Graphic
        graphicRoute: '/images/Winter_GM_2021_graphic.png',

        //related links
        links: {
            youTube: 'https://www.youtube.com/c/acmucla',
            discord: 'https://bit.ly/ACMdiscord',
            linktree: 'https://linktr.ee/acmucla',
            recording: 'https://www.youtube.com/embed/cleSPlz2U1Q',
            slides: 'https://docs.google.com/presentation/d/1eF2d6VmHo1Pq-2MfXg0ezLSnnPz2bUWXHdyVjYb7WDE/edit?usp=sharing',
        },

        //speaker for welcome event
        welcomeSpeaker: 'ACM President',

        //times for individual events - refer to as gmData.times.name
        times: {
            welcome: 'Time 1',
            committees: 'Time 2',
            board: 'Time 3',
            social: 'Time 4',
            timezone: 'PST',
        },
    };

//speakers for individual committee presentations
const committeeData = [
    {
        id: 'studio',
        displayName: 'ACM Studio',
        speakers: 'Studio Speakers',
        logo: '/images/diamonds/studio_diamond.svg',
    },
    {
        id: 'icpc',
        displayName: 'ACM ICPC',
        speakers: 'ICPC Speakers',
        logo: '/images/diamonds/icpc_diamond.svg',
    },
    {
        id: 'design',
        displayName: 'ACM Design',
        speakers: 'Design Speakers',
        logo: '/images/diamonds/design_diamond.svg',
    },
    {
        id: 'cyber',
        displayName: 'ACM Cyber',
        speakers: 'Cyber Speakers',
        logo: '/images/diamonds/cyber_diamond.svg',
    },
    {
        id: 'teach',
        displayName: 'ACM Teach LA',
        speakers: 'Teach LA Speakers',
        logo: '/images/diamonds/teachla_diamond.svg',
    },
    {
        id: 'w',
        displayName: 'ACM W',
        speakers: 'W Speakers',
        logo: '/images/diamonds/w_diamond.svg',
    },
    {
        id: 'ai',
        displayName: 'ACM AI',
        speakers: 'AI Speakers',
        logo: '/images/diamonds/ai_diamond.svg',
    },
    {
        id: 'hack',
        displayName: 'ACM Hack',
        speakers: 'Hack Speakers',
        logo: '/images/diamonds/hack_diamond.svg',
    },
];

//speakers and data for board events
const boardEvents = [
    {
        logo: '/images/logo.png',
        displayName: 'ACM',
        eventName: 'Event 1',
        speakers: 'Speakers',
    },
    {
        logo: '/images/logo.png',
        displayName: 'ACM',
        eventName: 'Event 2',
        speakers: 'Speakers',
    },
];


export {
    generalInfo,
    boardEvents,
    committeeData,
};
