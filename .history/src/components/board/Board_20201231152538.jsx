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

  // carddeck and last card
  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (dealerTurn === true && dealerCard === null) setDealerCard(randomCard(cardDeck, "dealer"));
    if (dealerTurn === false && playerCard === null) setPlayerCard(randomCard(cardDeck, "player"));
  });

  console.log(allPlayerCards, playerCard);
  console.log(allDealerCards, dealerCard);

  
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

  // new card
  const newCard = () => {
    randomCard(cardDeck, "dealer")
  }
  
  return (
    <div className="blackjack__wrapper">
      <button className="blackjack__draw__btn" onClick={() => { toggleDealerTurn(!dealerTurn); newCard(); }}>Draw Card</button>
      <section>
        <aside className="blackjack__player__wrapper">
          {allPlayerCards.map(playerCard => (
            <Player key={playerCard.id} card={playerCard}/>
          ))}
        </aside>
        <aside>
          
        </aside>
        {allDealerCards.map(dealerCard => (
          <Dealer key={dealerCard.id} card={dealerCard}/>
        ))}
      </section>
    </div>
  )
}

export default Board;