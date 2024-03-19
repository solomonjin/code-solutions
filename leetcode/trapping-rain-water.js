
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

  let [l, r] = [0, height.length - 1];
  let [leftMax, rightMax] = [height[l], height[r]];
  let total = 0;

  while (l < r) {                                             // Amount of raindrop at a given location is bottle-necked by the min of left/right boundaries
    if (leftMax <= rightMax) {                              // If our leftMax is the smallest/equal, increment the left pointer
      l++;
      leftMax = Math.max(leftMax, height[l]);             // Update our leftMax. Also helps us not add any negative numbers into our total
      total += leftMax - height[l];                       // If current space is our new leftMax, we add 0 since no rain can be captured at this index
    } else {                                                // Otherwise, we add the difference between the leftMax and current height to our total
      r--;
      rightMax = Math.max(rightMax, height[r]);           // Same thing, but if the right pointer was our bottle-neck
      total += rightMax - height[r];
    }
  }
  return total;
};
