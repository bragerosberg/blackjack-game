import React, { useState, useEffect } from 'react';
import Card from '../card/Card';

const Player = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div>
       <div>
      <p>Player</p>
      <Card card={card}/>
    </div>
    </div>
  ) : (
    <div>
      <p>Loading card...</p>
    </div>
  )

  return (
   
  )
}

export default Player; 