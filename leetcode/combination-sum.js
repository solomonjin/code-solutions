/*
DFS Approach:
- DFS Decision tree:
    - 2 decisions per node/num in input array
    - Add current number to total
    - Skip current number
    - Base case is if our total is over/equal to or our index is out of range
*/
var combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (i, curr, total) => {
    if (total === target) {         // Base case if we reached our target total
      res.push([...curr]);
      return;
    }

    if (total > target || i >= candidates.length) return;       // Base case if index is out of range or we went over target

    curr.push(candidates[i]);                           // Decision to add current number (can be repetitive, so don't automatically go to next num)
    dfs(i, curr, total + candidates[i]);            // Then go down decision tree with the context of adding the curr num

    curr.pop();                                         // Decision to skip current number
    dfs(i + 1, curr, total);
  }

  dfs(0, [], 0);
  return res;
};
