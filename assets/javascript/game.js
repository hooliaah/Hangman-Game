var wordChoices = ["frisbee", "football", "baseball", "soccer", "running", "skiing", "hockey", "swimming", "cycling"]
var chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var chosenWordArray = [];
// var nameDiv = document.getElementsByClassName('current-word')[0];
// var expectedDiv = document.getElementsByClassName('expected-name')[0];
var guessesRemaining = 10;
var gamesWon = 0;
var lettersGuessed = [];

//function to display word to guess
console.log(chosenWord);
function wordToGuess () {
    for (var i = 0; i < chosenWord.length; i++) {
        chosenWordArray.push("_ ");
        }
    document.getElementById("current-word").innerHTML = chosenWordArray.join(" ");
}
wordToGuess();

//Add keyup function separately?
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if ((userGuess).match(/[a-z]/)) {
        console.log(chosenWordArray);
        console.log(userGuess);
        if (chosenWord.includes(userGuess)){
            for (var j = 0; j < chosenWord.length; j++) {
                if (userGuess === chosenWord[j]) {
                    chosenWordArray[j]=userGuess;
                    var answerDiv = document.getElementById("current-word");
                    answerDiv.innerHTML = chosenWordArray.join("  ");
                }
            }
        }
       else {
           if (guessesRemaining > 0){
               guessesRemaining -=1;
               console.log(guessesRemaining);
               lettersGuessed.push(userGuess);
               console.log(lettersGuessed);
               document.getElementById("letters-guessed").innerHTML  = lettersGuessed.join(", ");
               document.getElementById("guesses-remaining").innerHTML = guessesRemaining; 
           }
           else {
            //game ends loss
           }
       }
    }    
}


//function for end of game - won
function endWin () {

}

//function for end of game - loss
 


//if letter is not in the chosen word
    //letter appears in list of letters already guessed
    //guess count is reduced by 1

//if user selects letter that was already used or guessed, nothing happens. 

//if users guesses all letters in word before reaching end of # guesses
    //user wins (play sound)
    //win count increases by 1 
    //new word selected by computer
    //game starts over

//if user does not guess all letters before reaching end of # guesses
    //user loses (play sound)
    //computer selects a new word
    //game starts over 
