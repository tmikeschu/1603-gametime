function NodeList(options){
  var opts = options || {};
  this.head = opts.head || null;
  this.direction = opts.direction || null;
}

module.exports = NodeList;
