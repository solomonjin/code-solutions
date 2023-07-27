var evalRPN = function (tokens) {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(b / a),
  }
  const performOperator = op => {
    const numA = stack.pop();
    const numB = stack.pop();
    const result = operators[op](numA, numB);
    stack.push(result);
  }
  const stack = [];
  for (const c of tokens) {
    if (!operators[c]) stack.push(Number(c));
    else performOperator(c);
  }
  return stack.pop();
};

// Can also have a solution with O(1) space complexity by mutating the given array in place
// instead of creating a separate stack.
