function transferData(list) {
  if(list.direction === "right") {
    compactRight(list.head.leftNode);
    updateRight(list.head);
    compactRight(list.head.leftNode);
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
        activeNode.data = activeNode.data * 2 ;
        updateRight(activeNode.leftNode);
      }
  } else {
    updateRight(activeNode.leftNode);
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

module.exports = transferData;
