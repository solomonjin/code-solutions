var topKFrequent = function (nums, k) {
  const map = {};
  const frequency = new Array(nums.length + 1);
  const result = [];
  let resultCount = 0;

  // Get the counts of each number
  for (const num of nums) {
    if (!map[num]) map[num] = 1;
    else map[num] += 1;
  }

  // Map each values according to the index of their count number
  // e.g. if a number appeared 3 times, map it to index 3
  for (const [key, value] of Object.entries(map)) {
    if (!frequency[value]) frequency[value] = [];
    frequency[value].push(key);
  }

  // Frequency array is already in ascending order of how many times a number appears
  // So, go in reverse order and add each number in the frequency array until k times.
  for (let i = frequency.length - 1; i >= 0; i--) {
    if (k <= resultCount) break;
    if (frequency[i]) {
      for (const n of frequency[i]) {
        result.push(n);
        resultCount++;
      }
    }
  }
  return result;
};

/*
Can also solve by getting all the counts, then sorting the object's key/value pairs by descending
order and then returning the first k results of that sorted array.

Slightly less efficient. Should be O(nlogn)
*/
