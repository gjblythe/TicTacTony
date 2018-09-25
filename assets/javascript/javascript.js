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

var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLoses = 0;
var playerTwoLoses = 0;
var imageX = $('<img id="xO" src="/assets/images/x.png">');
var imageO = $('<img id="xO" src="/assets/images/O.png">');
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
var progress = 8;
var playerOne = "";
var playerTwo = "";
var turn = chance.integer({ min: 1, max: 2 });
var pOnePick = [];
var pTwoPick = [];
var tonyPick = 0;
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

//game firebase start place a place a player into the db
// $('button').click(function(){
//   tonyPick++;
//   console.log(tonyPick)
//   gameDb.ref().push({
//     tonysHarmed: tonyPick,
//   });

//   gameDb.ref().on("child_added", function(snapshot) {
//     clickedTony = snapshot.val().tonysHarmed;
//     console.log(clickedTony);
//     $('#tonysKilled').text(clickedTony);

// })
// });

playerOneTony = "";
playerTwoTony = "";

var gameOver = false;

function random() {
  chance.integer({ min: 1, max: 9 });
}

function userSelect() {
  playerOne = "";
  playerTwo = "";
  $("#x").click(function() {
    playerOne = "X";
    playerTwo = "O";
    progress = 8
    $("#choice").hide();
    $("#board").css("visibility", "visible");
    $("#p1").text(": " + playerOne);
    $("#p2").text(": " + playerTwo);
    console.log(tie);
    playerScore();
    game();
  });

  $("#o").click(function() {
    playerOne = "O";
    playerTwo = "X";
    progress = 9
    $("#choice").hide();
    $("#board").css("visibility", "visible");
    $("#p1").text(": " + playerOne);
    $("#p2").text(": " + playerTwo);
    console.log(tie);
    playerScore();
    game();
  });
}

