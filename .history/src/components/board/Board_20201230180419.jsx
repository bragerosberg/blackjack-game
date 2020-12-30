import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cards from '../card/carddeck';



const Board = () => {
  // the last card for each participant
  const [dealerCard, setDealerCard] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);

  // whos turn
  const [cardTurn, setCardTurn] = useState("player");

  // carddeck and last card
  const [cardDeck, setCardDeck] = useState(cards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (cardTurn === "dealer" && dealerCard === null) setDealerCard(randomCard(cardDeck));
    if (cardTurn === "player" && playerCard === null) setPlayerCard(randomCard(cardDeck));
  });

  // remove picked card from deck
  const removeCard = (arr, selectedCard) => {
    let cardsDeckCopy = cardDeck;
    console.log(cardsDeckCopy.length);
    console.log(selectedCard.id);
    cardsDeckCopy.filter(card => card.id !== selectedCard.id);

    console.log(cardsDeckCopy.length);
  }


  // select random card from deck
  const randomCard = (arr) => {
    const card = arr[arr.length * Math.random() | 0];
    removeCard(arr, card);
    return card;
  }

  return (
    <div>
      <p>Board</p>
      <Card />
    </div>
  )
}

export default Board;