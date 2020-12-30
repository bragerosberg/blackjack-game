import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  // the 
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);

  const [cardTurn, setCardTurn] = useState("player");

  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (cardTurn === "dealer" && dealerCard === null) setDealerCard(randomCard(cardDeck));
    if (cardTurn === "player" && playerCard === null) setPlayerCard(randomCard(cardDeck));
  });

  const randomCard = (arr) => arr[arr.length * Math.random() | 0];

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