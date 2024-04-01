/*
   DFS Approach:
   - Similar to combination sum, but need to sort the input array first to keep duplicate numbers next to one another
   - DFS Method:
       - Base case: if our total hits the target, we found a valid subset
       - Base case 2: if we go out of index or our total is over the target, we know this subset isn't a solution
       - Can't have duplicate nums in a subset so make a variable to keep track of the prev number
       - Go through each number in input array starting at current position
       - Check if current num is equal to previous num, if so continue onto the next number
       - Then, check decision to add current num to subset
       - Then, remove current num and continue
       - Finally, set the previous num equal to current num
*/
var combinationSum2 = function (candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);           // Sort input array to keep duplicates next to one another
  const dfs = (pos, curr, total) => {
    if (total === target) {                 // If we hit our target, we found a valid subset
      res.push([...curr]);
      return;
    }

    if (pos >= candidates.length || total > target) return;         // If we go out of bounds or overshoot target, not a valid subset

    let prev = -1
    for (let i = pos; i < candidates.length; i++) {
      if (prev === candidates[i]) continue;                       // Skip current num if it's a duplicate
      curr.push(candidates[i]);                                   // Decision to add current num to subset
      dfs(i + 1, curr, total + candidates[i]);
      curr.pop();                                                 // Decision to skip current num (for loop will handle the iteration to next num)
      prev = candidates[i]                                        // Set previous to current num for next iteration
    }
  }

  dfs(0, [], 0);
  return res;
};
