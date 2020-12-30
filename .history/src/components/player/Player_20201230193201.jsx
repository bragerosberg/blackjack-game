import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import Participant from '../common/participant/Participant';

const Player = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return card !== null ? (
    <div>
      <p>Player</p>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading Participant...</p>
    </div>
  )
}

export default Player;

