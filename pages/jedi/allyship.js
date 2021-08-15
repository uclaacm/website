import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Layout from '../../components/Layout';

import tempJediCard from '../../public/images/jedi/allyship-space-temp.png';
import styles from '../../styles/pages/jedi.module.scss';

// TODO: move to its own data file!
const tempSpaces = [
  {
    title: 'jedi allyship space',
    date: 'April 20th 2021', // TODO: timestamp + conversions
    location: 'Boelter 2763',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    pic: tempJediCard,
    alt: 'a photo of Helia smiling',
    rsvp: 'https://medium.com/acm-at-ucla/may-the-force-be-with-acm-at-ucla-49e9258d71e1',
    slides: 'https://medium.com/acm-at-ucla/may-the-force-be-with-acm-at-ucla-49e9258d71e1',
  },
  {
    title: 'another jedi allyship space',
    date: 'April 20th 2021', // TODO: timestamp + conversions
    location: 'Boelter 2763',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    pic: tempJediCard,
    alt: 'a photo of Helia smiling',
    slides: 'https://medium.com/acm-at-ucla/may-the-force-be-with-acm-at-ucla-49e9258d71e1',
  },
];

const spaces = tempSpaces;

// TODO: move this into its own component!
function AllyshipSpaceCard({ title, date, location, description, pic, alt, rsvp, slides }) {
  return (
    <div className={styles['allyship-row']}>
      {/* TODO: better CSS styling */}
      <Image src={pic} alt={alt} />
      <div>
        <h3 className={styles['my-tight']}>{title}</h3>
        <p className={styles['my-tight']}>{date} | { location }</p>
        <p className={styles['my-tight']}>
          {description}
        </p>
        {/* TODO: icon fonts? */}
        {/* TODO: decoupling specific data structures */}
        {/* wrapped in a fragment to allow for spacing */}
        {rsvp && <><Link href={rsvp}><a className="button">RSVP</a></Link>{' '}</>}
        {slides && <><Link href={slides}><a className="button">Slides</a></Link>{' '}</>}
      </div>
    </div>
  );
}

function Allyship() {
	return (
		<Layout>
      <div className={styles.container}>
        <h1 className="text-right">allyship spaces</h1>
        <p className={`text-right ${styles['desktop-half-width-right']}`}>
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {spaces.map((space) => <AllyshipSpaceCard {...space} key={space.title} /> )}
      </div>
		</Layout>
	);
}

export default Allyship;
