var subsetsWithDup = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);     // Sort array to keep duplicate nums next to one another
  const backtrack = (i, subset) => {
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]);       // Include current num
    backtrack(i + 1, subset);
    subset.pop();               // Do not include current num

    // If next number is duplicate, skip it
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
    backtrack(i + 1, subset);   // Will either continue at next valid i or give us base case.
  }

  backtrack(0, []);
  return res;
};
