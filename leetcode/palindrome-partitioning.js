var partition = function (s) {
  const res = [];

  const dfs = (curr, i) => {
    if (i >= s.length) {
      res.push([...curr]);
      return;
    };

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        curr.push(s.slice(i, j + 1));
        dfs(curr, j + 1);
        curr.pop();
      }
    }
  }

  dfs([], 0);
  return res;
};


const isPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}
