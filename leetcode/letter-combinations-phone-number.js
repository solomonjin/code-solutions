/*
DFS/Backtrack:
- Create a digits to char map that will provide which nums can yield which char
- Base Case: we've reached the end of the input string
    - Have a possible solution, so add it to the results
- Otherwise, at each given character in the input string, check for all possible char referring to the map
- and recursively call the backtrack function to check for the next chars
*/
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];         // Edge case if input string is empty
  const res = [];
  const digitsToChar = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const backtrack = (i, curr) => {
    if (curr.length >= digits.length) {         // Base Case: we've reached the end of the input string
      res.push(curr);                         // Add current string as a possible solution
      return;
    }

    for (const c of digitsToChar[digits[i]]) {      // Check each possible char given the input digit
      backtrack(i + 1, curr + c);                 // Then check the next input digits' possible chars
    }
  }
  backtrack(0, '');
  return res;
};
