function isIPv4Address(inputString) {
  var stringArray = inputString.split('.');
  if (stringArray.length !== 4) return false;
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i][0] === '0' && stringArray[i].length > 1) return false;
    var stringAsInt = parseInt(stringArray[i]);
    if (stringArray[i].search(/[a-z]/) !== -1 || stringAsInt > 255 || stringArray[i] === '') return false;
  }
  return true;
}
