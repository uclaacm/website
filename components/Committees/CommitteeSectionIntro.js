import {
    faFacebook,
    faInstagram,
    faDiscord,
    faTwitter,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

function CommitteeIconLink({committee, link}) {
    const committeeStr = `acm ${committee.name}`;
    const iconStr = link.platform === 'website' ? `${committeeStr}'s website` : `${committeeStr} on ${link.platform}`;
    return (
        <a
            className={`icon-link ${committee.class}`}
            href={link.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={iconStr}
        >
            <CommitteeIcon platform={link.platform} />
        </a>
    );
}

// TODO: down the line, this can be refactored into a utility!
function CommitteeIcon({platform}) {
    // see https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility#web-fonts-semantic
    // for more on accessibility
    switch(platform) {
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

// TODO: props destructuring
function CommitteeSectionIntro(props) {
    return (
        <div className="intro-row">
            <div className="show-mobile">
                {/* TODO: this should have an alt tag */}
                <Image src={props.committee.introImage} alt="" width={390} height={195}/>
                <p>{props.committee.introImageDesc}</p>
            </div>
            <div className="left-col">
                <h2>{props.committee.tagline}</h2>
                <p>{props.committee.mission}</p>
                <div className="learn-more">
                    <h3>Learn More</h3>
                    {props.committee.links.map(link =>
                        <CommitteeIconLink committee={props.committee} link={link} key={link.platform} />,
                    )}
                </div>
            </div>
            {/* TODO: we can easily refactor this with the above .show-mobile to reduce code dupe */}
            <div className="right-col">
                <Image src={props.committee.introImage} alt="" width={390} height={195}/>
                <p>{props.committee.introImageDesc}</p>
            </div>
        </div>
    );
}

export default CommitteeSectionIntro;
