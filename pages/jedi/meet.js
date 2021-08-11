import React from 'react';

import Layout from '../../components/Layout';

import styles from '../../styles/pages/jedi.module.scss';

// TODO: move to its own data file!
const tempJedis = [
  {
    name: 'helia woo',
    pronouns: 'she/her',
    bio: 'I lead JEDI!',
    pic: 'https://teachla.uclaacm.com/img/team/hwoo.png',
    alt: 'a photo of Helia smiling',
  },
  {
    name: 'helia woo',
    pronouns: 'she/her',
    bio: 'I lead JEDI!',
    pic: 'https://teachla.uclaacm.com/img/team/hwoo.png',
    alt: 'a photo of Helia smiling',
  },
  {
    name: 'helia woo',
    pronouns: 'she/her',
    bio: 'I lead JEDI!',
    pic: 'https://teachla.uclaacm.com/img/team/hwoo.png',
    alt: 'a photo of Helia smiling',
  },
  {
    name: 'helia woo',
    pronouns: 'she/her',
    bio: 'I lead JEDI!',
    pic: 'https://teachla.uclaacm.com/img/team/hwoo.png',
    alt: 'a photo of Helia smiling',
  },
];

const jedis = tempJedis;

// TODO: move this into its own component!
function JediCard({ name, pronouns, bio, pic, alt }) {
  return (
    <div>
      {/* TODO: better CSS styling */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles['jedi-profile-img']} src={pic} alt={alt} />
      <div className={styles['jedi-card-body']}>
        <h2>{name} <small>{pronouns}</small></h2>
        <p>
          {bio}
        </p>
      </div>
    </div>
  );
}

function Meet() {
	return (
		<Layout>
      <div className={styles.container}>
        <h1 className="text-right">meet the JEDIs</h1>
        <div className={styles['tri-grid']}>
          {jedis.map((jedi) => <JediCard {...jedi} key={jedi.name} /> )}
        </div>
      </div>
		</Layout>
	);
}

export default Meet;
