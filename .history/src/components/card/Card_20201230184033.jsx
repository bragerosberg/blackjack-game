import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  console.log(card);

  return card !== null ? (
    <div>
      <p>Card</p>
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
}

export default Card;