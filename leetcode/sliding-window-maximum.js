/*
Monotonic queue: strictly decreasing queue
As each new number is introduced into the window, check to see if it's greater than the last number in the queue
Remove each number in the queue starting from the end that is smaller than the new number.
This will ensure that the first number in the queue is the max of the given window
*/

var maxSlidingWindow = function (nums, k) {
  const res = [];
  const q = [];

  for (let r = 0; r < nums.length; r++) {
    while (q.length >= 1 && nums[r] > q[q.length - 1]) q.pop();
    q.push(nums[r]);

    const l = r + 1 - k;
    if (l >= 0) {
      res.push(q[0]);
      if (nums[l] === q[0]) q.shift();
    }
  }
  return res;
};
