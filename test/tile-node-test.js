const assert = require('chai').assert;

const TileNode = require('../lib/tile-node');

describe('TileNode', function(){
  context('with default attributes', function(){
    var tileNode = new TileNode();

    it('should have default attributes', function(){
      assert.equal(tileNode.x, 12)
      assert.equal(tileNode.y, 112)
      assert.equal(tileNode.height, 100)
      assert.equal(tileNode.width, 100)
    })
  })
})
