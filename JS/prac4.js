let gameNum = "36";
let userNum = prompt("Guess the number: ");

while (userNum !== gameNum) {
    userNum = prompt("You guessed the wrong number! , Guess again: ");
}

console.log("You guessed the right number");