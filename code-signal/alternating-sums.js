function alternatingSums(a) {
  var sum1 = 0;
  var sum2 = 0;
  var teamWeights = []
  for (var i = 0; i < a.length; i++) {
    if (i % 2) sum2 += a[i];
    else sum1 += a[i];
  }
  teamWeights.push(sum1);
  teamWeights.push(sum2);
  return teamWeights;
}
