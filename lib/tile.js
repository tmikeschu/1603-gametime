const Color = require ('./colors');
const blockCoordinates = require('./blockCoordinates');

function Tile(options){
  var opts = options || {};
  this.x = opts.x || 12;
  this.y = opts.y || 12;
  this.height = 100;
  this.width = 100;
  this.currentNode = opts.currentNode || null;
  this.context = opts.context;
}

Tile.prototype.drawTile = function () {
  var coordinates = blockCoordinates[this.currentNode.id];
  if (this.currentNode.data === null) {
    this.context.clearRect(coordinates.x, coordinates.y, 100, 100);
  } else {
    this.context.fillStyle= Color[this.currentNode.data];
    this.context.fillRect(coordinates.x, coordinates.y, 100, 100);
    this.context.fillStyle = "#000000";
    this.context.font = "30px clear-sans";
    this.context.fillText(this.currentNode.data, coordinates.x + 35, coordinates.y + 70);
  }
};

module.exports = Tile;
