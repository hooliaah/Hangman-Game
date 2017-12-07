var words = ["frisbee", "football", "baseball", "soccer", "running", "skiing", "hockey", "swimming", "cycling"]
var guessesRemaining = 15;
var gamesWon = 0;


//computer selects a word from array
var chosenWord = words[Math.floor(Math.random()*words.length)];
console.log(chosenWord);

//word is displayed as _ _, with one _ representing one letter
function wordToSpaces() {
    var wordLength = chosenWord.length;
    document.getElementById("current-word").innerText = "<p>wordLength</p>";

}

wordToSpaces();
console.log(wordLength);

//user chooses a letter

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

