import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  const [dealerCard, setDealerCard] = useState("Not Set");
  const [playerCard, setPlayerCard] = useState("Not Set");

  useEffect(() => {
    if
  });

  return (
    <div>
      <p>Board</p>
      <Card />
    </div>
  )
}

export default Board;