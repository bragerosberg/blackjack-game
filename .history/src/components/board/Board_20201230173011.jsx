import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);
  const [cardTurn, setCardTurn] = useState("dealer");

  useEffect(() => {
    if (cardTurn === "dealer" && dealerCard === null) setDealerCard(cards[15]);
    if (cardTurn === "player" && playerCard === null) setPlayerCard(cards[25]);
  });

  const randomCard = (arr) => {
    return arr[arr.length * Math.random() | 0];
  
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