import React, {useState, useEffect} from 'react';
import Participant from '../common/participant/Participant';

const Player = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return (
    <div>
      <p>Player</p>
      <Participant card={card} />
    </div>
  )
}

export default Player;
