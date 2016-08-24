const assert = require('chai').assert;

const Tile = require('../lib/tile');

describe('Tile', function(){
  context('with default attributes', function(){
    var tile = new Tile();

    it('should have default attributes', function(){
      assert.equal(tile.x, 12);
      assert.equal(tile.y, 12);
      assert.equal(tile.height, 100);
      assert.equal(tile.width, 100);
      assert.equal(tile.currentNode, null);
    });
  });

  context('with set attributes', function() {
    it('allows us to set attributes', function(){
      var options = { x: 124, y: 124, newNode: null };
      var tile = new Tile(options);
      assert.equal(tile.x, 124);
      assert.equal(tile.y, 124);
      assert.equal(tile.height, 100);
      assert.equal(tile.width, 100);
      assert.equal(tile.currentNode, null);

    });

    it('it handles only setting certain attributes', function(){
      var x = 236;
      var options = {};
      options.x = x;
      var tile = new Tile(options);
      assert.equal(tile.x, 236);
      assert.equal(tile.y, 12);
      assert.equal(tile.height, 100);
      assert.equal(tile.width, 100);
      assert.equal(tile.currentNode, null);
    });
  });
});
