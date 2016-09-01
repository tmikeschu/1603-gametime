const assert = require('chai').assert;

const StaticNode = require('../lib/static-node');
const List = require('../lib/node-list');
const DataTransfer = require('../lib/data-transfer');

describe('DataTransfer', function(){
  context('can transfer data of one row going right', function(){
    it('should double the number and move to the right edge', function(){
      var staticNode1 = new StaticNode({ data: null, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
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
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('no number value change and move them to the right', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
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
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
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
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
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
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
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
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
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
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move far left to far right and double', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should have all values that are the same to start', function(){
      var staticNode1 = new StaticNode({ data: 2, leftNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, leftNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, leftNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, leftNode: staticNode3, rightNode: "edge" });
      staticNode1.rightNode = staticNode2;
      staticNode2.rightNode = staticNode3;
      staticNode3.rightNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "right"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });
  });

  context('can transfer data of one row going left', function(){
    it('should double the number and move to the left edge', function(){
      var staticNode1 = new StaticNode({ data: null, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode1.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode3.data, null);
    });

    it('should double the number and move to the left next to the closest number', function(){
      var staticNode1 = new StaticNode({ data: null, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('no number value change and move them to the left', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, 2);
      assert.equal(staticNode1.data, null);
    });

    it('should do nothing', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 16, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, 4);
      assert.equal(staticNode1.data, 2);
    });

    it('should move both to the far left unchanged', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 2);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should make two doubles and push them both to the far left', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 8, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move number all the way left', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move numbers all the way left and double it', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move far left to far left and double', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should have all values that are the same to start', function(){
      var staticNode1 = new StaticNode({ data: 2, rightNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, rightNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, rightNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, rightNode: staticNode3, leftNode: "edge" });
      staticNode1.leftNode = staticNode2;
      staticNode2.leftNode = staticNode3;
      staticNode3.leftNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "left"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });
  });



  context('can transfer data of one row going up', function(){
    it('should double the number and move to the up edge', function(){
      var staticNode1 = new StaticNode({ data: null, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode1.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode3.data, null);
    });

    it('should double the number and move to the up next to the closest number', function(){
      var staticNode1 = new StaticNode({ data: null, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('no number value change and move them to the up', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, 2);
      assert.equal(staticNode1.data, null);
    });

    it('should do nothing', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 16, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, 4);
      assert.equal(staticNode1.data, 2);
    });

    it('should move both to the far up unchanged', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 2);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should make two doubles and push them both to the far up', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 8, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move number all the way up', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move numbers all the way up and double it', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move far up to far up and double', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should have all values that are the same to start', function(){
      var staticNode1 = new StaticNode({ data: 2, downNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, downNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, downNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, downNode: staticNode3, upNode: "edge" });
      staticNode1.upNode = staticNode2;
      staticNode2.upNode = staticNode3;
      staticNode3.upNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "up"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });
  });

  context('can transfer data of one row going down', function(){
    it('should double the number and move to the down edge', function(){
      var staticNode1 = new StaticNode({ data: null, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode1.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode3.data, null);
    });

    it('should double the number and move to the down next to the closest number', function(){
      var staticNode1 = new StaticNode({ data: null, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 4, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('no number value change and move them to the down', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, 2);
      assert.equal(staticNode1.data, null);
    });

    it('should do nothing', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: 4, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 16, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 8);
      assert.equal(staticNode2.data, 4);
      assert.equal(staticNode1.data, 2);
    });

    it('should move both to the far down unchanged', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 8);
      assert.equal(staticNode3.data, 2);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should make two doubles and push them both to the far down', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 8, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 8, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 16);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move number all the way down', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 2);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move numbers all the way down and double it', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: null, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should move far up to far down and double', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: null, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: null, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, null);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });

    it('should have all values that are the same to start', function(){
      var staticNode1 = new StaticNode({ data: 2, upNode: "edge" });
      var staticNode2 = new StaticNode({ data: 2, upNode: staticNode1 });
      var staticNode3 = new StaticNode({ data: 2, upNode: staticNode2 });
      var staticNode4 = new StaticNode({ data: 2, upNode: staticNode3, downNode: "edge" });
      staticNode1.downNode = staticNode2;
      staticNode2.downNode = staticNode3;
      staticNode3.downNode = staticNode4;
      var topRow = new List({head: staticNode4, direction: "down"});

      new DataTransfer(topRow);
      assert.equal(staticNode4.data, 4);
      assert.equal(staticNode3.data, 4);
      assert.equal(staticNode2.data, null);
      assert.equal(staticNode1.data, null);
    });
  });
});
