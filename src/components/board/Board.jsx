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

  // whos turn
  const [dealerTurn, toggleDealerTurn] = useState(false);

  // count value
  const [dealerValue, setDealerValue] = useState(0);
  const [playerValue, setPlayerValue] = useState(0);

  // carddeck and last card
  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (allDealerCards.length < 2) setDealerCard(randomCard(cardDeck, "dealer"));
    if (allPlayerCards.length < 2) setPlayerCard(randomCard(cardDeck, "player"));
    if (dealerTurn === true && dealerCard === null) setDealerCard(randomCard(cardDeck, "dealer"));
    if (dealerTurn === false && playerCard === null) setPlayerCard(randomCard(cardDeck, "player"));
  }, [allDealerCards.length, allPlayerCards.length, dealerTurn, dealerCard, playerCard, cardDeck]);


  useEffect(() => {
    setPlayerValue(allPlayerCards.reduce((acc, cVal) => acc + parseInt(cVal.value), 0));
  }, [allPlayerCards])

  useEffect(() => {
    setDealerValue(allDealerCards.reduce((acc, cVal) => acc + parseInt(cVal.value), 0));
  }, [allDealerCards])

  
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
      <section>
        <aside className="blackjack__dealer__wrapper">
          <p>Dealer</p>
          {allDealerCards.map((dealerCard, index) => (
            <Dealer number={index} key={dealerCard.id} card={dealerCard}/>
          ))}
          <p>{dealerValue}</p>
        </aside>
        <aside className="blackjack__player__wrapper">
          <p>Player</p>
          {allPlayerCards.map(playerCard => (
            <Player key={playerCard.id} card={playerCard}/>
          ))}
          <p>{playerValue}</p>
        </aside>
      </section>
    </div>
  )
}

export default Board;