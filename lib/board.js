
function setupBoard() {
  var canvas = document.getElementById("grid")
  var context = canvas.getContext('2d');
  drawGrid(context);
  // draw a grid
  // create nodes
  // create list
  // randomly place two tiles
}

function drawGrid(context) {
    context.strokeRect(12, 12, 100, 100);
    context.strokeRect(124, 12, 100, 100);
    context.strokeRect(236, 12, 100, 100);
    context.strokeRect(348, 12, 100, 100);
    context.strokeRect(12, 124, 100, 100);
    context.strokeRect(124, 124, 100, 100);
    context.strokeRect(236, 124, 100, 100);
    context.strokeRect(348, 124, 100, 100);
    context.strokeRect(12, 236, 100, 100);
    context.strokeRect(124, 236, 100, 100);
    context.strokeRect(236, 236, 100, 100);
    context.strokeRect(348, 236, 100, 100);
    context.strokeRect(12, 348, 100, 100);
    context.strokeRect(124, 348, 100, 100);
    context.strokeRect(236, 348, 100, 100);
    context.strokeRect(348, 348, 100, 100);

}

module.exports = setupBoard;
