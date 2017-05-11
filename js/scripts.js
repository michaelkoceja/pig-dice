//Business Logic

function Player() {
  this.currentRoll;
  this.currentRoll2;
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
      // alert(this.currentRoll);
  }
}
Player.prototype.two = function() {
  if (this.currentRoll2 === 1) {

  } else if (this.currentRoll2 >= 2) {
      this.currentRoll2;
      // alert(this.currentRoll);
  }
}


// numberArray = Player;


//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var player = new Player("", "");

    player.currentRoll = player.roll();
    if (player.currentRoll === 1) {
      $("#results").empty();
    }

    $("#results").show().append("<li>" + player.currentRoll + "</li>");
    player.one();
  });

  $("#formTwo").submit(function(event) {
      event.preventDefault();

      var player2 = new Player ("", "")

      player2.currentRoll2 = player2.roll2();

      $("#results2").show().append("<li>" + player2.currentRoll2 + "</li>");
      player2.two();

    });
});
