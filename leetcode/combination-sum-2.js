var combinationSum2 = function (candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);
  const dfs = (pos, curr, total) => {
    if (total === target) {
      res.push([...curr]);
      return;
    }
    if (pos >= candidates.length || total > target) return;

    let prev = -1;
    for (let i = pos; i < candidates.length; i++) {
      if (prev === candidates[i]) continue;
      curr.push(candidates[i]);
      dfs(i + 1, curr, total + candidates[i]);
      curr.pop();
      prev = candidates[i];
    }
  }

  dfs(0, [], 0);
  return res;
};
