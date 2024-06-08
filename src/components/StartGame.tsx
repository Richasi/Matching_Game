import React from 'react';
import '../styles/StartGame.css';
import g123Image from '../image/StartGame/G-123.png';
import g149Image from '../image/G-149.png';
import heading1lifeskillsImage from '../image/StartGame/Heading-1-life-skills.png';
import g156Image from '../image/StartGame/G-156.png';
import g155Image from '../image/StartGame/G-155.png';
import { useNavigate } from 'react-router-dom';
import Game from './Game';

const StartGame: React.FC = () => {
    const navigate = useNavigate();


    const handleStart = () => {
        navigate("/next");
    }
    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="start-board">
            <Game />
            <div onClick={handleStart}>
                <img src={g123Image} alt="G 123" className="g123-image" />
            </div>
            <img src={g149Image} alt="G 149" className="g149-image" />
            <img src={heading1lifeskillsImage} alt="Heading Life Skills" className="heading1lifeskills1-image" />
            <img src={g155Image} alt="g155Image" className="g155-image" />
            <div onClick={handleBack}><img src={g156Image} alt="g156Image" className="g156-image" /></div>
        </div>
    );
}

export default StartGame;
