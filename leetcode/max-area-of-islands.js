/*
DFS Approach:
- Similar to find number of islands in that we just need to find each island, but this time also get the area of it
- Can recursively count the area of the island by just adding up the recursive calls of every adjacent tile then adding 1 to it
- base case of DFS: if tile is out of bounds or not a land, return 0
- Otherwise, set the current land tile to water and then return the area by recursively finding
other land tiles and returning the sum of those calls + 1
- Then, just need to go through the input grid and apply the dfs search to every tile, keeping track of the biggest
area returned by the islands
*/
var maxAreaOfIsland = function (grid) {
  const [rows, cols] = [grid.length, grid[0].length];
  const dfs = (r, c) => {
    if (r >= rows || r < 0 ||               // Base case: if tile out of bounds or tile is water
      c >= cols || c < 0 ||
      !grid[r][c]) {
      return 0;
    }

    grid[r][c] = 0;                           // Current tile is land, so swap it to water (avoid revisiting tile)
    return dfs(r + 1, c) + dfs(r - 1, c) +
      dfs(r, c + 1) + dfs(r, c - 1) + 1;  // Return sum of lands from adjacent tiles plus itself (+1);
  }

  let maxArea = 0;
  for (let r = 0; r < rows; r++) {                                    // Go through the input grid looking for land tiles
    for (let c = 0; c < cols; c++) {                                // and check to see if each island returns the biggest island
      if (grid[r][c]) maxArea = Math.max(maxArea, dfs(r, c));
    }
  }
  return maxArea;
};
