const assert = require('chai').assert;

const StaticNode = require('../lib/static-node');
const NodeList = require('../lib/node-list');
const DataTransfer = require('../lib/data-transfer');

describe('DataTransfer', function(){
  context('can transfer data of one row', function(){
    it('should double the number and move to the right edge', function(){
      var staticNode1 = new StaticNode({ data: null, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode1.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode3.data, null);
    });

    it('should double the number and move to the right next to the closest number', function(){
      var staticNode1 = new StaticNode({ data: null, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should leave all numbers alone and move them to the right', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, 2);
      assert.equal(staticNode1.data, null);
    });

    it('should do nothing', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 16, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, 4);
      assert.equal(staticNode1.data, 2);
    });

    it('should move both to the far right unchanged', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 2);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should make two doubles and push them both to the far right', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 8, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move number all the way right', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move numbers all the way right and double it', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new NodeList({head: staticNode4, direction: "right"});

      DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });
  });
});

  // Given a top row of 4 slots
  // with the second slot having a 4
  // and the third slot having a 4
  // when a right motion is registered
  // then I should have a top row of 4 slots
  // where slot 1, 2 and 3 are empty
  // and 4 is full
  // and 4 has a value of 8
