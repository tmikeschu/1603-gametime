const StaticNode = require('./static-node');
const NodeList = require('./node-list');

var blockCoordinates = [{x: 12,  y: 12,  id: 1},
                        {x: 124, y: 12,  id: 2},
                        {x: 236, y: 12,  id: 3},
                        {x: 348, y: 12,  id: 4},
                        {x: 12,  y: 124, id: 5},
                        {x: 124, y: 124, id: 6},
                        {x: 236, y: 124, id: 7},
                        {x: 348, y: 124, id: 8},
                        {x: 12,  y: 236, id: 9},
                        {x: 124, y: 236, id: 10},
                        {x: 236, y: 236, id: 11},
                        {x: 348, y: 236, id: 12},
                        {x: 12,  y: 348, id: 13},
                        {x: 124, y: 348, id: 14},
                        {x: 236, y: 348, id: 15},
                        {x: 348, y: 348, id: 16}];

var nodes = [];
var rightLists = [];
var leftLists = [];
var upLists = [];
var downLists = [];


function setupBoard() {
  var canvas = document.getElementById("grid");
  var context = canvas.getContext('2d');
  context.fillStyle="#FFB266";
  // draw a grid
  drawGrid(context);
  // create nodes
  setupNodeGrid();
  // create list
  createLists();
  // randomly place two tiles
  placeStartingTiles(context);
}

function drawGrid(context) {
  blockCoordinates.forEach(function(coordinate) {
    context.strokeRect(coordinate.x, coordinate.y, 100, 100);
  });
}

function setupNodeGrid(){
  blockCoordinates.forEach(function(coordinate){
    var newNode = new StaticNode({id: coordinate.id});
    nodes.push(newNode);
  });
  setNodeRelationships();
}

function setNodeRelationships() {
  nodes.forEach(function(node) {
    setUpNode(node);
    setDownNode(node);
    setLeftNode(node);
    setRightNode(node);
  });
}

function setUpNode(node) {
  var topIds = [1, 2, 3 , 4];
  if (topIds.indexOf(node.id) > -1 ) {
    node.upNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.upNode = nodes[currentNodeIndex - 4];
  }
}

function setDownNode(node) {
  var bottomIds = [13, 14, 15, 16];
  if (bottomIds.indexOf(node.id) > -1 ) {
    node.downNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.downNode = nodes[currentNodeIndex + 4];
  }
}

function setLeftNode(node) {
  var leftIds = [1, 5, 9, 13];
  if (leftIds.indexOf(node.id) > -1 ) {
    node.leftNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.leftNode = nodes[currentNodeIndex - 1];
  }
}

function setRightNode(node) {
  var leftIds = [4, 8, 12, 16];
  if (leftIds.indexOf(node.id) > -1 ) {
    node.rightNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.rightNode = nodes[currentNodeIndex + 1];
  }
}

function createLists() {
  nodes.forEach(function(node) {
    createUpList(node);
    createDownList(node);
    createLeftList(node);
    createRightList(node);
  });
}

function createUpList(node) {
  var upHeadIds = [1, 2, 3, 4];
  if (upHeadIds.indexOf(node.id) > -1 ) {
    var newList = new NodeList({head: node, direction: "up"});
    upLists.push(newList);
  }
}

function createDownList(node) {
  var downHeadIds = [13, 14, 15, 16];
  if (downHeadIds.indexOf(node.id) > -1 ) {
    var newList = new NodeList({head: node, direction: "down"});
    downLists.push(newList);
  }
}

function createLeftList(node) {
  var leftHeadIds = [1, 5, 9, 13];
  if (leftHeadIds.indexOf(node.id) > -1 ) {
    var newList = new NodeList({head: node, direction: "left"});
    leftLists.push(newList);
  }
}

function createRightList(node) {
  var rightHeadIds = [4, 8, 12, 16];
  if (rightHeadIds.indexOf(node.id) > -1 ) {
    var newList = new NodeList({head: node, direction: "right"});
    rightLists.push(newList);
  }
}


function shuffleCoordinates(array) {
  var j, x, i;
  for (i = array.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = array[i - 1];
    array[i - 1] = array[j];
    array[j] = x;
   }
   return array;
}

function placeStartingTiles(context) {
  var randomizedCoordinates = shuffleCoordinates(blockCoordinates);
  var randomTileOne = randomizedCoordinates[0];
  var randomTileTwo = randomizedCoordinates[1];
  // var [randomOne, randomTwo] = _.sample(blockCoordinates, 2);
  context.fillRect(randomTileOne.x, randomTileOne.y, 100, 100);
  context.fillRect(randomTileTwo.x, randomTileTwo.y, 100, 100);
  context.fillStyle = "#000000";
  context.font = "60px clear-sans";
  context.fillText("2", randomTileOne.x + 35, randomTileOne.y + 70);
  context.fillText("2", randomTileTwo.x + 35, randomTileTwo.y + 70);
}

module.exports = setupBoard;
