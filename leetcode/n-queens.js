var solveNQueens = function (n) {
  const col = new Set();
  const posDiag = new Set(); // r + c
  const negDiag = new Set(); // r - c

  const res = [];
  const board = new Array(n).fill().map(() => new Array(n).fill('.'));

  const backtrack = (r) => {
    if (r === n) {
      const copy = board.map(row => row.join(''));
      res.push(copy);
      return;
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

      col.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = 'Q';

      backtrack(r + 1);

      col.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = '.';
    }
  }

  backtrack(0);
  return res;
};
