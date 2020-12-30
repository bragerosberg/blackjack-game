import React, { useState, useEffect } from 'react';
import Card from '../../card/Card';

const Participant = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div>
      <p>Participant</p>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading Participant...</p>
    </div>
  )
}

export default Participant; 