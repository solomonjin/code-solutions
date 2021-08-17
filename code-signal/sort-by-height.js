function sortByHeight(a) {
  var sortedArray = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) sortedArray.push(a[i]);
  }
  sortedArray.sort((a, b) => { return a - b });
  var index = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sortedArray[index];
      index++;
    }
  }
  return a;
}


// Create an array with only non -1 numbers and sort it
// Create a variable to keep track of index of new array
// Iterate through given array and if the number is NOT -1, replace value at that index with value from sortex index
// increment index variable
// return original array
