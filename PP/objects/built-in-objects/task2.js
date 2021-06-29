// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var array = [8, 13, 8, 9, 12, 12, 8, 8, 16, 1, 1, 4, 13];

var removeDuplicates = function (arr) {
  var sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  var newArray = [];
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      newArray.push(sortedArray[i]);
    } else {
      continue;
    }
  }

  return newArray;
};

console.log(removeDuplicates(array));
