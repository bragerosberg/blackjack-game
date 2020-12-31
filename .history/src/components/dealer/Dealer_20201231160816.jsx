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
      <Card number={card} />
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

