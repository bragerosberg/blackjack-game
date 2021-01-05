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

  useEffect(() => {
    if (allDealerCards.length < 2) setDealerCard(randomCard(cardDeck, "dealer"));
    if (allPlayerCards.length < 2) setPlayerCard(randomCard(cardDeck, "player"));
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
    removeCard(card);
    
    if(participant === "dealer") {
      setAllDealerCards([...allDealerCards, card]);
      setDealerCard(null);
    } else {
      setPlayerCard(null);
      setAllPlayerCards([...allPlayerCards, card]);
    }
  }

  return (
    <div className="blackjack__wrapper">
      <artcile>
        <aside className="blackjack__dealer__wrapper">
          <p>Dealer</p>
          <section className="blackjack__card__wrapper">
            {allDealerCards.map((dealerCard, index) => (
              <Dealer number={index} key={dealerCard.id} card={dealerCard}/>
            ))}
          </section>
          <p className="blackjack__cardvalue">{dealerValue}</p>
        </aside>

        <aside className="blackjack__player__wrapper">
          <p>Player</p>
          <section className="blackjack__card__wrapper">
            {allPlayerCards.map(playerCard => (
              <Player key={playerCard.id} card={playerCard}/>
            ))}
          </section>
          <section className="blackjack__player__buttons">
            <button className="blackjack__player__buttons-hit" onClick={() => randomCard(cardDeck, "player")}>Hit</button>
            <button className="blackjack__player__buttons-stand" >Stand</button>
          </section>
          <p className="blackjack__cardvalue">{playerValue}</p>
        </aside>
      </artcile>
    </div>
  )
}

export default Board;