var config = {
  apiKey: "AIzaSyCflOEyUStDPWhuIQtJrdOSzIhSBAeserE",
  authDomain: "tictactony-a6298.firebaseapp.com",
  databaseURL: "https://tictactony-a6298.firebaseio.com",
  projectId: "tictactony-a6298",
  storageBucket: "tictactony-a6298.appspot.com",
  messagingSenderId: "337189598233"
};
firebase.initializeApp(config);

gameDb = firebase.database();

// var playerOne = "X";
// var playerTwo = "O";
var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLoses = 0;
var playerTwoLoses = 0;

var reducer = (accumlator, currentValue) => accumlator + currentValue;

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

var tie = 0;
var progress = 9;

var playerOne = "";
var playerTwo = "";
var turn = chance.integer({ min: 1, max: 2 });
var pOnePick = [];
var pTwoPick = [];

//game firebase start place a place a player into the db
function recordGame() {
  gameDb.ref().push({
    playerOne: pOnePick,
    playerTwo: pTwoPick
  });
}

playerOneTony = "";
playerTwoTony = "";

var gameOver = false;

function random() {
  chance.integer({ min: 1, max: 9 });
}

function userSelect() {
  $("#x").click(function() {
    playerOne = playerOneTony;
    playerTwo = playerTwoTony;
    $("#choice").hide();
    $("#board").show();
    playerScore();
    console.log("p1" + playerOne, "p2" + playerTwo);
  });

  $("#o").click(function() {
    playerOne = playerTwoTony;
    playerTwo = playerOneTony;
    $("#choice").hide();
    $("#board").show();
    playerScore();
    console.log("p1" + playerOne, "p2" + playerTwo);
  });
}

function playerScore() {
  $("#playerOne").show();
  $("#playerTwo").show();
}
function restart() {
  $("#play-again-btn").show();
  $("#play-again-btn").click(function() {
    $("#play-again-btn").hide();
    $("#choice").show();
  });
}
//computer choice
function randomComputer() {
  if (compChoice === selected) {
  }
}

//which player starts
function whoStarts() {
  var coinFlip = chance.coin();
  console.log(coinFlip);
  if (coinFlip === "heads") {
    //user
  } else {
    //user2
  }
}

//change to random on function
function tonyRandom() {
 var  i = chance.integer({ min: 0, max: 9 });
  var j = chance.integer({ min: 0, i, max: 9 });
  playerOneTony = arrayOfTonys[i];
  playerTwoTony = arrayOfTonys[j];
  if (playerOneTony === playerTwoTony) {
    var k = chance.integer({ min: 0, max: 9 });
    playerTwoTony = playerTwoTony[k];
  } else {
    return;
  };
  

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    playerOneTony +
    "&api_key=NT48m4Vbdp0xJS0bh8cJv7zdIA0X4y8X&limit=10&rating=R";
  var queryURL1 =
    "https://api.giphy.com/v1/gifs/search?q=" +
    playerTwoTony +
    "&api_key=NT48m4Vbdp0xJS0bh8cJv7zdIA0X4y8X&limit=10&rating=R";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("queryURL " + response);
    // var results = response.data;
    var images = $(".images");
    for (var i = 0; i < response.data.length; i++) {
      var img = $("<img>");
      console.log(response.data[i]);
      // img.attr('src', response.data[i].images.preview_gif.url);
      var imageView = response.data[i].images.fixed_height.url;
      console.log("image view " + imageView);
      var still = response.data[i].images.fixed_height_still.url;
      console.log("STILL " + still);
      images.append(img);
    }
  });

  $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log("queryURL " + response);
    // var results = response.data;
    var images = $(".images");
    for (var i = 0; i < response.data.length; i++) {
      var img = $("<img>");
      console.log(response.data[i]);
      // img.attr('src', response.data[i].images.preview_gif.url);
      var imageView = response.data[i].images.fixed_height.url;
      console.log("image view " + imageView);
      var still = response.data[i].images.fixed_height_still.url;
      console.log("STILL " + still);
      images.append(img);
    }
  });
}

var p1Win1 = [1];
var p1Win2 = [1];
var p1Win3 = [1];
var p1Win4 = [1];
var p1Win5 = [1];
var p1Win6 = [1];
var p1Win7 = [1];
var p1Win8 = [1];

var p2Win1 = [-1];
var p2Win2 = [-1];
var p2Win3 = [-1];
var p2Win4 = [-1];
var p2Win5 = [-1];
var p2Win6 = [-1];
var p2Win7 = [-1];
var p2Win8 = [-1];

//game toggle
$("#1").one("click", function() {
  console.log(turn);
  if (turn === 1) {
    $("#1").append(playerOne);
    p1Win1.push(1);
    p1Win4.push(1);
    p1Win7.push(1);
    console.log("p1winers", p1Win1, p1Win4, p1Win7);
    recordGame();
    turn = 2;
  } else {
    $("#1").append(playerTwo);
    p2Win1.push(-1);
    p2Win4.push(-1);
    p2Win7.push(-1);
    console.log("2winners", p2Win1, p2Win4, p2Win7);
    recordGame();
    turn = 1;
  }
});

