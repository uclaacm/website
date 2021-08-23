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
                title: 'Lorem ipsum dolor sit amet,',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: 'Nunc maximus, magna at ultricies elementum',
                content:
                    'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
            },
            {
                title: 'Curabitur laoreet, mauris vel blandit fringilla',
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
        ],
    },
    FAQStyles: {
        arrowColor: '#1E6CFF',
        rowContentPaddingTop: '15px',
        rowContentPaddingBottom: '15px',
    },
    responsive: {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
        },
    },
};
