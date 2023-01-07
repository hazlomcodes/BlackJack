let player = {
    name: "Hacker T Dog",
    chips: 1922
}

let playerCards = [] //array - ordered list
let playerSum = 0
let dealerCards = []
let dealerSum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById ("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let dealerEl = document.getElementById("dealer-el")

let newGameBtn = document.querySelector("#new-game-btn")
let startGameBtn = document.querySelector("#start-game-btn")
let newCardBtn = document.querySelector("#new-card-btn")


let card1 = document.querySelector("#card1")
let card2 = document.querySelector("#card2")
let card3 = document.querySelector("#card3")
let card4 = document.querySelector("#card4")
let card5 = document.querySelector("#card5")
let card6 = document.querySelector("#card6")
let card7 = document.querySelector("#card7")
let card8 = document.querySelector("#card8")
let card9 = document.querySelector("#card9")
let card10 = document.querySelector("#card10")
let card11 = document.querySelector("#card11")
let card12 = document.querySelector("#card12")

let allCards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12]

playerEl.textContent = player.name + ": £" + player.chips
dealerEl.textContent = dealer.name + ": £" + dealer.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber >= 11) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    cardCount = [card1,card2]
    cardCount[0].style.display="inline-block"
    cardCount[0].innerHTML=`<div class="card-value">${firstCard}</span>`
    cardCount[1].style.display="inline-block"
    cardCount[1].innerHTML=`<div class="card-value">${secondCard}</span>`
    count = 2
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
     sumEl.textContent = `Sum = ${sum}`
    //reconstructs original text as well as sum
    if (sum <=20) {
    message = "Do you want to twist?"
    } else if (sum === 21)  {
    message = "BlackJack"
    hasBlackJack = true
    } else {
    message = "Bust"
    isAlive = false
    }
    messageEl.textContent = message
}

function renderButtons() {
    startGameBtn.style.display="none"
    newGameBtn.style.display="block"
    newCardBtn.style.display="block"
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        count++
        card
        // Push the card to the cards array
        cards.push(card)
        cardCount.push(allCards[count-1])
        cardCount[count-1].style.display="inline-block"
        cardCount[count-1].innerHTML=`<div class="card-value">${card}</span>`
        console.log(cards)
        renderGame()
    }
}


function stick(){

}

function resetCards() {
    for (let i=0; i<count;i++){
        allCards[i].style.display="none";
    }
}

function newGame() {
    resetCards()
    startGame()
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
