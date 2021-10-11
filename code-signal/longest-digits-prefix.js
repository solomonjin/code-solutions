function longestDigitsPrefix(inputString) {
  var prefixIndex = inputString.search(/\D|\s/);
  if (prefixIndex === -1) return inputString;
  return inputString.slice(0, prefixIndex)
}
