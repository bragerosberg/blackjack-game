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
    if (allDealerCards.length < 2) setDealerCard(randomPlayerCard());
    if (allPlayerCards.length < 2) setPlayerCard(randomDealerCard());
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
  const randomCard = (arr) => {
    const card = arr[arr.length * Math.random() | 0];
    removeCard(card);
    return card;
  }

  const randomPlayerCard = () => {
    if(playerValue < 21) {
      setAllPlayerCards([...allPlayerCards, randomCard(cardDeck)]);
      setPlayerCard(null);
    }
  }

  const randomDealerCard = () => {
    if (dealerValue !== 16 && dealerValue < 17) {
    setAllDealerCards([...allDealerCards, randomCard(cardDeck)]);
    setDealerCard(null);
    }
  }

  const handlePlayerStand = () => {
    toggleDealerTurn(true);
    randomDealerCard();
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
            <button className="blackjack__player__buttons-hit" onClick={() => randomPlayerCard(cardDeck)}>Hit</button>
            <button className="blackjack__player__buttons-stand" onClick={() => handlePlayerStand()}>Stand</button>
          </section>
          <p className="blackjack__cardvalue">{playerValue}</p>
        </aside>
      </artcile>
    </div>
  )
}

export default Board;