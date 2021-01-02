/* 
Card Illustations:  
By en:User:Cburnett - Own work with Inkscape; king icon taken from Image:Simple h k.svg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1843181
*/
const cards = [
  {
    "id": "0",
    "suit": "clubs",
    "name": "ace",
    "value": [1, 11]
  },
  {
    "id": "1",
    "suit": "diamonds",
    "name": "ace",
    "value": [1, 11]
  },
  {
    "id": "2",
    "suit": "hearts",
    "name": "ace",
    "value": [1, 11]
  },
  {
    "id": "3",
    "suit": "spades",
    "name": "ace",
    "value": [1, 11]
  },
  {
    "id": "4",
    "suit": "clubs",
    "name": "two",
    "value": "2"
  },
  {
    "id": "5",
    "suit": "diamonds",
    "name": "two",
    "value": "2"
  },
  {
    "id": "6",
    "suit": "hearts",
    "name": "two",
    "value": "2"
  },
  {
    "id": "7",
    "suit": "spades",
    "name": "two",
    "value": "2"
  },
  {
    "id": "8",
    "suit": "clubs",
    "name": "three",
    "value": "3"
  },
  {
    "id": "9",
    "suit": "diamonds",
    "name": "three",
    "value": "3"
  },
  {
    "id": "10",
    "suit": "hearts",
    "name": "three",
    "value": "3"
  },
  {
    "id": "11",
    "suit": "spades",
    "name": "three",
    "value": "3"
  },
  {
    "id": "12",
    "suit": "clubs",
    "name": "four",
    "value": "4"
  },
  {
    "id": "13",
    "suit": "diamonds",
    "name": "four",
    "value": "4"
  },
  {
    "id": "14",
    "suit": "hearts",
    "name": "four",
    "value": "4"
  },
  {
    "id": "15",
    "suit": "spades",
    "name": "four",
    "value": "4"
  },
  {
    "id": "16",
    "suit": "clubs",
    "name": "five",
    "value": "5"
  },
  {
    "id": "17",
    "suit": "diamonds",
    "name": "five",
    "value": "5"
  },
  {
    "id": "18",
    "suit": "hearts",
    "name": "five",
    "value": "5"
  },
  {
    "id": "19",
    "suit": "spades",
    "name": "five",
    "value": "5"
  },
  {
    "id": "20",
    "suit": "clubs",
    "name": "six",
    "value": "6"
  },
  {
    "id": "21",
    "suit": "diamonds",
    "name": "six",
    "value": "6"
  },
  {
    "id": "22",
    "suit": "hearts",
    "name": "six",
    "value": "6"
  },
  {
    "id": "23",
    "suit": "spades",
    "name": "six",
    "value": "6"
  },
  {
    "id": "24",
    "suit": "clubs",
    "name": "seven",
    "value": "7"
  },
  {
    "id": "25",
    "suit": "diamonds",
    "name": "seven",
    "value": "7"
  },
  {
    "id": "26",
    "suit": "hearts",
    "name": "seven",
    "value": "7"
  },
  {
    "id": "27",
    "suit": "spades",
    "name": "seven",
    "value": "7"
  },
  {
    "id": "28",
    "suit": "clubs",
    "name": "eight",
    "value": "8"
  },
  {
    "id": "29",
    "suit": "diamonds",
    "name": "eight",
    "value": "8"
  },
  {
    "id": "30",
    "suit": "hearts",
    "name": "eight",
    "value": "8"
  },
  {
    "id": "31",
    "suit": "spades",
    "name": "eight",
    "value": "8"
  },
  {
    "id": "32",
    "suit": "clubs",
    "name": "nine",
    "value": "9"
  },
  {
    "id": "33",
    "suit": "diamonds",
    "name": "nine",
    "value": "9"
  },
  {
    "id": "34",
    "suit": "hearts",
    "name": "nine",
    "value": "9"
  },
  {
    "id": "35",
    "suit": "spades",
    "name": "nine",
    "value": "9"
  },
  {
    "id": "36",
    "suit": "clubs",
    "name": "ten",
    "value": "10"
  },
  {
    "id": "37",
    "suit": "diamonds",
    "name": "ten",
    "value": "10"
  },
  {
    "id": "38",
    "suit": "hearts",
    "name": "ten",
    "value": "10"
  },
  {
    "id": "39",
    "suit": "spades",
    "name": "ten",
    "value": "10"
  },
  {
    "id": "40",
    "suit": "clubs",
    "name": "jack",
    "value": "10"
  },
  {
    "id": "41",
    "suit": "diamonds",
    "name": "jack",
    "value": "10"
  },
  {
    "id": "42",
    "suit": "hearts",
    "name": "jack",
    "value": "10"
  },
  {
    "id": "43",
    "suit": "spades",
    "name": "jack",
    "value": "10"
  },
  {
    "id": "44",
    "suit": "clubs",
    "name": "queen",
    "value": "10"
  },
  {
    "id": "45",
    "suit": "diamonds",
    "name": "queen",
    "value": "10"
  },
  {
    "id": "46",
    "suit": "hearts",
    "name": "queen",
    "value": "10"
  },
  {
    "id": "47",
    "suit": "spades",
    "name": "queen",
    "value": "10"
  },
  {
    "id": "48",
    "suit": "clubs",
    "name": "king",
    "value": "10"
  },
  {
    "id": "49",
    "suit": "diamonds",
    "name": "king",
    "value": "10"
  },
  {
    "id": "50",
    "suit": "hearts",
    "name": "king",
    "value": "10"
  },
  {
    "id": "51",
    "suit": "spades",
    "name": "king",
    "value": "10"
  },
];

module.exports = cards;


