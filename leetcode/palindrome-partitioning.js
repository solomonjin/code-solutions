/*
DFS Approach:
- Create a helper function to check if a substring is a palindrome (two pointer)
- Base case: if our index is out of bounds/checked the entire string, we can add the current subset to our results
- Otherwise, we must first decide on how to partition the string, each decision could be seen as either including one or multiple chars
- To do this, go through each char starting at our current index
- Then check if the partition from i to j is a partition
- If so, it is a possible solution so add the current substring to our subset then continue dfs decision
*/
var partition = function (s) {
  const res = [];

  const dfs = (i, curr) => {
    if (i >= s.length) {
      res.push([...curr]);
      return;
    }

    for (let j = i; j < s.length; j++) {            // For loop to partition the string
      if (!isPalindrome(s, i, j)) continue;       // If the current substring is not a palindrome, continue to find one that is
      curr.push(s.slice(i, j + 1));               // Decision to include current substring
      dfs(j + 1, curr);
      curr.pop();                                 // Include current char into the next as a substring
    }
  }

  dfs(0, []);
  return res;
};

const isPalindrome = (s, l, r) => {                 // Helper function to check if a substring is a palindrome
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}
