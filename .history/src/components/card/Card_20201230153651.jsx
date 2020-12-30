import React from 'react';
import cards from './carddeck';

const Card = () => {
  console.log(cards.length);

  console.log(cards[42]);
  return (
    <p>Card</p>
  )
}

export default Card;