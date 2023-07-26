/*
Create a stack that contains a pair of temperature, index values of temperatures that we come across.
If the current temperature we're looking at is greater than the top of the temperature stack, keep popping and record the results to the
result array by calculating num days (diff in indices) from the recorded index and the current index.
*/
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      const [stackT, stackI] = stack.pop();
      res[stackI] = i - stackI;
    }
    stack.push([temperatures[i], i]);
  }
  return res;
};
