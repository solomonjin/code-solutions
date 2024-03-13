/*
Go through each string in input array and get character counts of each by
getting the character code of each char in str and subtracting 97 in order to
map the letters of the alphabet to array indices (count).

Encode the count array of the string (which contains the number of each char of alphabet in str)
Then use encoded string count to map it to the result object.
If the encoded key already exists in result map, then push it into the array
otherwise, create a new array key with the given str.
*/
var groupAnagrams = function (strs) {
  const res = {};

  for (const s of strs) {                     // Go through each givn string
    const count = new Array(26).fill(0);    // Create an array mapping each char in alphabet to an index
    for (const c of s) {                    // For each char in a given string...
      count[c.charCodeAt() - 97]++;       // Increment the count of each char in the count array
    }

    const key = count.join('#');            // Create a encoded key which can be used to identify how many of each chars are in a given string
    if (!res[key]) res[key] = [s];
    else res[key].push(s);
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
