import React, { useEffect, useState } from 'react';
import '../styles/NextGame.css';
import monkeyImage from '../image/monkey.png';
import g148Image from '../image/NextGame/G-148.png';
import g154Image from '../image/NextGame/G-154.png';
import vectorImage from '../image/Vector-123.png';
import g123Image from '../image/NextGame/G-123.png';
import g149Image from '../image/G-149.png';
import heading1lifeskillsImage from '../image/NextGame/Heading-life-skills.png';
import g156Image from '../image/StartGame/G-156.png';
import emojiImage from '../image/NextGame/Emoji.png';

import { useNavigate } from 'react-router-dom';

const NextGame: React.FC = () => {
    const navigate = useNavigate();
    const [jump, setJump] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setJump(prevJump => !prevJump);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleStart = () => {
        navigate("/play");
    }
    const handleBack = () => {
        navigate("/start");
    }

    return (
        <div className="next">
            <img src={monkeyImage} alt="Monkey" className={`monkey-image ${jump ? 'jump' : ''}`} />
            <img src={vectorImage} alt="Vector" className="vector-image" />
            <div onClick={handleStart}>
                <img src={g123Image} alt="G 123" className="g123-image" />
            </div>
            <img src={g149Image} alt="G 149" className="g149-image" />
            <img src={heading1lifeskillsImage} alt="Heading Life Skills" className="heading1lifeskill2-image" />
            <img src={emojiImage} alt="emojiImage" className="emoji-image" />
            <div onClick={handleBack}><img src={g156Image} alt="g156Image" className="g156-image" /></div>
            <img src={g148Image} alt="g148Image" className="g148-image" />
            <img src={g154Image} alt="g154Image" className="g154-image" />
        </div>
    );
}

export default NextGame;
