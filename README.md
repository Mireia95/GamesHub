# GAMES HUB

Coding some games with JS Vanilla

CATCHING BANANA
Main Script: CatchingBanana.js
StartCatching.js: when the PLAY button is pressed, the game logic begins. This is where I render the monkey and the falling elements.

The Elements folder includes everything related to the falling elements: banana and branch. Both the creation of the elements and their logic:

Bananas.js creates and renders the bananas.
Rama.js creates and renders the branches.
MoveElement.js is the main script that makes the elements fall and checks for collisions with the player. If there’s a collision, there are consequences. This script is used for both bananas and branches.
The Score&Lifes folder includes everything related to the game points and lives:

Score&Lifes.js creates and renders the points and lives.
ChangeScore.js updates the points depending on whether there’s a collision between the falling elements and the player.
UpdateScore.js saves the points to localStorage every time we play.
Highscore.js renders the points of the top 3 best plays.
PUZZLE
Main Script: Puzzle.js
StartGame.js contains the game logic and starts the game. For this game, I use the "drag" events.
The CheckWin folder identifies whether the player has completed the puzzle correctly.
The Timer folder includes everything related to the game’s timer, from rendering it to saving the top 3 best times in localStorage. It also includes BestTime.js, which renders the top 3 best times.
PENDING: add more puzzles and difficulty to keep the player more entertained.
