const assert = require('chai').assert;
const Game = require("../lib/game.js");
const StaticNode = require('../lib/static-node');

// const currentBoard = require("../lib/board.js");

describe('Game', function(){
  context('can validate Neighbors', function(){
    it('they are valid', function(){
      var options = {id: 1, data:2};
      var options1 = { id: 2, data: 2, upNode: new StaticNode(options)};

      var staticNode = new StaticNode(options1);

      assert.isTrue(Game.validNeighbors(staticNode));
      // var staticNode1 = new StaticNode({ data: null, leftNode: "edge" });
      // var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      // var staticNode3 = new StaticNode({ data: 4, leftNode: staticNode2 });
      // var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      // staticNode1.rightNode = staticNode2;
      // staticNode2.rightNode = staticNode3;
      // staticNode3.rightNode = staticNode4;
      // var topRow = new List({head: staticNode4, direction: "right"});
      //
      // new DataTransfer(topRow);
      // assert.equal(staticNode4.data, 8);
      // assert.equal(staticNode1.data, null);
      // assert.equal(staticNode2.data, null);
      // assert.equal(staticNode3.data, null);
    });
  });
});
