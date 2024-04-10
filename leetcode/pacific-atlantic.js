/*
DFS Approach:
- Instead of going through each tile and checking if it can access both oceans, work backwards from the ocean and see which tiles can access it
- Starting from the edges, check to see if each neighboring tile can access the respective ocean using sets
- Base case of DFS:
   - if the tile has already been visited (can already access)
   - tile out of bounds
   - tile CAN'T access the current ocean (height < prevHeight)
- If the tile can access the ocean, add it to the ocean set and recursively check adjacent tiles

- Finally, go through the grid and add any tile that is in both the ocean sets to a results array
*/
var pacificAtlantic = function (heights) {
  const [rows, cols] = [heights.length, heights[0].length];
  // Create sets that keep track of which tiles can access the respective ocean.
  // Instead of checking to see if each tile can access both oceans, work backwards from each ocean and check to see if the tile can access it.
  // Then, the overlap between the two ocean sets is the result.
  const pacific = new Set();
  const atlantic = new Set();

  const dfs = (r, c, prevHeight, visited) => {
    // Base case: tile already visited, out of bounds, or can't access ocean
    if (visited.has(`(${r},${c})`) || r < 0 || r >= rows || c < 0 || c >= cols || heights[r][c] < prevHeight) return;

    visited.add(`(${r},${c})`);                 // Current tile can access ocean, add it to ocean set
    dfs(r + 1, c, heights[r][c], visited);       // Then recursively check adjacent tiles to see if they can access the ocean
    dfs(r - 1, c, heights[r][c], visited);
    dfs(r, c + 1, heights[r][c], visited);
    dfs(r, c - 1, heights[r][c], visited);
  }

  // Go through tiles bordering top and bottom of given grid. Top borders pacific, bottom borders atlantic
  for (let c = 0; c < cols; c++) {
    dfs(0, c, 0, pacific);
    dfs(rows - 1, c, 0, atlantic);
  }
  // Same thing, but for left and right
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, 0, pacific);
    dfs(r, cols - 1, 0, atlantic);
  }

  const res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific.has(`(${r},${c})`) && atlantic.has(`(${r},${c})`)) res.push([r, c]);
    }
  }
  return res;
};
