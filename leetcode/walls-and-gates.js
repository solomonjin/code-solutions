// BFS approach
var wallsAndGates = function (rooms) {
  const [rows, cols] = [rooms.length, rooms[0].length];
  const queue = [];
  const visit = new Set();
  let step = 0;

  // BFS Helper: Checks if out of bounds, already visited, or a wall space
  const countRoom = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols
      || visit.has(`(${r},${c})`) || rooms[r][c] === -1) return;
    visit.add(`(${r},${c})`);
    queue.push([r, c]);
  }

  // Initial pass through of grid to add gate coords to queue
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) {
        visit.add(`(${r},${c})`)    // Keep track of which tiles we've visited to be more efficient
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const [r, c] = queue.shift();
      rooms[r][c] = step;
      countRoom(r + 1, c);
      countRoom(r - 1, c);
      countRoom(r, c + 1);
      countRoom(r, c - 1);
    }
    step++;
  }
};

// DFS Approach (Too slow as-is. Need to implement a visit set possibly)
var wallsAndGates = function(rooms) {
    const [rows, cols] = [rooms.length, rooms[0].length];

    const countRooms = (r, c, count) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols
        || !rooms[r][c] || count > rooms[r][c]) {
            return;
        }
        rooms[r][c] = count;
        countRooms(r + 1, c, count + 1);
        countRooms(r - 1, c, count + 1);
        countRooms(r, c + 1, count + 1);
        countRooms(r, c - 1, count + 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {
                countRooms(r + 1, c, 1);
                countRooms(r - 1, c, 1);
                countRooms(r, c + 1, 1);
                countRooms(r, c - 1, 1);
            }
        }
    }
};
