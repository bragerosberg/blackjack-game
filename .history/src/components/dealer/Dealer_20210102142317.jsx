import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import Participant from '../common/participant/Participant';

const Dealer = (props) => {
  const [card, setCard] = useState(null);
  const [cardNumber, updateCardNumber] = useState(null);

  useEffect(() => {
    setCard(props.card);
    updateCardNumber(props.number);
  })

  return card !== null && cardNumber === 1 ? (
    <div>
      <p>Dealer</p>
      <img src={blob:https://imgur.com/2a7212b5-617d-4bcc-81f5-ed0e404b83b3}
    </div>
    ) : card !== null ? (
    <div>
      <p>Dealer</p>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading Dealer...</p>
    </div>
  )
}

export default Dealer;

