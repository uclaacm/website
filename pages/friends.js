import { NextSeo } from 'next-seo';
import Image from 'next/image';
import {
  faFacebook,
  faInstagram,
  faDiscord,
  faTwitter,
  faGithub,
  faItchIo,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import Banner from '../components/Banner';

import styles from '../styles/pages/friends.module.scss';

import friends from '../data/friends';

// From `committees.js` - refactor into utility
function LinkIcon({ platform }) {
  // see https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility#web-fonts-semantic
  // for more on accessibility
  switch (platform) {
    case 'itch':
      return <FontAwesomeIcon icon={faItchIo} fixedWidth aria-hidden={true} />;
    case 'discord':
      return <FontAwesomeIcon icon={faDiscord} fixedWidth aria-hidden={true} />;
    case 'facebook':
      return <FontAwesomeIcon icon={faFacebook} fixedWidth aria-hidden={true} />;
    case 'github':
      return <FontAwesomeIcon icon={faGithub} fixedWidth aria-hidden={true} />;
    case 'instagram':
      return <FontAwesomeIcon icon={faInstagram} fixedWidth aria-hidden={true} />;
    case 'twitter':
      return <FontAwesomeIcon icon={faTwitter} fixedWidth aria-hidden={true} />;
    case 'website':
    default:
      return <FontAwesomeIcon icon={faLink} fixedWidth aria-hidden={true} />;
  }
}

function FriendIconLink({ friend, link }) {
  const iconStr =
    link.platform === 'website' ? `${friend}'s website` : `${friend} on ${link.platform}`;
  return (
      <a
        className='icon-link'
        href={link.link}
        target='_blank'
        rel='noreferrer noopener'
        aria-label={iconStr}
      >
        <LinkIcon platform={link.platform} />
      </a>
  );
}

function FriendCard({ friend }) {
  return (
    <div className={styles['friend-card']}>

      <div className={styles['friend-card-image']}>
        <Image className={styles['image']} src={friend.image} alt={friend.name} width={150} height={150} />
      </div>
      
      <div className={styles['friend-card-info']}>
        <h2 className={styles['friend-card-name']}>{friend.name}</h2>
        <p>{friend.description}</p>
        {/* Links Section */}
        {friend.links.length > 0 && (
          <div className={styles['friend-links-container']}>
            {friend.links.map((link, index) => (
                <FriendIconLink org={friend.name} link={link} key={index} />
            ))}
          </div>
        )}
        {/* Compact Horizontal Projects */}
        {/* Potentially make the projects a dropdown if the list gets too long in the future? */}
        {friend.projects.length > 0 && (
          <>
            <hr className={styles['projects-separator']} />
            <h3>Past Collaborations</h3>
            <div className={styles['project-cards']}>
              {friend.projects.map((project, index) => (
                <div key={index} className={styles['project-card']}>
                  {project.image && <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={80} 
                    height={80} 
                  />}
                  <div className={styles['project-card-info']}>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </div>
              ))}  
            </div>
          </>
        )}
      </div>

    </div>
  );
}

function Friends() {
  return (
    <Layout>
      <NextSeo
        title='Partner Organizations | ACM at UCLA'
        description="ACM at UCLA couldn't happen without our amazing sponsors, partners, and affiliates that support all of our work. Interested in parterning with us? Send as an email at acm@ucla.edu!"
        openGraph={{
          images: [
            {
              url: 'https://www.uclaacm.com/images/logo.png',
              width: 1200,
              height: 1200,
              alt: 'The ACM at UCLA logo',
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <Banner decorative />

      <h1 className='text-center'>Friends of ACM</h1>

      <div className={styles['friend-cards']}>
        {friends.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>

    </Layout>
  )
}

export default Friends;