import React, { useState, useEffect } from 'react';
import Card from '../card/Card';

const player = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return (
    <div>
      <p>Player</p>
      <Card card={card}/>
    </div>
  )
}

export default player; 