/*
First, check to see if the strings are even the same length. If not, return false immediately
Create a hashmap of both strings.
Compare the values of each key in the first hashmap and compare it to the values of second
If any are not equal to one another, return false

return true if loop finishes completely
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const first = {},
    second = {};
  for (let i = 0; i < s.length; i++) {
    first[s[i]] = (first[s[i]] || 0) + 1;
    second[t[i]] = (second[t[i]] || 0) + 1;
  }

  for (let letter in first) {
    if (first[letter] !== second[letter]) return false;
  }

  return true;
};
