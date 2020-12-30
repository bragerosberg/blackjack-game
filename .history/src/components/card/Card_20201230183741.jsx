import React, { useState } from 'react';

const Card = (props) => {
  const [card, setCard] = useState(props.card);

  console.log(card);
  
  return (
    <p>Card</p>
  )
}

export default Card;