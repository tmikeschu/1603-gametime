function StaticNode(options){
  var opts = options || {};
  this.id = opts.id || null;
  this.data = opts.data || null;
  this.upNode = opts.upNode || null;
  this.downNode = opts.downNode || null;
  this.leftNode = opts.leftNode || null;
  this.rightNode = opts.rightNode || null;
}

module.exports = StaticNode;
