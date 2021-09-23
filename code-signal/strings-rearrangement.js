function stringsRearrangement(inputArray) {
  var permutationArray = getPermutations(inputArray.sort());
  for (var i = 0; i < permutationArray.length; i++) {
    if (checkSolution(permutationArray[i])) return true;
  }
  return false;
}

function checkSolution(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) return false;
    var count = 0;
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] !== array[i + 1][j]) {
        count++;
        if (count > 1) return false;
      }
    }
  }
  return true;
}

function getPermutations(array) {
  var result = [];
  if (array.length === 1) return [array]
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    var remainder = array.slice(0, i).concat(array.slice(i + 1));
    var permuteRemainder = getPermutations(remainder);
    for (var j = 0; j < permuteRemainder.length; j++) {
      result.push([current].concat(permuteRemainder[j]));
    }
  }
  return result;
}
