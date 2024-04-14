/*
BFS Approach:
- Create a queue for BFS as well as a visited set
- Count outwards from each gate position to get the distance to the nearest gate
- BFS queue to keep track of which "layer" of positions to check
- Initial pass through of the grid to get the gate positions
- BFS:
    - Solution is found when queue is completely empty
    - For each layer of coords, take each coordinate and replace the value with the proper step counter
    - Add in the next layer of rooms to check (helper function)
    - After every layer, increment our step value for the next set of rooms
*/
var wallsAndGates = function (rooms) {
  const [rows, cols] = [rooms.length, rooms[0].length];
  const visit = new Set();
  const queue = [];

  for (let r = 0; r < rows; r++) {        // Initial pass through of the grid to add all gate coords to queue
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) {
        visit.add(`${r},${c}`);
        queue.push([r, c]);
      }
    }
  }

  const addRoom = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols                      // Check if the room is valid (not out of bounds, already visited, or a wall)
      || visit.has(`${r},${c}`) || rooms[r][c] === -1) return;

    visit.add(`${r},${c}`);
    queue.push([r, c]);
  }

  let step = 0;
  while (queue.length) {                          // BFS: Go through each coord in queue, replacing the current room value with the proper step value
    const queueLength = queue.length;           // and then checking adjacent rooms for the next set of rooms
    for (let i = 0; i < queueLength; i++) {
      const [r, c] = queue.shift();
      rooms[r][c] = step;                     // Mark current room with the distance from nearest gate
      addRoom(r + 1, c);                      // Then add all valid adjacent rooms to DFS queue
      addRoom(r - 1, c);
      addRoom(r, c + 1);
      addRoom(r, c - 1);
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
