const Game = require('./game.js');
var $ = require('jquery');

$("#game-over").hide();

var canvas = document.getElementById("grid");
var context = canvas.getContext('2d');
var game = new Game(canvas, context);

document.getElementById("new-game").addEventListener("click", function() {
  game = new Game(canvas, context);
});

window.addEventListener("keydown", function(key) {
  var validKeys = [37, 38, 39, 40];
  if (validKeys.indexOf(key.keyCode) > -1) {
    game.keyFunctions(key.keyCode);
  }
}, true);
