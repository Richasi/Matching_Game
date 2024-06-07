import React from 'react';
import '../styles/ScreenGame.css';
import group123Image from '../image/ScreenGame/Group-123.png';
import group148Image from '../image/ScreenGame/Group-148.png';
import group154Image from '../image/ScreenGame/Group-154.png';
import group156Image from '../image/ScreenGame/Group-156.png';
import vector7Image from '../image/ScreenGame/Vector-7.png';
import frame17Image from '../image/ScreenGame/Frame-17.png';
import { useNavigate } from 'react-router-dom';
import cardsData from '../assets/data';

const DescribeGame: React.FC = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/gamestart");
    }
    const handleBack = () => {
        navigate("/start");
    }


    return (
        <div className="game-describe">
            <div onClick={handleStart}>
                <img src={group123Image} alt="Group 123" className="group123-image" />
            </div>
            <div onClick={handleBack}><img src={group156Image} alt="group156Image" className="group156-image" /></div>
            <img src={group148Image} alt="group148Image" className="group148-image" />
            <img src={group154Image} alt="group154Image" className="group154-image" />
            <div className="gridContainer">
                {cardsData.map((card) => (
                    <div className="card" key={card.id}>
                        {card.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={image}
                                className={card.styles[index]}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <img src={vector7Image} alt="vector7Image" className="vector7-image" />
            <img src={frame17Image} alt="frame17Image" className="frame17-image" />
        </div>

    );
}

export default DescribeGame;
