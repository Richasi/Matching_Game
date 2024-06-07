import React from 'react';
import '../styles/StartGame.css';
import group123Image from '../image/StartGame/Group-123.png';
import group149Image from '../image/Group-149.png';
import heading1lifeskillsImage from '../image/StartGame/Heading-1-life-skills.png';
import group156Image from '../image/StartGame/Group-156.png';
import group155Image from '../image/StartGame/Group-155.png';
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
        <div className="start-game-board">
            <Game />
            <div onClick={handleStart}>
                <img src={group123Image} alt="Group 123" className="group123-image" />
            </div>
            <img src={group149Image} alt="Group 149" className="group149-image" />
            <img src={heading1lifeskillsImage} alt="Heading Life Skills" className="heading1lifeskills1-image" />
            <img src={group155Image} alt="group155Image" className="group155-image" />
            <div onClick={handleBack}><img src={group156Image} alt="group156Image" className="group156-image" /></div>
        </div>
    );
}

export default StartGame;
