const StaticNode = require('./static-node');
const NodeList = require('./node-list');

function Board(){
  this.nodes = [];
  setupNodeGrid(this.nodes);
  this.upLists = createUpLists(this.nodes);
  this.downLists = createDownLists(this.nodes);
  this.leftLists = createLeftLists(this.nodes);
  this.rightLists = createRightLists(this.nodes);
  setupBoard();
}

var blockCoordinates = {1: {x: 12, y: 12},
                        2: {x:124, y: 12},
                        3: {x: 236, y: 12},
                        4: {x: 348, y: 12},
                        5: {x: 12,  y: 124},
                        6: {x: 124, y: 124},
                        7: {x: 236, y: 124},
                        8: {x: 348, y: 124},
                        9: {x: 12,  y: 236},
                        10: {x: 124, y: 236},
                        11: {x: 236, y: 236},
                        12: {x: 348, y: 236},
                        13: {x: 12,  y: 348},
                        14: {x: 124, y: 348},
                        15: {x: 236, y: 348},
                        16: {x: 348, y: 348}}

// var nodes = [];
// var rightLists = [];
// var leftLists = [];
// var upLists = [];
// var downLists = [];

var canvas = document.getElementById("grid");
var context = canvas.getContext('2d');

function setupBoard() {
  context.fillStyle="#FFB266";
  drawGrid(context);
  // setupNodeGrid();
  // createLists();
}

function drawGrid(context) {
  Object.keys(blockCoordinates).forEach(function(key) {
    context.strokeRect(blockCoordinates[key].x, blockCoordinates[key].y, 100, 100);
  });
}

function setupNodeGrid(nodes){
  Object.keys(blockCoordinates).forEach(function(key) {
    newNode = new StaticNode({id: key});
    nodes.push(newNode);
  });
  setNodeRelationships(nodes);
  return nodes
}

function setNodeRelationships(nodes) {
  nodes.forEach(function(node) {
    setUpNode(node, nodes);
    setDownNode(node, nodes);
    setLeftNode(node, nodes);
    setRightNode(node, nodes);
  });
}

function setUpNode(node, nodes) {
  var topIds = ["1", "2", "3", "4"];
  if (topIds.indexOf(node.id) > -1 ) {
    node.upNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.upNode = nodes[currentNodeIndex - 4];
  }
}

function setDownNode(node, nodes) {
  var bottomIds = ["13", "14", "15", "16"];
  if (bottomIds.indexOf(node.id) > -1 ) {
    node.downNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.downNode = nodes[currentNodeIndex + 4];
  }
}

function setLeftNode(node, nodes) {
  var leftIds = ["1", "5", "9", "13"];
  if (leftIds.indexOf(node.id) > -1 ) {
    node.leftNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.leftNode = nodes[currentNodeIndex - 1];
  }
}

function setRightNode(node, nodes) {
  var leftIds = ["4", "8", "12", "16"];
  if (leftIds.indexOf(node.id) > -1 ) {
    node.rightNode = "edge";
  } else {
    var currentNodeIndex = nodes.indexOf(node);
    node.rightNode = nodes[currentNodeIndex + 1];
  }
}

function createLists() {
  this.nodes.forEach(function(node) {
    createUpList(node);
    createDownList(node);
    createLeftList(node);
    createRightList(node);
  });
}

function createUpLists(nodes) {
  var upHeadIds = ["1", "2", "3", "4"];
  var upLists = [];
  nodes.forEach(function(node){
    if (upHeadIds.indexOf(node.id) > -1 ) {
      var newList = new NodeList({head: node, direction: "up"});
      upLists.push(newList);
    }
});
return upLists;
}

function createDownLists(nodes) {
  var downHeadIds = ["13", "14", "15", "16"];
  var downLists = [];
  nodes.forEach(function(node){
    if (downHeadIds.indexOf(node.id) > -1 ) {
      var newList = new NodeList({head: node, direction: "down"});
      downLists.push(newList);
    }
  });
  return downLists;

}

function createLeftLists(nodes) {
  var leftHeadIds = ["1", "5", "9", "13"];
  var leftLists = [];
  nodes.forEach(function(node){
    if (leftHeadIds.indexOf(node.id) > -1 ) {
      var newList = new NodeList({head: node, direction: "left"});
      leftLists.push(newList);
    }
  });
  return leftLists;
}

function createRightLists(nodes) {
  var rightHeadIds = ["4", "8", "12", "16"];
  var rightLists = [];
  nodes.forEach(function(node){
    if (rightHeadIds.indexOf(node.id) > -1 ) {
      var newList = new NodeList({head: node, direction: "right"});
      rightLists.push(newList);
    }
  });
  return rightLists;
}

module.exports = Board;
module.exports.blockCoordinates = blockCoordinates;
module.exports.canvas = canvas;
module.exports.context = context;
// module.exports.nodes = nodes;
// module.exports.rightLists = rightLists;
// module.exports.leftLists = leftLists;
// module.exports.upLists = upLists;
// module.exports.downLists = downLists;
// module.exports.reset = reset;
