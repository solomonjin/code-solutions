/*
    Sliding window approach. Go through the string and add each characters' counts to a hashmap.
    The hashmap will keep track of the frequency of characters in a given window.
    Keep adding more characters into the window as long as the current window is valid.
    A given window is valid if the length of the window subtracted by the most frequent character in that window is
    less than or equal to the given k value. Then, update ther esult to keep track of the max length string

    If the window is not valid, have to move the left pointer to make the window smaller until the window is valid
    again.
*/
var characterReplacement = function (s, k) {
  const window = {};
  let [l, res] = [0, 0];

  for (let r = 0; r < s.length; r++) {
    window[s[r]] ? window[s[r]]++ : window[s[r]] = 1;                // Increment character count in window. If it doesn't exist, set to 1
    while (r - l + 1 - Math.max(...Object.values(window)) > k) {     // Check if window is valid by taking length of window and subtracting
      window[s[l]]--;                                              // the number of the most frequent character and seeing if it's more than the
      l++;                                                         // allowed number of substitutions.
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
}

/*
    Slightly more optimal solution.
    Can get rid of the O(26) operation to scan through hashmap
    to find the most frequent character
*/
var characterReplacement = function (s, k) {
  const window = {};

  let l = 0,
    res = 0,
    maxf = 0;

  for (let r = 0; r < s.length; r++) {
    window[s[r]] ? window[s[r]]++ : window[s[r]] = 1;
    maxf = Math.max(maxf, window[s[r]]);

    if (r - l + 1 - maxf > k) {
      window[s[l]]--;
      l++;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};
