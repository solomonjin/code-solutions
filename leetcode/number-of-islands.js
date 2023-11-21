var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        const queue = [[i, j]]
        grid[i][j] = '0';
        while (queue.length !== 0) {
          const [row, col] = queue.shift();
          if (row - 1 >= 0 && grid[row - 1][col] === '1') {
            queue.push([row - 1, col])
            grid[row - 1][col] = '0';
          }
          if (col + 1 < grid[0].length && grid[row][col + 1] === '1') {
            queue.push([row, col + 1])
            grid[row][col + 1] = '0'
          }
          if (row + 1 < grid.length && grid[row + 1][col] === '1') {
            queue.push([row + 1, col]);
            grid[row + 1][col] = '0'
          }
          if (col - 1 >= 0 && grid[row][col - 1] === '1') {
            queue.push([row, col - 1])
            grid[row][col - 1] = '0';
          }
        }
        islands++;
      }
    }
  }
  return islands;
};

/*
  DFS Approach
  Go through each tile in grid looking for a piece of land.
  If a land is found, recursively find all connecting lands from that tile, turning any found lands into water
  Once all connecting lands have been converted into water, the recursive calls will have completed and we know we have
  found a single island so we can increment our result.

  Repeat the process for any other lands found
*/
var numIslands = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;
  let numIslands = 0;
  const [rows, cols] = [grid.length, grid[0].length];

  const dfs = (r, c) => {
    // Base case: r or c out of bounds or if current tile is water
    if (r >= rows || r < 0 || c >= cols || c < 0 || grid[r][c] === '0') return 0;

    // Change current tile from land to water
    grid[r][c] = '0';

    // Then go in each direction, turning all connecting lands to water recursively
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);

    // Once all connecting lands have been turned into waters, we know we have found one full island
    return 1;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') numIslands += dfs(r, c);
    }
  }

  return numIslands;
};
