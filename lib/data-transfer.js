// var board = require('./board.js')
var $ = require('jquery');

function transferData(list) {
  if(list.direction === "right") {
    compactRight(list.head.leftNode);
    updateRight(list.head);
    compactRight(list.head.leftNode);
  } else if (list.direction === "left") {
    compactLeft(list.head.rightNode);
    updateLeft(list.head);
    compactLeft(list.head.rightNode);
  } else if (list.direction === "up") {
    compactUp(list.head.downNode);
    updateUp(list.head);
    compactUp(list.head.downNode);
  } else {
    compactDown(list.head.upNode);
    updateDown(list.head);
    compactDown(list.head.upNode);
  }
}

function updateRight(activeNode) {
  if (activeNode.leftNode === "edge") {
    console.log("done updating");
  } else if(activeNode.data === activeNode.leftNode.data) {
    activeNode.leftNode.data = null;
      if (activeNode.data === null) {
        console.log("cannot multiple null times itself");
        updateRight(activeNode.leftNode);
      } else {
        activeNode.data = activeNode.data * 2;
        addToScore(activeNode.data);
        updateRight(activeNode.leftNode);
      }
  } else {
    updateRight(activeNode.leftNode);
  }
}
var score = 0;
var highScore = 0 || JSON.parse(localStorage.getItem("high-score"));

function addToScore(updatedData) {
  score += updatedData;
  $("#score").html(score);
    if (score > highScore) {
      localStorage.setItem("high-score", JSON.stringify(score));
      var newHighScore = localStorage.getItem("high-score");
      $("#high-score").html(newHighScore);
    }
  }

function slideRightOne(activeNode) {
  activeNode.rightNode.data = activeNode.data;
  activeNode.data = null;
}

function compactRight(activeNode) {
  if (activeNode === "edge") {
    console.log("done shifting");
  } else if (activeNode.data === null) {
    compactRight(activeNode.leftNode);
  } else if (activeNode.rightNode.data === null && activeNode.rightNode !== "edge") {
    slideRightOne(activeNode);
    compactRight(activeNode.rightNode);
  } else if (activeNode.rightNode.data !== null || activeNode.rightNode === "edge") {
    compactRight(activeNode.leftNode);
  } else {
    compactRight(activeNode.leftNode);
  }
}

// LEFT

function updateLeft(activeNode) {
  if (activeNode.rightNode === "edge") {
    console.log("done updating");
  } else if(activeNode.data === activeNode.rightNode.data) {
    activeNode.rightNode.data = null;
      if (activeNode.data === null) {
        console.log("cannot multiple null times itself");
        updateLeft(activeNode.rightNode);
      } else {
        activeNode.data = activeNode.data * 2;
        addToScore(activeNode.data);
        updateLeft(activeNode.rightNode);
      }
  } else {
    updateLeft(activeNode.rightNode);
  }
}

function slideLeftOne(activeNode) {
  activeNode.leftNode.data = activeNode.data;
  activeNode.data = null;
}

function compactLeft(activeNode) {
  if (activeNode === "edge") {
    console.log("done shifting");
  } else if (activeNode.data === null) {
    compactLeft(activeNode.rightNode);
  } else if (activeNode.leftNode.data === null && activeNode.leftNode !== "edge") {
    slideLeftOne(activeNode);
    compactLeft(activeNode.leftNode);
  } else if (activeNode.leftNode.data !== null || activeNode.leftNode === "edge") {
    compactLeft(activeNode.rightNode);
  } else {
    compactLeft(activeNode.rightNode);
  }
}

// UP

function updateUp(activeNode) {
  if (activeNode.downNode === "edge") {
    console.log("done updating");
  } else if(activeNode.data === activeNode.downNode.data) {
    activeNode.downNode.data = null;
      if (activeNode.data === null) {
        console.log("cannot multiple null times itself");
        updateUp(activeNode.downNode);
      } else {
        activeNode.data = activeNode.data * 2;
        addToScore(activeNode.data);
        updateUp(activeNode.downNode);
      }
  } else {
    updateUp(activeNode.downNode);
  }
}

function slideUpOne(activeNode) {
  activeNode.upNode.data = activeNode.data;
  activeNode.data = null;
}

function compactUp(activeNode) {
  if (activeNode === "edge") {
    console.log("done shifting");
  } else if (activeNode.data === null) {
    compactUp(activeNode.downNode);
  } else if (activeNode.upNode.data === null && activeNode.upNode !== "edge") {
    slideUpOne(activeNode);
    compactUp(activeNode.upNode);
  } else if (activeNode.upNode.data !== null || activeNode.upNode === "edge") {
    compactUp(activeNode.downNode);
  } else {
    compactUp(activeNode.downNode);
  }
}

// DOWN

function updateDown(activeNode) {
  if (activeNode.upNode === "edge") {
    console.log("done updating");
  } else if(activeNode.data === activeNode.upNode.data) {
    activeNode.upNode.data = null;
      if (activeNode.data === null) {
        console.log("cannot multiple null times itself");
        updateDown(activeNode.upNode);
      } else {
        activeNode.data = activeNode.data * 2;
        addToScore(activeNode.data);
        updateDown(activeNode.upNode);
      }
  } else {
    updateDown(activeNode.upNode);
  }
}

function slideDownOne(activeNode) {
  activeNode.downNode.data = activeNode.data;
  activeNode.data = null;
}

function compactDown(activeNode) {
  if (activeNode === "edge") {
    console.log("done shifting");
  } else if (activeNode.data === null) {
    compactDown(activeNode.upNode);
  } else if (activeNode.downNode.data === null && activeNode.downNode !== "edge") {
    slideDownOne(activeNode);
    compactDown(activeNode.downNode);
  } else if (activeNode.downNode.data !== null || activeNode.downNode === "edge") {
    compactDown(activeNode.upNode);
  } else {
    compactDown(activeNode.upNode);
  }
}

module.exports = transferData;
