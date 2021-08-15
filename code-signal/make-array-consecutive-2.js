function makeArrayConsecutive2(statues) {
  statues.sort(function (a, b) {
    return a - b;
  });
  var count = 0;
  for (var i = 0; i < statues.length - 1; i++) {
    count += statues[i + 1] - statues[i] - 1;
  }
  return count;
}
