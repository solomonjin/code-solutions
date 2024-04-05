/*
Backtrack/DFS:
- To keep track of which spaces a queen is allowed in, create 3 sets:
    - cols set
    - positive diagonal set
    - negative diagonal set
- The rows will be accounted for by incrementing based on the row (Only one queen per row)
- The diagonals are calculated by "slope". For pos diag (r + c), neg diag (r - c);
- Create an empty board n x n
- backtrack function:
    - base case: num queens = n OR the row = n since we're placing one queen per row
    - otherwise, go through each col space within the row and try placing the queen there IF it's valid
    - mark the spots as having a queen within the appropriate sets, and mark the tile as a
    - then recursively check the next row (Decision to add queen at that spot)
    - Afterwards, remove the queen from that spot and check the next (remove the marked col/diags from sets)
*/
var solveNQueens = function (n) {
  const cols = new Set();
  const posDiag = new Set();  // r + c slope
  const negDiag = new Set();  // r - c slope

  const board = new Array(n).fill().map(() => new Array(n).fill('.')); // Create a n x n board filled with '.' tiles
  const res = [];

  const backtrack = (r) => {
    if (r === n) {                                      // Possible solution found
      res.push(board.map(r => r.join('')));         // Create a copy of the board
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;      // Check if queen can be placed on current tile

      cols.add(c);                            // Place queen on current tile
      posDiag.add(r + c);                     // Mark the diagonals and cols the queen occupies
      negDiag.add(r - c);
      board[r][c] = 'Q';                      // Mark tile as having a queen

      backtrack(r + 1);                       // Continue to find other queen placements if the queen is placed on current tile

      cols.delete(c);
      posDiag.delete(r + c);                     // Decision to not place the queen on this tile (remove marked diags/cols and tile)
      negDiag.delete(r - c);
      board[r][c] = '.'                          // Reset tile to original state
    }
  }

  backtrack(0);
  return res;
};
