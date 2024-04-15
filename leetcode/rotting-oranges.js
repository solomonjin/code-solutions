/*
BFS Approach:
- Start from every rotten orange and go outwards from their positions, rotting any adjacent fresh oranges
until all fresh oranges are rotten
- First, make an initial pass through the grid, counting up all fresh oranges and marking the coords of rotten oranges and
putting them in a queue
- BFS: Go through the marked tiles in queue (rotten oranges)
- for each of the marked tiles, go check their adjacent tiles for more fresh oranges to make rotten
- when a fresh orange tile is turned rotten, add it to the queue to check for its neighbors and decrement the amount of fresh
oranges counter
- The BFS loop will end when either the queue is completely empty or there are no more fresh oranges left
- After each "layer" of rotten oranges to check in queue, increment a time counter to keep track of how many minutes have elapsed for each step
- Finally, once the BFS is complete, return the time count or -1 if there is still a fresh orange remaining.
*/

var orangesRotting = function (grid) {
  const queue = [];
  let [time, fresh] = [0, 0];
  const [rows, cols] = [grid.length, grid[0].length];

  // Initial pass through of array to mark all rotten orange tiles and count amount of fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++;
      else if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  // Array to loop and check 4-directionally adjacent tiles
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length && fresh) {
    const queueLength = queue.length;
    // For loop within while loop to keep track of initial length of our queue before adding/removing more fruits
    // Once we go through this initial length of queue, one unit of time has passed
    for (let i = 0; i < queueLength; i++) {
      const [row, col] = queue.shift();
      // For each rotten fruit, check its neighbors
      for (const diff of directions) {
        const [dr, dc] = diff;
        const r = dr + row;
        const c = dc + col;
        // If the adjacent tile is out of bounds or doesn't contain a fresh orange, continue
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) continue;
        grid[r][c] = 2;
        queue.push([r, c]);
        fresh--;
      }
    }
    time++;
  }
  return fresh ? -1 : time;
}
