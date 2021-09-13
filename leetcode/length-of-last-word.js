//Second solution; Implemented the trim method (removes whitespace at beginning and end of string)
var lengthOfLastWord = function (s) {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
};

// First solution
// var lengthOfLastWord = function (s) {
//   const words = s.split(' ');
//   const filtered = words.filter(word => word.length !== 0)
//   return filtered[filtered.length - 1].length;
// };
