import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import './Dealer.css';

const Dealer = (props) => {
  const [card, setCard] = useState(null);
  const [cardNumber, updateCardNumber] = useState(null);
  const [dealerTurn, updateDealerTurn] = useState(false);

  useEffect(() => {
    setCard(props.card);
    updateCardNumber(props.number);
    updateDealerTurn(props.turn);
  }, [props.card, props.number, props.turn])

  return card !== null && cardNumber === 1 && dealerTurn === false ? (
    <div>
      <img className="dealer__hidden" src="https://i.imgur.com/Ctr8I1j.png" alt="hidden" />
    </div>
    ) : card !== null ? (
    <div>
      <Card card={card}/>
    </div>
  ) : (
    <div>
      <p>Loading Dealer...</p>
    </div>
  )
}

export default Dealer;

