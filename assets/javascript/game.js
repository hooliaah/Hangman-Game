var wordChoices = ["frisbee", "football", "baseball", "soccer", "running", "skiing", "hockey", "swimming", "cycling", "tennis"]
var chosenWord = "";
var chosenWordArray = [];
var chosenWordArrayToString = "";
var guessesRemaining = 10;
var gamesWon = 0;
var lettersGuessed = [];
var progressWidth = "100%";


//function to choose word to guess
function pickANewWord() {
    chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(chosenWord);
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
                    document.getElementById("current-word").innerHTML = chosenWordArray.join("  ");
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
               progressBar();
           }
           else {
            endLoss();
           }
       }
    }    
}


//function for end of game - win
function endWin () {
    alert("Yay! You completed a lap! Click the gray button to rehydrate and start a new lap!");
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
    progressWidth = "100%";
   };

   //function to change width of progress bar...there is probably a better way to write this, but I couldn't figure out how to iterate %
   function progressBar() {
       if(guessesRemaining === 10) {
            progressWidth = "100%";
        }
       if(guessesRemaining === 9) {
            progressWidth = "90%";
        }
        if(guessesRemaining === 8) {
            progressWidth = "80%";
        }
        if(guessesRemaining === 7) {
            progressWidth = "70%";
        }
        if(guessesRemaining === 6) {
            progressWidth = "60%";
        }
        if(guessesRemaining === 5) {
            progressWidth = "50%";
        }
        if(guessesRemaining === 4) {
            progressWidth = "40%";
        }
        if(guessesRemaining === 3) {
            progressWidth = "30%";
        }
        if(guessesRemaining === 2) {
            progressWidth = "20%";
        }
        if(guessesRemaining === 1) {
            progressWidth = "10%";
        }
        if(guessesRemaining === 0) {
            progressWidth = "0%";
        }
          document.getElementById("progress-bar").style.width = progressWidth; 
          }

