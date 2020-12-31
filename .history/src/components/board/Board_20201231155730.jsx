import React, { useEffect, useState } from 'react';
import Dealer from '../dealer/Dealer';
import Player from '../player/Player';
import cards from '../card/carddeck';
import './Board.css';

const Board = () => {
  // the last card for each participant
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);

  const [allDealerCards, setAllDealerCards] = useState([]);
  const [allPlayerCards, setAllPlayerCards] = useState([]);

  const [dealerCardCounter, updateDealerCardCounter] = useState()

  // whos turn
  const [dealerTurn, toggleDealerTurn] = useState(false);

  // carddeck and last card
  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (allDealerCards.length < 2) setDealerCard(randomCard(cardDeck, "dealer"));
    if (allPlayerCards.length < 2) setPlayerCard(randomCard(cardDeck, "player"));
    if (dealerTurn === true && dealerCard === null) setDealerCard(randomCard(cardDeck, "dealer"));
    if (dealerTurn === false && playerCard === null) setPlayerCard(randomCard(cardDeck, "player"));
  });
  
  // remove picked card from deck
  const removeCard = (selectedCard) => {
    setCardDeck(cardDeck.filter(card => card.id !== selectedCard.id));
  }
  
  
  // select random card from deck
  const randomCard = (arr, participant) => {
    const card = arr[arr.length * Math.random() | 0];
    setCard(card);
    removeCard(card);
    
    if(participant === "dealer") {
      setAllDealerCards([...allDealerCards, card]);
      setDealerCard(null);
    } else {
      setPlayerCard(null);
      setAllPlayerCards([...allPlayerCards, card]);
    }
    
    return card;
  }

  return (
    <div className="blackjack__wrapper">
      <button className="blackjack__draw__btn" onClick={() => toggleDealerTurn(!dealerTurn) }>Draw Card</button>
      <section>
        <aside className="blackjack__dealer__wrapper">
          {allDealerCards.map(dealerCard => (
            <Dealer key={dealerCard.id} card={dealerCard}/>
          ))}
        </aside>
        <aside className="blackjack__player__wrapper">
          {allPlayerCards.map(playerCard => (
            <Player key={playerCard.id} card={playerCard}/>
          ))}
        </aside>
      </section>
    </div>
  )
}

export default Board;