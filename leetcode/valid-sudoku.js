// Go through each tile on the board and check to see if that number has already been seen by verifying if it exists in
// hash map for the row, column, and 3x3 square. Trick to verify each square is to take the r,c coordinates and floor divide
// by 3. Separating each 3x3 square into it's own row and column coordinates ranging from 0 to 2. Ex) the upper left 3x3 square will now be denoted as
// [0, 0]. middle right would be [1, 2]. Use these reduced row/column values as keys for the squares hash map.
var isValidSudoku = function (board) {
  const set = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r][c];
      if (value === '.') continue;
      const rowKey = `row${r}-${value}`;
      const colKey = `col${c}-${value}`;
      const squareKey = `square${Math.floor(r / 3)},${Math.floor(c / 3)}-${value}`;

      if (set.has(rowKey) || set.has(colKey) || set.has(squareKey)) return false;
      set.add(rowKey);
      set.add(colKey);
      set.add(squareKey);
    }
  }
  return true;
};
