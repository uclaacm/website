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
                    <h4>Time Commitment</h4>
                    <p> {committee.timeCommitment} </p>
                    <h4>Post Internship</h4>
                    <p> {committee.postInternship} </p>
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
                <p> board whatWeDo </p>
                <h4>Time Commitment</h4>
                <p> board timeCommitment </p>
                <h4>Post Internship</h4>
                <p> board postInternship </p>
            </div> : null}

        </div>
    );
};

export default CommitteeInternshipInfo;