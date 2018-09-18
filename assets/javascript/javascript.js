var playerOne = "X";
var playerTwo = "O";
var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLoses = 0;
var playerTwoLoses = 0;
var tie = 0;
var progress = 9;

var arrayOfTonys = [
  "Tony Soprano",
  "Tony The Tiger",
  "Tony Montana",
  "Tony Hawk",
  "Iron Man",
  "Tony Danza",
  "Tony Bennett",
  "Tony Jaa",
  "Anthony Hopkins",
  "Fat Tony"
];

//use chance to grab an index

playerOneTony = "";
playerTwoTony = "";

var gameOver = false;

var playerOneSquares = {
  tLeft: 0,
  tCenter: 0,
  tRight: 0,
  left: 0,
  center: 0,
  right: 0,
  bLeft: 0,
  bCenter: 0,
  bRight: 0
};

var playerTwoSquares = {
  tLeft: 0,
  tCenter: 0,
  tRight: 0,
  left: 0,
  center: 0,
  right: 0,
  bLeft: 0,
  bCenter: 0,
  bRight: 0
};

//fires when user clicks p1 p2
//needs a button

//change to random on function
function tonyRandom() {
  i = chance.integer({ min: 0, max: 9 });
  j = chance.integer({ min: 0, i, max: 9 });
  playerOneTony = arrayOfTonys[i];
  playerTwoTony = arrayOfTonys[j];
  console.log(playerOneTony, playerTwoTony);
}

//which player starts
function whoStarts() {
  var coinFlip = chance.coin();
  if (coinFlip === "heads") {
    //user
  } else {
    //user2
  }
}

$(".board").click(function() {});

// psydocode
function game() {
  if (
    playerOneSquares === (tLeft + tCenter + tRight === 3) ||
    left + center + right === 3 ||
    bLeft + bCenter + bRight === 3 ||
    tLeft + left + bLeft === 3 ||
    tCenter + center + bCenter === 3 ||
    tRight + right + bRight === 3 ||
    tLeft + center + bRight === 3 ||
    tRight + center + bLeft === 3
  ) {
    playerOneWins++;
    playerTwoLoses++;
    gameOver = true;
  } else if (
    playerTwoSquares === (tLeft + tCenter + tRight === 3) ||
    left + center + right === 3 ||
    bLeft + bCenter + bRight === 3 ||
    tLeft + left + bLeft === 3 ||
    tCenter + center + bCenter === 3 ||
    tRight + right + bRight === 3 ||
    tLeft + center + bRight === 3 ||
    tRight + center + bLeft === 3
  ) {
    playerTwoWins++;
    playerOneLoses++;
    gameOver = true;
  } else {
    if (progress > 0) {
      gameOver = false;
    } else {
      gameOver = true;
      tie++;
    }
  }
}

$(document).ready(function() {
  console.log("ready!");
  tonyRandom();
});
