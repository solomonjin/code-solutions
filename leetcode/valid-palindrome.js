
var isPalindrome = function (s) {
  const input = s.toLowerCase().split(/[^A-Za-z0-9]/).join('');
  return input === input.split('').reverse().join('');
};
