import React from 'react';
import '../styles/GameBoard.css';
import g123Image from '../image/BoardGame/start.png';
import g149Image from '../image/G-149.png';
import heading1lifeskillsImage from '../image/BoardGame/welcome.png';
import { useNavigate } from 'react-router-dom';
import Game from './Game';

const GameBoard: React.FC = () => {
    const navigate = useNavigate()
    const handleStart = () => {
        navigate("/start")
    }
    return (
        <div className="board">
            <Game />
            <div onClick={handleStart}> <img src={g123Image} alt="g123Image" className="g123-image" /></div>
            <img src={g149Image} alt="g149Image" className="g149-image" />
            <img src={heading1lifeskillsImage} alt="heading1lifeskillsImage" className="heading1lifeskills-image" />
        </div>
    );
}

export default GameBoard;
