import React, { useState, useEffect } from 'react';
import Card from '../card/Card';

const Player = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div>
      <p>Player</p>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading player...</p>
    </div>
  )
}

export default Player; 