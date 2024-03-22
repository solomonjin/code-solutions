/*
Create a stack that contains a pair of temperature, index values of temperatures that we come across.
If the current temperature we're looking at is greater than the top of the temperature stack, keep popping and record the results to the
result array by calculating num days (diff in indices) from the recorded index and the current index.
*/
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);         // Create a result array with same length as input array filled with 0
  const stack = [];                                     // Empty array for temp stack

  for (let i = 0; i < temperatures.length; i++) {         // Go through each temperature in the input array
    while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {      // If the current temperature is higher than the last recorded temp,
      const [stackT, stackI] = stack.pop();                                       // that means we have found the num days to get a warmer temp
      res[stackI] = i - stackI;                                                   // Remove the last element and use the recorded index to update res array
    }
    stack.push([temperatures[i], i]);               // Record the current temperature and its index
  }
  return res;
};
