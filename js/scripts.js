//Business Logic

function Player() {
  this.currentRoll;
  // this.currentRoll2;
}


Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
}

Player.prototype.roll2 = function() {
  return Math.floor(Math.random()*6+1);
}

Player.prototype.one = function() {
  if (this.currentRoll === 1) {

  } else if (this.currentRoll >= 2) {
      this.currentRoll;
  }
}

Player.prototype.two = function() {
  if (this.currentRoll === 1) {

  } else if (this.currentRoll >= 2) {
      this.currentRoll;
  }
}

var addPlayer1 = (this.currentRoll);
var addPlayer2 = (this.currentRoll);



//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var player = new Player();
    player.currentRoll = player.roll();
    console.log(player.currentRoll);

    if (player.currentRoll === 1) {
      $("#results").empty();
    }
    else {
      $("#results").show().append("<li>" + player.currentRoll + "</li>");
    }
    player.one();
  });

  $("#formTwo").submit(function(event) {
      event.preventDefault();

      var player2 = new Player();
      player2.currentRoll = player2.roll2();
      console.log(player2.currentRoll);

      if (player2.currentRoll === 1) {
        $("#results2").empty();
      }
      else {
        $("#results2").show().append("<li>" + player2.currentRoll + "</li>");
      }
      player2.two();
    });
});
