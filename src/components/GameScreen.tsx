import React from 'react';
import '../styles/ScreenGame.css';
import g123Image from '../image/ScreenGame/G-123.png';
import g148Image from '../image/ScreenGame/G-148.png';
import g154Image from '../image/ScreenGame/G-154.png';
import g156Image from '../image/ScreenGame/G-156.png';
import vector7Image from '../image/ScreenGame/Vector-7.png';
import frame17Image from '../image/ScreenGame/Frame-17.png';
import { useNavigate } from 'react-router-dom';
import cardsData from '../assets/data';

const ScreenGame: React.FC = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/gamestart");
    }
    const handleBack = () => {
        navigate("/start");
    }


    return (
        <div className="game-screen">
            <div onClick={handleStart}>
                <img src={g123Image} alt="G 123" className="g123-image" />
            </div>
            <div onClick={handleBack}><img src={g156Image} alt="g156Image" className="g156-image" /></div>
            <img src={g148Image} alt="g148Image" className="g148-image" />
            <img src={g154Image} alt="g154Image" className="g154-image" />
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

export default ScreenGame;
