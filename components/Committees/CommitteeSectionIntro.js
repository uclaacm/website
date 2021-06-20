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
        <div className="grid-tablet-2">
            <div className="grid-tablet-2-reverse">
                {/* TODO: we may want to make this image layout="fill"? it seems like pre-next, the proportion of the image changes, which is very tricky to deal with */}
                <Image src={props.committee.introImage} alt={`large motif image for ${props.committee.name}`} width={390} height={195}/>
            </div>
            <div className="pr-tablet-2">
                <h2>{props.committee.tagline}</h2>
                <p>{props.committee.mission}</p>
                <div className="learn-more">
                    <h3>Learn More</h3>
                    {props.committee.links.map(link =>
                        <CommitteeIconLink committee={props.committee} link={link} key={link.platform} />,
                    )}
                </div>
            </div>
        </div>
    );
}

export default CommitteeSectionIntro;
