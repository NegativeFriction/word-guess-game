// Hangman program. In this game, the computer will select a word for the user to guess.
// The word will initially be displayed as a series of blank spaces " _ _ _"
// The user will press keys on the keyboard one at a time to guess the word.
// If the user guesses a letter correctly, it will replace the " _ " mark on the screen.
// If a user guesses incorrectly, they will lose a guess, and the letter will be displayed under the header
// Incorrect Guesses. If the player wins, it will display a message saying "You won" and play the Star Wars theme
// If the player loses, it will display a message saying "You lose" and play the Imperial March.
// You know. Assuming I'm not getting way ahead of myself with this, and that he CSS/HTML won't kill my ambition.

var gameObj = {
  // Establish a list of potential strings to select
  answersList: [
    [
      "skywalker",
      "https://gifimage.net/wp-content/uploads/2018/04/luke-skywalker-gif-7.gif"
    ],
    ["solo", "https://media.giphy.com/media/l1AsMtCR9G3iq6nba/giphy.gif"],
    ["leia", "https://media.giphy.com/media/3ohuPfGENOtDzsEaXK/giphy.gif"],
    ["chewbacca", "https://media.giphy.com/media/RU1uDnk2iJ0Bi/giphy.gif"],
    [
      "droid",
      "https://media1.tenor.com/images/393dcfd64df826e3ebce1fcd92c93f57/tenor.gif?itemid=8325570"
    ],
    ["falcon", "https://i.imgur.com/YaijQe6.jpg"],
    [
      "lightsaber",
      "https://media2.giphy.com/media/3ohhwpmrm8RszmIUco/source.gif"
    ],
    ["kenobi", "https://media.giphy.com/media/KOVlHmbBA09XO/giphy.gif"],
    ["stormtrooper", "https://i.imgur.com/Ya1Yz.gif"],
    ["maul", "https://i.imgur.com/l8HraEe.gif"],
    ["vader", "https://i.imgur.com/P7DWDb3.gif"],
    ["emperor", "https://i.imgur.com/cJlBUVL.gif?noredirect"]
  ],

  loserGif: [
    "https://media.giphy.com/media/3ohuPvTsPqrfJUr3ry/giphy.gif",
    "https://media.giphy.com/media/26tP1PZCE3xiDloqc/giphy.gif"
  ],

  endFlag: 0,

  // Initially the user has 8 guesses remaining.
  guessesLeft: 8,

  // Initializes an empty string for what the word is. (This will be updated in a function)
  word: "",

  //Initializes an empty string for what will display. (this will be updated in a function.)
  stringToPrint: "",

  // Initialize the correct guesses with a triple space for any spaces that occur in the array of words (such as Death Star).
  //   These will only display to the user in the form of the hangman display.
  correctGuesses: [],

  // Empty array of incorrect guesses. This will be updated and will display to the user.
  incorrectGuesses: [],

  // This is the handle for the element that will be updated as the player guesses more and more.
  displayedText: document.getElementById("GameSpace"),

  missedGuesses: document.getElementById("wrong guesses"),

  guessesLeft: document.getElementById("Guesses Left"),

  endImage: document.getElementsByClassName("winner"),

  fullAnswer: "",

  // Selects a word from the array of potential words
  selectAWord: function() {
    // Determine the length of the array. I kept screwing it up when I tried to do it all in one length, so I decided to just make
    // it ugly, but easy to read.
    var answerLength = gameObj.answersList.length;

    // Select the word by choosing a random number to serve as the index of the "answerList" array.
    // The random number rangers from 0 to the length of the array - 1 (since the array indexes at 0)

    gameObj.fullAnswer =
      gameObj.answersList[Math.floor(Math.random() * answerLength)];
    gameObj.word = gameObj.fullAnswer[0];

    //   Log the word so that I can cheat while I debug this in the future.
    console.log(gameObj.word);
  },

  // Generates a string with " _ " if the user hasn't guessed a letter and the letter if they have.
  wordToPrint: function() {
    //   Create a blank string that we can append to later on.
    var blankString = "";

    // This is the first of two for loops. We will iterate through all of the letters in the
    // word that we selected, one at a time.
    for (var wordLetter = 0; wordLetter < gameObj.word.length; wordLetter++) {
      // matched is a sort of "dummy" variable. It will be appended to blankString once we know whether or not
      // a letter has been guessed. Initially, we set it to " _ " because we are assuming that the letter has not been guessed.
      // If it IS guessed, we will update it below.
      var matched = " _ ";

      //   Initialize a second for loop, nested within the for loop. While we're on one letter of the selected word, we will
      // iterate through all of the letters in our correctGuesses array to see
      for (
        var guessesLetter = 0;
        guessesLetter < gameObj.correctGuesses.length;
        guessesLetter++
      ) {
        // If we find that a letter is in the word, we will update matched from " _ " (the "You haven't guessed this yet" case)
        // to the letter with a space
        if (gameObj.correctGuesses[guessesLetter] == gameObj.word[wordLetter]) {
          matched = " " + gameObj.word[wordLetter] + " ";
        }
      }

      //   Update blank string with the result of our check. This will ONLY iterate once for every letter in the selected word.
      blankString += matched;
    }

    // Send the blankstring back to the section of code that called this function so that we can update the display.
    return blankString.toUpperCase();
  },

  //   Check if a given guess is in the word
  inWord: function(guess) {
    for (var i = 0; i < gameObj.word.length; i++) {
      if (gameObj.word.indexOf(guess) != -1) {
        return true;
      } else {
        return false;
      }
    }
  },

  missedStr: function() {
    return gameObj.incorrectGuesses.join();
  },

  loser: function() {
    if (gameObj.guessesLeft <= 0) {
      return true;
    } else {
      return false;
    }
  },

  winner: function() {
    var winFlag = 1;
    for (var i = 0; i < gameObj.word.length; i++) {
      if (gameObj.correctGuesses.indexOf(gameObj.word[i]) == -1) {
        winFlag = 0;

        console.log(gameObj.word[i] + " is not in the correct Guesses list.");
      }
    }
    console.log(winFlag);
    return winFlag;
  },

  reset: function(guessed) {
    var index = gameObj.answersList.indexOf(guessed);
    gameObj.endFlag = 0;
    gameObj.correctGuesses = [];
    gameObj.incorrectGuesses = [];
    gameObj.guessesLeft = 8;
    gameObj.answersList.splice(index, 1);
    gameObj.missedGuesses.textContent = gameObj.missedStr();
    if (gameObj.answersList.length > 0) {
      gameObj.play();
    } else {
      gameObj.getALife();
    }
  },

  getALife: function() {
    gameObj.displayedText.textContent =
      "You've used up all of the words I had! Good job! I totally non-sarcastically respect you!";
    gameObj.endFlag = 1;
  },

  play: function() {
    gameObj.selectAWord();
    gameObj.displayedText.textContent = gameObj.wordToPrint();
  }
};

