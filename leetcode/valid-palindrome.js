var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}


/**
 * @param {string} s
 * @return {boolean}
 */

// Two pointer solution
var isPalindrome = function (s) {
  const isAlphaNumeric = c => {
    return (/[a-z0-9]/i).test(c)
  };

  let [left, right] = [0, s.length - 1];

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};
