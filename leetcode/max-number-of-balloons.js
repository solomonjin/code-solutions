var maxNumberOfBalloons = function (text) {
  const letters = {};
  for (let i = 0; i < text.length; i++) {
    if (letters[text[i]]) {
      letters[text[i]]++;
    } else {
      letters[text[i]] = 1;
    }
  }
  let result = 0;
  while (letters['b'] >= 1 && letters['a'] >= 1 && letters['l'] >= 2 &&
    letters['o'] >= 2 && letters['n'] >= 1) {
    letters['b']--;
    letters['a']--;
    letters['l'] -= 2;
    letters['o'] -= 2;
    letters['n']--;
    result++;
  }
  return result;
};
