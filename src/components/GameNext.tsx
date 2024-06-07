import React, { useEffect, useState } from 'react';
import '../styles/NextGame.css';
import monkeyImage from '../image/monkey.png';
import group148Image from '../image/NextGame/Group-148.png';
import group154Image from '../image/NextGame/Group-154.png';
import vectorImage from '../image/Vector-123.png';
import group123Image from '../image/NextGame/Group-123.png';
import group149Image from '../image/Group-149.png';
import heading1lifeskillsImage from '../image/NextGame/Heading-life-skills.png';
import group156Image from '../image/StartGame/Group-156.png';
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
        <div className="next-game">
            <img src={monkeyImage} alt="Monkey" className={`monkey-image ${jump ? 'jump' : ''}`} />
            <img src={vectorImage} alt="Vector" className="vector-image" />
            <div onClick={handleStart}>
                <img src={group123Image} alt="Group 123" className="group123-image" />
            </div>
            <img src={group149Image} alt="Group 149" className="group149-image" />
            <img src={heading1lifeskillsImage} alt="Heading Life Skills" className="heading1lifeskill2-image" />
            <img src={emojiImage} alt="emojiImage" className="emoji-image" />
            <div onClick={handleBack}><img src={group156Image} alt="group156Image" className="group156-image" /></div>
            <img src={group148Image} alt="group148Image" className="group148-image" />
            <img src={group154Image} alt="group154Image" className="group154-image" />
        </div>
    );
}

export default NextGame;
