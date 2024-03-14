/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
Two-Pointer Solution:
Set left and right pointers at first and last values of the array
Check to see if the sum of the values at left/right pointers === target
If the sum === target, solution is found
If the sum is less than the target, increment left pointer
If the sum is greater than the target, decrement right pointer
*/

var twoSum = function (numbers, target) {
  let [l, r] = [0, numbers.length - 1];

  while (l <= r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) l++;
    else r--;
  }
};

/*
[2, 3, 6, 8] target = 9
 l        r  2 + 8 = 10 > 9, so move right pointer
 l     r     3 + 5 = 8 < 9, so move left pointer
    l  r     3 + 6 = 9 = 9, found solution. Return [l, r];
*/
