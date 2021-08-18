function reverseInParentheses(inputString) {
  while (inputString.indexOf('(') !== -1) {
    var firstIndex = inputString.lastIndexOf('(');
    var lastIndex = inputString.indexOf(')', firstIndex);
    var innerString = inputString.slice(firstIndex, lastIndex + 1);
    innerString = innerString.slice(1, innerString.length - 1).split('').reverse().join('');
    console.log(inputString.slice(lastIndex + 1))
    inputString = inputString.slice(0, firstIndex) + innerString + inputString.slice(lastIndex + 1);
  }
  return inputString;
}

// Repeat while there are still parentheses in the string
// Find the index of the 'inner' parentheses using lastIndexOf
// Find index of the first close parentheses (indexOf)
// slice the inputString from those two indexes
// take sliced string, remove the parentheses, reverse the content, then join it back together with the contents from the original string
