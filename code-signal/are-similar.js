function areSimilar(a, b) {
  var aSwap = [];
  var bSwap = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      aSwap.push(a[i]);
      bSwap.push(b[i]);
    }
  }
  console.log(aSwap, bSwap)
  return (aSwap.length <= 2 && aSwap.toString() === bSwap.reverse().toString())
}
