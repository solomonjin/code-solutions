/*
Create an empty string for the result and create a variable to hold value of its length
Starting at index 1, go through each letter in the string and check its left/right letters to see if the string is palindrome
If it is a palindrome, expand left/right pointers more until it either is not a palindrome or pointers out of range
If the length of the new palindrome is longer than the resLength, update the result string as well as its length

Even palindrome edge cases:
- Same thing, however set the left/right pointers to be the index and index + 1 respectively

Return the result string
*/
var longestPalindrome = function (s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    const even = getPalindrome(i, i + 1, s);
    const odd = getPalindrome(i, i, s);
    const curMax = odd.length > even.length
      ? odd
      : even;
    res = curMax.length > res.length
      ? curMax
      : res;
  }
  return res;
};

const getPalindrome = (l, r, s) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r)
}
