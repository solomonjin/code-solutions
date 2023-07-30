/*
  Sliding window approach. Use right pointer to loop through the string.
  Add characters to a set to keep track of unique characters. If we run into a character that already exists,
  keep moving the left pointer until we remove the existing character. Update our max length count accordingly
*/

var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let [l, res] = [0, 0];
  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
    charSet.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};
