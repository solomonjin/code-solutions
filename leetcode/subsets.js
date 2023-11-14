var subsets = function (nums) {
  const res = [];

  const subset = [];
  const dfs = (i) => {
    // base case. index is out of bounds
    if (i >= nums.length) {
      res.push([...subset]); //create a copy of current subset
      return;
    }

    // Add current number
    subset.push(nums[i]);
    dfs(i + 1);

    // Don't include current number
    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return res;
};
