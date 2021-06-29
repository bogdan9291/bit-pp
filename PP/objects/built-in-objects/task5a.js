// Write a function that finds all the elements in a given array less than a given element.

var array = [2, 3, 8, -2, 11, 4];

function elements(arr, num) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i];
    if (index < num) {
      newArray.push(index);
    }
  }

  return newArray;
}

console.log(elements(array, 6));
