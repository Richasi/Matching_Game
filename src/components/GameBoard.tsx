import React from 'react';
import '../styles/GameBoard.css';
import group123Image from '../image/BoardGame/start.png';
import group149Image from '../image/Group-149.png';
import heading1lifeskillsImage from '../image/BoardGame/welcome.png';
import { useNavigate } from 'react-router-dom';
import Game from './Game';

const GameBoard: React.FC = () => {
    const navigate = useNavigate()
    const handleStart = () => {
        navigate("/start")
    }
    return (
        <div className="game-board">
            <Game />
            <div onClick={handleStart}> <img src={group123Image} alt="group123Image" className="group123-image" /></div>
            <img src={group149Image} alt="group149Image" className="group149-image" />
            <img src={heading1lifeskillsImage} alt="heading1lifeskillsImage" className="heading1lifeskills-image" />
        </div>
    );
}

export default GameBoard;
