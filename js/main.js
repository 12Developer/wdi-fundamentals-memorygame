console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = ["queen", "king", "queen", "king"]
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push("queen");
cardsInPlay.push("king");

console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);

if (cardsInPlay.length === 2) {

(cardsInPlay[0] === cardsInPlay[1])
alert("You found a match!");
} else {

(cardsInPlay[0] !== cardsInPlay[1])
alert("Sorry, try again.");
}