function boardClear() {
  $("#image").empty();
  $("#board").css("visibility", "hidden");
  $("#1").empty();
  $("#2").empty();
  $("#3").empty();
  $("#4").empty();
  $("#5").empty();
  $("#6").empty();
  $("#7").empty();
  $("#8").empty();
  $("#9").empty();
  $("#chuck").empty();
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
    boardClear();
    gameOver = false;
    $("#chuck").css("visibility", "hidden");
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

//Michael S awesome API call
function tonyRandom() {
  var i = chance.integer({ min: 0, max: 9 });
  var j = chance.integer({ min: 0, i, max: 9 });
  playerOneTony = arrayOfTonys[i];
  playerTwoTony = arrayOfTonys[j];

  var queryURLOne =
    "https://api.giphy.com/v1/gifs/search?q=" +
    playerOneTony +
    "&api_key=NT48m4Vbdp0xJS0bh8cJv7zdIA0X4y8X&limit=1&rating=R";

  var queryURLTwo =
    "https://api.giphy.com/v1/gifs/search?q=" +
    playerTwoTony +
    "&api_key=NT48m4Vbdp0xJS0bh8cJv7zdIA0X4y8X&limit=1&rating=R";

  $.ajax({
    url: queryURLOne,
    method: "GET"
  }).then(function(response) {
    console.log("queryURL " + response);
    for (var i = 0; i < response.data.length; i++) {
      console.log(response.data[i]);
      var imageView = response.data[i].images.fixed_height.url;
      console.log("image view " + imageView);
      var stillOne = response.data[i].images.fixed_height_small_still.url;
      console.log("STILL One " + stillOne);
      var imgOne = $("<img>");
      imgOne.attr("id='image'");
      imgOne.attr("src", stillOne);
      $("#pOneImage").append(imgOne);
    }
  });

  $.ajax({
    url: queryURLTwo,
    method: "GET"
  }).then(function(response) {
    console.log("queryURL " + response);
    for (var i = 0; i < response.data.length; i++) {
      console.log(response.data[i]);
      var imageView = response.data[i].images.fixed_height.url;
      console.log("image view " + imageView);

      var stillTwo = response.data[i].images.fixed_height_small_still.url;
      console.log("STILL Two " + stillTwo);
      var imgTwo = $("<img>");
      imgTwo.attr("src", stillTwo);
      imgTwo.attr("id='image'");
      $("#pTwoImage").append(imgTwo);
    }
  });
}
function chuckNorris(){
  $("#chuck").css("visibility", "visible");
  var chuckURL = "https://api.chucknorris.io/jokes/random";

$.ajax({
  url: chuckURL,
  method: "GET"
}).then(function(response){
  var quote = response.value;
  console.log(quote);
  var chuckWin = $('<p>');
  var youSuckAns = [
    "You both Suck. You have been beaten by Chuck. Why you ask... ",
    "Really? You thought you could win? Don't you know this game can only be beaten by Mr. Norris.  ",
    "Damn it, this game is broken... Did you know,  ",
    "Serriously this game is broken! Damn you Chuck Norris!  ",
    quote + "  The more you know. *Special Effect*(Star flies by) Mind blown. Yes I know this is text. Here is another Chuck fact. ",
    "How does this keep happening?!?  "
  ];
  var i = chance.integer({ min: 0, max: 6 });
  var youSuck = youSuckAns[i];
  console.log(youSuck)
  var chuckWins = " Chuck Wins Again: " + tie;
  chuckWin.text(youSuck + quote + chuckWins);
  
  $("#chuck").append(chuckWin);
});
};

function game() {
  p1Win1 = [1];
  p1Win2 = [1];
  p1Win3 = [1];
  p1Win4 = [1];
  p1Win5 = [1];
  p1Win6 = [1];
  p1Win7 = [1];
  p1Win8 = [1];

  p2Win1 = [-1];
  p2Win2 = [-1];
  p2Win3 = [-1];
  p2Win4 = [-1];
  p2Win5 = [-1];
  p2Win6 = [-1];
  p2Win7 = [-1];
  p2Win8 = [-1];
  $("#1").one("click", function() {
    if (turn === 1) {
      $("#1").append(playerOne);
      p1Win1.push(1);
      p1Win4.push(1);
      p1Win7.push(1);
      winCheck();
      turn = 2;
      progress --;
    } else {
      $("#1").append(playerTwo);
      p2Win1.push(-1);
      p2Win4.push(-1);
      p2Win7.push(-1);
      winCheck();
      turn = 1;
      progress --;
    }
  });

  $("#2").one("click", function() {
    if (turn === 1) {
      $("#2").append(playerOne);
      p1Win1.push(1);
      p1Win5.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#2").append(playerTwo);
      p2Win1.push(-1);
      p2Win5.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });

  $("#3").one("click", function() {
    if (turn === 1) {
      $("#3").append(playerOne);
      p1Win1.push(1);
      p1Win6.push(1);
      p1Win8.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#3").append(playerTwo);
      p2Win1.push(-1);
      p2Win6.push(-1);
      p2Win8.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });

  $("#4").one("click", function() {
    if (turn === 1) {
      $("#4").append(playerOne);
      p1Win2.push(1);
      p1Win4.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#4").append(playerTwo);
      p2Win2.push(-1);
      p2Win4.push(-1);
      winCheck();
      turn = 1;
      progress--;
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
      turn = 2;
      progress--;
    } else {
      $("#5").append(playerTwo);
      p2Win2.push(-1);
      p2Win5.push(-1);
      p2Win7.push(-1);
      p2Win8.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });

  $("#6").one("click", function() {
    if (turn === 1) {
      $("#6").append(playerOne);
      p1Win2.push(1);
      p1Win6.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#6").append(playerTwo);
      p2Win2.push(-1);
      p2Win6.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });

  $("#7").one("click", function() {
    if (turn === 1) {
      $("#7").append(playerOne);
      p1Win3.push(1);
      p1Win4.push(1);
      p1Win8.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#7").append(playerTwo);
      p2Win3.push(-1);
      p2Win4.push(-1);
      p2Win8.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });

  $("#8").one("click", function() {
    if (turn === 1) {
      $("#8").append(playerOne);
      p1Win3.push(1);
      p1Win5.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#8").append(playerTwo);
      p2Win3.push(-1);
      p2Win5.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });

  $("#9").one("click", function() {
    if (turn === 1) {
      $("#9").append(playerOne);
      p1Win3.push(1);
      p1Win6.push(1);
      p1Win7.push(1);
      winCheck();
      turn = 2;
      progress--;
    } else {
      $("#9").append(playerTwo);
      p2Win3.push(-1);
      p2Win6.push(-1);
      p2Win7.push(-1);
      winCheck();
      turn = 1;
      progress--;
    }
  });
}

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
    $("#p1").text(": " + playerOne);
    $("#p2").text(": " + playerTwo);
    $("#pTwoLosses").text("Losses: " + playerTwoLoses);
    restart();
  } else if (
    p2Win1.reduce(reducer) === -4 ||
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
    $("#p1").text(": " + playerOne);
    $("#p2").text(": " + playerTwo);
    $("#pTwoWins").text("Wins: " + playerTwoWins);
    $("#pOneLosses").text("Losses: " + playerOneLoses);
    restart();
  } else if (progress !==0) {
    gameOver = false;
  } else {
    gameOver = true;
    tie++;
    chuckNorris();
    restart();
  }
}

$(document).ready(function() {
  console.log("ready!");
  userSelect();
  tonyRandom();
  console.log("start" + turn);
  $("#chuck").css("visibility", "hidden");
  $("#playerOne").hide();
  $("#playerTwo").hide();
  $("#board").css("visibility", "hidden");
  $("#play-again-btn").hide();
});
