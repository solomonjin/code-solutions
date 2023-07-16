var minEatingSpeed = function (piles, h) {
  let min = 1, max = piles.reduce((a, b) => a + b, 0);
  let numBananas = Number.POSITIVE_INFINITY;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (feasible(piles, h, mid)) {
      numBananas = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return numBananas;
};

const feasible = (piles, h, bananas) => {
  let numHours = 0;
  for (const pile of piles) {
    numHours += Math.floor(pile / bananas);
    if (pile % bananas !== 0) numHours++;
    if (numHours > h) return false;
  }
  return true;
}
