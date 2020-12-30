import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);

  useEffect(() => {
    if (dealerCard === null) setDealerCard(cards)
  });

  return (
    <div>
      <p>Board</p>
      <Card />
    </div>
  )
}

export default Board;