import React, { useEffect, useState } from 'react';
import { Card, GameState } from '../assets/types';
import '../styles/GameStart.css';
import { useNavigate } from 'react-router-dom';
import group156Image from '../image/ScreenGame/Group-156.png';
import appleImage from '../image/GameStart/apple.png';
import aImage from '../image/GameStart/A.png';
import oImage from '../image/GameStart/O.png';
import orangeImage from '../image/GameStart/orange.png';
import bImage from '../image/GameStart/b.jpg';
import bananaImage from '../image/GameStart/banana.jpg';
import gImage from '../image/GameStart/G.jpg';
import grapesImage from '../image/GameStart/grapes.png';
import pineapleImage from '../image/GameStart/pineapple.jpg';
import banana1 from "../image/GameStart/banana1.png";
import banana2 from "../image/GameStart/banana2.png";
import banana3 from "../image/GameStart/banana3.png";
import banana4 from "../image/GameStart/banana4.png";
import banana5 from "../image/GameStart/banana5.png";
import tryAgain from "../image/GameStart/try.png";
import pImage from '../image/GameStart/p.jpg';
import mangoImage from '../image/GameStart/mongo.avif';
import mImage from '../image/GameStart/Ma.jpg';
import earned from "../image/GameStart/Group-146-Earned.png";
import monkey6 from "../image/GameStart/monkey6.png";


const initialCards: Card[] = [
  { id: 1, type: 'fruit', content: appleImage, isFlipped: false, isMatched: false },
  { id: 2, type: 'fruit', content: bananaImage, isFlipped: false, isMatched: false },
  { id: 3, type: 'fruit', content: grapesImage, isFlipped: false, isMatched: false },
  { id: 4, type: 'fruit', content: pineapleImage, isFlipped: false, isMatched: false },
  { id: 5, type: 'fruit', content: mangoImage, isFlipped: false, isMatched: false },
  { id: 6, type: 'fruit', content: orangeImage, isFlipped: false, isMatched: false },
  { id: 7, type: 'alphabet', content: aImage, isFlipped: false, isMatched: false },
  { id: 8, type: 'alphabet', content: bImage, isFlipped: false, isMatched: false },
  { id: 9, type: 'alphabet', content: gImage, isFlipped: false, isMatched: false },
  { id: 10, type: 'alphabet', content: pImage, isFlipped: false, isMatched: false },
  { id: 11, type: 'alphabet', content: mImage, isFlipped: false, isMatched: false },
  { id: 12, type: 'alphabet', content: oImage, isFlipped: false, isMatched: false },
];

