function transferData(list) {
  if(list.direction === "right") {
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

function compactRight(activeNode) {
  if (activeNode === "edge") {
    console.log("done shifting");
  } else if (activeNode.data === null) {
    compactRight(activeNode.leftNode);
  } else if (activeNode.rightNode.data === null && activeNode.rightNode.rightNode.data === null && activeNode.rightNode.rightNode.rightNode.data === null && activeNode.rightNode.rightNode.rightNode.rightNode === "edge") {
    activeNode.rightNode.rightNode.rightNode.data = activeNode.data;
    activeNode.data = null;
    compactRight(activeNode.leftNode);
  } else if ((activeNode.rightNode.data === null && activeNode.rightNode.rightNode.data === null && activeNode.rightNode.rightNode.rightNode === "edge") || (activeNode.rightNode.data === null && activeNode.rightNode.rightNode.data === null && activeNode.rightNode.rightNode.rightNode.rightNode === "edge")) {
    activeNode.rightNode.rightNode.data = activeNode.data;
    activeNode.data = null;
    compactRight(activeNode.leftNode);
  } else if (activeNode.rightNode.data === null) {
    activeNode.rightNode.data = activeNode.data;
    activeNode.data = null;
    compactRight(activeNode.leftNode);
  }
}

module.exports = transferData;
