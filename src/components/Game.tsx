import React, { useEffect, useState } from 'react';
import '../styles/Game.css';
import monkeyImage from '../image/monkey.png';
import vectorImage from '../image/Vector-123.png';
import cogImage from '../image/Cog.png';
import starImage from '../image/Star.png';
import ellipse3091Image from '../image/Ellipse-309.png';
import ellipse3101Image from '../image/Ellipse-310.png';
import ellipse3092Image from '../image/Ellipse-309.png';
import ellipse3102Image from '../image/Ellipse-310.png';

const Game: React.FC = () => {
    const [jump, setJump] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setJump(prevJump => !prevJump);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="game">
            <img src={monkeyImage} alt="Monkey" className={`monkey-image ${jump ? 'jump' : ''}`} />
            <img src={vectorImage} alt="vectorImage" className="vector-image" />
            <img src={ellipse3091Image} alt="ellipse3091Image" className="ellipse3091-image" />
            <img src={ellipse3101Image} alt="ellipse3101Image" className="ellipse3101-image" />
            <img src={cogImage} alt="cogImage" className="cog-image" />
            <img src={starImage} alt="starImage" className="star-image" />
            <img src={ellipse3092Image} alt="ellipse3092Image" className="ellipse3092-image" />
            <img src={ellipse3102Image} alt="ellipse3102Image" className="ellipse3102-image" />
        </div>
    );
}

export default Game;
