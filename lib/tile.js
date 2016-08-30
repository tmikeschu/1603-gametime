const Board = require('./board')

function Tile(options){
  var opts = options || {};
  this.x = opts.x || 12;
  this.y = opts.y || 12;
  this.height = 100;
  this.width = 100;
  this.currentNode = opts.currentNode || null;
}

Tile.prototype.drawTile = function () {
  coordinates = Board.blockCoordinates[this.currentNode.id];
  if (this.currentNode.data === null) {
    Board.context.clearRect(coordinates.x, coordinates.y, 100, 100)
  } else {
    // Board.context.drawImage("./images/Anna-Weisbrodt.jpg", coordinates.x, coordinates.y, 100, 100)
    Board.context.fillStyle="#FFB266";
    Board.context.fillRect(coordinates.x, coordinates.y, 100, 100);
    Board.context.fillStyle = "#000000";
    Board.context.font = "30px clear-sans";
    Board.context.fillText(this.currentNode.data, coordinates.x + 35, coordinates.y + 70);
  }
}

module.exports = Tile;
