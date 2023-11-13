var combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (i, curr, total) => {
    if (total === target) {
      res.push(curr.slice());
      return;
    }
    // Base case: index out of bounds or current total is too high
    if (total > target || i >= candidates.length) return;

    // Decision to include current number (can be repetitive)
    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i]);

    // Decision to not include current num
    curr.pop();
    dfs(i + 1, curr, total);
  }
  dfs(0, [], 0);
  return res;
};
