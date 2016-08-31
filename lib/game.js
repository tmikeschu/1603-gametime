const Board = require('./board');
const StaticNode = require('./static-node');
const NodeList = require('./node-list');
const Tile = require('./tile');
const DataTransfer = require('./data-transfer');
var $ = require('jquery');
// var $ = require('jquery');
var currentBoard;
var blockCoordinates = Board.blockCoordinates;
var emptyNodes = [];
// var gameOver = document.getElementById("game-over")

//TODO: Still can't test game now - will need to move further
var canvas = document.getElementById("grid");
var context = canvas.getContext('2d');

document.getElementById("new-game").addEventListener("click", startNewGame);

window.addEventListener("keydown", function(key) {
  var keyCode = key.keyCode;
  if(keyCode === 38) {
    currentBoard.upLists.forEach(function(list){
      new DataTransfer(list);
    });
  } else if (keyCode === 40) {
    currentBoard.downLists.forEach(function(list){
      new DataTransfer(list);
    });
  } else if (keyCode === 37) {
    currentBoard.leftLists.forEach(function(list){
      new DataTransfer(list);
    });
  } else if (keyCode === 39) {
    currentBoard.rightLists.forEach(function(list){
      new DataTransfer(list);
    });
  }
  checkForEndGame();
  checkForOpenTiles();
  drawTiles();
  var theChosenOne = shuffle(emptyNodes)[0];
  if (emptyNodes.length > 0) {
    theChosenOne.data = 2;
    var tile = new Tile({currentNode: theChosenOne, context: context});
    tile.drawTile();
  }
}, true);


function checkForEndGame() {
  var playableNodes = [];
  currentBoard.nodes.forEach(function(node){
    if (node.data !== null && invalidNeighbors(node)) {
    } else {
      playableNodes.push(node);
    }
  });
  if (playableNodes.length === 0) {
    $("#game-over").show();
  }
}

function startNewGame() {
  context.clearRect(0,0, canvas.width, canvas.height);
  currentBoard = new Board(context);
  placeStartingTiles();
  $("#game-over").hide();
}
function invalidNeighbors(node) {
  if (node.data !== node.leftNode.data &&
      node.data !== node.rightNode.data &&
      node.data !== node.upNode.data &&
      node.data !== node.downNode.data) {
    return true;
  } else {
    return false;
  }
}

function drawTiles() {
  currentBoard.nodes.forEach(function(node) {
    var tile = new Tile({currentNode: node, context: context});
    tile.drawTile();
  });
}

function checkForOpenTiles() {
    emptyNodes = [];
    currentBoard.nodes.forEach(function (node) {
    if(node.data === null) {
       emptyNodes.push(node);
    }
  });
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
  var randomNodes = shuffle(currentBoard.nodes);
  var randomCoordOne = blockCoordinates[randomNodes[0].id];
  var randomCoordTwo = blockCoordinates[randomNodes[1].id];
  randomCoordOne.context = context;
  randomCoordTwo.context = context;
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
  context.font = "30px clear-sans";
  context.fillText(randomTileOne.currentNode.data, randomTileOne.x + 35, randomTileOne.y + 70);
  context.fillText(randomTileTwo.currentNode.data, randomTileTwo.x + 35, randomTileTwo.y + 70);
}
