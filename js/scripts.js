//Business Logic
//Player Constructor
function Player() {
  this.currentRoll;
  this.score = 0;
}

//Player1 prototype generating random rolls 1-6
Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
}

Player.prototype.totalOne = function() {
  this.score += this.currentRoll;
    console.log(this.score);
  }

//User Interface Logic

$(function(){
  var player1 = new Player();
  var player2 = new Player();
  $("#formOne").submit(function(event) {
    event.preventDefault();
//Player1 rolled value

    player1.currentRoll = player1.roll();
    console.log(player1.currentRoll);
//If rolled value is 1, empty previous rolls
    if (player1.currentRoll === 1) {
      $("#results").empty();
      player1.score = 0;

//Else continue rolling
    }
    else {
      $("#results").show().append("<li>" + player1.currentRoll + "</li>");
      player1.totalOne();
      $("#score1").show(Player.totalOne); //working on adding rolls then displaying total
    }
  });

  $("#formTwo").submit(function(event) {
      event.preventDefault();
//Player2 rolled value
      player2.currentRoll = player2.roll();
      console.log(player2.currentRoll);
//If rolled value is 1, empty previous rolls
      if (player2.currentRoll === 1) {
        $("#results2").empty();
        player2.score = 0;
      }
//Else continue rolling
      else {
        $("#results2").show().append("<li>" + player2.currentRoll + "</li>");
        player2.totalOne();
      }
    });
});
