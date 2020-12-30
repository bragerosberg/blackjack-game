import React, {useState, useEffect} from 'react';
import Participant from '../common/participant/Participant';

const Dealer = (props) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(props.card);
  })

  return (
    <div>
      <p>Dealer</p>
    </div>
  )
}

export default Dealer;

