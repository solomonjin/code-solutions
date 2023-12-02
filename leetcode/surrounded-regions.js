var solve = function (board) {
  const [rows, cols] = [board.length, board[0].length];

  const capture = (r, c) => {
    // Base Case: Out of bounds or value is not an O
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== 'O') return;
    board[r][c] = 'T';
    capture(r + 1, c);
    capture(r - 1, c);
    capture(r, c + 1);
    capture(r, c - 1);
  }

  // 1) Mark un-surrounded regions (O -> T by DFS)
  // Left and right borders
  for (let r = 0; r < rows; r++) {
    capture(r, 0);
    capture(r, cols - 1);
  }
  // Top and bottom borders
  for (let c = 0; c < cols; c++) {
    capture(0, c);
    capture(rows - 1, c);
  }

  // 2) Capture surrounded regions (O -> X, T -> O)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'O') board[r][c] = 'X';
      else if (board[r][c] === 'T') board[r][c] = 'O';
    }
  }
};
