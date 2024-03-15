/*
Create a variable to hold the max area
Create pointers that start at each end of the input array

while the left/right pointers don't overlap with one another:
    - get the current area using the values at the left/right indices
    - area calculated by width (right - left) multiplied by height (greater value of the value at index left/right)
    - if the calculated area is greater than the current area, replace it
    - move the pointer with the smaller height inwards
*/
var maxArea = function (height) {
  let max = 0;

  let l = 0,
    r = height.length - 1;

  while (l < r) {
    const w = r - l;
    const h = Math.min(height[l], height[r]);
    const area = w * h;
    max = Math.max(area, max)
    if (height[l] >= height[r]) r--;
    else l++;
  }
  return max;
};


var maxArea = function (height) {
  let max = 0;
  let [l, r] = [0, height.length - 1];

  while (l < r) {
    const h = Math.min(height[l], height[r]);       // Set height of rectangle equal to the lowest of l and r pointers
    const w = r - l;                                // width of rectangle is the distance between l and r pointers
    const area = h * w;                             // Calc the area with the width and height
    max = Math.max(max, area);                      // Update the max variable with the highest value;
    if (height[l] < height[r]) l++;                 // Update left and right pointers
    else r--;
  }

  return max;
};
