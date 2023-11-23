var maxAreaOfIsland = function (grid) {
  if (grid.length <= 0 || grid[0].length <= 0) return 0;
  let maxArea = 0;
  const [rows, cols] = [grid.length, grid[0].length];

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;
    grid[r][c] = 0;
    return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1) + 1;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) maxArea = Math.max(maxArea, dfs(r, c));
    }
  }

  return maxArea;
};
