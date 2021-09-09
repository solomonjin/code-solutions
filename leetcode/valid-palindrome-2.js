var validPalindrome = function (s) {
  if (s === s.split('').reverse().join('')) return true;
  for (let i = 0; i < s.length / 2; i++) {
    let j = s.length - 1 - i;
    if (s[i] !== s[j]) {
      const removeLeft = s.slice(0, i) + s.slice(i + 1);
      const removeRight = s.slice(0, j) + s.slice(j + 1)
      return removeLeft.split('').reverse().join('') === removeLeft || removeRight.split('').reverse().join('') === removeRight
    }
  }
  return true;
};
