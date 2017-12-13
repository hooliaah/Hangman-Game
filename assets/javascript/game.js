var wordChoices = ["frisbee", "football", "baseball", "soccer", "running", "skiing", "hockey", "swimming", "cycling", "tennis"]
var chosenWord = "";
var chosenWordArray = [];
var chosenWordArrayToString = "";
var guessesRemaining = 10;
var gamesWon = 0;
var lettersGuessed = [];


//function to choose word to guess
function pickANewWord() {
    chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}
pickANewWord();

//function to display word to guess, # guesses remaining, and # games won
function wordToGuess () {
    for (var i = 0; i < chosenWord.length; i++) {
        chosenWordArray.push("_ ");
        }
    document.getElementById("current-word").innerHTML = chosenWordArray.join(" ");
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = gamesWon;
}
wordToGuess();

//function for on key up event. Checks if letter pressed is correct or incorrect.
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if ((userGuess).match(/[a-z]/)) {
        if (chosenWord.includes(userGuess)){
            for (var j = 0; j < chosenWord.length; j++) {
                if (userGuess === chosenWord[j]) {
                    chosenWordArray[j]=userGuess;
                    var answerDiv = document.getElementById("current-word");
                    answerDiv.innerHTML = chosenWordArray.join("  ");
                }
            }
            if (chosenWordArray.indexOf("_ ") < 0) {
                endWin();
            }
        }
       else {
           if (guessesRemaining > 1){
               guessesRemaining -= 1;
               lettersGuessed.push(userGuess);
               document.getElementById("letters-guessed").innerHTML  = lettersGuessed.join(", ");
               document.getElementById("guesses-remaining").innerHTML = guessesRemaining; 
           }
           else {
            endLoss();
           }
       }
    }    
}


//function for end of game - win
function endWin () {
    alert("Yay! You completed a lap! Click the gray button to rehydrate and start a new lap!"); //why does this not work?!?
    gamesWon += 1;
    document.getElementById("wins").innerHTML = gamesWon;
}

//function for end of game - loss
 function endLoss (){
    alert("Oh no! You were too dehydrated to complete the lap. Click the gray button to rehydrate and start a new lap!");
 }

 //function to reset the game when button is pressed
function reset(){
    chosenWordArray = [];
    guessesRemaining = 10;
    lettersGuessed = [];
    pickANewWord();
    wordToGuess();
    console.log(chosenWord);
   };
