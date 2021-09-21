function depositProfit(deposit, rate, threshold) {
  var total = deposit;
  var numYears = 0;
  while (threshold > total) {
    total += total * (rate / 100)
    numYears++
  }
  return numYears;
}
