var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  const backtrack = (open, close) => {
    if (open === n && open === close) {
      result.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('(');
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(')');
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
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
