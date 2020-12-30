import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div className="card__wrapper">
      <p>ID:{card.id}</p>
      <p>{card.suit}</p>
      <p>{card.name}</p>
      <p>Va{card.value}</p>
    </div>
  ) : (
    <div>
      <p>Loading card...</p>
    </div>
  )
}

export default Card;