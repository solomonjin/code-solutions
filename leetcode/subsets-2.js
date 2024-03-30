/*
DFS Approach:
- Same dfs approach as original subsets problem with a couple tricks
- First, have to sort the input array to keep the duplicate numbers next to each other
- DFS method:
    - Base case: we've checked every num in input (i >= nums.length)
        - We found a possible subset, so add it to our results
    - Then, we check the decision to include current number
    - After, we check the decision to NOT include current number (pop from subset)
    - Trick 2: Check to see if next num is a duplicate by seeing if it's equal to the current num and skip it. Repeat until non dupe num is found
*/
var subsetsWithDup = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);         // Sort input array to keep duplicate nums next to one another

  const dfs = (i, subset) => {
    if (i >= nums.length) {         // Base Case: reached end of input array
      res.push([...subset]);
      return;
    }

    subset.push(nums[i])            // Decision to include current num
    dfs(i + 1, subset);
    subset.pop();                   // Decision to NOT include current num
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;     // Skip any duplicate nums
    dfs(i + 1, subset);
  }

  dfs(0, []);
  return res;
};
