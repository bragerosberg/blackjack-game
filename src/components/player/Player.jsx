import React from 'react';
import Card from '../card/Card';

const Player = ({ card }) => (
  <>
    {card !== null ? (
      <div>
        <Card card={card} />
      </div>
    ) : (
      <div>
        <p>Loading Player...</p>
      </div>
    )}
  </>
)

export default Player;

