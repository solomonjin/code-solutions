/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left <= right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

/*
[2, 3, 6, 8] target = 9
 l        r  2 + 8 = 10 > 9, so move right pointer
 l     r     3 + 5 = 8 < 9, so move left pointer
    l  r     3 + 6 = 9 = 9, found solution. Return [l, r];
*/
