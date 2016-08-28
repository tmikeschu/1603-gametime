function Tile(options){
  var opts = options || {};
  this.x = opts.x || 12;
  this.y = opts.y || 12;
  this.height = 100;
  this.width = 100;
  this.currentNode = opts.currentNode || null;
}

// keep track of available spaces

var availableSpaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

module.exports = Tile;
