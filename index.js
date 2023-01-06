let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true 
let message = ""

function startGame() {
    if (sum <=20) {
    message = "Do you want to hit?"
    } else if (sum === 21)  {
    message = "BlackJack"
    hasBlackJack = true
    } else {
    message = "Bust"
    isAlive = false
    }

console.log(message)

}



// function createDeck() { 

//     let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
//     let suits = ["H", "D", "C", "S"];
//     let deck = []; // create deck from 2 array
    

// for(let suitCounter = 0; suitCounter <4; suitCounter++) {
//     for (let valueCounter = 0; valueCounter < 13; valueCounter++){
//         deck.push(values[valueCounter] + suits[suitCounter]); //added nested function to combine 2 functions and return a 52 card deck
//     } 

//  } 
//   return deck;

// }
// function shuffleDeck(deck) { //function to shuffle the deck
//     for(let i = 0; i <52; i++) {
//         let tempCard = deck[i];
//         let randomIndex = Math.floor(Math.random() * 52); 
//         deck[i] = deck[randomIndex]
//         deck[randomIndex] = tempCard;
//   }
// }

// let deck = createDeck();
// shuffleDeck(deck);

// // Deal player and dealer hand from deck
// let playerCards = [deck.pop(), deck.pop()];

// console.log(playerCards);

// let dealerCards = [deck.pop(), deck.pop()];

// console.log(dealerCards);

// console.log(deck);









