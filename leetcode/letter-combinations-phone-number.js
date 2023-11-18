var letterCombinations = function (digits) {
  if (digits.length <= 0) return [];
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
    console.log(curr);
    if (curr.length === digits.length) {
      res.push(curr);
      return;
    }

    for (const c of digitsToChar[digits[i]]) {
      backtrack(i + 1, curr + c);
    }
  }
  backtrack(0, '');
  return res;
};
