import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  console.log(card);

  return (
    <div>

    <p>Card</p>
    <p>{card.id}</p>
    </div>
  )
}

export default Card;