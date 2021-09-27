function differentSymbolsNaive(s) {
  var charArr = []
  for (var i = 0; i < s.length; i++) {
    if (charArr.indexOf(s[i]) === -1) charArr.push(s[i])
  }
  return charArr.length;
}
