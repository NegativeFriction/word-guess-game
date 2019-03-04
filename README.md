# word-guess-game

Homework 3
This is a hangman game.
The game will select one word from a pre-defined list, then display a series of " _ " spaces, with one " _ " representing one letter in
the word. Thus, the word "that" would be represented as " \_ \_ \_ \_ "

The player can then select letters one at a time, and the game will update to show whether or not a letter was in the selected word.
For example, continuing with our "that" example, if a player guessed "h," the display would update to " _ h _ \_ "

If the player guesses an incorrect word, it will update the "incorrect guesses" space to show missed letters and it will remove one guess from the player. If the player uses up 8 guesses on one word, then they will lose the game, and it will replace the word with the words "YOU LOSE! The word was [Word Goes Here]! Press any key to try again!" the game will reset to 8 guesses, and it will select a new word. The game will not repeat any words.

Likewise, if the player wins, the game will display "You win! The word was [Word Goes here]! Press any key to play again!

If the player manages to make their way through the entire list of words, then the game will display a message letting them know that they have exhausted all of the possibilities that I programmed in, and completely sincerely telling them that the game is impressed with them.

On winning, the game should play the Star Wars theme to show the player that they won. It will also display a gif of the correctly identified word.(note: it may not work on older macs? Someone on a 2010 Mac said that it was not working for her) On losing, the game will play the Imperial March and show a Star Wars-themed gif.

The game prints the word it has selected to the console to make debugging/cheating easier.
