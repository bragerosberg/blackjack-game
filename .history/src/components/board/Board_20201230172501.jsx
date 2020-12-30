import React, { useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  const [dealerCard, setDealerCard] = useState("Not Set");
  const [playerCard, setPlayerCard] = useState("Not Set");


  return (
    <div>
      <p>Board</p>
      <Card />
    </div>
  )
}

export default Board;