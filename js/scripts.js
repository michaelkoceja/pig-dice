//Business Logic

function Player(name1, age) {
  this.name1 = name1;
  this.age = age;
}

Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
}

// var score;
// score = dice;
console.log();


//User Interface Logic

$(function(){
  var player = new Player("", "");
  $("#formOne").click(function(event) {
    event.preventDefault();

    $("#rollDice").click(function() {
      // $("#results").show();
    console.log(player.roll());
    });
  });
});
