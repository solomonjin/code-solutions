function commonCharacterCount(s1, s2) {
  var count = 0;
  var s2Array = s2.split('');
  for (var i = 0; i < s1.length; i++) {
    if (s2Array.indexOf(s1[i]) !== -1) {
      count++;
      s2Array.splice(s2Array.indexOf(s1[i]), 1);
    }
  }
  return count;
}


// Convert s2 into array,
// Iterate through s1, if character is in s2Array, increment count. REMOVE that character from array
// Return count
