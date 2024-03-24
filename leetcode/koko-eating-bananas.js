/*
Binary Search:
- The minimum amount of bananas will always be 1 and the max will be the largest pile in the given array
- Create a variable with a high value to keep track of the solution
- Then, perform binary search with the min/max constraints, taking the average of the two and using it as a midpoint
- Check if it is possible for Koko to eat all bananas with the given midpoint with a helper function
- If feasible, then update solution variable and check for a lower feasible num (discard right half)
- Otherwise, solution exists in the upper partition (discard left half)
- Helper function will just count the number of hours it will take given a rate for Koko to eat the piles of bananas
- If the number of hours ever exceeds the given h, return false. Otherwise, return true.
*/
var minEatingSpeed = function (piles, h) {
  let [min, max] = [1, Math.max(...piles)];               // Create min/max variables. Max is the biggest value in the piles array
  let numBananas = max                                    // Variable to store possible solution

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (feasible(piles, mid, h)) {                      // Check if num eaten bananas at midpoint is feasible to get solution
      numBananas = mid;                               // If so, update solution variable and then check the lower partition
      max = mid - 1;
    } else {
      min = mid + 1;                                  // Otherwise, the solution exists in the upper partition
    }
  }
  return numBananas;
}

// Helper function to check if a given num of bananas is a possible solution
const feasible = (piles, bananas, h) => {
  let numHours = 0;

  for (const pile of piles) {
    numHours += Math.floor(pile / bananas);     // For each pile, add how many hours to numHours it will take to eat the pile
    if (pile % bananas !== 0) numHours++;       // If pile is not equally divisible by bananas, increment numHours as it will take another hour to eat extra
    if (numHours > h) return false;             // If numHours ever exceeds the given h, it is not a possible solution
  }
  return true;
}
