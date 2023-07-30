var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const neededChar = {};

  for (let i = 0; i < s1.length; i++) {                                       // Create map of needed characters from first string
    neededChar[s1[i]] ? neededChar[s1[i]]++ : neededChar[s1[i]] = 1;
  }
  let [l, r, requiredLength] = [0, 0, s1.length];

  while (r < s2.length) {                                          // Loop through second string, if the current character exists and isn't already zero in the
    if (neededChar[s2[r]] > 0) requiredLength--;                 // of required characters we have to find. Keep moving the right pointer window forward.
    neededChar[s2[r]]--;
    r++;

    if (requiredLength <= 0) return true;                   // If our requiredLength hits 0, we have found all the characters we needed to within a window

    if (r - l === s1.length) {                              // Check to see if our window length is at the max (s1 length). If so, move the left pointer to
      if (neededChar[s2[l]] >= 0) requiredLength++;       // make the window smaller and if the character at left pointer was a required character, increment
      neededChar[s2[l]]++;                                // its value in the neededChar map as it's no longer within our window
      l++;
    }
  }
  return false;
};
