//Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.

var array = [1, 4, -2, 11, 8, 1, -2, 3];

function Obj(minValue, minLastIndex) {
  this.minValue = minValue;
  this.minLastIndex = minLastIndex;
}

function findSmallest(arr) {
  var smallestNum = Math.min(...arr);
  var lastIndex = arr.lastIndexOf(smallestNum);

  var result = new Obj(smallestNum, lastIndex);
  return result;
}

console.log(findSmallest(array));
