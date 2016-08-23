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
    // updateRight(activeNode.leftNode);
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
  if (activeNode.leftNode === "edge") {
    console.log("done shifting");
  } else {
    while (activeNode.rightNode.data === null && activeNode.rightNode !== "edge") {
      activeNode.rightNode.data = activeNode.data;
      // activeNode.data = null;
      compactRight(activeNode.leftNode);
    }
  }
}

module.exports = transferData;
