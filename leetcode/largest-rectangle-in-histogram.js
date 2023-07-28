/*
   Create a stack of height/index pairs to add as we loop through the array.
   While the current height is taller than the height at the top of our stack, we pop it, calculate the area,
   replace the max calculated area if applicable and then record from which index this height initially started.

   Afterwards, loop through any remaining elements in the stack to calculate the areas left using the recorded indices
   The leftover elements' widths will be from their recorded starting index to the end of the given heights array
*/
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    let startIndex = i;
    while (stack.length > 0 && stack[stack.length - 1][0] > heights[i]) {
      const [stackH, stackI] = stack.pop();
      const calcArea = stackH * (i - stackI);
      maxArea = Math.max(calcArea, maxArea);
      startIndex = stackI;
    }
    stack.push([heights[i], startIndex]);
  }
  console.log(stack);

  for (let i = 0; i < stack.length; i++) {
    const [stackH, stackI] = stack[i];
    const calcArea = stackH * (heights.length - stackI);
    maxArea = Math.max(maxArea, calcArea);
  }

  return maxArea;
};
