var blockCoordinates = [{x: 12, y: 12},
                        {x: 124, y: 12},
                        {x: 236, y: 12},
                        {x: 348, y: 12},
                        {x: 12,  y: 124},
                        {x: 124, y: 124},
                        {x: 236, y: 124},
                        {x: 348, y: 124},
                        {x: 12,  y: 236},
                        {x: 124, y: 236},
                        {x: 236, y: 236},
                        {x: 348, y: 236},
                        {x: 12,  y: 348},
                        {x: 124, y: 348},
                        {x: 236, y: 348},
                        {x: 348, y: 348}]

function setupBoard() {
  var canvas = document.getElementById("grid")
  var context = canvas.getContext('2d');
  // draw a grid
  drawGrid(context);
  // create nodes
  // create list
  // randomly place two tiles
  placeStartingTiles(context);
}

function drawGrid(context) {
  blockCoordinates.forEach(function(coordinate) {
    context.strokeRect(coordinate.x, coordinate.y, 100, 100);
  })
}

function shuffleCoordinates(array) {
  var j, x, i;
  for (i = array.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = array[i - 1];
    array[i - 1] = array[j];
    array[j] = x;
   }
   return array
}

function placeStartingTiles(context) {
  randomizedCoordinates = shuffleCoordinates(blockCoordinates);
  randomTileOne = randomizedCoordinates[0];
  context.fillRect(randomTileOne.x, randomTileOne.y, 100, 100);
  randomTileTwo = randomizedCoordinates[1];
  context.fillRect(randomTileTwo.x, randomTileTwo.y, 100, 100);
}

module.exports = setupBoard;
