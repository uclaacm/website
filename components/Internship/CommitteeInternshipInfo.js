import Image from 'next/image';
import React, {useState} from 'react';

function CommitteeInternshipInfo(props) {
    const {committees} = props;
    const [committeeName, setCommitteeName] = useState('Board');
    return(
        <>
            <div className="content section logos-line">
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
                    <h4>What do we do?</h4>
                    <p> {committee.internship.whatWeDo} </p>
                    <h4>What will interns do?</h4>
                    <p> {committee.internship.whatInternsWillDo} </p>
                </div> :  null,
            )}
        </>
    );
}

export default CommitteeInternshipInfo;
