/*
 Create a set from nums array. To determine if a given number is the start of a sequence, check if there is a left neighbor in the set (num - 1).
 If there isn't, the number is the start of a sequence so can begin checking its length.
 Then, keep checking if there's a consecutive number within the set while incrementing the length of the sequence
 Afterwards check if the given calculated sequence is longer than the current heighest sequence
*/
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 0;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
