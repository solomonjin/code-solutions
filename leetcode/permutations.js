/*
DFS Approach:
- DFS decision tree:
    - For each number in the input array, have to decide if we want to add it to the list or not
    - Can't add duplicate numbers so use a set to keep track of what numbers we have used
    - If the current number already in the set, we know we can skip it
    - Otherwise, check both outcomes of adding the number or skipping it for now
    - Base case is if our set size is the same length of our input array (Every num used)
*/
var permute = function (nums) {
  const res = [];

  const dfs = (used) => {
    if (used.size === nums.length) {        // Base case: used all nums in input
      res.push([...used]);                // Add the set to res array (make copy)
      return;
    }

    for (const num of nums) {               // For each decision node, have to go through each num in input
      if (used.has(num)) continue;        // If current num already used, skip it

      used.add(num);                      // Include current num, then check outcome recursively
      dfs(used);
      used.delete(num);                   // Remove the last number and try to find another unique num in set
    }                                       // Don't have to make another recursive call because the for loop already will check the other inputs
  }
  dfs(new Set());
  return res;
};
