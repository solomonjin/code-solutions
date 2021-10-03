function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var days = 0;
  var currentHeight = 0;
  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    days++
    if (currentHeight >= desiredHeight) return days;
    currentHeight -= downSpeed;
  }
  return days;
}
