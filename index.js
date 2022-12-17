

    let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let suits = ["H", "D", "C", "S"];
    let deck = [];
    

for(let suitCounter = 0; suitCounter <4; suitCounter++) {
    for (let valueCounter = 0; valueCounter < 13; valueCounter++){
        deck.push(values[valueCounter] + suits[suitCounter]); //added nexted function to combine 2 functions and return a 52 card deck
    } 

}

console.log(deck);