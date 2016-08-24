function Tile(options){
  var opts = options || {};
  this.x = opts.x || 12;
  this.y = opts.y || 12;
  this.height = 100;
  this.width = 100;
  this.currentNode = opts.currentNode || null;
}

module.exports = Tile;
