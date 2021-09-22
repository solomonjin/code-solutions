function absoluteValuesSumMinimization(a) {
  var numArray = []
  for (var i = 0; i < a.length; i++) {
    var total = 0;
    for (var j = 0; j < a.length; j++) {
      total += Math.abs(a[j] - a[i]);
    }
    numArray.push(total)
  }
  var numIndex = numArray.indexOf(Math.min(...numArray))
  console.log(numIndex)
  return a[numIndex]
}
