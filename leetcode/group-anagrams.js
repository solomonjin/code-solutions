/*
First solution. Pure hash map. Create an array with indexes for each letter in alphabet.
For each given string, convert each character in the string to a letter index a=0, b=1, etc
*/
var groupAnagrams = function (strs) {
  const res = {};

  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt() - 97]++;
    }
    const key = count.join('#');
    res[key] ? res[key].push(s) : res[key] = [s];
  }
  return Object.values(res);
};

/*
Easier to understand solution. Uses sort so should theoretically be less efficient
O(m * nlogn)
*/
var groupAnagrams = function (strs) {
  const map = {};

  for (const str of strs) {
    const s = str.split('').sort().join('');
    if (!map[s]) map[s] = [];
    map[s].push(str)
  }
  return Object.values(map);
}
