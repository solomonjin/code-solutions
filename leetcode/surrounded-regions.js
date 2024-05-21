class Solution {
  /*
  DFS Approach:
  - Think about the problem backwards. Instead of trying to find the tiles that
  need to be flipped (O > X), find the O tiles that are NOT surrounded and can't be
  flipped (O > O)
  - The O tiles that are not surrounded are the Os along the borders as well as any
  adjacently connected Os to them
  - Create a DFS function to mark the tiles that are not surrounded
      - Base case: Out of bounds or tile is not an O
      - For every border O tile, mark it as an unsurrounded tile (T) then check its adjacent neighbors
      for more unsurrounded Os
  - Starting from the borders, use the DFS function to find and mark all unsurrounded Os
  - Then, once all unsurrounded Os are marked (O > T), go through the grid
  and flip any remaining Os (unmarked Os = surrounded, O > X) then revert the marked Os (T > O)
  */
  solve(board) {
    const [rows, cols] = [board.length, board[0].length];

    // DFS to help mark unsurrounded O tiles
    const findUnsurrounded = (r, c) => {
      // Base case: Tile out of bounds or not an O
      if (r >= rows || r < 0 || c >= cols || c < 0 || board[r][c] !== 'O') return;
      board[r][c] = 'T';  // Mark tile as unsurrounded
      findUnsurrounded(r + 1, c);     // Then check adjacent tiles for connected Os
      findUnsurrounded(r - 1, c);
      findUnsurrounded(r, c + 1);
      findUnsurrounded(r, c - 1);
    }

    // Check borders for O tiles (unsurrounded)
    // left and right borders
    for (let r = 0; r < rows; r++) {
      findUnsurrounded(r, 0);
      findUnsurrounded(r, cols - 1);
    }
    // Top and bottom borders
    for (let c = 0; c < cols; c++) {
      findUnsurrounded(0, c);
      findUnsurrounded(rows - 1, c);
    }

    // Go through board and flip any surrounded tiles (Os) and revert marked tiles (T)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (board[r][c] === 'O') board[r][c] = 'X';
        else if (board[r][c] === 'T') board[r][c] = 'O';
      }
    }
  }
}
