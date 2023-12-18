const checkWinner = (board) => {
  //Rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== '' &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    )
      return board[i][0];
  }
  //Columns
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] !== '' &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }
  //Diagonals
  if (
    board[0][0] !== '' &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] !== '' &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return board[0][2];
  }
  return null;
};
const tictactoeParser = (board) => {
  const isValidSymbol = (symbol) =>
    symbol === 'X' || symbol === 'O' || symbol === '';

  // Check if the board is full
  let isBoardFull = true;

  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let colIndex = 0; colIndex < 3; colIndex++) {
      if (!isValidSymbol(board[rowIndex][colIndex])) {
        console.log(`X and O only allowed`);
        return;
      }

      if (board[rowIndex][colIndex] === '') {
        isBoardFull = false;
        break;
      }
    }
    if (!isBoardFull) {
      break;
    }
  }

  const winner = checkWinner(board);

  if (winner) {
    console.log(`Winner: ${winner}`);
  } else if (isBoardFull) {
    console.log('Draw');
  } else {
    console.log('Game not finished');
  }
};

let board = [
  ['X', 'O', 'X'],
  ['X', 'O', ''],
  ['', 'X', ''],
];
tictactoeParser(board);
