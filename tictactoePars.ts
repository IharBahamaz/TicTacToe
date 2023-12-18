type PlayerSymbol = 'X' | 'O' | '';

const tsCheckForWinner = (board: PlayerSymbol[][]): PlayerSymbol | null => {
  for (let i = 0; i < 3; i++) {
    //Rows
    if (
      board[i][0] !== null &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    )
      return board[i][0];
    //Columns
    if (
      board[0][i] !== null &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    )
      return board[0][i];
    //Diagonals
    if (i === 0) {
      if (
        board[i][i] !== null &&
        board[i][i] === board[i + 1][i + 1] &&
        board[i][i] === board[i + 2][i + 2]
      ) {
        return board[i][i];
      }
    }
    if (
      board[i][2 - i] !== null &&
      board[i][2 - i] === board[i + 1][i] &&
      board[i][2 - i] === board[i + 2][2 - i]
    ) {
      return board[i][2 - i];
    }
  }
  return null;
};

const tsTictactoeParser = (board: PlayerSymbol[][]): void => {
  let isBoardFull = true;

  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let colIndex = 0; colIndex < 3; colIndex++) {
      const currentSymbol = board[rowIndex][colIndex];
      if (currentSymbol === null) {
        isBoardFull = false;
        break;
      } else if (currentSymbol !== 'X' && currentSymbol !== 'O') {
        console.log(`Invalid symbol at row ${rowIndex}, column ${colIndex}`);
        return;
      }
    }
    if (!isBoardFull) {
      break;
    }
  }

  const winner = tsCheckForWinner(board);

  if (winner) {
    console.log(`Winner: ${winner}`);
  } else if (isBoardFull) {
    console.log('Draw');
  } else {
    console.log('Game not finished');
  }
};

const boardTs: PlayerSymbol[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'O'],
  ['O', 'X', ''],
];

tsTictactoeParser(boardTs);
