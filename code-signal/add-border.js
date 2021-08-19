function addBorder(picture) {
  for (var i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*';
  }
  var borderString = '';
  for (i = 0; i < picture[0].length; i++) {
    borderString += '*';
  }
  picture.unshift(borderString);
  picture.push(borderString);
  return picture;
}

// add asterisk to start and end of each item in array
// get length of string
// Create a string of same length with only asterisks
// unshift and push the asterisk string into picture
// return picture
