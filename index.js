

    let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let suits = ["H", "D", "C", "S"];
    


for(let suitCounter = 0; suitCounter < 4; suitCounter++) { // using a for loop to cycle thorugh suits 0 through 3
    console.log(suits[suitCounter]);                      //this function returns all suit types H,D,C,S
};

for(let valueCounter = 0; valueCounter < 13; valueCounter++) { // using a for loop to cycle through values "A"-"K"
    console.log(values[valueCounter])                          // this function returns all values 
};

