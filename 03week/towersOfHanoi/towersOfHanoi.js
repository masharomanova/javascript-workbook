'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1], // object with an array
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startArr, endArr) {
  // Your code here
  const lastItem = startArr.pop();
  const newSpot = endArr.push(lastItem)
  return newSpot
  }
  

function isLegal(startArr, endArr) {
  // Your code here
  
  let pickUp = startArr[startArr.length - 1] // this is the last number of the array
  let putDown = endArr[endArr.length - 1] // this is the last number of the array
  if (putDown >= pickUp || putDown == undefined) {
    return true
  } else {
    return false 
  }
}

function checkForWin() {
  // Your code here
  if (stacks['b'].length === 4 || stacks['c'].length === 4) {
    return true
  } else {
    return false
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  const startArr = stacks[startStack]
  const endArr = stacks[endStack]
   isLegal(startArr, endArr);
  if (isLegal(startArr, endArr)) {
    movePiece(startArr, endArr);
    if (checkForWin()) {
      return 'WINNER!'
   }
  };
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal('c', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    it('should not allow input other than a,b,c', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('g', 'a'), false);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
    it('should not allow a win on column A', () => {
      stacks = { a: [4, 3, 2, 1], b: [], c: [] };
      assert.equal(checkForWin(), false);
    });
    it('should not allow a win if numbers are not in descending order', () => {
      stacks = { a: [4, 3, 1, 2], b: [], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
