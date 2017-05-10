//Business Logic

function Player(name1, age) {
  this.name1 = name1;
  this.age = age;
  this.currentRoll;
}


Player.prototype.roll = function() {
  return Math.floor(Math.random()*6+1);
}

Player.prototype.one = function() {
  if (this.currentRoll === 1){
  alert("BINGO");
}
}
// if (player.roll() === 1);
// alert("BINGO");

//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();


    var player = new Player("", "");
    player.currentRoll = player.roll();
    $("#results").show().append("<li>" + player.currentRoll + "</li>");
    player.one();


    console.log("1st "+player.roll());
    console.log("2nd "+player.roll());

  });
});
