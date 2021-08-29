import Image from 'next/image';
import React, {useState} from 'react';

function CommitteeInternshipInfo(props) {
    const committees = props.committees;
    const [committeeName, setCommitteeName] = useState('Board');
    return(
        <div>
            <div className="content section logos-line">
                <div className="logo-diamond" onClick={()=>setCommitteeName('Board')}>
                    <Image
                      src={'/images/logo.png'}
                      id="acm-logo"
                      alt="ACM at UCLA Logo"
                      width="100px"
                      height="100px"
                    />
                </div>
                {committees.map(committee =>
                    <div className="logo-diamond" key={committee.name} onClick={()=>setCommitteeName(committee.name)}>
                        <Image
                            src={committee.diamond}
                            alt={`${committee.name}'s logo`}
                            width="100px"
                            height="100px"
                        />
                    </div>,
                )}
            </div>
            {committees.map(committee =>
                committeeName == committee.name ?
                <div className={'committee-internship-info ' + committee.class}key={committee.name}>
                    <Image
                        src={committee.image}
                        alt={`${committee.name}'s wordmark`}
                        height="60px"
                        width="250px"
                    />
                    {/* <img src={committee.image} alt="committee logo"/> */}
                    <h4>What do we do?</h4>
                    <p> {committee.whatWeDo} </p>
                    <h4>What interns will do?</h4>
                    <p> {committee.whatInternsWillDo} </p>
                </div> :  null,
            )}
            {committeeName == 'Board' ? <div className="committee-internship-info board">
                <Image
                    src={'/images/committees/board_wordmark.svg'}
                    alt="ACM at UCLA Logo"
                    height="60px"
                    width="250px"
                />
                <h4>What do we do?</h4>
                <p> With ACM being such a large organization, board serves to hold the club together. We plan club-wide events like ACM’s general meeting in Fall and serve the committees by taking care of club-wide logistics </p>
                <p>
                    Operations creates ACM-wide events and upkeeps ACM resources.
                    Dev Team upholds projects taken over the course of the year by ACM.
                    Impact focuses on spreading awareness  to the ACM community about the social impact of Technology/Computer Science.
                    External Affairs creates events between company affiliates and the general ACM community.
                    Finance handles finances within ACM at UCLA.
                    Internal Affairs maintains the culture of ACM by hosting events for all officers.
                </p>
                <h4>What interns will do?</h4>
                <p> 
                    The Operations interns will blahblah.
                    The Dev team interns will train and maintain existing ACM projects (website, discord bot, membership portal), adding features and dealing with issues.
                    The Impact interns will plan Impact events and help out with the blog
                    The External Affairs interns will work with companies and plan out events such as panels, company tours, and info-sessions.
                    The Finance interns will help draft various finance requests to send to the CS department and work with committees to secure funding for events.
                    The Internal Affairs interns will organize fun socials to bring officers across different committees together, collaborate with other committees and help create the weekly newsletters.
                </p>
            </div> : null}

        </div>
    );
}

export default CommitteeInternshipInfo;
