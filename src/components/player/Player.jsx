import React, {useState, useEffect} from 'react';
import Card from '../card/Card';

const Player = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  }, [props.card])

  return card !== null ? (
    <div>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading Player...</p>
    </div>
  )
}

export default Player;

