//Business Logic

function Player(name1, age) {
  this.name1 = name1;
  this.age = age;
}

var player = new Player("", "");

Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
}

Player.prototype.one = function() {
  if (player.roll() === 1);
  alert("BINGO");
}

// if (player.roll() === 1);
// alert("BINGO");

//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();



    $("#results").show().append("<li>" + player.roll() + "</li>");
    // player.one();


    console.log(player.roll());
  });
});
