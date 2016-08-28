const Board = require('./board');
const StaticNode = require('./static-node');
const NodeList = require('./node-list');
const Tile = require('./tile');

// keep score
// listen for events

var canvas = Board.canvas
var context = Board.context
var blockCoordinates = Board.blockCoordinates

document.getElementById("new-game").addEventListener("click", startNewGame)

function startNewGame() {
  clearBoard();
  placeStartingTiles();
}

function clearBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  new Board();
}

function shuffle(array) {
  var j, x, i;
  for (i = array.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = array[i - 1];
    array[i - 1] = array[j];
    array[j] = x;
   }
   return array;
}

function placeStartingTiles() {
  var randomNodes = shuffle(Board.nodes)
  var randomCoordOne = blockCoordinates[randomNodes[0].id];
  var randomCoordTwo = blockCoordinates[randomNodes[1].id];
  randomNodes[0].data = 2;
  randomNodes[1].data = 2;
  var randomTileOne = new Tile(randomCoordOne);
  var randomTileTwo = new Tile(randomCoordTwo);
  randomTileOne.currentNode = randomNodes[0];
  randomTileTwo.currentNode = randomNodes[1];
  // var [randomOne, randomTwo] = _.sample(blockCoordinates, 2);
  context.fillRect(randomTileOne.x, randomTileOne.y, 100, 100);
  context.fillRect(randomTileTwo.x, randomTileTwo.y, 100, 100);
  context.fillStyle = "#000000";
  context.font = "60px clear-sans";
  context.fillText(randomTileOne.currentNode.data, randomTileOne.x + 35, randomTileOne.y + 70);
  context.fillText(randomTileTwo.currentNode.data, randomTileTwo.x + 35, randomTileTwo.y + 70);
}
