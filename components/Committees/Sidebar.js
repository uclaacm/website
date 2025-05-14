// import Image from 'next/image';
import { useEffect, useState } from 'react';

function SidebarLink(props) {
  return (
    <a
      className={`committee ${props.committee.class}`}
      href={`#${props.committee.class}`}
    >
      <div className="committee-sidebar-image">
        {/* TODO: resolve next/image issue */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.committee.image}
          alt={`Logo and Wordmark for ACM ${props.committee.name}`}
        />
      </div>
    </a>
  );
}

function Sidebar(props) {
  // Check if user has scrolled to the bottom of the page
  const footerHeight = 507.667; // is there a better way to do this?
  const [bottom, setBottom] = useState(false);
  const scrollBottomListener = () => {
    const difference =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = document.documentElement.scrollTop;
    setBottom(difference - scrollposition <= footerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollBottomListener);

    // cleanup
    return () => {
      window.removeEventListener('scroll', scrollBottomListener);
    };
  }, []);

  /*
  // Don't display sidebar if user has scrolled to the bottom of the screen
  if (bottom) {
    return null;
  }
  */

  return (
    <div className="sidebar-item">
      {props.committees.map((committee) => (
        <SidebarLink key={committee.name} committee={committee} />
      ))}
    </div>
  );
}

export default Sidebar;
