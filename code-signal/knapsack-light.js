function knapsackLight(value1, weight1, value2, weight2, maxW) {
  var currentValue = 0;
  var currentWeight = 0;
  var item1 = {
    weight: weight1,
    value: value1
  }

  var item2 = {
    weight: weight2,
    value: value2
  }
  var valueItem = item2;
  var lesserItem = item1;
  if (item1.value >= item2.value) {
    valueItem = item1;
    lesserItem = item2;
  }
  if (valueItem.weight <= maxW) {
    currentValue += valueItem.value;
    currentWeight += valueItem.weight;
  }
  if (currentWeight + lesserItem.weight <= maxW) currentValue += lesserItem.value;

  return currentValue;
}
