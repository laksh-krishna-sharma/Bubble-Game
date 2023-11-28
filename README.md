# Bubble-Game

HTML Structure:
The HTML document includes a basic structure with a head and body.
The body contains a main container (#main) with a panel (#panal) inside it.
The panel has a top section (#ptop) for displaying hit count, timer, and score, and a bottom section (#pbtm) for displaying bubbles.

CSS Styling:
The CSS code includes styles for the overall layout, fonts, colors, and responsiveness.
The layout is designed to be responsive with a maximum width at 968px.
Bubble styling is defined, and there's a hover effect to change the background color.

JavaScript Functionality:
Variables (time, score, hitnum) are declared to manage game state.
The makeBubble function generates a grid of bubbles with random numbers.
The runTimer function updates the timer every second and ends the game when the timer reaches zero.
The hitNum function generates a random number for the "Hit" section.
The increaseScore function increments the score.
The start function adds a click event listener to the bubbles, checks if the clicked number matches the "Hit" number, and updates the score accordingly.

Initialization:
The script initializes the game by setting up the initial timer, score, and hit number.
The start function is called to handle user clicks on bubbles.

Game Flow:
Bubbles are generated initially, and the timer starts.
Users click on bubbles, and the score is updated based on whether the clicked number matches the "Hit" number.The game ends when the timer reaches zero, displaying a "GAME OVER" message.

Overall, it's a simple and interactive game implemented with HTML, CSS, and JavaScript. Users try to click on bubbles with numbers matching the randomly generated "Hit" number to increase their score within the given time limit.