const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const GameStart: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    cards: shuffle(initialCards.slice()),
    moves: 0,
    matches: 0,
  });
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/start");
  }

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCardsForModal, setMatchedCardsForModal] = useState<Card[]>([]);
  const [showMatchMessage, setShowMatchMessage] = useState(false);
  const [showEarnedModal, setShowEarnedModal] = useState(false);
  const [showTryAgainModal, setShowTryAgainModal] = useState(false);

  useEffect(() => {
    if (gameState.matches === 6) {
      setShowEarnedModal(true);
      setTimeout(() => {
        setShowEarnedModal(false);
        setGameState({
          cards: shuffle(initialCards),
          moves: 0,
          matches: 0,
        });
        navigate("/play");
      }, 3000);
    }
  }, [gameState.matches, navigate]);

  useEffect(() => {
    if (gameState.moves === 6 && gameState.matches < 6) {
      setShowTryAgainModal(true);
      setTimeout(() => {
        setShowTryAgainModal(false);
        setGameState({
          cards: shuffle(initialCards),
          moves: 0,
          matches: 0,
        });
        navigate("/play");
      }, 3000);
    }
  }, [gameState.moves, gameState.matches, navigate]);

  useEffect(() => {
    setGameState(prevState => ({
      ...prevState,
      cards: shuffle(initialCards.map(card => ({ ...card, isFlipped: false, isMatched: false }))),
      moves: 0,
      matches: 0,
    }));
  }, []);


  const handleCardClick = (id: number) => {
    if (selectedCards.length >= 2 || gameState.moves >= 6) return;

    setGameState(prevState => {
      const cards = [...prevState.cards];
      const card = cards.find(c => c.id === id);

      if (!card || card.isFlipped || card.isMatched) return prevState;

      card.isFlipped = true;
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);

      if (newSelectedCards.length === 2) {
        setTimeout(() => {
          const [firstCard, secondCard] = newSelectedCards;
          if (
            (firstCard.type === 'fruit' && secondCard.type === 'alphabet') ||
            (firstCard.type === 'alphabet' && secondCard.type === 'fruit')
          ) {
            if (
              (firstCard.content === appleImage && secondCard.content === aImage) ||
              (firstCard.content === bananaImage && secondCard.content === bImage) ||
              (firstCard.content === grapesImage && secondCard.content === gImage) ||
              (firstCard.content === pineapleImage && secondCard.content === pImage) ||
              (firstCard.content === mangoImage && secondCard.content === mImage) ||
              (firstCard.content === orangeImage && secondCard.content === oImage)
            ) {
              firstCard.isMatched = true;
              secondCard.isMatched = true;
              setMatchedCardsForModal([firstCard, secondCard]);
              setShowMatchMessage(true);
              setTimeout(() => {
                setShowMatchMessage(false);
                setGameState(prevState => ({
                  ...prevState,
                  cards: prevState.cards.map(card =>
                    card.isMatched ? { ...card, content: null } : card
                  ),
                  matches: prevState.matches + 1,
                }));
              }, 3000);
            } else {
              setTimeout(() => {
                firstCard.isFlipped = false;
                secondCard.isFlipped = false;
                setGameState({
                  ...prevState,
                  cards,
                  moves: prevState.moves + 1,
                });
                setSelectedCards([]);
              }, 1000);
              return { ...prevState, moves: prevState.moves + 1 };
            }
          } else {
            setTimeout(() => {
              firstCard.isFlipped = false;
              secondCard.isFlipped = false;
              setGameState({
                ...prevState,
                cards,
                moves: prevState.moves + 1,
              });
              setSelectedCards([]);
            }, 1000);
            return { ...prevState, moves: prevState.moves + 1 };
          }
          setSelectedCards([]);
        }, 1000);
      }
      return { ...prevState, cards };
    });
  };

  return (
    <div className='game-start-cards'>
      {showMatchMessage && (
        <div className="match-modal">
          <div className="modal-content">
            <h1 className="match-text">It's a match!</h1>
            <div className="matched-cards">
              {matchedCardsForModal.length === 2 && (
                <>
                  <img src={matchedCardsForModal[0].content || ''} alt="content" className='firstCard' />
                  <img src={matchedCardsForModal[1].content || ''} alt="content" className='secondCard' />
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {showEarnedModal && (
        <div className="earned-modal">
          <div className="earned-modal-content">
            <div className="earned-text">
              <img src={earned} alt="earned" className='earnedImage' />
              <img src={monkey6} alt="monkey6" className='monkey6Image' />
              <img src={banana1} alt="banana1" className='banana1Image' />
              <img src={banana2} alt="banana2" className='banana2Image' />
              <img src={banana3} alt="banana3" className='banana3Image' />
              <img src={banana4} alt="banana4" className='banana4Image' />
              <img src={banana5} alt="banana5" className='banana5Image' />
            </div>
            <button onClick={() => setShowEarnedModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showTryAgainModal && (
        <div className="earned-modal">
          <div className="earned-modal-content">
            <div className="earned-text">
              <img src={monkey6} alt="monkey6" className='monkey6Image' />
              <img src={banana1} alt="banana1" className='banana1Image' />
              <img src={banana2} alt="banana2" className='banana2Image' />
              <img src={banana3} alt="banana3" className='banana3Image' />
              <img src={banana4} alt="banana4" className='banana4Image' />
              <img src={banana5} alt="banana5" className='banana5Image' />
              <img src={tryAgain} alt="tryAgain" className='tryAgainImage' />
            </div>
            <button onClick={() => setShowTryAgainModal(false)}>Close</button>
          </div>
        </div>
      )}

      <div onClick={handleBack}><img src={group156Image} alt="group156Image" className="group156-image" /></div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(gameState.matches / 6) * 100}%` }}></div>

      </div>
      <img src={banana3} alt="banana1" className='banana1-bar' />
      <div className="game-info">
        {/* <h4>Matches: {gameState.matches}</h4> */}
        <h5>Wrong Moves left: {6 - gameState.moves}</h5>


      </div>

      <div className="game-start">
        <div className="pink-cards">
          {gameState.cards
            .filter(card => card.type === 'fruit')
            .map(card => (
              <div
                key={card.id}
                className={`card pink ${card.isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front-pink"></div>
                  <div className="card-back">
                    {card.content && <img src={card.content} alt="content" />}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="blue-cards">
          {gameState.cards
            .filter(card => card.type === 'alphabet')
            .map(card => (
              <div
                key={card.id}
                className={`card blue ${card.isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front-blue"></div>
                  <div className="card-back">
                    {card.content && <img src={card.content} alt="content" />}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GameStart;
