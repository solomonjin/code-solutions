var orangesRotting = function (grid) {
  const queue = [];
  let [time, fresh] = [0, 0];
  const [rows, cols] = [grid.length, grid[0].length];

  // First, go through the grid to count how intial amount of fresh fruits and add coords of rotten fruits into queue
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Easy way to loop through the 4 directions to condense code

  while (queue.length && fresh) {
    // For loop within while loop to keep track of initial length of our queue before adding/removing more fruits
    // Once we go through this initial length of queue, one unit of time has passed
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const [row, col] = queue.shift();
      // For each rotten fruit, check its neighbors
      for (const diff of directions) {
        const [dr, dc] = diff;
        const r = dr + row;
        const c = dc + col;
        // If out of bounds or fruit isn't fresh, skip this tile (continue loop);
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) continue;
        // Otherwise, make the fruit rotten and add it to the queue
        grid[r][c] = 2;
        queue.push([r, c]);
        fresh--;
      }
    }
    time++;
  }
  return fresh ? -1 : time;
};
