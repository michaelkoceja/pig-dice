//Business Logic

function Player(name1, age) {
  this.name1 = name1;
  this.age = age;
}

var player = new Player("", "");

Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
    if (x === 1)
    alert("BINGO");
}

// var score;
// score = dice;

//User Interface Logic

$(function(){
  $("#rollDice").click(function(event) {
    event.preventDefault();

    var x = player.roll();

    $("#results").show().append("<li>" + x + "</li>");

    // .on("click", "li", function() {
    //   $("#results").html(x);
    // });
    console.log(x);
  });
});
