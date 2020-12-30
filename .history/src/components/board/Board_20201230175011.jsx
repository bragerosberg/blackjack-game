import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
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

  // remove picked card from deck
  const removeCard = (arr, card) => console.log('Not yet implemented');


  // select random card from deck
  const randomCard = (arr) => {
    const card = arr[arr.length * Math.random() | 0];
    removeCard
    return card;
  }


  console.log(playerCard);
  console.log(dealerCard);

  return (
    <div>
      <p>Board</p>
      <Card />
    </div>
  )
}

export default Board;