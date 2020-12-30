import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);
  const [cardTurn, setCardTurn] = useState("dealer");

  useEffect(() => {
    if (cardTurn === "dealer" && dealerCard === null) setDealerCard(cards[15]);
    if (cardTurn === "dealer" && dealerCard === null) setDealerCard(cards[15]);
  });

  return (
    <div>
      <p>Board</p>
      <Card />
    </div>
  )
}

export default Board;