const Board = require('./board');
const StaticNode = require('./static-node');
const NodeList = require('./node-list');
const Tile = require('./tile');
const DataTransfer = require('./data-transfer');
var $ = require('jquery');
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
    checkForOpenTiles();
    generateNewTile();
  } else if (keyCode === 40) {
    currentBoard.downLists.forEach(function(list){
      new DataTransfer(list);
    });
    checkForOpenTiles();
    generateNewTile();
  } else if (keyCode === 37) {
    currentBoard.leftLists.forEach(function(list){
      new DataTransfer(list);
    });
    checkForOpenTiles();
    generateNewTile();
  } else if (keyCode === 39) {
    currentBoard.rightLists.forEach(function(list){
      new DataTransfer(list);
    });
    checkForOpenTiles();
    generateNewTile();
  }
  checkForEndGame();
  drawTiles();
}, true);

function generateNewTile() {
  var theChosenOne = shuffle(emptyNodes)[0];
  if (emptyNodes.length > 0) {
    theChosenOne.data = 2;
    var tile = new Tile({currentNode: theChosenOne, context: context});
    tile.drawTile();
  }
}

function startNewGame() {
  context.clearRect(0,0, canvas.width, canvas.height);
  currentBoard = new Board(context);
  placeStartingTiles();
  $("canvas").show();
  $("#game-over").hide();
}

function checkForEndGame() {
  var playableNodes = [];
  currentBoard.nodes.forEach(function(node){
    if (node.data !== null && invalidNeighbors(node)) {
    } else {
      playableNodes.push(node);
    }
  });
  if (playableNodes.length === 0 || winTheGame()) {
    $("canvas").hide();
    $("#game-over").fadeIn(500);
  }
}

function winTheGame(){
  var winningTiles = [];
  currentBoard.nodes.forEach(function (node) {
    if (node.data === 2048) {
      $("#game-over").find("h1").text("You won!");
      winningTiles.push(node);
    }
  });
  if (winningTiles.length > 0) {
    return true;
  } else {
    return false;
  }
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
  randomTileOne.drawTile();
  randomTileTwo.drawTile();
}
