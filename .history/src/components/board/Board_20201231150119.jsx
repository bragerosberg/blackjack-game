import React, { useEffect, useState } from 'react';
import Dealer from '../dealer/Dealer';
import Player from '../player/Player';
import cards from '../card/carddeck';
import './Board.css';

const Board = () => {
  // the last card for each participant
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);

  const [allDealerCards, updateAllDealerCards] = useState([]);
  const [allPlayerCards, updateAllPlayerCards] = useState([]);

  // whos turn
  const [dealerTurn, toggleDealerTurn] = useState(false);

  // carddeck and last card
  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (dealerTurn === true && dealerCard === null) {
      setDealerCard(randomCard(cardDeck));}
      
    if (dealerTurn === false && playerCard === null) setPlayerCard(randomCard(cardDeck));
  });

  console.log(cardDeck.length);

  // remove picked card from deck
  const removeCard = (selectedCard) => {
    setCardDeck(cardDeck.filter(card => card.id !== selectedCard.id));
  }


  // select random card from deck
  const randomCard = (arr) => {
    const card = arr[arr.length * Math.random() | 0];
    setCard(card);
    removeCard(card);
    return card;
  }

  return (
    <div className="blackjack__wrapper">
      <button className="blackjack__draw__btn" onClick={() => toggleDealerTurn(!dealerTurn)}>Draw Card</button>
      <section>
      {allDealerCards.map(card => (
        <Dealer card={dealerCard}/>
      ))}
        <Player card={playerCard}/>
      </section>
    </div>
  )
}

export default Board;