gameObj.play();

document.onkeyup = function(event) {
  if (gameObj.endFlag == 1) {
    gameObj.reset(gameObj.fullAnswer);
  } else if (gameObj.inWord(event.key)) {
    gameObj.correctGuesses.push(event.key);
    gameObj.displayedText.textContent = gameObj.wordToPrint();

    if (gameObj.winner()) {
      gameObj.displayedText.textContent =
        'You win! The word was "' +
        gameObj.word.toUpperCase() +
        '!" Press any key to play again!';
      gameObj.endFlag = 1;
      gameObj.endImage.attr("background-image", gameObj.fullAnswer[1]);
    }
  } else {
    if (gameObj.incorrectGuesses.indexOf(event.key.toUpperCase()) == -1) {
      gameObj.incorrectGuesses.push(event.key.toUpperCase());

      gameObj.guessesLeft -= 1;
      if (gameObj.loser()) {
        gameObj.displayedText.textContent =
          "YOU LOSE! The word was " +
          gameObj.word.toUpperCase() +
          "! Press any key to try again!";
        gameObj.endFlag = 1;
        gameObj.endImage.style.backgroundImage = "url(gameObj.loserGif[0])";
      }
    }
    gameObj.missedGuesses.textContent = gameObj.missedStr();
  }
};
