function evenDigitsOnly(n) {
  var stringInt = n.toString();
  for (var i = 0; i < stringInt.length; i++) {
    if (parseInt(stringInt[i]) % 2 !== 0) return false;
  }
  return true;
}
