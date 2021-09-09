var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}
