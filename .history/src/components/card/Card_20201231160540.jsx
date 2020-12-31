import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = (props) => {
  const [card, setCard] = useState(null);
  const [hiddenCard, setHiddenCard] = useState(null);

  useEffect(() => {
    props.card !== null ? setCard(props.card);

  })

  return card !== null ? (
    <div className="card__wrapper">
      <p>{card.name}</p>
      <p>{card.suit}</p>
      <p>Val: {card.value}</p>
      <p>ID: {card.id}</p>
    </div>
  ) : (
    <div>
      <p>Loading card...</p>
    </div>
  )
}

export default Card;