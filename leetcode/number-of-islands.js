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
