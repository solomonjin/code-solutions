/*
Sliding window
- Set two variables (l, r) at the first and second indices of the input
- Go through the array using the right pointer
- For each step, check to see if the profit (right - left) is biggest before incrementing
- But, if the number at right pointer is smaller than left, move left pointer to right's position before incrementing right
- This will automatically set the left pointer to the lowest price point in the input eventually
*/

var maxProfit = function (prices) {
  let [l, r, profit] = [0, 1, 0];

  while (r < prices.length) {
    if (profit[l] > profit[r]) l = r;                       // Set left pointer to right, if left number is bigger
    profit = Math.max(profit, prices[r] - prices[l]);       // Check to see if current profit is biggest
    r++;                                                    // Increment right pointer to check next sequence
  }
  return profit;
};

/*
   Non sliding-window approach
*/
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let min = prices[0],
    res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else {
      const profit = prices[i] - min;
      res = Math.max(res, profit);
    }
  }
  return res;
};
