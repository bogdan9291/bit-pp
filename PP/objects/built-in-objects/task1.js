// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var array = [2, 4, 7, 11, -2, 1];

var dupElements = function(arr) {
  var newArray = [];

  for(var i = 0; i < arr.length; i++) {
    newArray.push(array[i]);
    newArray.push(array[i]);
  }
  
  return newArray;
}


console.log(dupElements(array));




