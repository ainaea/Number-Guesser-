let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
var lastValidInput = 0;

const userInput = document.querySelector('#human-guess');

userInput.addEventListener('input', validator);

function generateTarget() {
    return Math.floor(Math.random()*10);
}


function compareGuesses(user, comp, targNum) {
    if (0<= user && 9>= user){
        return Math.abs(user - targNum) <= Math.abs(comp - targNum);
    }
    
}


function updateScore(params) {
    params == 'human'? humanScore++: computerScore++;
}


function advanceRound() {
    currentRoundNumber++;
}

function validator() {
    if (userInput.value > 9 || userInput.value < 0){
        alert('Number is out of range');
        userInput.value = lastValidInput;
    }
    else{ lastValidInput = userInput.value}
}