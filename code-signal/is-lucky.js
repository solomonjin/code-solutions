function isLucky(n) {
  var numLength = n.toString().length;
  var sum1 = 0;
  var sum2 = 0;
  for (var i = 0; i < Math.ceil(numLength / 2); i++) {
    sum1 += parseInt(n.toString()[i])
  }
  for (i = Math.floor(numLength / 2); i < numLength; i++) {
    sum2 += parseInt(n.toString()[i]);
  }
  return (sum1 === sum2);
}
