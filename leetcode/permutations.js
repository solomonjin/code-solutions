var permute = function (nums) {
  const res = [];

  const dfs = (used) => {
    // Base case. Every num in nums in used set
    if (used.size === nums.length) {
      res.push([...used]);
      return;
    }

    // Go through each num and check if our set already contains it
    for (const num of nums) {
      if (used.has(num)) continue;    // If the set contains current num, don't include it
      used.add(num);                  // Otherwise, include num then recursively add other unique nums
      dfs(used);
      used.delete(num);               // Remove the last number and try to find another unique num in set
    }
  }

  dfs(new Set());
  return res;
};
