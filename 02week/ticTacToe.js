'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
for (let i=0; i<board.length; i++) {
  if (board[i][0] == playerTurn && board[i][1] == playerTurn && board[i][2] == playerTurn) {
    console.log('WINNER');
    return true
  }
}
}

function verticalWin() {
  // Your code here
    if (board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn) {
      console.log('WINNER');
      return true
    } else if (board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn) {
      console.log('WINNER');
      return true
    } else if (board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn) {
      console.log('WINNER');
      return true
    }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) {
    console.log('WINNER');
    return true
  } else if (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn) {
    console.log('WINNER');
    return true
  }
}

function checkForWin() {
  // Your code here
 if (horizontalWin()) {
   return "Winner"
 } else if (verticalWin()) {
   return "Winner"
 } else if (diagonalWin()) {
   return "Winner"
 }
}

function ticTacToe(row, column) {
  if (playerTurn == 'X') {
    board[row][column] = playerTurn;
    // check whether or not the spot is filled
    if (board[row][column] === " ") {
    } else {
      (playerTurn = 'X')
    }
    //check for win
    if (checkForWin() != "Winner") { 
    playerTurn = 'O';
    } else {

    }
  } else {
      board[row][column] = playerTurn;
      // check whether or not the spot is filled
  //check for win
      playerTurn = 'X';
    }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
