/*
Sliding Window:
- Have two pointers to keep track of which characters are in the substring
- Create a character set to check for duplicate chars in substring
- both pointers will start at 0, but move right pointer incrementally
- Each step, check to see if the new char at right pointer is already in our charSet
- If not, add the new char to set and check to see if the substring is longest length (r - l + 1);
- While the new char still exists in the substring, keep deleting characters from the left in set while incrementing left pointer
*/

var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();                  // Set to check for duplicate char in substring
  let [l, res] = [0, 0];

  for (let r = 0; r < s.length; r++) {        // Have right pointer go through the string
    while (charSet.has(s[r])) {             // If a char at right pointer is already in the set,
      charSet.delete(s[l]);               // keep removing char from left pointer while incrementing left
      l++;
    }
    charSet.add(s[r]);                      // Once/if the right char is unique, add it to set
    res = Math.max(res, r - l + 1);         // Then update our result if new substring is highest length
  }
  return res;
};
