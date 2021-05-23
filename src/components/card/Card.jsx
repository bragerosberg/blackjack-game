import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <>
      {card ? (
        <div className="card__wrapper">
          <img className="card__image" src={card.img} alt={card.name} />
        </div>
      ) : ( 
        <div>
          <p>Loading card...</p>
        </div>
      )}
    </>
  )
}

export default Card;