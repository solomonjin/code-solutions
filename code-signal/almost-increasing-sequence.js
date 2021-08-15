function almostIncreasingSequence(sequence) {
  var flags = 0;
  for (var i = 1; i < sequence.length; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      flags++;
      if (flags > 1) return false;
      if (sequence[i - 2] >= sequence[i] && sequence[i - 1] >= sequence[i + 1]) return false;
    }
  }
  return true;
}
