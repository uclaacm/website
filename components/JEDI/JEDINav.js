import Link from 'next/link';
import { blogLink } from '../../data/jedi';
import styles from '../../styles/pages/jedi.module.scss';

const links = [
  {
    path: '/jedi',
    title: 'home',
    ext: false,
  },
  {
    path: '/jedi/meet',
    title: 'meet the JEDIs',
    ext: false,
  },
  {
    path: '/jedi/allyship',
    title: 'allyship spaces',
    ext: false,
  },
  {
    path: blogLink,
    title: 'blog',
    ext: true,
  },
];

function NavLink({ path, title, ext }) {
  return (
    (<Link
      href={path}
      className={styles['jedi-link']}
      target={ext ? '_blank' : ''}
      rel={ext ? 'noopener noreferrer' : ''}>

      {title}

    </Link>)
  );
}

function JEDINav() {
  return (
    <nav id="jedi-nav" className={styles['mt-2']} aria-label="JEDI side nav">
      <ul className={styles['jedi-horz-nav']}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default JEDINav;
