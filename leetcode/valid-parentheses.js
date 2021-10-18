/*
Create a hash map which lets us know the pairings of each opening/closing bracket type
Create an empty stack
Go through each letter in the given string
If the current letter is not in the pairs hash map (aka opening bracket), add it to the stack
Else, check to see if the opening pair of the current letter is at the top of the stack
    - If so, remove it from the stack
    - If not, return false immediately (brackets out of order)
If the stack is empty at the end of the loop, return true
else return false
*/

var isValid = function (s) {
  const pairs = { ')': '(', ']': '[', '}': '{' }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!pairs[s[i]]) stack.push(s[i]);
    else if (pairs[s[i]] === stack[stack.length - 1]) stack.pop();
    else return false;
  }

  if (stack.length === 0) return true;
  return false;
};
