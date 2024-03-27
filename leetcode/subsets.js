/*
DFS Solution:
- For each number in the input array, there are two decisions to make for the solution:
    - Include the number into a subset
    - Exclude the number
- Create an empty result array as well as an empty subset array
- Create a dfs function that will take in an index for input array
- Base case of dfs: We've reached the end of the input array
    - This means we have a complete subset so we can add it to our result
- Otherwise, we can first decide to add the current number to our subset, then recursive dfs the next (i + 1);
- The other decision is to EXCLUDE the number so we can first pop the previously added num and then recursive dfs again
*/
var subsets = function (nums) {
  const res = [];
  const subset = [];

  const dfs = (i) => {
    if (i >= nums.length) {
      res.push([...subset]);          // Have to create a deep copy of the subset
      return;
    }

    subset.push(nums[i]);               // Decision to include current num in subset
    dfs(i + 1);

    subset.pop();                       // Decision to exclude current num
    dfs(i + 1);
  }

  dfs(0);
  return res;
};
