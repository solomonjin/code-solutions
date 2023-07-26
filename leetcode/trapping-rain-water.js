
/*
   O(n) memory solution. Run through the heights array a couple times to grab the max left and max right boundaries
   Then, go through the heights array and for each position i, the amount of rain water that can be trapped is calculated by
   the height of the minimum between left/right boundaries (found by first pass throughs to find max l/r) minus the current height at i.
   Only add non-negative results to the total.
*/
var trap = function (height) {
  let total = 0;
  const maxLefts = [];
  const maxRights = new Array(height.length).fill(0);
  const minBoundaries = new Array(height.length).fill(0);

  let leftCurrMax = 0;
  for (let i = 0; i < height.length; i++) {
    maxLefts.push(leftCurrMax);
    leftCurrMax = Math.max(height[i], leftCurrMax);
  }

  let rightCurrMax = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxRights[i] = rightCurrMax;
    minBoundaries[i] = Math.min(maxRights[i], maxLefts[i]);
    rightCurrMax = Math.max(height[i], rightCurrMax);
  }

  for (let i = 0; i < height.length; i++) {
    const trappedRain = minBoundaries[i] - height[i];
    if (trappedRain > 0) total += trappedRain;
  }

  return total;
};


/*
Two pointer solution with O(1) memory complexity.
Set the pointers at each end of the height array along with variables to keep track of the max left and right values.
For each set of l/r values, determine which is the min boundary between them. For the lesser pointer, increment the pointer
and then update the max value. Then calculate how much rain could be at the new pointer value given the boundaries.
*/
var trap = function (height) {
  if (height.length === 0) return 0;
  let total = 0;
  let [l, r] = [0, height.length - 1];
  let [leftMax, rightMax] = [height[l], height[r]];

  while (l < r) {
    if (leftMax <= rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      total += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      total += rightMax - height[r];
    }
  }
  return total;
};
