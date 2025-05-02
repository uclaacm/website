import Image from 'next/legacy/image';
import React from 'react';
import styles from '../../styles/pages/impact.module.scss';

// Import Instagram logo
import instagramLogo from '../../public/images/social/instagram.svg';

const InstagramFeed = ({ username = 'impact_ucla' }) => {
  const profileUrl = `https://www.instagram.com/${username}/`;

  return (
    <div className={styles.instagramContainer}>
      <div className={styles.instagramContent}>
        <div className={styles.instagramInfo}>
          <h4>Follow us on Instagram!</h4>
          <p>
            Stay updated on our latest events, initiatives, and announcements by following
            our Instagram account.
          </p>
          <p>
            <strong>
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.instagramLink}
              >
                @{username}
              </a>
            </strong>
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.instagramButton}
          >
            <div className={styles.instagramIconContainer}>
              {/* If you have the Instagram SVG icon in your public folder */}
              <Image
                src={instagramLogo || '/images/social/instagram.svg'}
                alt="Instagram"
                width={24}
                height={24}
              />
            </div>
            Visit Our Instagram
          </a>
        </div>
        <div className={styles.instagramPreview}>
          <p>Recent posts from ACM Impact:</p>
          <div className={styles.instagramMessage}>
            Due to Instagram&rsquo;s embedding restrictions, we can&rsquo;t display our feed directly on this page.
            Click the button above to see our latest posts!
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
