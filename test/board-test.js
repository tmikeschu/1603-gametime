const assert = require('chai').assert;
const Board = require('../lib/board');
var canvas = document.getElementById("grid");
var testContext = canvas.getContext('2d');

describe('Board', function(){
  context('nodes and lists are automatically setup', function(){
    var newBoard = new Board(testContext);

    it('should have default attributes created automatically', function(){
      assert.equal(newBoard.nodes.length, 16);
      assert.equal(newBoard.upLists.length, 4);
      assert.equal(newBoard.downLists.length, 4);
      assert.equal(newBoard.leftLists.length, 4);
      assert.equal(newBoard.rightLists.length, 4);
    });

    it('should setup node relationships automatically', function (){
      assert.equal(newBoard.nodes[0].id, 1);
      assert.equal(newBoard.nodes[0].upNode, "edge");
      assert.equal(newBoard.nodes[0].leftNode, "edge");
      assert.equal(newBoard.nodes[0].downNode.id, 5);
      assert.equal(newBoard.nodes[0].rightNode.id, 2);
    });
  });
});
