/*
Backtrack Solution:
- Create an empty array to use as a stack to keep track of parentheses
- as well as a result array to store all valid parentheses pairs
- Create backtrack function that will recursively create parentheses pairs
- Base case: # of open parentheses equal to n and number of open is equal to number of closed (we've found a valid parentheses generation)
- Otherwise, if we can add another open parentheses (n is less than # of open), add another open parentheses to stack and recursively call the next backtrack
- Then, check if we can add another close parentheses (num closed < num open), add another close parentheses then recursively check again.
- Must pop out the last added parentheses from stack after each recursive call to clean-up the stack
*/
var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  const generateParentheses = (open, close) => {
    if (open === n && open === close) {         // Base Case. Found a valid parentheses generation.
      result.push(stack.join(''));            // Add the valid parentheses as a string into our result array
      return;
    }

    if (open < n) {                             // Add another open parenth if possible
      stack.push('(');
      generateParentheses(open + 1, close);
      stack.pop();
    }

    if (close < open) {                         // Add another close parentheses if possible
      stack.push(')');
      generateParentheses(open, close + 1);
      stack.pop();
    }
  }

  generateParentheses(0, 0);
  return result;
};


/*
Helpful to think from perspective of each decision node. At each step, depending on
the amount of open and closed brackets already in the stack, there are 2 decisions to be made as well as a base case.
Base case is if the number of open and closed brackets are equal to the n input given. If so, that means we have found a potential
solution so can add it to the results and return.

Otherwise, the choices are between adding an open bracket or a closed bracket to the stack.
Can only add a open bracket to the stack if we have not reached our limit yet. If not the case, then can add an open and then
dfs/backtrack by checking options again after incrementing our open bracket counter.

To determine if we can add a closed bracket, our close counter needs to be less than the open counter. If so, we can add another
close bracket to the stack.
*/
