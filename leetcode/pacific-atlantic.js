var pacificAtlantic = function (heights) {
  const [rows, cols] = [heights.length, heights[0].length];
  // Create sets that keep track of which tiles can access the respective ocean.
  // Instead of checking to see if each tile can access both oceans, work backwards from each ocean and check to see if the tile can access it.
  // Then, the overlap between the two ocean sets is the result.
  const pacific = new Set();
  const atlantic = new Set();

  const dfs = (r, c, visit, prevHeight) => {
    // Base case: if tile is already visited, out of bounds, or if it's lower than the previous tile (water can't flow towards ocean)
    if (visit.has(`(${r},${c})`) || r < 0 || c < 0 || r >= rows || c >= cols
      || heights[r][c] < prevHeight) return;
    visit.add(`(${r},${c})`);                   // Mark tile as valid (it can flow to the given ocean either pacific/atlantic)
    dfs(r + 1, c, visit, heights[r][c]);        // Recursively check neighboring tiles. Because of base case, it will skip any previously visited tiles
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }
  // Go through tiles bordering top and bottom of given grid. Top borders pacific, bottom borders atlantic
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, -1);
    dfs(rows - 1, c, atlantic, -1)
  }
  // Same thing, but for left and right
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, -1);
    dfs(r, cols - 1, atlantic, -1);
  }

  const res = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific.has(`(${r},${c})`) && atlantic.has(`(${r},${c})`)) res.push([r, c]);    // Add any shared tiles between the two ocean sets
    }
  }

  return res;
};
