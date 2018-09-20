var playerOne = "X";
var playerTwo = "O";
var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLoses = 0;
var playerTwoLoses = 0;
var tie = 0;
var progress = 9;

// var arrayOfTonys = [
//   "Tony Soprano",
//   "Tony The Tiger",
//   "Tony Montana",
//   "Tony Hawk",
//   "Iron Man",
//   "Tony Danza",
//   "Tony Bennett",
//   "Tony Jaa",
//   "Anthony Hopkins",
//   "Fat Tony"
// ];

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
// function tonyRandom() {
//   i = chance.integer({ min: 0, max: 9 });
//   j = chance.integer({ min: 0, i, max: 9 });
//   playerOneTony = arrayOfTonys[i];
//   playerTwoTony = arrayOfTonys[j];
//   console.log(playerOneTony, playerTwoTony);
// }

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

$(document).ready(function () {

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

  //change to random on function
  function tonyRandom() {
      i = chance.integer({ min: 0, max: 9 });
      j = chance.integer({ min: 0, i, max: 9 });
      playerOneTony = arrayOfTonys[i];
      playerTwoTony = arrayOfTonys[j];
      console.log(playerOneTony, playerTwoTony);
  }

  $(document).on('click', '.fast-car', function () {

      //value of playerOneTony on button
      var playerOneTony= $(this).html();
      console.log(playerOneTony);

      //API with key, limit of 10, and rating of G.
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + playerOneTony + "&api_key=NT48m4Vbdp0xJS0bh8cJv7zdIA0X4y8X&limit=10&rating=R";
      console.log(queryURL);

      // AJAX Function to API
      $.ajax({
          url: queryURL,
          method: "GET"
      }).done(function (response) {

          var results = response.data;
          console.log(results);

          //jQuery to empty div.
          $('#cars-view').empty();

          //For loop for images retrieved
          for (var j = 0; j < results.length; j++) {
              var imageDiv = $('<div>');
              var imageView = results[j].images.fixed_height.url;
              var still = results[j].images.fixed_height_still.url;
              console.log(imageView);


              var gifImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
              gifImage.attr('data-state', 'still');
              $('#cars-view').append(gifImage);
              gifImage.on('click', playGif);


          }
      });

      //Function for still and animate .gis retrieved.
      function playGif() {
          var state = $(this).attr('data-state');
          console.log(state);

          if (state == 'still') {
              $(this).attr('src', $(this).data('animate'));
              $(this).attr('data-state', 'animate');
          }
          else {
              $(this).attr('src', $(this).data('still'));
              $(this).attr('data-state', 'still');
          }
      }
  });

  
});