$("#2").one("click", function() {
  if (turn === 1) {
    $("#2").append(playerOne);
    p1Win1.push(1);
    p1Win5.push(1);
    console.log(p1Win1, p1Win5);
    recordGame();
    turn = 2;
  } else {
    $("#2").append(playerTwo);
    p2Win1.push(-1);
    p2Win5.push(-1);
    console.log(p2Win1, p2Win5);
    recordGame();
    turn = 1;
  }
});

$("#3").one("click", function() {
  if (turn === 1) {
    $("#3").append(playerOne);
    p1Win1.push(1);
    p1Win6.push(1);
    p1Win8.push(1);
    recordGame();
    winCheck();
    turn = 2;
  } else {
    $("#3").append(playerTwo);
    p2Win1.push(-1);
    p2Win6.push(-1);
    p2Win8.push(-1);
    recordGame();
    winCheck();
    turn = 1;
  }
});

$("#4").one("click", function() {
  if (turn === 1) {
    $("#4").append(playerOne);
    p1Win2.push(1);
    p1Win4.push(1);
    winCheck();
    recordGame();
    turn = 2;
  } else {
    $("#4").append(playerTwo);
    p2Win2.push(-1);
    p2Win4.push(-1);
    winCheck();
    recordGame();
    turn = 1;
  }
});

$("#5").one("click", function() {
  if (turn === 1) {
    $("#5").append(playerOne);
    p1Win2.push(1);
    p1Win5.push(1);
    p1Win7.push(1);
    p1Win8.push(1);
    winCheck();
    recordGame();
    turn = 2;
  } else {
    $("#5").append(playerTwo);
    p2Win2.push(-1);
    p2Win5.push(-1);
    p2Win7.push(-1);
    p2Win8.push(-1);
    winCheck();
    recordGame();
    turn = 1;
  }
});

$("#6").one("click", function() {
  if (turn === 1) {
    $("#6").append(playerOne);
    p1Win2.push(1);
    p1Win6.push(1);
    winCheck();
    recordGame();
    turn = 2;
  } else {
    $("#6").append(playerTwo);
    p2Win2.push(-1);
    p2Win6.push(-1);
    winCheck();
    recordGame();
    turn = 1;
  }
});

$("#7").one("click", function() {
  if (turn === 1) {
    $("#7").append(playerOne);
    p1Win3.push(1);
    p1Win4.push(1);
    p1Win8.push(1);
    winCheck();
    recordGame();
    turn = 2;
  } else {
    $("#7").append(playerTwo);
    p2Win3.push(-1);
    p2Win4.push(-1);
    p2Win8.push(-1);
    winCheck();
    recordGame();
    turn = 1;
  }
});

$("#8").one("click", function() {
  if (turn === 1) {
    $("#8").append(playerOne);
    p1Win3.push(1);
    p1Win5.push(1);
    winCheck();
    recordGame();
    turn = 2;
  } else {
    $("#8").append(playerTwo);
    p2Win3.push(-1);
    p2Win5.push(-1);
    winCheck();
    recordGame();
    turn = 1;
  }
});

$("#9").one("click", function() {
  if (turn === 1) {
    $("#9").append(playerOne);
    p1Win3.push(1);
    p1Win6.push(1);
    p1Win7.push(1);
    winCheck();
    recordGame();
    turn = 2;
    console.log("p1", pOnePick);
  } else {
    $("#9").append(playerTwo);
    p2Win3.push(-1);
    p2Win6.push(-1);
    p2Win7.push(-1);
    winCheck();
    recordGame();
    turn = 1;
    console.log("p2", pTwoPick);
  }
});

function winCheck() {
  if (
    p1Win1.reduce(reducer) === 4 ||
    p1Win2.reduce(reducer) === 4 ||
    p1Win3.reduce(reducer) === 4 ||
    p1Win4.reduce(reducer) === 4 ||
    p1Win5.reduce(reducer) === 4 ||
    p1Win6.reduce(reducer) === 4 ||
    p1Win7.reduce(reducer) === 4 ||
    p1Win8.reduce(reducer) === 4
  ) {
    playerOneWins++;
    playerTwoLoses++;
    gameOver = true;
    $("#pOneWins").text("Wins: " + playerOneWins);
    $("#pTwoLosses").text("Losses: " + playerTwoLoses);
    $("#board").hide();

  } else if (
    p2Win1.reduce(reducer) === -3 ||
    p2Win2.reduce(reducer) === -4 ||
    p2Win3.reduce(reducer) === -4 ||
    p2Win4.reduce(reducer) === -4 ||
    p2Win5.reduce(reducer) === -4 ||
    p2Win6.reduce(reducer) === -4 ||
    p2Win7.reduce(reducer) === -4 ||
    p2Win8.reduce(reducer) === -4
  ) {
    playerTwoWins++;
    playerOneLoses++;
    gameOver = true;
    $("#pTwoWins").text("Wins: " + playerTwoWins);
    $("#pOneLosses").text("Losses: " + playerOneLoses);
    $("#board").hide();
  } else if (progress !== 0) {
    progress--;
    gameOver = false;
    return;
  } else {
    gameOver = true;
    $("#board").hide();
    tie++;
    
    console.log("game over, draw tie" + tie);
  }
}


$(document).ready(function() {
  console.log("ready!");
  userSelect();
  tonyRandom();
  console.log("start" + turn);
  $("#playerOne").hide();
  $("#playerTwo").hide();
  $("#board").hide();
  $("#play-again-btn").hide();
});
