function chessBoardCellColor(cell1, cell2) {
  var letterToNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  }
  var value1 = letterToNum[cell1[0].toLowerCase()] + parseInt(cell1[1])
  var value2 = letterToNum[cell2[0].toLowerCase()] + parseInt(cell2[1])
  return (value1 % 2 === value2 % 2);
}
