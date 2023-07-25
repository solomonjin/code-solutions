/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
// Encode by joining all strings together with an integer for each strings length immediately followed by a delimiter char (in this case #);
var encode = function (strs) {
  return strs.map(str => `${str.length}#${str}`).join('');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const result = [];
  let i = 0;

  while (i < s.length) {                              // Loop through the string
    let j = i;                                      // Create another pointer to mark the start of a potential word
    while (s[j] !== '#') {                          // Find the delimiter character. Can also just use indexOf to find the delimiter
      j++;
    }
    const length = Number(s.slice(i, j));           // The char immediately following the delimiter should be a number to tell us the length of the string
    result.push(s.slice(j + 1, j + length + 1));    // So, get that length and grab the string
    i = j + length + 1;                             // Set the i pointer value to the start of the next word
  }
  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
