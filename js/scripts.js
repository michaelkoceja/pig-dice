//Business Logic
//Player Constructor
function Player() {
  this.currentRoll;
  // this.currentRoll2;
}

//Player1 prototype generating random rolls 1-6
Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
}
//Player2 prototype generatingrandom rolls 1-6
Player.prototype.roll2 = function() {
  return Math.floor(Math.random()*6+1);
}
//If Player1 roll is === 1, stop rolling, >=2 keep rolling
Player.prototype.one = function() {
  if (this.currentRoll === 1) {

  } else if (this.currentRoll >= 2) {
      this.currentRoll;
  }
}
//If Player2 roll is === 1, stop rolling, >=2 keep rolling
Player.prototype.two = function() {
  if (this.currentRoll === 1) {

  } else if (this.currentRoll >= 2) {
      this.currentRoll;
  }
}

// for(var index = 0; index < this.currentRoll; index++){
//   var addPlayer1 = (this.currentRoll + "");
//   var addTotal1 = (index);
// }
// console.log();

// var addPlayer2 = (this.currentRoll + "");


//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
//Player1 rolled value
    var player1 = new Player();
    player1.currentRoll = player1.roll();
    console.log(player1.currentRoll);
//If rolled value is 1, empty previous rolls
    if (player1.currentRoll === 1) {
      $("#results").empty();
    }
//Else continue rolling
    else {
      $("#results").show().append("<li>" + player1.currentRoll + "</li>");
    }
    $("#score1").show(addPlayer1) //working on adding rolls then displaying total
    player1.one();
  });

  $("#formTwo").submit(function(event) {
      event.preventDefault();
//Player2 rolled value
      var player2 = new Player();
      player2.currentRoll = player2.roll2();
      console.log(player2.currentRoll);
//If rolled value is 1, empty previous rolls
      if (player2.currentRoll === 1) {
        $("#results2").empty();
      }
//Else continue rolling
      else {
        $("#results2").show().append("<li>" + player2.currentRoll + "</li>");
      }
      player2.two();
    });
});
