import React, { useState, useEffect } from 'react';
import Card from '../card/Card';

const Player = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div>
      <p>{card.id}</p>
      <p>{card.suit}</p>
      <p>{card.name}</p>
      <p>{card.value}</p>
    </div>
  ) : (
    <div>
      <p>Loading card...</p>
    </div>
  )
  
  return (
    <div>
      <p>Player</p>
      <Card card={card}/>
    </div>
  )
}

export default Player; 