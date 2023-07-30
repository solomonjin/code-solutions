/*
    Sliding window
*/

var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let [l, r, profit] = [0, 1, 0];

  while (r < prices.length) {
    if (prices[r] <= prices[l]) {
      l = r;
    }
    profit = Math.max(profit, prices[r] - prices[l]);
    r++;
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
