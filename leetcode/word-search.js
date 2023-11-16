var exist = function (board, word) {
  const [rows, cols] = [board.length, board[0].length];

  const dfs = (r, c, i) => {
    if (i === word.length) return true;
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) return false;

    board[r][c] = '*';
    if (dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1)
      || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)) {
      return true;
    }
    board[r][c] = word[i];
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};
