import React, { useState } from 'react';

const Card = (props) => {
  const [card, setCard] = useState(null);

  console.log(props);
  console.log(props.card);
  console.log(card);

  return (
    <p>Card</p>
  )
}

export default Card;