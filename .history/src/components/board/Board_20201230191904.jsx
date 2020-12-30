import React, { useEffect, useState } from 'react';
import Player from '../player/Player';
import cards from '../card/carddeck';



const Board = () => {
  // the last card for each participant
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);

  // whos turn
  const [cardTurn, setCardTurn] = useState("player");

  // carddeck and last card
  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (cardTurn === "dealer" && dealerCard === null) setDealerCard(randomCard(cardDeck));
    if (cardTurn === "player" && playerCard === null) setPlayerCard(randomCard(cardDeck));
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
    <div>
      <Player card={card}/>
    </div>
  )
}

export default Board;