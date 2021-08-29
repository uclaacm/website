import Image from 'next/image';
import React, {useState} from 'react';

function NextSteps(props) {
    const { image, name, info } = props;
    const [isFlipped, setFlipped] = useState(true);
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
                    {info}
                </div>
            </div>
        </div>
    );
}

export default NextSteps;
