import React, { useState } from 'react';

const Card = (props) => {
  const [card, setCard] = useState(props.card);
  return (
    <p>Card</p>
  )
}

export default Card;