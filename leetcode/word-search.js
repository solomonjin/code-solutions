/*
   DFS Approach:
   - For each tile, check if it could be a possible match with our word, checking all adjacent tiles with next letter
   - base cases:
       - If we have found our word, we can immediately return true
       - if current tile is out of bounds or the current tile does not match the letter we're on, return false
   - Otherwise, mark the current tile to avoid revisiting it while checking for the same word sequence
   - Then, check all adjacent tiles for the next letter. If any of the directions yields true, we can return true as we have found the word
   - If the word sequence fails to find the entire word, reset the current tile back to its original letter
*/
var exist = function (board, word) {
  const [rows, cols] = [board.length, board[0].length];

  const dfs = (r, c, i) => {
    if (i === word.length) return true;             // Base case if we found our word

    if (r < 0 || r >= rows ||                       // Base case if we go out of bounds or if
      c < 0 || c >= cols ||                       // letter is not the one we're searching for
      board[r][c] !== word[i]) return false;

    board[r][c] = '*';                              // Mark the current tile to avoid revisiting
    if (dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) ||     // Check adjacent tiles for the next letter
      dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)) {
      return true;
    }
    board[r][c] = word[i];                          // If the word wasn't found, reset the current tile
  }

  for (let r = 0; r < board.length; r++) {            // Go through the board and check each tile for the word
    for (let c = 0; c < board[0].length; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;                                       // If we fail to find the word, return false
};
