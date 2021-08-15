import Link from 'next/link';
import React from 'react';

import { blogLink } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';

const links = [
  {
    path: '/jedi',
    title: 'home',
  },
  {
    path: '/jedi/meet',
    title: 'meet the JEDIs',
  },
  {
    path: '/jedi/allyship',
    title: 'allyship spaces',
  },
  {
    path: blogLink,
    title: 'blog',
    ext: true,
  },
];

function NavLink({ path, title, ext }){
  return <Link href={path}><a className={styles['jedi-link']} target={ext ? '_blank': ''} rel={ext ? 'noopener noreferrer' : ''}>{title}</a></Link>;
}

function JEDINav() {
  return (
    <ul className={styles['jedi-horz-nav']}>
      {links.map((link) => <li key={link.path}><NavLink {...link}/></li>)}
    </ul>
  );
}

export default JEDINav;
