const assert = require('chai').assert;
const StaticNode = require('../lib/static-node');

describe('StaticNode', function(){
  context('with default attributes', function(){
    var staticNode = new StaticNode();

    it('should have default attributes', function(){
      assert.equal(staticNode.id, null);
      assert.equal(staticNode.data, null);
      assert.equal(staticNode.upNode, null);
      assert.equal(staticNode.downNode, null);
      assert.equal(staticNode.leftNode, null);
      assert.equal(staticNode.rightNode, null);
    });
  });

  context('with set attributes', function() {
    it('allows us to set attributes', function(){
      var options = { id: 1, data: 2, upNode: new StaticNode(), downNode: new StaticNode(), leftNode: new StaticNode(), rightNode: new StaticNode()};
      var staticNode = new StaticNode(options);
      assert.equal(staticNode.id, 1);
      assert.equal(staticNode.data, 2);
      assert.instanceOf(staticNode.upNode, StaticNode);
      assert.instanceOf(staticNode.downNode, StaticNode);
      assert.instanceOf(staticNode.leftNode, StaticNode);
      assert.instanceOf(staticNode.rightNode, StaticNode);
    });

    it('it handles only setting certain attributes', function(){
      var rightNode = new StaticNode({data: 4});
      var options = {};
      options.rightNode = rightNode;
      var staticNode = new StaticNode(options);
      assert.equal(staticNode.id, null);
      assert.equal(staticNode.data, null);
      assert.equal(staticNode.rightNode.data, 4);
      assert.equal(staticNode.upNode, null);
      assert.equal(staticNode.downNode, null);
      assert.equal(staticNode.leftNode, null);
    });
  });
});
