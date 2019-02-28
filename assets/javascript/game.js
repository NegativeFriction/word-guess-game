// Hangman program. In this game, the computer will select a word for the user to guess.
// The word will initially be displayed as a series of blank spaces " _ _ _"
// The user will press keys on the keyboard one at a time to guess the word.
// If the user guesses a letter correctly, it will replace the " _ " mark on the screen.
// If a user guesses incorrectly, they will lose a guess, and the letter will be displayed under the header
// Incorrect Guesses. If the player wins, it will display a message saying "You won" and play the Star Wars theme
// If the player loses, it will display a message saying "You lose" and play the Imperial March.
// You know. Assuming I'm not getting way ahead of myself with this, and that he CSS/HTML won't kill my ambition.

$(document).ready(function() {
  var gameObj = {
    // Establish a list of potential strings to select
    answersList: [
      "Skywalker",
      "Solo",
      "Leia",
      "Chewbacca",
      "Droid",
      "Death Star",
      "Lightsaber",
      "Kenobi",
      "Stormtrooper",
      "Darth",
      "Vader",
      "Emperor"
    ],

    guessesLeft: 8,

    word: "",

    stringToPrint: "",

    correctGuesses: [],

    incorrectGuesses: [],

    displayedText: document.getElementById("GameSpace"),

    selectAWord: function() {
      word = gameObj.answersList[Math.random() * answersList.length];
    },

    wordToPrint: function() {
      var blankString = "";

      for (var wordLetter = 0; wordLetter < word.length; wordLetter++) {
        var matched = " _ ";
        for (
          var guessesLetter = 0;
          guessesLetter < correctGuesses.length;
          guessesLetter++
        ) {
          if (correctGuesses[guessesLetter] == word[wordLetter]) {
            matched = correctGuesses[guessesLetter];
          }
        }
        blankString += matched;
      }
      return blankString;
    }
  };

  gameObj.displayedText.textContent = "This stuff totally worked";
});
