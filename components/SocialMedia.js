import {
  faGithub,
  faFacebook,
  faInstagram,
  faDiscord,
  faYoutube,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function SocialMedia(props) {
  const iconType = props.type ? props.type : '';
  // see https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility#web-fonts-semantic
  // for more on accessibility
  return (
    <span className={'social-media-icon-container ' + iconType}>
      <a
        className="icon-link"
        href="https://www.facebook.com/uclaacm"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="ACM at UCLA on Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} fixedWidth aria-hidden={true} />
      </a>
      <a
        className="icon-link"
        href="https://www.github.com/uclaacm"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="ACM at UCLA on GitHub"
      >
        <FontAwesomeIcon icon={faGithub} fixedWidth aria-hidden={true} />
      </a>
      <a
        className="icon-link"
        href="https://www.instagram.com/acm.ucla/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="ACM at UCLA on Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} fixedWidth aria-hidden={true} />
      </a>
      <a
        className="icon-link"
        href="https://discord.gg/eWmzKsY"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="ACM at UCLA on Discord"
      >
        <FontAwesomeIcon icon={faDiscord} fixedWidth aria-hidden={true} />
      </a>
      <a
        className="icon-link"
        href="https://www.youtube.com/c/acmucla"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="ACM at UCLA on YouTube"
      >
        <FontAwesomeIcon icon={faYoutube} fixedWidth aria-hidden={true} />
      </a>
      <a
        className="icon-link"
        href="https://medium.com/techatucla"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="ACM at UCLA on Medium"
      >
        <FontAwesomeIcon icon={faMediumM} fixedWidth aria-hidden={true} />
      </a>
    </span>
  );
}

export default SocialMedia;
