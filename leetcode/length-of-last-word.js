var lengthOfLastWord = function (s) {
  const words = s.split(' ');
  const filtered = words.filter(word => word.length !== 0)
  return filtered[filtered.length - 1].length;
};
