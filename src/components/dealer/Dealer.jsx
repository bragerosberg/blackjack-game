import React from 'react';
import Card from '../card/Card';
import './Dealer.css';

const Dealer = ({ card, number, turn }) => {
  const isPlayersTurn = card !== null && number === 1 && turn === false;

  return (
    <>
      {isPlayersTurn ? (
        <div>
          <img className="dealer__hidden" src="https://i.imgur.com/Ctr8I1j.png" alt="hidden" />
        </div>
      ) : (
        <div>
          <Card card={card}/>
        </div>
      )}
    </>
  )
}

export default Dealer;

