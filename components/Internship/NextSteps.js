import Image from 'next/image';
import React, {useState} from 'react';

function NextSteps(props) {
    const { image, name } = props;
    const [isFlipped,setFlipped] = useState(true);
    return (
        <div className="committee-card" onClick={() => setFlipped(!isFlipped)}>
            <div className={isFlipped ? 'next-steps-card-inner' : 'next-steps-card-inner is-flipped'}>
                <div className='next-steps-card-face'>
                    <Image
                        src={image}
                        alt={`${name}'s card motif`}
                        layout='fill'
                    />
                </div>
                <div className='next-steps-card-face back'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    );
}

export default NextSteps;
