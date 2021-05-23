import React, { useEffect, useState } from 'react';
import Dealer from '../dealer/Dealer';
import Player from '../player/Player';
import cards from '../card/carddeck';
import './Board.css';

const Board = () => {
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
    if (allDealerCards.length < 2) randomDealerCard();
    if (allPlayerCards.length < 2) randomPlayerCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDealerCards.length, allPlayerCards.length]);

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
  const randomCard = (cardDeck) => {
    const card = cardDeck[cardDeck.length * Math.random() | 0];
    removeCard(card);
    return card;
  }

  const randomPlayerCard = () => {
    if(playerValue < 21) {
      setAllPlayerCards([...allPlayerCards, randomCard(cardDeck)]);
    }
  }

  const randomDealerCard = () => {
    if (dealerValue < 17) {
      setAllDealerCards([...allDealerCards, randomCard(cardDeck)]);
    }
  }

  const handlePlayerStand = () => {
    toggleDealerTurn(true);
  }

  return (
    <div className="blackjack__wrapper">
      <artcile>
        <aside className="blackjack__dealer__wrapper">
          <p>Dealer</p>
          <section className="blackjack__card__wrapper">
            {allDealerCards.map((dealerCard, index) => (
              <Dealer turn={dealerTurn} number={index} key={dealerCard.id} card={dealerCard}/>
            ))}
          </section>
        </aside>
        <section className="blackjack__dealer__rules">
          <p>Dealer must Hit, if he has 16 or less</p>
        </section>

        <aside className="blackjack__player__wrapper">
          <p>Player</p>
          <section className="blackjack__card__wrapper">
            {allPlayerCards.map(playerCard => (
              <Player key={playerCard.id} card={playerCard}/>
            ))}
          </section>
          <section className="blackjack__player__buttons">
            <button className="blackjack__player__buttons-hit" onClick={() => randomPlayerCard(cardDeck)}>Hit</button>
            <button className="blackjack__player__buttons-stand" onClick={() => handlePlayerStand()}>Stand</button>
          </section>
        </aside>
      </artcile>
    </div>
  )
}

export default Board;