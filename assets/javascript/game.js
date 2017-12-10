var wordChoices = ["frisbee", "football", "baseball", "soccer", "running", "skiing", "hockey", "swimming", "cycling"]
var chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var chosenWordArray = [];
var nameDiv = document.getElementsByClassName('current-word')[0];
// var expectedDiv = document.getElementsByClassName('expected-name')[0];
var guessesRemaining = 10;
var gamesWon = 0;
var lettersGuessed = [];

//computer selects a word from array and word is displayed as _ _, with one _ representing one letter
//   expectedDiv.innerHTML = '<div>' + chosenWord + '</div>';
  
//   for (var i = 0; i < chosenWord.length; i++) {
//     var span = document.createElement('span');
//     span.textContent = '_';
//     span.style = 'margin-left: 5px;';
//     nameDiv.appendChild(span);
// }

//function to select and display word to guess
console.log(chosenWord);
function wordToGuess () {
    for (var i = 0; i < chosenWord.length; i++) {
        chosenWordArray.push("_ ");
        }
    document.getElementById("current-word").innerHTML = chosenWordArray.join(" ");
}
wordToGuess();

//function to see if selected letter is in word

//function for correct guess

//function for incorrect guess

//function for end of game - won

//function for end of game - loss



//user chooses a letter

document.onkeyup = function(event) {
    var keyPressed = event.key;
    if (keyPressed === chosenWord.match(/a-z/g)) {
        
    }
  };

  

//if letter is in the chosen word, 
    //letter replaces _ in appropriate location(s) in word (ie if second letter appears in 2nd space)
    //guess count is reduced by 1

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

