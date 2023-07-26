/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const pairs = position.map((p, i) => [p, speed[i]]);    // Create an array of position/speed pairs
  pairs.sort((a, b) => b[0] - a[0]);                      // Sort pair array by position in reverse order
  const stack = [];

  for (let i = 0; i < pairs.length; i++) {                // Go through the pairs array in reverse order and add the time it will take for each car to reach
    const [p, s] = pairs[i];                            // the target onto the stack. If there are more than 1 cars in stack check to see if they will overlap
    stack.push((target - p) / s);                       // by comparing their times to reach target. If so, the top car is guaranteed to catch up and join fleets
    if (stack.length >= 2                               // with the car in front of it (aka we can disregard the faster car as it will join with the car in front)
      && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop();
    }
  }
  return stack.length;
};
