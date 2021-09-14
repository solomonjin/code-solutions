/* Solution that reverses a string with two pointer approach.
  Will only swap letters if both the left and right pointers are letters, otherwise it skips it.
*/
var reverseOnlyLetters = function (s) {
  let strArr = s.split(''),
    left = 0,
    right = strArr.length - 1;
  while (left <= right) {
    if ((/[a-zA-Z]/).test(strArr[left]) && (/[a-zA-Z]/).test(strArr[right])) {
      const temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left += 1;
      right -= 1;
    } else if (!(/[a-zA-Z]/).test(strArr[left])) {
      left += 1;
    } else if (!(/[a-zA-Z]/).test(strArr[right])) {
      right -= 1;
    }
  }
  return strArr.join('')
};
